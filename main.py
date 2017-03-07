#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

import os
import json
import logging
import csv

import webapp2
import jinja2

from google.appengine.ext import ndb

QUICKDICTFORKEY = {}

class Entry(ndb.Model):
    createDate = ndb.DateTimeProperty(auto_now_add=True)
    latitude = ndb.FloatProperty(indexed=False)
    longitude = ndb.FloatProperty(indexed=False)
    jsonText = ndb.StringProperty(indexed=False)
    def json(self):
        data = {}
        data['Latitude'] = self.latitude
        data['Longitude'] = self.longitude
        data['ID'] = self.key.urlsafe()
        return data
    def csv(self):
        data = {}
        data['Latitude'] = self.latitude
        data['Longitude'] = self.longitude
        q = Value.query().filter(Value.entry == self.key)
        for o in q:
            subData = o.getValue()
            if subData['Key'] in QUICKDICTFORKEY:
                data[QUICKDICTFORKEY[subData['Key']]] = subData['Value']
            else:
                QUICKDICTFORKEY[subData['Key']] = o.item.get().text
                data[QUICKDICTFORKEY[subData['Key']]] = subData['Value']
        return data




class Item(ndb.Model):
    createDate = ndb.DateTimeProperty(auto_now_add=True)
    text = ndb.StringProperty(indexed=True)
    theType = ndb.StringProperty(indexed=False)
    required = ndb.BooleanProperty(indexed=True)
    order = ndb.FloatProperty(indexed=True)
    def json(self):
        data = {}
        data['Text'] = self.text
        data['Type'] = self.theType
        data['Required'] = self.required
        data['Order'] = self.order
        data['ID'] = self.key.urlsafe()
        return data

class Value(ndb.Model):
    createDate = ndb.DateTimeProperty(auto_now_add=True)
    entry = ndb.KeyProperty(kind=Entry, indexed=True)
    item = ndb.KeyProperty(kind=Item, indexed=False)
    data = ndb.StringProperty(indexed=True)
    def getValue(self):
        data = {}
        data['Value'] = self.data
        #theItem = self.item.get()
        data['Key'] = self.item.urlsafe()# theItem.text
        return data


JINJA_ENVIRONMENT  = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'], autoescape=True)

class Sent(webapp2.RequestHandler):
    def get(self):
        self.response.write("File Sent")

class File(webapp2.RequestHandler):
    def post(self):
        aJson  = self.request.get('JSON')
        if aJson == "":
            self.response.write("{}")
        else:
            aDict  = json.loads(aJson)
            newEntry = Entry(jsonText=aJson,
                             latitude=aDict['Latitude'],
                             longitude=aDict['Longitude']).put()
            aDict.pop('Latitude', None)
            aDict.pop('Longitude', None)
            for k in aDict:
                logging.error(k)
                aKey = ndb.Key(urlsafe=k)
                theItem = aKey.get()
                if theItem:
                    Value(data=aDict[k], entry=newEntry, item=aKey).put()
        self.response.write(aJson)

class Display(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('display.html')
        q = Item.query().order(Item.order)
        formItem = []
        for o in q:
            formItem.append(o.json())
        q = Entry.query().order(Entry.createDate)
        markers = []
        for o in q:
            markers.append(o.json())
        elements = {
            'Heading': 'Report0Tron - Display Date',
            'SubmitButton': 'Submit Report',
            'FormItems':formItem,
            'Markers':markers
        }
        self.response.out.write(template.render(elements))

class GetKey(webapp2.RequestHandler):
    def post(self):
        key = ndb.Key(urlsafe=self.request.get('Key'))
        q = Value.query().filter(Value.entry == key)
        data  =[]
        for o in q:
            data.append(o.getValue())
        self.response.write(json.dumps(data))

class CD(webapp2.RequestHandler):
    def get(self):
        q = Item.query()
        for o in q:
            o.key.delete()
        Item(text="First Name", theType="SL", required=True, order=1.0).put()
        Item(text="Last Name", theType="SL", required=True, order=2.0).put()
        Item(text="Email Address", theType="SL", required=True, order=3.0).put()
        Item(text="Incident", theType="LT", required=False, order=4.0).put()
        self.response.write("ADDED")

class Report(webapp2.RequestHandler):
    def get(self):

        self.response.headers['Content-Type'] = 'text/csv'
        self.response.headers['Content-Disposition'] = 'attachment; filename=report.csv'

        q = Item.query().order(Item.order)
        formItem = []
        for o in q:
            formItem.append(o.text)
        formItem.append('Latitude')
        formItem.append('Longitude')
        writer = csv.DictWriter(self.response.out, fieldnames=formItem)
        q = Entry.query()
        for o in q:
            writer.writeheader()
            writer.writerow(o.csv())


class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('index.html')
        q = Item.query().order(Item.order)
        formItem = []
        for o in q:
            formItem.append(o.json())
        elements = {
            'Heading': 'Report0Tron - Report the Police',
            'SubmitButton': 'Submit Report',
            'FormItems':formItem
        }
        self.response.out.write(template.render(elements))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/File', File),
    ('/Sent', Sent),
    ('/CreateD', CD),
    ('/GetKey', GetKey),
    ('/Display', Display),
    ('/Report', Report)
], debug=True)
