var NAV_TOP_SIZE = 46
var NAV_TOP_BOT_SIZE = 46
var NAV_BOT_SIZE = 46
var STANDARD_SPACE = 20

var HOT_VENUES = "Hot_Venues"
var HOT_VENUES_T = "Hot_Venues_Text"
var USER_PROFILE = "User_Profile"
var USER_PROFILE_T = "User_Profile_Text"
var VENUES_NEAR_ME = "Venues_Near_Me"
var VENUES_NEAR_ME_T = "Venues_Near_Me_T"
var SEARCH_VENUES = "SEARCH_VENUES"
var SEARCH_VENUES_T = "SEARCH_VENUES_T"
var FAVORITE_VENUES = "Favorite_Venues"
var FAVORITE_VENUES_T = "Favorite_Venues_T"
var TOP_BAR = "Top_Bar"
var TOP_BOT_BAR = "TOP_BOT_BAR"
var TOP_BOT_BAR_LOGO = "TOP_BOT_BAR_LOGO"
var TOP_BOT_BAR_RIGHT = "TOP_BOT_BAR_RIGHT"
var TOP_BOT_BAR_LEFT = "TOP_BOT_BAR_LEFT"
var NEAR_ME = "NEAR_ME"
var MAIN_SCREEN = "MAIN_SCREEN"

var TEXT_FIELD_SEARCH = "TEXT_FIELD_SEARCH"

var CENTRE_TEXT_BAR = "CENTRE_TEXT_BAR"
var BOT_BAR = "Bot_Bar"
var BOT_BAR_BLUE = "BOT_BAR_BLUE"
var LEFT_ICON = "LEFT_ICON"
var RIGHT_ICON = "RIGHT_ICON"
var NUMBER_ICON = "NUMBER_ICON"
var NUMBER_ICON_C = "NUMBER_ICON_C"
var TITLE_BAR = "TITLE_BAR"
var SPLASH_SCREEN_ICON = "SPLASH_SCREEN_ICON"
var CANCEL_ICON = "CANCEL_ICON"
var SUBMIT_ICON = "SUBMIT_ICON"

var VENUE_CELL = "VENUE_CELL"
var ICON_VENUE_CELL = "ICON_VENUE_CELL"
var TEXT_VENUE_CELL = "TEXT_VENUE_CELL"
var SUBSCRIPT_VENUE_CELL = "SUBSCRIPT_VENUE_CELL"

var REPORT_VENUES = "REPORT_VENUES"

var HOW_HOT_IS = "HOW_HOT_IS"
var USE_HOT_METER = "USE_HOT_METER"
var METER_CENTRE = "METER_CENTRE"
var METER_MESSAGE = "METER_MESSAGE"

var FULL_SCREEN_BAR = "FULL_SCREEN_BAR"

var BIG_BAR = "BIG_BAR";
var BIG_BLUE_BAR = "BIG_BLUE_BAR";
var BLUE_BAR_IMAGE = "BLUE_BAR_IMAGE";
var BLUE_BAR_TEXT = "BLUE_BAR_TEXT";
var BLUE_CELL_ICON = "BLUE_CELL_ICON";
var BLUE_CELL_TEXT = "BLUE_CELL_TEXT";
var BLUE_CELL_CELL = "BLUE_CELL_CELL"

var LOGIN_TEXT_ICON = "LOGIN_TEXT_ICON"
var LOGIN_BUTTON_ICON = "LOGIN_BUTTON_ICON"
var LOGIN_BUTTON_ICON_LINE = "LOGIN_BUTTON_ICON_LINE"
var LOGIN_BUTTON_ICON_FACEBOOK = "LOGIN_BUTTON_ICON_FACEBOOK"


var NOTIFICATION_CELL = "NOTIFICATION_CELL"
var NOTIFICATION_ICON = "NOTIFICATION_ICON"
var NOTIFICATION_TEXT = "NOTIFICATION_TEXT"

var DETAIL_MAIN_IMAGE = "DETAIL_MAIN_IMAGE"
var DETAIL_MAIN_IMAGE_LEFT_TEXT = "DETAIL_MAIN_IMAGE_LEFT_TEXT"
var DETAIL_MAIN_IMAGE_RIGHT_TEXT = "DETAIL_MAIN_IMAGE_RIGHT_TEXT "
var DETAIL_MAIN_IMAGE_RIGHT_IMAGE = "DETAIL_MAIN_IMAGE_RIGHT_IMAGE"
var DETAIL_MAIN_TEXT = "DETAIL_MAIN_TEXT"
var DETAIL_DATE_TEXT = "DETAIL_DATE_TEXT"
var ACTIVITY_ICON = "ACTIVITY_ICON"
var ACTIVITY_ICON_TEXT = "ACTIVITY_ICON_TEXT"
var MAP_ICON = "MAP_ICON"

var SEARCH_CELL = "SEARCH_CELL"
var SEARCH_ICON = "SEARCH_ICON"
var SEARCH_TEXT = "SEARCH_TEXT"
var SEARCH_RIGHT = "SEARCH_RIGHT"
var SEARCH_DISTANCE = "SEARCH_DISTANCE"
var SEARCH_DISTANCE_NUM = "SEARCH_DISTANCE_NUM"
var SEARCH_DISTANCE_VAL = "SEARCH_DISTANCE_VAL"
var SEARCH_DISTANCE_VAL_TEXT = "SEARCH_DISTANCE_VAL_TEXT"

var THE_MAP_BOT = "THE_MAP_BOT"


var USER_PROFILE_BAR = "USER_PROFILE_BAR"
var USER_PROFILE_BAR_IMAGE = "USER_PROFILE_BAR_IMAGE"
var USER_PROFILE_BAR_NAME = "USER_PROFILE_BAR_NAME"
var USER_PROFILE_BAR_JOIN_DATE = "USER_PROFILE_BAR_JOIN_DATE"
var USER_DESCRIPTION = "USER_DESCRIPTION"
var USER_AGE_INFO_DATA = "USER_AGE_INFO_DATA"
var USER_GENDER_INFO_DATA = "USER_GENDER_INFO_DATA"
var USER_GENDER_INFO_ADDRESS = "USER_GENDER_INFO_ADDRESS"
var USER_GENDER_INFO_PHONE = "USER_GENDER_INFO_PHONE"


var screenWidth = $(window).width()
var screenHeight = $(window).height()
NAV_TOP_SIZE = 85;
NAV_BOT_SIZE = screenHeight * 0.1;

var GO_VENUES_TEXT = "GO_VENUES_TEXT"

var userImage;
var userID;
var graphInfo;

//var socket = io();


//socket.emit('chat message', "Ninja");


function functionGenV() {
    screenWidth = $(window).width()
    screenHeight = $(window).height()
    NAV_TOP_SIZE = 85;
    NAV_BOT_SIZE = screenHeight * 0.1;
}

var globalIDCounter = 0;

var selectedBusiness;

functionGenV()


var map = undefined;



var markerArrayHolder = [];

function getUserId() {

  return userID;
}

function removeAllMarkers() {
    for (var i = 0; i < markerArrayHolder.length; i++) {
        markerArrayHolder[i].setMap(map);
    }
    markerArrayHolder = []
}

function addMarkerAll() {

    var arrayLength = allCurrentPlaces.length


    for (var i = 0; i < arrayLength; i++) {
        addMarker(allCurrentPlaces[i]);
    }


}

function addMarker(aMarker) {

    var myLatLng = {
        lat: aMarker['Latitude'],
        lng: aMarker['Longitude']
    };
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        //icon:image,
        title: aMarker['Name']
    });


    marker.addListener('click', function() {
        selectedBusiness = placesRef[aMarker['Key']]

        goReportVenuesSpecific(aMarker['Key'])
    });
    markerArrayHolder.push(marker)


}

function removeMap(boundBox, latitude, longitude) {

    if (map != undefined) {
        map = undefined;
    }

}


function createMap(boundBox, index, latitude, longitude) {
    var theMap = document.createElement('div');
    theMap.id = index
    theMap.style.top = boundBox['Top'];
    theMap.style.left = boundBox['Left'];
    theMap.style.width = boundBox['Width'];
    theMap.style.height = boundBox['Height'];
    document.body.appendChild(theMap)

    if (map == undefined) {

        map = new google.maps.Map(document.getElementById(index), {
            zoom: 15
        });



    }




    if (latitude == undefined) {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                userPositon['Latitude'] = position.coords.latitude;
                userPositon['Longitude'] = position.coords.longitude;
                map.setCenter(initialLocation);
            });
        }
    } else {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                initialLocation = new google.maps.LatLng(latitude, longitude);
                map.setCenter(initialLocation);
            });
        }



    }
}




function boxGen(screenWidth, screenHeight, index) {

    var returnValue = []

    switch (index) {

      case TEXT_FIELD_SEARCH:

      {
          returnValue['Left'] = 15;
          returnValue['Width'] = screenWidth-30;
          returnValue['Top'] = NAV_TOP_SIZE+30;
          returnValue['Height'] = 30
          return returnValue;
      }

      break;



        case USER_PROFILE_BAR:
            {
                returnValue['Left'] = 0;
                returnValue['Width'] = screenWidth;
                returnValue['Top'] = NAV_TOP_SIZE;
                returnValue['Height'] = (screenHeight - NAV_TOP_SIZE) * 0.3
                return returnValue;
            }
            break;

        case USER_PROFILE_BAR_IMAGE:
            {
                returnValue['Left'] = (screenWidth / 2) - (((screenHeight - NAV_TOP_SIZE) * 0.15) / 2.0); //-((screenHeight-NAV_TOP_SIZE)*0.0075);
                returnValue['Width'] = (screenHeight - NAV_TOP_SIZE) * 0.15;
                returnValue['Top'] = NAV_TOP_SIZE + 5;
                returnValue['Height'] = (screenHeight - NAV_TOP_SIZE) * 0.15;
                return returnValue;
            }
            break;

        case USER_PROFILE_BAR_NAME:
            {
                returnValue['Left'] = 0;
                returnValue['Width'] = screenWidth;
                returnValue['Top'] = NAV_TOP_SIZE + 5 + (screenHeight - NAV_TOP_SIZE) * 0.15;
                returnValue['Height'] = 30;
                return returnValue;
            }
            break;

        case USER_PROFILE_BAR_JOIN_DATE:
            {
                returnValue['Left'] = 0;
                returnValue['Width'] = screenWidth;
                returnValue['Top'] = NAV_TOP_SIZE + 5 + (screenHeight - NAV_TOP_SIZE) * 0.15 + 20;
                returnValue['Height'] = 30;
                return returnValue;
            }
            break;
        case USER_DESCRIPTION:
            {
                returnValue['Left'] = 32;
                returnValue['Width'] = screenWidth - 64;
                returnValue['Top'] = NAV_TOP_SIZE + (screenHeight - NAV_TOP_SIZE) * 0.4
                returnValue['Height'] = (screenHeight - NAV_TOP_SIZE) * 0.1
                return returnValue;
            }
            break;
        case USER_AGE_INFO_DATA:
            {
                returnValue['Left'] = 32;
                returnValue['Width'] = screenWidth - 64;
                returnValue['Top'] = NAV_TOP_SIZE + (screenHeight - NAV_TOP_SIZE) * 0.48
                returnValue['Height'] = (screenHeight - NAV_TOP_SIZE) * 0.1
                return returnValue;
            }
            break;
        case USER_GENDER_INFO_DATA:
            {
                returnValue['Left'] = 32;
                returnValue['Width'] = screenWidth - 64;
                returnValue['Top'] = NAV_TOP_SIZE + (screenHeight - NAV_TOP_SIZE) * 0.56
                returnValue['Height'] = (screenHeight - NAV_TOP_SIZE) * 0.1
                return returnValue;
            }
            break;
        case USER_GENDER_INFO_ADDRESS:
            {
                returnValue['Left'] = 32;
                returnValue['Width'] = screenWidth - 64;
                returnValue['Top'] = NAV_TOP_SIZE + (screenHeight - NAV_TOP_SIZE) * 0.64
                returnValue['Height'] = (screenHeight - NAV_TOP_SIZE) * 0.1
                return returnValue;
            }
            break;
        case USER_GENDER_INFO_PHONE:
            {
                returnValue['Left'] = 32;
                returnValue['Width'] = screenWidth - 64;
                returnValue['Top'] = NAV_TOP_SIZE + (screenHeight - NAV_TOP_SIZE) * 0.72
                returnValue['Height'] = (screenHeight - NAV_TOP_SIZE) * 0.1
                return returnValue;
            }
            break;

        default:

    }

    switch (index) {
        case THE_MAP_BOT:
            returnValue['Left'] = 0
            returnValue['Width'] = screenWidth
            returnValue['Top'] = NAV_TOP_SIZE + NAV_TOP_BOT_SIZE
            returnValue['Height'] = screenHeight - NAV_TOP_SIZE - NAV_TOP_BOT_SIZE - NAV_BOT_SIZE
            return returnValue;
            break;
        default:

    }

    switch (index) {

        case DETAIL_MAIN_IMAGE:
            returnValue['Left'] = 0
            returnValue['Width'] = screenWidth
            returnValue['Top'] = NAV_TOP_SIZE
            returnValue['Height'] = (266.0 / 414.0) * screenWidth
            return returnValue;

            break
        case DETAIL_MAIN_IMAGE_LEFT_TEXT:
            returnValue['Left'] = 20
            returnValue['Width'] = screenWidth - 20
            returnValue['Top'] = NAV_TOP_SIZE + ((266.0 / 414.0) * screenWidth) - 40
            returnValue['Height'] = 20
            return returnValue;
            break
        case DETAIL_MAIN_IMAGE_RIGHT_TEXT:
            returnValue['Left'] = 0
            returnValue['Width'] = screenWidth - 65
            returnValue['Top'] = NAV_TOP_SIZE + ((266.0 / 414.0) * screenWidth) - 40
            returnValue['Height'] = 20
            return returnValue;
            break
        case DETAIL_MAIN_IMAGE_RIGHT_IMAGE:
            returnValue['Left'] = screenWidth - 45
            returnValue['Width'] = 25
            returnValue['Top'] = NAV_TOP_SIZE + ((266.0 / 414.0) * screenWidth) - 40
            returnValue['Height'] = 30
            return returnValue;
            break
        case DETAIL_MAIN_TEXT:
            returnValue['Left'] = 30
            returnValue['Width'] = screenWidth - 60
            returnValue['Top'] = NAV_TOP_SIZE + ((266.0 / 414.0) * screenWidth) + 20
            returnValue['Height'] = 90
            return returnValue;
            break
        case DETAIL_DATE_TEXT:
            returnValue['Left'] = 30
            returnValue['Width'] = screenWidth / 2.0
            returnValue['Top'] = (532.0 / 736.0) * screenHeight - 50
            returnValue['Height'] = 40
            return returnValue;

            break
        case ACTIVITY_ICON:
            {
                var theWidth = 294.0 / 231.0 * 40;
                returnValue['Left'] = screenWidth - 30 - theWidth
                returnValue['Width'] = theWidth
                returnValue['Top'] = (532.0 / 736.0) * screenHeight - 50
                returnValue['Height'] = 40
                return returnValue;
            }
            break
        case ACTIVITY_ICON_TEXT:
            {
                var theWidth = 294.0 / 231.0 * 40;
                returnValue['Left'] = screenWidth - 30 - theWidth - theWidth - 5
                returnValue['Width'] = theWidth
                returnValue['Top'] = (532.0 / 736.0) * screenHeight - 50 + 15
                returnValue['Height'] = 40
                return returnValue;
            }

            break


        case MAP_ICON:
            returnValue['Left'] = 0
            returnValue['Width'] = screenWidth
            returnValue['Top'] = (532.0 / 736.0) * screenHeight
            returnValue['Height'] = (204.0 / 736.0) * screenHeight
            return returnValue;
            break;
        default:

    }


    var spaceSizeWidth = 20;

    switch (index) {

      case SEARCH_CELL:
          returnValue['Left'] = spaceSizeWidth
          returnValue['Width'] = screenWidth - spaceSizeWidth*2
          returnValue['Top'] = 0
          returnValue['Height'] = 80
          return returnValue;

          break;
      case SEARCH_ICON:
          returnValue['Left'] = spaceSizeWidth
          returnValue['Width'] = 50
          returnValue['Top'] = 18
          returnValue['Height'] = 50
          return returnValue;

          break;



      case SEARCH_DISTANCE:
          returnValue['Left'] = screenWidth - 48 - 33
          returnValue['Width'] = 18
          returnValue['Top'] = 18
          returnValue['Height'] = 18
          return returnValue;

      case SEARCH_DISTANCE_NUM:
          returnValue['Left'] = screenWidth - 48-33-30+9 //97
          returnValue['Width'] = 60
          returnValue['Top'] = 38
          returnValue['Height'] = 30

          return returnValue;

      case SEARCH_DISTANCE_VAL:
          returnValue['Left'] = screenWidth - 82 - 48; //285
          returnValue['Width'] = 18
          returnValue['Top'] = 16
          returnValue['Height'] = 15
          return returnValue;

      case SEARCH_DISTANCE_VAL_TEXT:
          returnValue['Left'] = screenWidth - 82 - 48 - 6; //-243+(30*1.27272727272727)
          returnValue['Width'] = 30
          returnValue['Top'] = 40
          returnValue['Height'] = 7.5
          return returnValue;

      case SEARCH_RIGHT:
          returnValue['Left'] = screenWidth - spaceSizeWidth-20
          returnValue['Width'] = 20
          returnValue['Top'] = 18
          returnValue['Height'] = 20
          return returnValue;

          break;


      case SEARCH_TEXT:
          returnValue['Left'] = 90
          returnValue['Width'] = screenWidth - 264
          returnValue['Top'] = 20
          returnValue['Height'] = 36
          return returnValue;
          break;

/*
        case SEARCH_CELL:
            returnValue['Left'] = 30
            returnValue['Width'] = screenWidth - 60
            returnValue['Top'] = 0
            returnValue['Height'] = 80
            return returnValue;

            break;
        case SEARCH_ICON:
            returnValue['Left'] = 30
            returnValue['Width'] = 50
            returnValue['Top'] = 18
            returnValue['Height'] = 50
            return returnValue;

            break;

        case SEARCH_RIGHT:
            returnValue['Left'] = screenWidth - 45
            returnValue['Width'] = 20
            returnValue['Top'] = 18
            returnValue['Height'] = 20
            return returnValue;

            break;

        case SEARCH_DISTANCE:
            returnValue['Left'] = screenWidth - 48 - 33
            returnValue['Width'] = 18
            returnValue['Top'] = 18
            returnValue['Height'] = 18
            return returnValue;

        case SEARCH_DISTANCE_NUM:
            returnValue['Left'] = screenWidth - 82
            returnValue['Width'] = 30
            returnValue['Top'] = 38
            returnValue['Height'] = 30
            return returnValue;

        case SEARCH_DISTANCE_VAL:
            returnValue['Left'] = screenWidth - 82 - 48; //285
            returnValue['Width'] = 18
            returnValue['Top'] = 16
            returnValue['Height'] = 15
            return returnValue;

        case SEARCH_DISTANCE_VAL_TEXT:
            returnValue['Left'] = screenWidth - 82 - 48 - 6; //-243+(30*1.27272727272727)
            returnValue['Width'] = 30
            returnValue['Top'] = 40
            returnValue['Height'] = 7.5
            return returnValue;



        case SEARCH_TEXT:
            returnValue['Left'] = 100
            returnValue['Width'] = screenWidth - 264
            returnValue['Top'] = 20
            returnValue['Height'] = 36
            return returnValue;
            break;
            */

    }


    switch (index) {
        case NOTIFICATION_CELL:
            returnValue['Left'] = 30
            returnValue['Width'] = screenWidth - 60
            returnValue['Top'] = 0
            returnValue['Height'] = 80
            return returnValue;

            break;
        case NOTIFICATION_ICON:
            returnValue['Left'] = 30
            returnValue['Width'] = 50
            returnValue['Top'] = 18
            returnValue['Height'] = 50
            return returnValue;

            break;
        case NOTIFICATION_TEXT:
            returnValue['Left'] = 100
            returnValue['Width'] = screenWidth - 130
            returnValue['Top'] = 20
            returnValue['Height'] = 36
            return returnValue;
            break;

        default:

    }

    switch (index) {
        case LOGIN_TEXT_ICON:


            returnValue['Left'] = (screenWidth - (screenHeight * 0.4)) / 2.0
            returnValue['Width'] = screenHeight * 0.4
            returnValue['Top'] = screenHeight * 0.3
            returnValue['Height'] = screenHeight * 0.1
            return returnValue;


            break;
        case LOGIN_BUTTON_ICON:

            returnValue['Left'] = screenWidth * 0.1
            returnValue['Width'] = screenWidth * 0.8
            returnValue['Top'] = screenHeight * 0.6
            returnValue['Height'] = screenHeight * 0.1
            return returnValue;

            break;

        case LOGIN_BUTTON_ICON_LINE:

            var heighVal = screenHeight * 0.1;

            returnValue['Left'] = screenWidth * 0.22
            returnValue['Width'] = 1
            returnValue['Top'] = screenHeight * 0.6 + heighVal / 6.0
            returnValue['Height'] = 4 * heighVal / 6.0
            return returnValue;

        case LOGIN_BUTTON_ICON_FACEBOOK:

            var heighVal = screenHeight * 0.1;

            returnValue['Left'] = screenWidth * 0.14
            returnValue['Width'] = heighVal * (65.0 / 148.0)
            returnValue['Top'] = screenHeight * 0.6 + heighVal / 4.0
            returnValue['Height'] = heighVal * (65.0 / 148.0)
            return returnValue;

        default:

    }



    switch (index) {
      case FULL_SCREEN_BAR:
        returnValue['Left'] = 0
        returnValue['Width'] = screenWidth
        returnValue['Top'] = NAV_TOP_SIZE
        returnValue['Height'] = screenHeight-NAV_TOP_SIZE;
        return returnValue;
        case BIG_BAR:
            returnValue['Left'] = 0
            returnValue['Width'] = screenWidth * 0.8
            returnValue['Top'] = 0
            returnValue['Height'] = screenHeight;
            return returnValue;
            break;
        case BIG_BLUE_BAR:
            returnValue['Left'] = 0
            returnValue['Width'] = screenWidth * 0.8
            returnValue['Top'] = 0
            returnValue['Height'] = screenHeight * 0.25;
            return returnValue;
            break;
        case BLUE_BAR_IMAGE:
            var centerH = screenHeight * 0.125
            returnValue['Left'] = 32;
            returnValue['Width'] = 65;
            returnValue['Top'] = centerH - (65 / 2.0);
            returnValue['Height'] = 65;
            return returnValue;
            break;
        case BLUE_BAR_TEXT:
            var centerH = screenHeight * 0.125
            returnValue['Left'] = 32 + 65 + 32;
            returnValue['Width'] = screenWidth * 0.8 - (32 + 65 + 32)
            returnValue['Top'] = centerH-8;
            returnValue['Height'] = 65;
            return returnValue;
            break;
        case BLUE_CELL_ICON:
            returnValue['Left'] = 20;
            returnValue['Width'] = 30
            returnValue['Top'] = 0;
            returnValue['Height'] = 30;
            return returnValue;
            break;
        case BLUE_CELL_TEXT:
            returnValue['Left'] = 90;
            returnValue['Width'] = screenWidth * 0.8 - 90;
            returnValue['Top'] = -6;
            returnValue['Height'] = 30;
            return returnValue;
        case BLUE_CELL_CELL:
            returnValue['Left'] = 0;
            returnValue['Width'] = screenWidth*0.8
            returnValue['Top'] = 0;
            returnValue['Height'] = 40;


            return returnValue;
            break;


        default:

    }


    switch (index) {
        case VENUE_CELL:
            returnValue['Left'] = 0
            returnValue['Width'] = screenWidth
            returnValue['Top'] = 0
            returnValue['Height'] = 76;
            return returnValue;
            break;
        case ICON_VENUE_CELL:
            returnValue['Left'] = 50
            returnValue['Width'] = 55
            returnValue['Top'] = screenHeight * 0.15
            returnValue['Height'] = 55
            return returnValue;
            break;
        case TEXT_VENUE_CELL:
            returnValue['Left'] = 125
            returnValue['Width'] = screenWidth - 125 - 55 - 20
            returnValue['Top'] = screenHeight * 0.15
            returnValue['Height'] = 32
            return returnValue;
            break;
        case SUBSCRIPT_VENUE_CELL:
            returnValue['Left'] = screenWidth - 55 - 20
            returnValue['Width'] = 20
            returnValue['Top'] = screenHeight * 0.15
            returnValue['Height'] = 32
            return returnValue;
            break;
        case HOW_HOT_IS:
            returnValue['Left'] = screenWidth * 0.1
            returnValue['Width'] = screenWidth * 0.8
            returnValue['Top'] = screenHeight * 0.293
            returnValue['Height'] = 32
            return returnValue;
        case USE_HOT_METER:
            returnValue['Left'] = screenWidth * 0.1
            returnValue['Width'] = screenWidth * 0.8
            returnValue['Top'] = screenHeight * 0.325
            returnValue['Height'] = 32
            return returnValue;
        case METER_CENTRE:
            returnValue['Left'] = screenWidth * 0.21
            returnValue['Width'] = screenWidth * 0.58
            returnValue['Top'] = screenHeight * 0.38
            returnValue['Height'] = screenWidth * 0.58 * (231.0/310.0)
            return returnValue;

        case METER_MESSAGE:
            returnValue['Left'] = 0
            returnValue['Width'] = screenWidth
            returnValue['Top'] = screenHeight * 0.636
            returnValue['Height'] = 196
            return returnValue;

            break;




    }


    switch (index) {
        case CANCEL_ICON:
            var centerPoint = screenWidth * 0.25;
            var centerPointH = screenHeight * 0.775;

            returnValue['Left'] = centerPoint
            returnValue['Width'] = screenWidth * 0.23
            returnValue['Top'] = centerPointH
            returnValue['Height'] = 35;
            return returnValue;

            break;
        case SUBMIT_ICON:
            var centerPoint = screenWidth * 0.520;
            var centerPointH = screenHeight * 0.775;

            returnValue['Left'] = centerPoint
            returnValue['Width'] = screenWidth * 0.23
            returnValue['Top'] = centerPointH
            returnValue['Height'] = 35;
            return returnValue;

            break;
        default:

    }

    switch (index) {
        case SPLASH_SCREEN_ICON:

            var centerPoint = screenWidth * 0.5;
            var centerPointH = screenHeight * 0.5;

            returnValue['Left'] = screenWidth * 0.2
            returnValue['Width'] = screenWidth * 0.6
            returnValue['Top'] = screenHeight / 2.0 - (screenWidth * 0.3 * 0.24591)
            returnValue['Height'] = (screenWidth * 0.6 * 0.24591);
            return returnValue;


            returnValue['Left'] = 0;
            returnValue['Width'] = screenWidth;
            returnValue['Top'] = 0;
            returnValue['Height'] = NAV_TOP_SIZE;
            return returnValue;

    }

    var iconButtonSize = 24;
    switch (index) {
        case TOP_BAR:
            returnValue['Left'] = 0;
            returnValue['Width'] = screenWidth;
            returnValue['Top'] = 0;
            returnValue['Height'] = NAV_TOP_SIZE;
            return returnValue;

        case TOP_BOT_BAR:
            returnValue['Left'] = 0;
            returnValue['Width'] = screenWidth;
            returnValue['Top'] = NAV_TOP_SIZE;
            returnValue['Height'] = NAV_TOP_BOT_SIZE;
            return returnValue;

        case TOP_BOT_BAR_RIGHT:
            returnValue['Left'] = screenWidth - 120;
            returnValue['Width'] = 100;
            returnValue['Top'] = NAV_TOP_SIZE + NAV_TOP_BOT_SIZE - 33;
            returnValue['Height'] = 33;
            return returnValue;




        case TOP_BOT_BAR_LEFT:
            returnValue['Left'] = 20;
            returnValue['Width'] = 100;
            returnValue['Top'] = NAV_TOP_SIZE + NAV_TOP_BOT_SIZE - 33;
            returnValue['Height'] = 33;
            return returnValue;


        case CENTRE_TEXT_BAR:

            returnValue['Left'] = 0;
            returnValue['Width'] = screenWidth;
            returnValue['Top'] = NAV_TOP_SIZE / 2.0;
            returnValue['Height'] = NAV_TOP_SIZE / 2.0;

            return returnValue;

            break;

          case TOP_BOT_BAR_LOGO:
            //372*92
            returnValue['Left'] = (screenWidth/2)-(iconButtonSize*(372.0/92.0))*0.5;
            returnValue['Width'] = iconButtonSize*(372.0/92.0);
            returnValue['Top'] = NAV_TOP_SIZE / 2.0;
            returnValue['Height'] = iconButtonSize;
            return returnValue;

        case LEFT_ICON:
            returnValue['Left'] = 10;
            returnValue['Width'] = iconButtonSize;
            returnValue['Top'] = NAV_TOP_SIZE / 2.0;
            returnValue['Height'] = iconButtonSize;
            return returnValue;

            break;
        case RIGHT_ICON:
            returnValue['Left'] = screenWidth - 20 - iconButtonSize;
            returnValue['Width'] = iconButtonSize;
            returnValue['Top'] = NAV_TOP_SIZE / 2.0;
            returnValue['Height'] = iconButtonSize;
            return returnValue;

            break;

        case NUMBER_ICON:

            returnValue['Left'] = screenWidth - 20 - iconButtonSize / 2;
            returnValue['Width'] = iconButtonSize / 2;
            returnValue['Top'] = NAV_TOP_SIZE / 2.0;
            returnValue['Height'] = iconButtonSize / 2;
            return returnValue;

        case NUMBER_ICON_C:
            returnValue['Left'] = screenWidth - 20 - iconButtonSize / 2;
            returnValue['Width'] = iconButtonSize / 2;
            returnValue['Top'] = NAV_TOP_SIZE / 2.0;
            returnValue['Height'] = iconButtonSize / 2;
            return returnValue;

        default:

    }

    switch (index) {
        case BOT_BAR:
            returnValue['Left'] = 0;
            returnValue['Width'] = screenWidth;
            returnValue['Top'] = screenHeight - NAV_BOT_SIZE;
            returnValue['Height'] = NAV_BOT_SIZE;
            return returnValue;

            break;
        case BOT_BAR_BLUE:
            returnValue['Left'] = 0;
            returnValue['Width'] = screenWidth;
            returnValue['Top'] = screenHeight - NAV_BOT_SIZE;
            returnValue['Height'] = 20;
            return returnValue;

            break;
        default:

    }



    var usedSpace = screenHeight - NAV_TOP_SIZE - NAV_BOT_SIZE;

    switch (index) {
        case HOT_VENUES:

            var centerPoint = screenWidth * 0.3;
            var centerPointH = usedSpace * .175;
            var halfWidth = screenWidth * 0.125;
            returnValue['Left'] = centerPoint - (screenWidth * 0.125)
            returnValue['Width'] = halfWidth * 2
            returnValue['Top'] = NAV_TOP_SIZE + centerPointH - halfWidth
            returnValue['Height'] = halfWidth * 2;
            return returnValue;


            break;

        case HOT_VENUES_T:

            var centerPoint = screenWidth * 0.3;
            var halfWidth = screenWidth * 0.125;
            var centerPointH = usedSpace * .175 + halfWidth * 2;

            returnValue['Left'] = centerPoint - (screenWidth * 0.125) - halfWidth * 0.25
            returnValue['Width'] = halfWidth * 2.5
            returnValue['Top'] = NAV_TOP_SIZE + centerPointH - halfWidth
            returnValue['Height'] = 50;
            return returnValue;


            break;
        case USER_PROFILE:

            var centerPoint = screenWidth * 0.7;
            var centerPointH = usedSpace * .175;
            var halfWidth = screenWidth * 0.125;
            returnValue['Left'] = centerPoint - (screenWidth * 0.125)
            returnValue['Width'] = halfWidth * 2
            returnValue['Top'] = NAV_TOP_SIZE + centerPointH - halfWidth
            returnValue['Height'] = halfWidth * 2;
            return returnValue;
            break;

        case USER_PROFILE_T:

            var centerPoint = screenWidth * 0.7;
            var halfWidth = screenWidth * 0.125;
            var centerPointH = usedSpace * .175 + halfWidth * 2;

            returnValue['Left'] = centerPoint - (screenWidth * 0.125) - halfWidth * 0.25
            returnValue['Width'] = halfWidth * 2.5
            returnValue['Top'] = NAV_TOP_SIZE + centerPointH - halfWidth
            returnValue['Height'] = 50;
            return returnValue;


            break;

        case VENUES_NEAR_ME:


            var centerPoint = screenWidth * 0.3;
            var centerPointH = usedSpace * .5;
            var halfWidth = screenWidth * 0.125;
            returnValue['Left'] = centerPoint - (screenWidth * 0.125)
            returnValue['Width'] = halfWidth * 2
            returnValue['Top'] = NAV_TOP_SIZE + centerPointH - halfWidth
            returnValue['Height'] = halfWidth * 2

            return returnValue;
            break;

        case VENUES_NEAR_ME_T:


            var centerPoint = screenWidth * 0.3;
            var halfWidth = screenWidth * 0.125;
            var centerPointH = usedSpace * .5 + halfWidth * 2;

            returnValue['Left'] = centerPoint - (screenWidth * 0.125) - halfWidth * 0.25
            returnValue['Width'] = halfWidth * 2.5
            returnValue['Top'] = NAV_TOP_SIZE + centerPointH - halfWidth
            returnValue['Height'] = 50;
            return returnValue;

            break;



        case SEARCH_VENUES:


            var centerPoint = screenWidth * 0.7;
            var centerPointH = usedSpace * .5;
            var halfWidth = screenWidth * 0.125;
            returnValue['Left'] = centerPoint - (screenWidth * 0.125)
            returnValue['Width'] = halfWidth * 2
            returnValue['Top'] = NAV_TOP_SIZE + centerPointH - halfWidth
            returnValue['Height'] = halfWidth * 2

            return returnValue;
            break;

        case SEARCH_VENUES_T:

            var centerPoint = screenWidth * 0.7;
            var halfWidth = screenWidth * 0.125;
            var centerPointH = usedSpace * .5 + halfWidth * 2;

            returnValue['Left'] = centerPoint - (screenWidth * 0.125) - halfWidth * 0.25
            returnValue['Width'] = halfWidth * 2.5
            returnValue['Top'] = NAV_TOP_SIZE + centerPointH - halfWidth
            returnValue['Height'] = 50;
            return returnValue;


            break;


        case FAVORITE_VENUES:


            var centerPoint = screenWidth * 0.5;
            var centerPointH = usedSpace * .825;
            var halfWidth = screenWidth * 0.125;
            returnValue['Left'] = centerPoint - (screenWidth * 0.125)
            returnValue['Width'] = halfWidth * 2
            returnValue['Top'] = NAV_TOP_SIZE + centerPointH - halfWidth
            returnValue['Height'] = halfWidth * 2

            return returnValue;
            break;

        case FAVORITE_VENUES_T:

            var centerPoint = screenWidth * 0.5;
            var halfWidth = screenWidth * 0.125;
            var centerPointH = usedSpace * .825 + halfWidth * 2;

            returnValue['Left'] = 0
            returnValue['Width'] = screenWidth
            returnValue['Top'] = NAV_TOP_SIZE + centerPointH - halfWidth
            returnValue['Height'] = 50;
            return returnValue;



            return


    }
}



function offsetTop(screenWidth, screenHeight, index, offset) {

    var holdIT = boxGen(screenWidth, screenHeight, index);
    holdIT['Top'] += offset;
    return holdIT;

}

function offsetLeft(screenWidth, screenHeight, index, offset) {

    var holdIT = boxGen(screenWidth, screenHeight, index);
    holdIT['Left'] += offset;
    return holdIT;
}

function offset(screenWidth, screenHeight, index, offsetX, offsetY) {

    var holdIT = boxGen(screenWidth, screenHeight, index);
    holdIT['Left'] += offsetX;
    holdIT['Top'] += offsetY;
    return holdIT;

}

var allNotification = []
var userPositon = {}
var allCurrentPlaces = [];
var placesRef = {}
var heldObjects = []
var titleHeldObjects = []
var titleBotHeldObjects = []
var swapMapList = []
var heldBot = [];
var sideBar = []
var deleteObject = [];
var keyRef = {}
var whereYouAre = "NO_WHERE"

var selectRightVal = true;

function swapViewLeft() {
    if (selectRightVal == false) {
        return;

    }
    selectRightVal = false;

    var aVar = $("#" + TOP_BOT_BAR_LEFT);
    var bVar = $("#" + TOP_BOT_BAR_RIGHT);

    aVar.attr("src", "MapViewSelected.png")
    bVar.attr("src", "ListViewUnSelected.png")

    if (whereYouAre == HOT_VENUES) {
        {
            var arrayLength = heldObjects.length

            for (var i = 0; i < arrayLength; i++) {

                var toChange = $("#" + heldObjects[i])

                toChange.remove();
            }
        }
        heldObjects = [];
        var theBox = offset(screenWidth, screenHeight, THE_MAP_BOT, 0, 0);
        createMap(theBox, THE_MAP_BOT)
        removeAllMarkers();
        addMarkerAll()
        heldObjects.push(THE_MAP_BOT);


    } else {

    }

}


function swapViewRight() {

    if (selectRightVal == true) {
        return;

    }
    killSearcher();
    selectRightVal = true;
    var aVar = $("#" + TOP_BOT_BAR_LEFT);
    var bVar = $("#" + TOP_BOT_BAR_RIGHT);

    aVar.attr("src", "MapViewUnSelected.png")
    bVar.attr("src", "ListViewSelected.png")


    if (whereYouAre == HOT_VENUES) {
        {
            var arrayLength = heldObjects.length

            for (var i = 0; i < arrayLength; i++) {

                var toChange = $("#" + heldObjects[i])

                toChange.remove();
            }
        }
        heldObjects = [];
        removeMap()

        generateSearchResultsASyncHotNoMove()

    } else {

    }


}

function changeSize() {
    functionGenV();


    //heldObjects
    {
        var arrayLength = heldObjects.length

        for (var i = 0; i < arrayLength; i++) {

            var toChange = $("#" + heldObjects[i])
            var posFirst = boxGen(screenWidth, screenHeight, heldObjects[i]);

            toChange[0].style.left = posFirst['Left']; //('left',posFirst['Left'])
            toChange[0].style.top = posFirst['Top']; //('top',posFirst['Top'])
            toChange[0].style.width = posFirst['Width']; //('width',posFirst['Width'])
            toChange[0].style.height = posFirst['Height']; //('height',posFirst['Height'])

        }
    }
    //titleBarExists
    {
        var arrayLength = titleHeldObjects.length

        for (var i = 0; i < arrayLength; i++) {

            var toChange = $("#" + titleHeldObjects[i])
            var posFirst = boxGen(screenWidth, screenHeight, titleHeldObjects[i]);

            toChange[0].style.left = posFirst['Left']; //('left',posFirst['Left'])
            toChange[0].style.top = posFirst['Top']; //('top',posFirst['Top'])
            toChange[0].style.width = posFirst['Width']; //('width',posFirst['Width'])
            toChange[0].style.height = posFirst['Height']; //('height',posFirst['Height'])

        }
    } {
        var arrayLength = heldBot.length

        for (var i = 0; i < arrayLength; i++) {

            var toChange = $("#" + heldBot[i])
            var posFirst = boxGen(screenWidth, screenHeight, heldBot[i]);

            toChange[0].style.left = posFirst['Left']; //('left',posFirst['Left'])
            toChange[0].style.top = posFirst['Top']; //('top',posFirst['Top'])
            toChange[0].style.width = posFirst['Width']; //('width',posFirst['Width'])
            toChange[0].style.height = posFirst['Height']; //('height',posFirst['Height'])

        }
    }




}

window.addEventListener('resize', changeSize);


var titleBarExists = false;
var botBar = false;
var botOfBot = false;


function setNotifications(number){

  var theCircle = $('#' + NUMBER_ICON)
  if (number==0){
    theCircle[0].style.visibility = 'hidden'
  } else {
    theCircle[0].style.visibility = 'visible'
  }

  var theNumber = $('#'+NUMBER_ICON_C)
  theNumber[0].innerHTML = number


}


function removeTitle() {
    if (titleBarExists == true) {

        var arrayLength = titleHeldObjects.length

        for (var i = 0; i < arrayLength; i++) {

            if (!titleHeldObjects[i].includes("_av")) {
                var toChange = $("#" + titleHeldObjects[i])
                toChange.animate({
                    top: "-=100"
                }, 1000, function() {})
            }
        }
    }




}




function generateTitle(theTextForCentre, botList) {
    if (titleBarExists == true) {

/*
        var anyData = $("#" + CENTRE_TEXT_BAR);
        anyData = anyData[0]

        anyData.innerHTML = theTextForCentre
*/

    }

    if (botOfBot == botList) {


    } else {

        if (botList) {

            var moveAmount = 100;
            var posFirst = boxGen(screenWidth, screenHeight, TOP_BOT_BAR);

            var topBar = document.createElement('div');
            topBar.id = TOP_BOT_BAR
            topBar.style.position = 'absolute'
            topBar.style.left = posFirst['Left'];
            topBar.style.top = posFirst['Top'] - moveAmount;
            topBar.style.width = posFirst['Width']
            topBar.style.height = posFirst['Height']
            topBar.innerHTML = ""
            topBar.style.backgroundColor = "#e3e3e3"
            topBar.zIndex = 405;
            document.body.appendChild(topBar)
            titleBotHeldObjects.push(TOP_BOT_BAR)



            posFirst = boxGen(screenWidth, screenHeight, TOP_BOT_BAR_LEFT);
            posFirst['Top'] -= moveAmount
            $('<img />').attr({
                src: "MapViewUnSelected.png",
                height: posFirst['Height'],
                width: posFirst['Width'],
                left: posFirst['Left'],
                top: posFirst['Top'],
                style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;z-index:406',
                id: TOP_BOT_BAR_LEFT
            }).appendTo($('<a />').attr({
                href: '#',
                id: TOP_BOT_BAR_LEFT + "_av",
                onclick: 'swapViewLeft()'
            }).appendTo('body'));
            titleBotHeldObjects.push(TOP_BOT_BAR_LEFT)

            posFirst = boxGen(screenWidth, screenHeight, TOP_BOT_BAR_RIGHT);
            posFirst['Top'] -= moveAmount
            $('<img />').attr({
                src: "ListViewSelected.png",
                height: posFirst['Height'],
                width: posFirst['Width'],
                left: posFirst['Left'],
                top: posFirst['Top'],
                style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;z-index:407',
                id: TOP_BOT_BAR_RIGHT
            }).appendTo($('<a />').attr({
                href: '#',
                id: TOP_BOT_BAR_RIGHT + "_av",
                onclick: 'swapViewRight()'
            }).appendTo('body'));

            titleBotHeldObjects.push(TOP_BOT_BAR_RIGHT)



            {
                var arrayLength = titleBotHeldObjects.length

                for (var i = 0; i < arrayLength; i++) {

                    var toChange = $("#" + titleBotHeldObjects[i])
                    toChange.animate({
                        top: "+=" + moveAmount
                    }, 1000, function() {})
                }
            }

            botOfBot = true
        } else {

            {
                var moveAmount = -100;
                var arrayLength = titleBotHeldObjects.length

                for (var i = 0; i < arrayLength; i++) {

                    var toChange = $("#" + titleBotHeldObjects[i])
                    toChange.animate({
                        top: "+=" + moveAmount
                    }, 1000, function() {

                        this.remove();

                    })
                }
                titleBotHeldObjects = []
            }

            botOfBot = false

        }




    }
    if (titleBarExists == true) {

        return;
    }
    var moveAmount = 50;

    var titleCreate = document.createElement('div');
    titleCreate.id = TITLE_BAR;
    titleCreate.style.position = 'absolute'
    titleCreate.style.left = 0;
    titleCreate.style.top = 0 - moveAmount;
    titleCreate.style.width = screenWidth
    titleCreate.style.height = NAV_TOP_SIZE
    titleCreate.style.zIndex = 500;


    var posFirst = boxGen(screenWidth, screenHeight, TOP_BAR);

    var topBar = document.createElement('div');
    topBar.id = TOP_BAR
    topBar.style.position = 'absolute'
    topBar.style.left = posFirst['Left'];
    topBar.style.top = posFirst['Top'] - moveAmount;
    topBar.style.width = posFirst['Width']
    topBar.style.height = posFirst['Height']
    topBar.innerHTML = ""
    topBar.style.backgroundColor = "#03a6f1"
    topBar.zIndex = 501;
    titleCreate.appendChild(topBar)
    titleHeldObjects.push(TOP_BAR)


    posFirst = boxGen(screenWidth, screenHeight, TOP_BOT_BAR_LOGO);
    posFirst['Top'] = posFirst['Top'] - moveAmount * 2

    $('<img />').attr({
        src: "Logo.png",
        height: posFirst['Height'],
        width: posFirst['Width'],
        left: posFirst['Left'],
        top: posFirst['Top'],
        style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;z-index:603',
        id: TOP_BOT_BAR_LOGO
    }).appendTo($('<a />').attr({
        href: '#',
        id: TOP_BOT_BAR_LOGO + "_av",
        onclick: 'swapViewLeft()'
    }).appendTo('body'));
    titleHeldObjects.push(TOP_BOT_BAR_LOGO)
    titleHeldObjects.push(TOP_BOT_BAR_LOGO + "_av")




/*
    posFirst = boxGen(screenWidth, screenHeight, CENTRE_TEXT_BAR);

    var topTextBar = document.createElement('div');
    topTextBar.id = CENTRE_TEXT_BAR
    topTextBar.style.position = 'absolute'
    topTextBar.style.left = posFirst['Left'];
    topTextBar.style.top = posFirst['Top'] - moveAmount;
    topTextBar.style.width = posFirst['Width']
    topTextBar.style.height = posFirst['Height']
    topTextBar.innerHTML = theTextForCentre
    topTextBar.style.fontSize = 20
    topTextBar.style.textAlign = 'center'
    topTextBar.style.color = 'white'
    topTextBar.zIndex = 501;
    titleCreate.appendChild(topTextBar)
    titleHeldObjects.push(CENTRE_TEXT_BAR)

*/


    //
    posFirst = boxGen(screenWidth, screenHeight, LEFT_ICON);
    posFirst['Top'] = posFirst['Top'] - moveAmount * 2

    $('<img />').attr({
        src: "PopOutIcon.png",
        height: posFirst['Height'],
        width: posFirst['Width'],
        left: posFirst['Left'],
        top: posFirst['Top'],
        style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;z-index:603',
        id: LEFT_ICON
    }).appendTo($('<a />').attr({
        href: '#',
        id: LEFT_ICON + "_av",
        onclick: 'generatePopout()'
    }).appendTo('body'));

    //titleCreate.appendChild(leftIcon)
    titleHeldObjects.push(LEFT_ICON)
    titleHeldObjects.push(LEFT_ICON + "_av")




    posFirst = boxGen(screenWidth, screenHeight, RIGHT_ICON);
    posFirst['Top'] = posFirst['Top'] - moveAmount * 2

    $('<img />').attr({
        src: "SearchIcon.png",
        height: posFirst['Height'],
        width: posFirst['Width'],
        left: posFirst['Left'],
        top: posFirst['Top'],
        style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;z-index:604',
        id: RIGHT_ICON
    }).appendTo($('<a />').attr({
        href: '#',
        id: RIGHT_ICON + "_av",
        onclick: 'goSearchVenues()'
    }).appendTo('body'));


    titleHeldObjects.push(RIGHT_ICON)
    titleHeldObjects.push(RIGHT_ICON + "_av")

    posFirst = boxGen(screenWidth, screenHeight, NUMBER_ICON);


    var numberIcon = document.createElement('img');
    numberIcon.id = NUMBER_ICON
    numberIcon.style.position = 'absolute'
    numberIcon.style.left = posFirst['Left'];
    numberIcon.style.top = posFirst['Top'] - moveAmount;
    numberIcon.style.width = posFirst['Width']
    numberIcon.style.height = posFirst['Height']
    numberIcon.src = "RedCircle.png"
    numberIcon.innerHTML = ""
    numberIcon.style.visibility = 'hidden'
    numberIcon.zIndex = 504;
    numberIcon.visibile = false;
    numberIcon.style.opacity = 0;
    titleCreate.appendChild(numberIcon)
    titleHeldObjects.push(NUMBER_ICON)

    posFirst = boxGen(screenWidth, screenHeight, NUMBER_ICON_C);

    var numberText = document.createElement('div');
    numberText.id = NUMBER_ICON_C
    numberText.style.position = 'absolute'
    numberText.style.left = posFirst['Left'];
    numberText.style.top = posFirst['Top'] - moveAmount;
    numberText.style.width = posFirst['Width']
    numberText.style.height = posFirst['Height']
    numberText.innerHTML = ""
    numberText.style.fontSize = 8
    numberText.style.textAlign = 'center'
    numberText.style.color = 'white'
    numberText.zIndex = 505;
    numberText.style.opacity = 0;
    numberText.visibile = false;
    titleCreate.appendChild(numberText)
    titleHeldObjects.push(NUMBER_ICON_C)

    titleBarExists = true;
    document.body.appendChild(titleCreate)

    {
        var arrayLength = titleHeldObjects.length

        for (var i = 0; i < arrayLength; i++) {

            if (!titleHeldObjects[i].includes("_av")) {
                var toChange = $("#" + titleHeldObjects[i])
                toChange.animate({
                    top: "+=100"
                }, 1000, function() {})
            }
        }
    } {




    }

    return;

}


function getNotification(){

  $.ajax({
      type: 'POST',
      url: "/GetNotes",
      data: {
          user:userID,
      },
  }).done(function(data) {

    allNotification=data['Notifications']
    setNotifications(data['Count'])
  })
}





function getCurrentPosition() {




    returnValue = {};

    navigator.geolocation.getCurrentPosition(function(position) {
        userPositon['Latitude'] = position.coords.latitude;
        userPositon['Longitude'] = position.coords.longitude;
    })

    if (!("Latitude" in userPositon)) {
        userPositon['Latitude'] = 0;
        userPositon['Longitude'] = 0;


    }

    returnValue['Latitude'] = userPositon['Latitude'];
    returnValue['Longitude'] = userPositon['Longitude'];
    returnValue['Distance'] = 10000.0;


    return returnValue;

}









function getHotVenues() {

    hisPos = getCurrentPosition()

    allCurrentPlaces = [];

    $.ajax({
        type: 'POST',
        url: "/GetBusiness",
        data: {
            lati: hisPos['Latitude'],
            long: hisPos['Longitude'],
            dist: hisPos['Distance'],
            user: userID,
        },
        async: false
    }).done(function(data) {

        allCurrentPlaces = data;
    })



    var arrayLength = allCurrentPlaces.length

    for (var i = 0; i < arrayLength; i++) {

        placesRef[allCurrentPlaces[i]['Key']] = allCurrentPlaces[i];
    }
    return allCurrentPlaces;

}



function testFunction() {

    console.log("Ninja");


}

function goRight(theArray, kill) {
killSearcher();
    {
        var arrayLength = theArray.length

        for (var i = 0; i < arrayLength; i++) {

            var toChange = $("#" + theArray[i])

            if (kill) {
                toChange.animate({
                    left: "+=" + screenWidth
                }, 500, function() {
                    $(this).remove();
                })
            } else {
                toChange.animate({
                    left: "+=" + screenWidth
                }, 500, function() {})
            }
        }
    }


}


function goVenues(theID) {

  if (whereYouAre == GO_VENUES_TEXT) {
      return;
  } else {
      whereYouAre = GO_VENUES_TEXT;
  }
  killSearcher();
  theBusiness = placesRef[theID]
  selectedBusiness = theBusiness

  removeMap()

  selectRightVal = true;
  sidePopIn();
  goRight(heldObjects, true);
  heldObjects = [];
  generateDetails(-screenWidth, theBusiness)
  goRight(heldObjects, false);
  generateTitle("Venue", false)

}

function goNotifications() {


    if (whereYouAre == NOTIFICATION_TEXT) {
        return;
    } else {
        whereYouAre = NOTIFICATION_TEXT;
    }
    $.ajax({
        type: 'POST',
        url: "/UpdateNotes",
        data: {
            user:userID,
        },
    }).done(function(data) {


    })
    killSearcher();
    removeMap()
    selectRightVal = true;
    sidePopIn();
    goRight(heldObjects, true);
    heldObjects = [];
    generateNotifications(-screenWidth);
    goRight(heldObjects, false);
    generateTitle("Notifications", false)

}

function goReportVenuesSpecific(theKey) {

    if (whereYouAre == REPORT_VENUES) {
        return;
    } else {
        whereYouAre = REPORT_VENUES;
    }
    killSearcher();
    removeMap()
    selectRightVal = true;
    sidePopIn();
    goRight(heldObjects, true);
    heldObjects = [];
    generateReportScreenKey(-screenWidth, theKey);
    goRight(heldObjects, false);
    generateTitle("Report Venues", false)


}

function goSearchVenues(){

  if (whereYouAre == SEARCH_VENUES) {
      return;
  } else {
      whereYouAre = SEARCH_VENUES;
  }
  killSearcher();
  removeMap()
  selectRightVal = true;
  sidePopIn();
  goRight(heldObjects, true);
  heldObjects = [];


  generateSearchScreen(-screenWidth);
  goRight(heldObjects, false);
  generateTitle("Search Venues", false)


}
function goReportVenues() {

  if (whereYouAre == REPORT_VENUES) {
      return;
  } else {
      whereYouAre = REPORT_VENUES;
  }
    killSearcher();
    removeMap()
    selectRightVal = true;
    sidePopIn();
    goRight(heldObjects, true);
    heldObjects = [];



    generateTitle("Report Venues", false)

    generateReportScreenASync(-screenWidth);


}

function goHotVenues() {
    if (whereYouAre == HOT_VENUES) {
        return;
    } else {
        whereYouAre = HOT_VENUES;
    }
    killSearcher();
    removeMap()
    selectRightVal = true;
    sidePopIn();
    goRight(heldObjects, true);
    heldObjects = [];
    generateTitle("Hot Venues", true)

    generateSearchResultsASyncHot()



}

function goNearMe() {

    if (whereYouAre == NEAR_ME) {
        return;
    } else {
        whereYouAre = NEAR_ME;
    }
    killSearcher();
    removeMap()

    selectRightVal = true;
    sidePopIn();
    goRight(heldObjects, true);
    heldObjects = [];
    generateTitle("Near Venues", true)
    generateSearchResultsASyncHot()



}

function goFavoriteVenue() {
    if (whereYouAre == FAVORITE_VENUES) {
        return;
    } else {
        whereYouAre = FAVORITE_VENUES;
    }
    killSearcher();
    removeMap()
    selectRightVal = true;
    sidePopIn();
    goRight(heldObjects, true);
    heldObjects = [];
    generateTitle("Favorite Venues", true)
    generateSearchResultsASyncFav()
    goRight(heldObjects, false);


}

function goUserProfile() {
    if (whereYouAre == USER_PROFILE) {
        return;
    } else {
        whereYouAre = USER_PROFILE;
    }
    killSearcher();
    removeMap()
    selectRightVal = true;
    sidePopIn();
    goRight(heldObjects, true);
    heldObjects = [];
    generateProfile(-screenWidth)
    goRight(heldObjects, false);
    generateTitle("User Profile", false)

}

function login(){

    //changeMe
    //var uri = encodeURI('http://localhost:23080/');
    //window.location = encodeURI("https://www.facebook.com/dialog/oauth?client_id=189516961456490&redirect_uri="+uri+"&response_type=token&scope=user_friends,user_about_me,user_birthday");

    //console.log('Trying to Connect');

    //FB.login()

    var uri = encodeURI('https://forwardconnectivityscratch.appspot.com/');
    window.location = encodeURI("https://www.facebook.com/dialog/oauth?client_id=189516961456490&redirect_uri="+uri+"&response_type=token&scope=user_friends,user_about_me,user_birthday");

    /*
    userID = '12345678'
    userImage = "VenueImage.png"
    graphInfo = {}
    graphInfo['createDate'] ="1/11/11"
    graphInfo['age'] ="100"
    graphInfo['gender'] ="Male"
    graphInfo['first_name'] = "Offline First Name"
    graphInfo['last_name'] = "Offline Last Name"
    graphInfo['birthday'] = "1/11/11"
    goMainScreen()
    */

}

function goMainScreen() {



    if (whereYouAre == MAIN_SCREEN) {
        return;
    } else {
        whereYouAre = MAIN_SCREEN;
    }
    killSearcher();
    removeMap()
    getCurrentPosition()

    sidePopIn();
    generateTitle("Main Screen", false)
    goRight(heldObjects, true);
    heldObjects = [];
    generateMainScreen()
    goRight(heldObjects, false);
    generateBotScreen();


    getNotification()





}

function sidePopIn() {


    {
        var arrayLength = sideBar.length

        for (var i = 0; i < arrayLength; i++) {

            var toChange = $("#" + sideBar[i])
            toChange.animate({
                left: "-=" + screenWidth
            }, 250, function() {

                $(this).remove();


            })
        }
    }

    sideBar = [];



}

function goBack() {

    sidePopIn();

}

function markHotness(amount) {

  var info = $("#" + METER_CENTRE);

  amount = 0;

  var value = info[0].src;

  if (value.includes("MeterL1.png")) {
    amount = -1

  } else if (value.includes("MeterL2.png")) {

      amount = 0
  } else if (value.includes("MeterL3.png")) {

    amount = 2

  } else if (value.includes("MeterL4.png")) {

      amount = 3
  } else if (value.includes("MeterL5.png")) {

      amount = 4
  }

  $.ajax({
      type: 'POST',
      url: "/ApplyHotness",
      data: {
          user:userID,
          key: selectedBusiness['Key'],
          amount:amount
      },
  }).done(function(data) {


  })
    goVenues(selectedBusiness['Key'])


}

function generateMainScreen() {

    var posFirst = offset(screenWidth, screenHeight, HOT_VENUES, -screenWidth, 0);

    $('<img />').attr({
        src: "HotVenueMain.png",
        height: posFirst['Height'],
        width: posFirst['Width'],
        left: posFirst['Left'],
        top: posFirst['Top'],
        style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;',
        id: HOT_VENUES
    }).appendTo($('<a />').attr({
        href: '#',
        onclick: 'goHotVenues()',
        id: HOT_VENUES + "_av"
    }).appendTo('body'));

    heldObjects.push(HOT_VENUES)
    heldObjects.push(HOT_VENUES + "_av")


    posFirst = offset(screenWidth, screenHeight, HOT_VENUES_T, -screenWidth, 0);
    var firstButton_T = document.createElement('div');
    firstButton_T.id = HOT_VENUES_T
    firstButton_T.style.position = 'absolute'
    firstButton_T.style.left = posFirst['Left'];
    firstButton_T.style.top = posFirst['Top'];
    firstButton_T.style.width = posFirst['Width']
    firstButton_T.style.height = posFirst['Height']
    firstButton_T.innerHTML = "Hot Venues"
    firstButton_T.style.fontSize = 22
    firstButton_T.style.textAlign = 'center'
    firstButton_T.style.lineHeight = "24px"
    document.body.appendChild(firstButton_T)
    heldObjects.push(HOT_VENUES_T)


    posFirst = offset(screenWidth, screenHeight, USER_PROFILE, -screenWidth, 0);

    $('<img />').attr({
        src: "UserProfilesMain.png",
        height: posFirst['Height'],
        width: posFirst['Width'],
        left: posFirst['Left'],
        top: posFirst['Top'],
        style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;',
        id: USER_PROFILE
    }).appendTo($('<a />').attr({
        href: '#',
        id: USER_PROFILE + "_av",
        onclick: 'goUserProfile()'
    }).appendTo('body'));


    heldObjects.push(USER_PROFILE)
    heldObjects.push(USER_PROFILE + "_av")

    posFirst = offset(screenWidth, screenHeight, USER_PROFILE_T, -screenWidth, 0);
    var secondButton_T = document.createElement('div');
    secondButton_T.id = USER_PROFILE_T
    secondButton_T.style.position = 'absolute'
    secondButton_T.style.left = posFirst['Left'];
    secondButton_T.style.top = posFirst['Top'];
    secondButton_T.style.width = posFirst['Width']
    secondButton_T.style.height = posFirst['Height']
    secondButton_T.innerHTML = "User Profile"
    secondButton_T.style.fontSize = 22
    secondButton_T.style.textAlign = 'center'
    secondButton_T.style.lineHeight = "24px"
    document.body.appendChild(secondButton_T)
    heldObjects.push(USER_PROFILE_T)

    posFirst = offset(screenWidth, screenHeight, VENUES_NEAR_ME, -screenWidth, 0);

    $('<img />').attr({
        src: "VenuesNearMeMain.png",
        height: posFirst['Height'],
        width: posFirst['Width'],
        left: posFirst['Left'],
        top: posFirst['Top'],
        style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;',
        id: VENUES_NEAR_ME
    }).appendTo($('<a />').attr({
        href: '#',
        id: VENUES_NEAR_ME + "_av",
        onclick: 'goNearMe()'
    }).appendTo('body'));

    heldObjects.push(VENUES_NEAR_ME)
    heldObjects.push(VENUES_NEAR_ME + "_av")


    posFirst = offset(screenWidth, screenHeight, VENUES_NEAR_ME_T, -screenWidth, 0);
    var thirdButton_T = document.createElement('div');
    thirdButton_T.id = VENUES_NEAR_ME_T
    thirdButton_T.style.position = 'absolute'
    thirdButton_T.style.left = posFirst['Left'];
    thirdButton_T.style.top = posFirst['Top'];
    thirdButton_T.style.width = posFirst['Width']
    thirdButton_T.style.height = posFirst['Height']
    thirdButton_T.innerHTML = "Venues Near Me"
    thirdButton_T.style.fontSize = 22
    thirdButton_T.style.textAlign = 'center'
    thirdButton_T.style.lineHeight = "24px"
    document.body.appendChild(thirdButton_T)
    heldObjects.push(VENUES_NEAR_ME_T)

    posFirst = offset(screenWidth, screenHeight, SEARCH_VENUES, -screenWidth, 0);


    $('<img />').attr({
        src: "FavoriteVenuesMain.png",
        height: posFirst['Height'],
        width: posFirst['Width'],
        left: posFirst['Left'],
        top: posFirst['Top'],
        style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;',
        id: FAVORITE_VENUES
    }).appendTo($('<a />').attr({
        href: '#',
        id: FAVORITE_VENUES + "_av",
        onclick: 'goFavoriteVenue()'
    }).appendTo('body'));

    heldObjects.push(FAVORITE_VENUES)
    heldObjects.push(FAVORITE_VENUES + "_av")

    posFirst = offset(screenWidth, screenHeight, SEARCH_VENUES_T, -screenWidth, 0);
    var fifthButton_T = document.createElement('div');
    fifthButton_T.id = FAVORITE_VENUES_T
    fifthButton_T.style.position = 'absolute'
    fifthButton_T.style.left = posFirst['Left'];
    fifthButton_T.style.top = posFirst['Top'];
    fifthButton_T.style.width = posFirst['Width']
    fifthButton_T.style.height = posFirst['Height']
    fifthButton_T.innerHTML = "Favorite Venues"
    fifthButton_T.style.fontSize = 22
    fifthButton_T.style.textAlign = 'center'
    fifthButton_T.style.lineHeight = "24px"
    document.body.appendChild(fifthButton_T)
    heldObjects.push(FAVORITE_VENUES_T)

/*
    $('<img />').attr({
        src: "ReportVenuesMain.png",
        height: posFirst['Height'],
        width: posFirst['Width'],
        left: posFirst['Left'],
        top: posFirst['Top'],
        style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;',
        id: SEARCH_VENUES
    }).appendTo($('<a />').attr({
        href: '#',
        id: SEARCH_VENUES + "_av",
        onclick: 'goSearchVenues()'
    }).appendTo('body'));

    var fourthButton = document.createElement('img');

    heldObjects.push(SEARCH_VENUES)
    heldObjects.push(SEARCH_VENUES + "_av")

    posFirst = offset(screenWidth, screenHeight, SEARCH_VENUES_T, -screenWidth, 0);
    var fourthButton_T = document.createElement('div');
    fourthButton_T.id = SEARCH_VENUES_T
    fourthButton_T.style.position = 'absolute'
    fourthButton_T.style.left = posFirst['Left'];
    fourthButton_T.style.top = posFirst['Top'];
    fourthButton_T.style.width = posFirst['Width']
    fourthButton_T.style.height = posFirst['Height']
    fourthButton_T.innerHTML = "Search Venues"
    fourthButton_T.style.fontSize = 22
    fourthButton_T.style.textAlign = 'center'
    fourthButton_T.style.lineHeight = "24px"
    document.body.appendChild(fourthButton_T)
    heldObjects.push(SEARCH_VENUES_T)


    posFirst = offset(screenWidth, screenHeight, FAVORITE_VENUES, -screenWidth, 0);

    $('<img />').attr({
        src: "FavoriteVenuesMain.png",
        height: posFirst['Height'],
        width: posFirst['Width'],
        left: posFirst['Left'],
        top: posFirst['Top'],
        style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;',
        id: FAVORITE_VENUES
    }).appendTo($('<a />').attr({
        href: '#',
        id: FAVORITE_VENUES + "_av",
        onclick: 'goFavoriteVenue()'
    }).appendTo('body'));

    heldObjects.push(FAVORITE_VENUES)
    heldObjects.push(FAVORITE_VENUES + "_av")

    posFirst = offset(screenWidth, screenHeight, FAVORITE_VENUES_T, -screenWidth, 0);
    var fifthButton_T = document.createElement('div');
    fifthButton_T.id = FAVORITE_VENUES_T
    fifthButton_T.style.position = 'absolute'
    fifthButton_T.style.left = posFirst['Left'];
    fifthButton_T.style.top = posFirst['Top'];
    fifthButton_T.style.width = posFirst['Width']
    fifthButton_T.style.height = posFirst['Height']
    fifthButton_T.innerHTML = "Favorite Venues"
    fifthButton_T.style.fontSize = 22
    fifthButton_T.style.textAlign = 'center'
    fifthButton_T.style.lineHeight = "24px"
    document.body.appendChild(fifthButton_T)
    heldObjects.push(FAVORITE_VENUES_T)

*/
}

function generateBotScreen() {

    if (botBar == true) {

        return;
    }

    var moveAmount = 85;



    botBar = true;


    var posFirst = offset(screenWidth, screenHeight, BOT_BAR, 0, moveAmount);

    var botBarD = document.createElement('div');
    botBarD.id = BOT_BAR
    botBarD.style.position = 'absolute'
    botBarD.style.left = posFirst['Left'];
    botBarD.style.top = posFirst['Top'];
    botBarD.style.width = posFirst['Width']
    botBarD.style.height = posFirst['Height']
    botBarD.style.backgroundColor = "#CCCCCC"
    botBarD.innerHTML = ""
    document.body.appendChild(botBarD)
    heldBot.push(BOT_BAR)

    posFirst = offset(screenWidth, screenHeight, BOT_BAR_BLUE, 0, moveAmount);

    var botBarD = document.createElement('div');
    botBarD.id = BOT_BAR_BLUE
    botBarD.style.position = 'absolute'
    botBarD.style.left = posFirst['Left'];
    botBarD.style.top = posFirst['Top'];
    botBarD.style.width = posFirst['Width']
    botBarD.style.height = posFirst['Height']
    botBarD.style.color = "#FFFFFF"
    botBarD.style.paddingLeft = 20
    botBarD.style.backgroundColor = "#03a6f1"
    botBarD.style.fontSize = 12
    botBarD.style.boxShadow = "0px 5px 2.5px #888888"
    botBarD.innerHTML = "Featured Venues"
    document.body.appendChild(botBarD)
    heldBot.push(BOT_BAR_BLUE)




    {
        var arrayLength = heldBot.length

        for (var i = 0; i < arrayLength; i++) {

            var toChange = $("#" + heldBot[i])
            toChange.animate({
                top: "-=" + moveAmount
            }, 1000, function() {})
        }
    }




    return;




}

function generateOpenScreen() {




    document.body.style.backgroundColor = "#03a6f1"

    var posFirst = boxGen(screenWidth, screenHeight, SPLASH_SCREEN_ICON);

    var titleScreenBar = document.createElement('img');
    titleScreenBar.id = SPLASH_SCREEN_ICON
    titleScreenBar.style.position = 'absolute'
    titleScreenBar.style.left = posFirst['Left'];
    titleScreenBar.style.top = posFirst['Top'];
    titleScreenBar.style.width = posFirst['Width']
    titleScreenBar.style.height = posFirst['Height']
    titleScreenBar.src = "MainName.png"
    titleScreenBar.innerHTML = ""
    document.body.appendChild(titleScreenBar)
    titleScreenBar.push(SPLASH_SCREEN_ICON)




}

function generateLoginScreen() {

  getCurrentPosition()

    var posFirst = boxGen(screenWidth, screenHeight, LOGIN_TEXT_ICON);

    var titleScreenBar = document.createElement('img');
    titleScreenBar.id = LOGIN_TEXT_ICON
    titleScreenBar.style.position = 'absolute'
    titleScreenBar.style.left = posFirst['Left'];
    titleScreenBar.style.top = posFirst['Top'];
    titleScreenBar.style.width = posFirst['Width']
    titleScreenBar.style.height = posFirst['Height']
    titleScreenBar.src = "PatronLogo.png"
    titleScreenBar.innerHTML = ""
    document.body.appendChild(titleScreenBar)
    heldObjects.push(LOGIN_TEXT_ICON)


    posFirst = boxGen(screenWidth, screenHeight, LOGIN_BUTTON_ICON);

    var heightVal = posFirst['Height'];

    var loginButton = document.createElement('div');
    loginButton.id = LOGIN_BUTTON_ICON
    loginButton.style.position = 'absolute'
    loginButton.style.left = posFirst['Left'];
    loginButton.style.top = posFirst['Top'];
    loginButton.style.width = posFirst['Width']
    loginButton.style.height = posFirst['Height']
    loginButton.innerHTML = "Sign In With Facebook"
    loginButton.style.textAlign = "center"
    loginButton.style.color = "#FFFFFF"
    loginButton.style.backgroundColor = "#3a559d"
    loginButton.style.borderRadius = (heightVal / 2.0) + "px"
    loginButton.style.lineHeight = heightVal / 16.0


    document.body.appendChild(loginButton)
    heldObjects.push(LOGIN_BUTTON_ICON)

    //$("#" + LOGIN_BUTTON_ICON).click(login);
    $("#" + LOGIN_BUTTON_ICON).on('touchend',login);


    posFirst = boxGen(screenWidth, screenHeight, LOGIN_BUTTON_ICON_LINE);

    var heightVal = posFirst['Height'];

    var loginButton = document.createElement('div');
    loginButton.id = LOGIN_BUTTON_ICON_LINE
    loginButton.style.position = 'absolute'
    loginButton.style.left = posFirst['Left'];
    loginButton.style.top = posFirst['Top'];
    loginButton.style.width = posFirst['Width']
    loginButton.style.height = posFirst['Height']
    loginButton.style.backgroundColor = "#FFFFFF"
    document.body.appendChild(loginButton)
    heldObjects.push(LOGIN_BUTTON_ICON_LINE)


    posFirst = boxGen(screenWidth, screenHeight, LOGIN_BUTTON_ICON_FACEBOOK);

    var heightVal = posFirst['Height'];

    var facebookIcon = document.createElement('img');
    facebookIcon.id = LOGIN_BUTTON_ICON_FACEBOOK
    facebookIcon.style.position = 'absolute'
    facebookIcon.style.left = posFirst['Left'];
    facebookIcon.style.top = posFirst['Top'];
    facebookIcon.style.width = posFirst['Width']
    facebookIcon.style.height = posFirst['Height']
    facebookIcon.src = "FacebookSymbol.png"

    document.body.appendChild(facebookIcon)
    heldObjects.push(LOGIN_BUTTON_ICON_FACEBOOK)




    //heldObjects.style.borderRadius = 500;


}


function swap(e) {

    var testIt = e;
    var nextLevel = testIt.target.id
    if (testIt.target.src.includes("MeterL1.png")) {
        testIt.target.src = "MeterL2.png"
        var info = $("#" + METER_MESSAGE);
        info.text("Slow");

    } else if (testIt.target.src.includes("MeterL2.png")) {

        testIt.target.src = "MeterL3.png"
        var info = $("#" + METER_MESSAGE);
        info.text("Busy");

    } else if (testIt.target.src.includes("MeterL3.png")) {

        testIt.target.src = "MeterL4.png"
        var info = $("#" + METER_MESSAGE);
        info.text("Lively");

    } else if (testIt.target.src.includes("MeterL4.png")) {

        testIt.target.src = "MeterL5.png"
        var info = $("#" + METER_MESSAGE);
        info.text("Packed");
    } else if (testIt.target.src.includes("MeterL5.png")) {

        testIt.target.src = "MeterL1.png"
        var info = $("#" + METER_MESSAGE);
        info.text("Dead");
    }
}


var killSearch = [];

function killSearcher(){

  var arrayLength = killSearch.length

  for (var counter = 0; counter < arrayLength; counter++) {
    var toChange = $("#" + killSearch[counter])
    toChange.remove();

  }

}

function searchTheText(theData){
  $.ajax({
      type: 'POST',
      url: "/GrabDatabase",
      data: {
          textString:theData.value
      },
  }).done(function(theArray) {

    var offsetXV = 0
    var offsetY = 10

    killSearcher();

    var arrayLength = theArray.length

    for (var counter = 0; counter < arrayLength; counter++) {
        globalIDCounter++;
        var searchObject = theArray[counter];

        var posFirst = offset(screenWidth, screenHeight, SEARCH_CELL, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);
        posFirst['Top']=posFirst['Top']+offsetY;
        var countHeight = posFirst['Top']+posFirst['Height'];
        var botV = offset(screenWidth, screenHeight, BOT_BAR, 0, 0);

        if (countHeight>botV['Top']){
          break;


        }




        var notificationCell = document.createElement('div');

        notificationCell.id = SEARCH_CELL + globalIDCounter
        notificationCell.style.position = 'absolute'
        notificationCell.style.left = posFirst['Left'];
        notificationCell.style.top = posFirst['Top'];
        notificationCell.style.width = posFirst['Width']
        notificationCell.style.height = posFirst['Height']
        notificationCell.style.borderBottomStyle = "solid"
        notificationCell.style.borderBottomWidth = "thin"
        notificationCell.style.borderRadius = 1
        document.body.appendChild(notificationCell)
        killSearch.push(SEARCH_CELL + globalIDCounter)

        posFirst = offset(screenWidth, screenHeight, SEARCH_ICON, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);
        posFirst['Top']=posFirst['Top']+offsetY;
        var notificationIcon = document.createElement('img');


        $('<img />').attr({
            src: searchObject['Image'],
            height: posFirst['Height'],
            width: posFirst['Width'],
            left: posFirst['Left'],
            top: posFirst['Top'],
            style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;',
            id: SEARCH_ICON + globalIDCounter
        }).appendTo($('<a />').attr({
            href: '#',
            onclick: 'goVenues("' + searchObject['Key'] + '")',
            id: SEARCH_ICON + globalIDCounter + "_av"
        }).appendTo('body'));

        document.body.appendChild(notificationIcon)
        killSearch.push(SEARCH_ICON  + globalIDCounter)
        killSearch.push(SEARCH_ICON  + globalIDCounter + "_av")


        posFirst = offset(screenWidth, screenHeight, SEARCH_RIGHT, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);
        posFirst['Top']=posFirst['Top']+offsetY;

        {

            var sourceURL;

            if (searchObject["Favorite"]) {
                sourceURL = "HeartIcon.png"
            } else {
                sourceURL = "HeartIconGray.png"
            }

            $('<img />').attr({
                src: sourceURL,
                height: posFirst['Height'],
                width: posFirst['Width'],
                left: posFirst['Left'],
                top: posFirst['Top'],
                style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;',
                id: SEARCH_RIGHT + globalIDCounter
            }).appendTo($('<a />').attr({
                href: '#',
                onclick: 'changeIcon(' + '"' + SEARCH_RIGHT + globalIDCounter + '"' + ')',
                touchstart: 'changeIcon(' + '"' + SEARCH_RIGHT + globalIDCounter + '"' + ')',
                specialID: searchObject['Key']
            }).appendTo('body'));
        }

        keyRef[SEARCH_RIGHT + globalIDCounter] = searchObject['Key'];
        killSearch.push(SEARCH_RIGHT  + globalIDCounter)

        posFirst = offset(screenWidth, screenHeight, SEARCH_DISTANCE, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);
        posFirst['Top']=posFirst['Top']+offsetY;
        var distanceIcon = document.createElement('img');

        distanceIcon.id = SEARCH_DISTANCE + globalIDCounter
        distanceIcon.style.position = 'absolute'
        distanceIcon.style.left = posFirst['Left'];
        distanceIcon.style.top = posFirst['Top'];
        distanceIcon.style.width = posFirst['Width']
        distanceIcon.style.height = posFirst['Height']
        distanceIcon.src = "Distance.png"
        document.body.appendChild(distanceIcon)
        killSearch.push(SEARCH_DISTANCE   + globalIDCounter)
        posFirst = offset(screenWidth, screenHeight, SEARCH_TEXT, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);
        posFirst['Top']=posFirst['Top']+offsetY;
        var notificationText = document.createElement('div');

        notificationText.id = SEARCH_TEXT + globalIDCounter
        notificationText.style.position = 'absolute'
        notificationText.style.left = posFirst['Left'];
        notificationText.style.top = posFirst['Top'];
        notificationText.style.width = posFirst['Width']
        notificationText.style.height = posFirst['Height']
        notificationText.style.display = "inline"
        notificationText.innerHTML = "<span id='PlaceName'>" + searchObject['Name'] + "</span>"
        document.body.appendChild(notificationText)
        killSearch.push(SEARCH_TEXT   + globalIDCounter)

        posFirst = offset(screenWidth, screenHeight, SEARCH_DISTANCE_NUM, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);
        posFirst['Top']=posFirst['Top']+offsetY;
        var notificationText = document.createElement('div');

        notificationText.id = SEARCH_DISTANCE_NUM + globalIDCounter
        notificationText.style.position = 'absolute'
        notificationText.style.left = posFirst['Left'];
        notificationText.style.top = posFirst['Top'];
        notificationText.style.width = posFirst['Width']
        notificationText.style.height = posFirst['Height']
        notificationText.style.display = "inline"
        notificationText.style.fontSize = 6
        notificationText.style.textAlign = "center"
//qwert
        notificationText.innerHTML = "<span>" + searchObject['Distance'].toFixed(2) + "km</span>"
        document.body.appendChild(notificationText)
        killSearch.push(SEARCH_DISTANCE_NUM + globalIDCounter)


        posFirst = offset(screenWidth, screenHeight, SEARCH_DISTANCE_VAL, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);
        posFirst['Top']=posFirst['Top']+offsetY;
        var distanceIcon = document.createElement('img');

        distanceIcon.id = SEARCH_DISTANCE_VAL + globalIDCounter
        distanceIcon.style.position = 'absolute'
        distanceIcon.style.left = posFirst['Left'];
        distanceIcon.style.top = posFirst['Top'];
        distanceIcon.style.width = posFirst['Width']
        distanceIcon.style.height = posFirst['Height']
        distanceIcon.src = "MeterTest.png"

        if (searchObject['Hotness'] < 0) {
            distanceIcon.src = "MeterL1.png"
        } else if (searchObject["Hotness"] < 1) {
            distanceIcon.src = "MeterL2.png"
        } else if (searchObject["Hotness"] < 2) {
            distanceIcon.src = "MeterL3.png"
        } else if (searchObject["Hotness"] < 3) {
            distanceIcon.src = "MeterL4.png"
        } else {
            distanceIcon.src = "MeterL5.png"
        }

        document.body.appendChild(distanceIcon)
        killSearch.push(SEARCH_DISTANCE_VAL + globalIDCounter)


        posFirst = offset(screenWidth, screenHeight, SEARCH_DISTANCE_VAL_TEXT, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);
        posFirst['Top']=posFirst['Top']+offsetY;
        var distanceIcon = document.createElement('img');

        distanceIcon.id = SEARCH_DISTANCE_VAL_TEXT + globalIDCounter
        distanceIcon.style.position = 'absolute'
        distanceIcon.style.left = posFirst['Left'];
        distanceIcon.style.top = posFirst['Top'];
        distanceIcon.style.width = posFirst['Width']
        distanceIcon.style.height = posFirst['Height']

        if (searchObject['Hotness'] < 0) {
            distanceIcon.src = "meter_descriptor_1.png"
        } else if (searchObject["Hotness"] < 1) {
            distanceIcon.src = "meter_descriptor_2.png"
        } else if (searchObject["Hotness"] < 2) {
            distanceIcon.src = "meter_descriptor_3.png"
        } else if (searchObject["Hotness"] < 3) {
            distanceIcon.src = "meter_descriptor_4.png"
        } else {
            distanceIcon.src = "meter_descriptor_5.png"
        }
        document.body.appendChild(distanceIcon)
        killSearch.push(SEARCH_DISTANCE_VAL_TEXT + globalIDCounter)




    }

  })



//
}

function generateSearchScreen(offsetXV, theID) {

  var posFirst = offset(screenWidth, screenHeight, TEXT_FIELD_SEARCH, offsetXV, 0);

  var cellIcon = document.createElement('input');
  cellIcon.id = TEXT_FIELD_SEARCH
  cellIcon.type = 'text'
  cellIcon.name = 'searchText'
  cellIcon.style.position = 'absolute'
  cellIcon.style.left = posFirst['Left'];
  cellIcon.style.top = posFirst['Top'];
  cellIcon.style.width = posFirst['Width']
  cellIcon.style.height = posFirst['Height']
  cellIcon.style.borderRadius = "4px"
  cellIcon.setAttribute('onkeyup','searchTheText(this)');

  document.body.appendChild(cellIcon)
  heldObjects.push(TEXT_FIELD_SEARCH)




}


function generateReportScreenKey(offsetXV, theID) {


    var theBusiness = placesRef[theID]
    var posFirst = offset(screenWidth, screenHeight, CANCEL_ICON, offsetXV, 0);

    posFirst = offset(screenWidth, screenHeight, ICON_VENUE_CELL, offsetXV, 0);

    var cellIcon = document.createElement('img');
    cellIcon.id = ICON_VENUE_CELL
    cellIcon.style.position = 'absolute'
    cellIcon.style.left = posFirst['Left'];
    cellIcon.style.top = posFirst['Top'];
    cellIcon.style.width = posFirst['Width']
    cellIcon.style.height = posFirst['Height']
    cellIcon.src = "VenueImage.png"
    document.body.appendChild(cellIcon)
    heldObjects.push(ICON_VENUE_CELL)

    posFirst = offset(screenWidth, screenHeight, TEXT_VENUE_CELL, offsetXV, 0);

    var cellTextV = document.createElement('div');
    cellTextV.id = TEXT_VENUE_CELL
    cellTextV.style.position = 'absolute'
    cellTextV.style.left = posFirst['Left'];
    cellTextV.style.top = posFirst['Top'];
    cellTextV.style.width = posFirst['Width']
    cellTextV.style.height = posFirst['Height']
    cellTextV.innerHTML = theBusiness['Name']
    cellTextV.style.fontSize = 22;
    document.body.appendChild(cellTextV)
    heldObjects.push(TEXT_VENUE_CELL)

    posFirst = offset(screenWidth, screenHeight, SUBSCRIPT_VENUE_CELL, offsetXV, 0);

    var cellTextZ = document.createElement('div');
    cellTextZ.id = SUBSCRIPT_VENUE_CELL
    cellTextZ.style.position = 'absolute'
    cellTextZ.style.left = posFirst['Left'];
    cellTextZ.style.top = posFirst['Top'];
    cellTextZ.style.width = posFirst['Width']
    cellTextZ.style.height = posFirst['Height']
    cellTextZ.innerHTML = "<20m"
    cellTextZ.style.fontSize = 10;
    cellTextZ.style.lineHeight = "36px"
    document.body.appendChild(cellTextZ)
    heldObjects.push(SUBSCRIPT_VENUE_CELL)

    posFirst = offset(screenWidth, screenHeight, HOW_HOT_IS, offsetXV, 0);

    var howHotIs = document.createElement('div');
    howHotIs.id = HOW_HOT_IS
    howHotIs.style.position = 'absolute'
    howHotIs.style.left = posFirst['Left'];
    howHotIs.style.top = posFirst['Top'];
    howHotIs.style.width = posFirst['Width']
    howHotIs.style.height = posFirst['Height']
    howHotIs.innerHTML = "How hot is this venue?"
    howHotIs.style.textAlign = 'center'
    howHotIs.style.fontSize = 17;
    document.body.appendChild(howHotIs)
    heldObjects.push(HOW_HOT_IS)


    posFirst = offset(screenWidth, screenHeight, USE_HOT_METER, offsetXV, 0);

    var useMeter = document.createElement('div');
    useMeter.id = USE_HOT_METER
    useMeter.style.position = 'absolute'
    useMeter.style.left = posFirst['Left'];
    useMeter.style.top = posFirst['Top'];
    useMeter.style.width = posFirst['Width']
    useMeter.style.height = posFirst['Height']
    useMeter.innerHTML = "Use hot meter to select"
    useMeter.style.textAlign = 'center'
    useMeter.style.fontSize = 10;
    document.body.appendChild(useMeter)
    heldObjects.push(USE_HOT_METER)


    posFirst = offset(screenWidth, screenHeight, METER_CENTRE, offsetXV, 0);


    var imageSrc = 'MeterL1.png';
    var meterTextV = "Dead";

    if (theBusiness['Hotness'] < 0) {
        meterTextV = "Dead";
        imageSrc = "MeterL1.png"
    } else if (theBusiness["Hotness"] < 1) {
        meterTextV = "Slow";
        imageSrc = "MeterL2.png"
    } else if (theBusiness["Hotness"] < 2) {
        meterTextV = "Busy";
        imageSrc = "MeterL3.png"
    } else if (theBusiness["Hotness"] < 3) {
        imageSrc = "MeterL4.png"
        meterTextV = "Lively";
    } else {
        imageSrc = "MeterL5.png"
        meterTextV = "Packed";

    }


    $('<img />').attr({
        src: imageSrc,
        height: posFirst['Height'],
        width: posFirst['Width'],
        left: posFirst['Left'],
        top: posFirst['Top'],
        style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;',
        id: METER_CENTRE
    }).appendTo($('<a />').attr({
        href: '#',
        onclick: 'swap(event)',
        //onmousemove:getPos(event),
        //onmouseout:stopTracking(),
        //onmousedown:'screamD()',
        //onmouseup:'screamU()',
        //onmouseover:'screamO()',
        id: METER_CENTRE + "_av",
    }).appendTo('body'));



    heldObjects.push(METER_CENTRE)




    posFirst = offset(screenWidth, screenHeight, METER_MESSAGE, offsetXV, 0);

    var theMeterText = document.createElement('div');
    theMeterText.id = METER_MESSAGE
    theMeterText.style.position = 'absolute'
    theMeterText.style.left = posFirst['Left'];
    theMeterText.style.top = posFirst['Top'];
    theMeterText.style.width = posFirst['Width']
    theMeterText.style.height = posFirst['Height']
    theMeterText.innerHTML = meterTextV
    theMeterText.style.textAlign = 'center'
    theMeterText.style.fontSize = 40;
    document.body.appendChild(theMeterText)
    heldObjects.push(METER_MESSAGE)



    var posFirst = offset(screenWidth, screenHeight, CANCEL_ICON, offsetXV, 0);

    var cancelButton = document.createElement('div');

    cancelButton.id = CANCEL_ICON
    cancelButton.style.position = 'absolute'
    cancelButton.style.left = posFirst['Left'];
    cancelButton.style.top = posFirst['Top'];
    cancelButton.style.width = posFirst['Width']
    cancelButton.style.height = posFirst['Height']
    cancelButton.style.backgroundColor = "#c42a36"
        //cancelButton.style.backgroundColor = "#ff2a36"
    cancelButton.style.borderRadius = "16px"
    cancelButton.style.textAlign = 'center'
    cancelButton.style.color = "#FFFFFF"
    cancelButton.style.lineHeight = "36px";
    //titleScreenBar.src = "MainName.png"
    cancelButton.innerHTML = "Cancel"
    document.body.appendChild(cancelButton)
    heldObjects.push(CANCEL_ICON)

    $("#" + CANCEL_ICON).click(goMainScreen);


    posFirst = offset(screenWidth, screenHeight, SUBMIT_ICON, offsetXV, 0);

    var loginButton = document.createElement('div');
    loginButton.id = SUBMIT_ICON
    loginButton.style.position = 'absolute'
    loginButton.style.left = posFirst['Left'];
    loginButton.style.top = posFirst['Top'];
    loginButton.style.width = posFirst['Width']
    loginButton.style.height = posFirst['Height']
    loginButton.style.backgroundColor = "#61a719"
        //loginButton.style.backgroundColor = "#61FF19"
    loginButton.style.borderRadius = "16px"
    loginButton.style.textAlign = 'center'
    loginButton.style.color = "#FFFFFF"
    loginButton.style.lineHeight = "36px";

    //titleScreenBar.src = "MainName.png"
    loginButton.innerHTML = "Submit"
    document.body.appendChild(loginButton)
    heldObjects.push(SUBMIT_ICON)

    $("#" + SUBMIT_ICON).click(markHotness);




    return

}

function generateReportScreenASync(offsetXV) {


  hisPos = getCurrentPosition()

  allCurrentPlaces = [];

  $.ajax({
      type: 'POST',
      url: "/GetNear",
      data: {
          lati: hisPos['Latitude'],
          long: hisPos['Longitude'],
          dist: hisPos['Distance']
      },
  }).done(function(data) {


    var arrayLength = allCurrentPlaces.length

    for (var i = 0; i < arrayLength; i++) {

        placesRef[allCurrentPlaces[i]['Key']] = allCurrentPlaces[i];
    }

    generateReportScreen(-screenWidth,placesRef);
    goRight(heldObjects, false);


  })





}


function generateReportScreen(offsetXV, venues) {




    selectedBusiness = venues[0]
    generateReportScreenKey(offsetXV, selectedBusiness['Key']);
return
    var posFirst = offset(screenWidth, screenHeight, CANCEL_ICON, offsetXV, 0);

    var cancelButton = document.createElement('a');

    cancelButton.id = CANCEL_ICON
    cancelButton.style.position = 'absolute'
    cancelButton.style.left = posFirst['Left'];
    cancelButton.style.top = posFirst['Top'];
    cancelButton.style.width = posFirst['Width']
    cancelButton.style.height = posFirst['Height']
    cancelButton.style.backgroundColor = "#c42a36"
        //cancelButton.style.backgroundColor = "#ff2a36"
    cancelButton.style.borderRadius = "16px"
    cancelButton.style.textAlign = 'center'
    cancelButton.style.color = "#FFFFFF"
    cancelButton.style.lineHeight = "36px";
    //titleScreenBar.src = "MainName.png"
    cancelButton.innerHTML = "Cancel"
    document.body.appendChild(cancelButton)
    heldObjects.push(CANCEL_ICON)


    posFirst = offset(screenWidth, screenHeight, SUBMIT_ICON, offsetXV, 0);

    var loginButton = document.createElement('a');
    loginButton.id = SUBMIT_ICON
    loginButton.style.position = 'absolute'
    loginButton.style.left = posFirst['Left'];
    loginButton.style.top = posFirst['Top'];
    loginButton.style.width = posFirst['Width']
    loginButton.style.height = posFirst['Height']
    loginButton.style.backgroundColor = "#61a719"
        //loginButton.style.backgroundColor = "#61FF19"
    loginButton.style.borderRadius = "16px"
    loginButton.style.textAlign = 'center'
    loginButton.style.color = "#FFFFFF"
    loginButton.style.lineHeight = "36px";

    //titleScreenBar.src = "MainName.png"
    loginButton.innerHTML = "Submit"
    document.body.appendChild(loginButton)
    heldObjects.push(SUBMIT_ICON)



    posFirst = offset(screenWidth, screenHeight, ICON_VENUE_CELL, offsetXV, 0);

    var cellIcon = document.createElement('img');
    cellIcon.id = ICON_VENUE_CELL
    cellIcon.style.position = 'absolute'
    cellIcon.style.left = posFirst['Left'];
    cellIcon.style.top = posFirst['Top'];
    cellIcon.style.width = posFirst['Width']
    cellIcon.style.height = posFirst['Height']
    cellIcon.src = "VenueImage.png"
    document.body.appendChild(cellIcon)
    heldObjects.push(ICON_VENUE_CELL)

    posFirst = offset(screenWidth, screenHeight, TEXT_VENUE_CELL, offsetXV, 0);

    var cellTextV = document.createElement('div');
    cellTextV.id = TEXT_VENUE_CELL
    cellTextV.style.position = 'absolute'
    cellTextV.style.left = posFirst['Left'];
    cellTextV.style.top = posFirst['Top'];
    cellTextV.style.width = posFirst['Width']
    cellTextV.style.height = posFirst['Height']
    cellTextV.innerHTML = "Ingosh Beach"
    cellTextV.style.fontSize = 22;
    document.body.appendChild(cellTextV)
    heldObjects.push(TEXT_VENUE_CELL)

    posFirst = offset(screenWidth, screenHeight, SUBSCRIPT_VENUE_CELL, offsetXV, 0);

    var cellTextZ = document.createElement('div');
    cellTextZ.id = SUBSCRIPT_VENUE_CELL
    cellTextZ.style.position = 'absolute'
    cellTextZ.style.left = posFirst['Left'];
    cellTextZ.style.top = posFirst['Top'];
    cellTextZ.style.width = posFirst['Width']
    cellTextZ.style.height = posFirst['Height']
    cellTextZ.innerHTML = "<20m"
    cellTextZ.style.fontSize = 10;
    cellTextZ.style.lineHeight = "36px"
    document.body.appendChild(cellTextZ)
    heldObjects.push(SUBSCRIPT_VENUE_CELL)

    posFirst = offset(screenWidth, screenHeight, HOW_HOT_IS, offsetXV, 0);

    var howHotIs = document.createElement('div');
    howHotIs.id = HOW_HOT_IS
    howHotIs.style.position = 'absolute'
    howHotIs.style.left = posFirst['Left'];
    howHotIs.style.top = posFirst['Top'];
    howHotIs.style.width = posFirst['Width']
    howHotIs.style.height = posFirst['Height']
    howHotIs.innerHTML = "How hot is this venue?"
    howHotIs.style.textAlign = 'center'
    howHotIs.style.fontSize = 17;
    document.body.appendChild(howHotIs)
    heldObjects.push(HOW_HOT_IS)


    posFirst = offset(screenWidth, screenHeight, USE_HOT_METER, offsetXV, 0);

    var useMeter = document.createElement('div');
    useMeter.id = USE_HOT_METER
    useMeter.style.position = 'absolute'
    useMeter.style.left = posFirst['Left'];
    useMeter.style.top = posFirst['Top'];
    useMeter.style.width = posFirst['Width']
    useMeter.style.height = posFirst['Height']
    useMeter.innerHTML = "Use hot meter to select"
    useMeter.style.textAlign = 'center'
    useMeter.style.fontSize = 10;
    document.body.appendChild(useMeter)
    heldObjects.push(USE_HOT_METER)


    posFirst = offset(screenWidth, screenHeight, METER_CENTRE, offsetXV, 0);

    var theMeter = document.createElement('img');
    theMeter.id = METER_CENTRE
    theMeter.style.position = 'absolute'
    theMeter.style.left = posFirst['Left'];
    theMeter.style.top = posFirst['Top'];
    theMeter.style.width = posFirst['Width']
    theMeter.style.height = posFirst['Height']
    theMeter.src = "MeterTest.png"
    document.body.appendChild(theMeter)
    heldObjects.push(METER_CENTRE)


    posFirst = offset(screenWidth, screenHeight, METER_MESSAGE, offsetXV, 0);

    var theMeterText = document.createElement('div');
    theMeterText.id = METER_MESSAGE
    theMeterText.style.position = 'absolute'
    theMeterText.style.left = posFirst['Left'];
    theMeterText.style.top = posFirst['Top'];
    theMeterText.style.width = posFirst['Width']
    theMeterText.style.height = posFirst['Height']
    theMeterText.innerHTML = "LIVELY"
    theMeterText.style.textAlign = 'center'
    theMeterText.style.fontSize = 40;
    document.body.appendChild(theMeterText)
    heldObjects.push(METER_MESSAGE)

    return

}


function generateProfile(offsetXV) {

    var posFirst = offset(screenWidth, screenHeight, USER_PROFILE_BAR, offsetXV, 0);


    var tabBar = document.createElement('div');

    tabBar.id = USER_PROFILE_BAR
    tabBar.style.position = 'absolute'
    tabBar.style.left = posFirst['Left'];
    tabBar.style.top = posFirst['Top'];
    tabBar.style.width = posFirst['Width']
    tabBar.style.height = posFirst['Height']
    tabBar.style.backgroundColor = "#03a6f1"
    document.body.appendChild(tabBar)
    heldObjects.push(USER_PROFILE_BAR)


    posFirst = offset(screenWidth, screenHeight, USER_PROFILE_BAR_IMAGE, offsetXV, 0);
    var profileImage = document.createElement('img');

    profileImage.id = USER_PROFILE_BAR_IMAGE
    profileImage.style.position = 'absolute'
    profileImage.style.left = posFirst['Left'];
    profileImage.style.top = posFirst['Top'];
    profileImage.style.width = posFirst['Width']
    profileImage.style.height = posFirst['Height']
    profileImage.style.borderRadius = '50%';
    profileImage.src = userImage
    document.body.appendChild(profileImage)
    heldObjects.push(USER_PROFILE_BAR_IMAGE)


    posFirst = offset(screenWidth, screenHeight, USER_PROFILE_BAR_NAME, offsetXV, 0);
    var detailMainImage = document.createElement('div');

    detailMainImage.id = USER_PROFILE_BAR_NAME
    detailMainImage.style.position = 'absolute'
    detailMainImage.style.left = posFirst['Left'];
    detailMainImage.style.top = posFirst['Top'];
    detailMainImage.style.width = posFirst['Width']
    detailMainImage.style.height = posFirst['Height']
    detailMainImage.style.textAlign = "center"
    detailMainImage.style.color = "#FFFFFF"
    detailMainImage.innerHTML = graphInfo['first_name']+" "+graphInfo['last_name']
    document.body.appendChild(detailMainImage)
    heldObjects.push(USER_PROFILE_BAR_NAME)


    posFirst = offset(screenWidth, screenHeight, USER_PROFILE_BAR_JOIN_DATE, offsetXV, 0);
    var detailMainImage = document.createElement('div');

    detailMainImage.id = USER_PROFILE_BAR_JOIN_DATE
    detailMainImage.style.position = 'absolute'
    detailMainImage.style.left = posFirst['Left'];
    detailMainImage.style.top = posFirst['Top'];
    detailMainImage.style.width = posFirst['Width']
    detailMainImage.style.height = posFirst['Height']
    detailMainImage.style.textAlign = "center"
    detailMainImage.style.color = "#c9c9c9"
    detailMainImage.innerHTML = graphInfo['createDate']

    document.body.appendChild(detailMainImage)
    heldObjects.push(USER_PROFILE_BAR_JOIN_DATE)



    posFirst = offset(screenWidth, screenHeight, USER_AGE_INFO_DATA, offsetXV, 0);
    var detailMainImage = document.createElement('div');

    detailMainImage.id = USER_AGE_INFO_DATA + 1
    detailMainImage.style.position = 'absolute'
    detailMainImage.style.left = posFirst['Left'];
    detailMainImage.style.top = posFirst['Top'];
    detailMainImage.style.width = posFirst['Width']
    detailMainImage.style.height = posFirst['Height']
    detailMainImage.style.textAlign = "left"
    detailMainImage.style.color = "#000000"
    detailMainImage.innerHTML = "Age"

    document.body.appendChild(detailMainImage)
    heldObjects.push(USER_AGE_INFO_DATA + 1)

    var detailMainImage = document.createElement('div');

    detailMainImage.id = USER_AGE_INFO_DATA + 2
    detailMainImage.style.position = 'absolute'
    detailMainImage.style.left = posFirst['Left'];
    detailMainImage.style.top = posFirst['Top'];
    detailMainImage.style.width = posFirst['Width']
    detailMainImage.style.height = posFirst['Height']
    detailMainImage.style.textAlign = "right"
    detailMainImage.style.color = "#000000"
    detailMainImage.innerHTML = graphInfo['age']

    document.body.appendChild(detailMainImage)
    heldObjects.push(USER_AGE_INFO_DATA + 2)

    var detailMainImage = document.createElement('div');

    detailMainImage.id = USER_AGE_INFO_DATA + 3
    detailMainImage.style.position = 'absolute'
    detailMainImage.style.left = posFirst['Left'];
    detailMainImage.style.top = posFirst['Top'];
    detailMainImage.style.width = posFirst['Width']
    detailMainImage.style.height = 1
    detailMainImage.style.backgroundColor = "#e3e3e3"

    document.body.appendChild(detailMainImage)
    heldObjects.push(USER_AGE_INFO_DATA + 3)



    posFirst = offset(screenWidth, screenHeight, USER_GENDER_INFO_DATA, offsetXV, 0);
    var detailMainImage = document.createElement('div');


    detailMainImage.id = USER_GENDER_INFO_DATA + 1
    detailMainImage.style.position = 'absolute'
    detailMainImage.style.left = posFirst['Left'];
    detailMainImage.style.top = posFirst['Top'];
    detailMainImage.style.width = posFirst['Width']
    detailMainImage.style.height = posFirst['Height']
    detailMainImage.style.textAlign = "right"
    detailMainImage.style.color = "#000000"
    detailMainImage.innerHTML = graphInfo['gender']

    document.body.appendChild(detailMainImage)
    heldObjects.push(USER_GENDER_INFO_DATA + 1)

    var detailMainImage = document.createElement('div');


    detailMainImage.id = USER_GENDER_INFO_DATA + 2
    detailMainImage.style.position = 'absolute'
    detailMainImage.style.left = posFirst['Left'];
    detailMainImage.style.top = posFirst['Top'];
    detailMainImage.style.width = posFirst['Width']
    detailMainImage.style.height = posFirst['Height']
    detailMainImage.style.textAlign = "left"
    detailMainImage.style.color = "#000000"
    detailMainImage.innerHTML = "Gender"

    document.body.appendChild(detailMainImage)
    heldObjects.push(USER_GENDER_INFO_DATA + 2)

    var detailMainImage = document.createElement('div');

    detailMainImage.id = USER_GENDER_INFO_DATA + 3
    detailMainImage.style.position = 'absolute'
    detailMainImage.style.left = posFirst['Left'];
    detailMainImage.style.top = posFirst['Top'];
    detailMainImage.style.width = posFirst['Width']
    detailMainImage.style.height = 1
    detailMainImage.style.backgroundColor = "#e3e3e3"

    document.body.appendChild(detailMainImage)
    heldObjects.push(USER_GENDER_INFO_DATA + 3)




    return;



}

function generateDetails(offsetXV, theBusiness) {

    var posFirst = offset(screenWidth, screenHeight, DETAIL_MAIN_IMAGE, offsetXV, 0);

    var detailMainImage = document.createElement('img');

    detailMainImage.id = DETAIL_MAIN_IMAGE
    detailMainImage.style.position = 'absolute'
    detailMainImage.style.left = posFirst['Left'];
    detailMainImage.style.top = posFirst['Top'];
    detailMainImage.style.width = posFirst['Width']
    detailMainImage.style.height = posFirst['Height']
    detailMainImage.src = theBusiness['BigImage']
    document.body.appendChild(detailMainImage)
    heldObjects.push(DETAIL_MAIN_IMAGE)

    posFirst = offset(screenWidth, screenHeight, DETAIL_MAIN_IMAGE_LEFT_TEXT, offsetXV, 0);

    var textImageLeft = document.createElement('div');

    textImageLeft.id = DETAIL_MAIN_IMAGE_LEFT_TEXT
    textImageLeft.style.position = 'absolute'
    textImageLeft.style.left = posFirst['Left'];
    textImageLeft.style.top = posFirst['Top'];
    textImageLeft.style.width = posFirst['Width']
    textImageLeft.style.height = posFirst['Height']
    textImageLeft.innerHTML = theBusiness['Name']
    textImageLeft.style.color = "#FFFFFF"
    document.body.appendChild(textImageLeft)
    heldObjects.push(DETAIL_MAIN_IMAGE_LEFT_TEXT)

    posFirst = offset(screenWidth, screenHeight, DETAIL_MAIN_IMAGE_RIGHT_TEXT, offsetXV, 0);

    var reportText = document.createElement('div');

    reportText.id = DETAIL_MAIN_IMAGE_RIGHT_TEXT
    reportText.style.position = 'absolute'
    reportText.style.left = posFirst['Left'];
    reportText.style.top = posFirst['Top'];
    reportText.style.width = posFirst['Width']
    reportText.style.height = posFirst['Height']
    reportText.innerHTML = "Report Venues"
    reportText.style.color = "#FFFFFF"
    reportText.style.textAlign = "Right"
    document.body.appendChild(reportText)
    heldObjects.push(DETAIL_MAIN_IMAGE_RIGHT_TEXT)

/*
    posFirst = offset(screenWidth, screenHeight, DETAIL_MAIN_IMAGE_RIGHT_IMAGE, offsetXV, 0);

    var reportImage = document.createElement('img');

    reportImage.id = DETAIL_MAIN_IMAGE_RIGHT_IMAGE
    reportImage.style.position = 'absolute'
    reportImage.style.left = posFirst['Left'];
    reportImage.style.top = posFirst['Top'];
    reportImage.style.width = posFirst['Width']
    reportImage.style.height = posFirst['Height']
    reportImage.src = "ReportPad.png"
    document.body.appendChild(reportImage)
    heldObjects.push(DETAIL_MAIN_IMAGE_RIGHT_IMAGE)
*/


    posFirst = offset(screenWidth, screenHeight, DETAIL_MAIN_TEXT, offsetXV, 0);

    var mainText = document.createElement('div');

    mainText.id = DETAIL_MAIN_TEXT
    mainText.style.position = 'absolute'
    mainText.style.left = posFirst['Left'];
    mainText.style.top = posFirst['Top'];
    mainText.style.width = posFirst['Width']
    mainText.style.height = posFirst['Height']
    mainText.style.textAlign = "center"
    mainText.style.fontSize = "13.7px"
    mainText.innerHTML = theBusiness['Text']
    document.body.appendChild(mainText)
    heldObjects.push(DETAIL_MAIN_TEXT)

    posFirst = offset(screenWidth, screenHeight, DETAIL_DATE_TEXT, offsetXV, 0);

    var dateText = document.createElement('div');

    dateText.id = DETAIL_DATE_TEXT
    dateText.style.position = 'absolute'
    dateText.style.left = posFirst['Left'];
    dateText.style.top = posFirst['Top'];
    dateText.style.width = posFirst['Width']
    dateText.style.height = posFirst['Height']
    dateText.style.fontSize = "12px"
    dateText.innerHTML = "Today's Opening and Closing hours <br>" + theBusiness['Open'] + " - " + theBusiness['Close']
    document.body.appendChild(dateText)
    heldObjects.push(DETAIL_DATE_TEXT)



    posFirst = offset(screenWidth, screenHeight, ACTIVITY_ICON_TEXT, offsetXV, 0);

    var activityIconText = document.createElement('div');

    activityIconText.id = ACTIVITY_ICON_TEXT
    activityIconText.style.position = 'absolute'
    activityIconText.style.left = posFirst['Left'];
    activityIconText.style.top = posFirst['Top'];
    activityIconText.style.width = posFirst['Width']
    activityIconText.style.height = posFirst['Height']
    activityIconText.style.fontSize = "12px"
    activityIconText.innerHTML = "Currently:"
    document.body.appendChild(activityIconText)
    heldObjects.push(ACTIVITY_ICON_TEXT)


    posFirst = offset(screenWidth, screenHeight, ACTIVITY_ICON, offsetXV, 0);

    var activityIcon = document.createElement('img');


    var imageSrc = "MeterL1.png"
    if (theBusiness['Hotness'] < 0) {
        imageSrc = "MeterL1.png"
    } else if (theBusiness["Hotness"] < 1) {
        imageSrc = "MeterL2.png"
    } else if (theBusiness["Hotness"] < 2) {
        imageSrc = "MeterL3.png"
    } else if (theBusiness["Hotness"] < 3) {
        imageSrc = "MeterL4.png"
    } else {
        imageSrc = "MeterL5.png"

    }


    $('<img />').attr({
        src: imageSrc,
        height: posFirst['Height'],
        width: posFirst['Width'],
        left: posFirst['Left'],
        top: posFirst['Top'],
        style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;',
        id: ACTIVITY_ICON
    }).appendTo($('<a />').attr({
        href: '#',
        id: ACTIVITY_ICON + "_av",
        onclick: 'goReportVenuesSpecific("' + theBusiness['Key'] + '")'
    }).appendTo('body'));




    heldObjects.push(ACTIVITY_ICON)
    heldObjects.push(ACTIVITY_ICON + "_av")


    posFirst = offset(screenWidth, screenHeight, MAP_ICON, offsetXV, 0);


    createMap(posFirst, "BLARG_THING", theBusiness['Latitude'], theBusiness['Longitude'])
    removeAllMarkers();
    addMarker(theBusiness)
    heldObjects.push("BLARG_THING");


    return allCurrentPlaces;

    /*var mapData = document.createElement('img');

  mapData.id = MAP_ICON
  mapData.style.position = 'absolute'
  mapData.style.left = posFirst['Left'];
  mapData.style.top = posFirst['Top'];
  mapData.style.width = posFirst['Width']
  mapData.style.height = posFirst['Height']
  mapData.src = "MapValue.png"
  document.body.appendChild(mapData)
  heldObjects.push(MAP_ICON)
*/

}

function generatePopout() {

/*
  var backing = document.createElement('div');

  backing.id = "fullBack"
  backing.style.position = 'absolute'
  backing.style.left = -screenWidth;
  backing.style.top = 0;
  backing.style.width = screenWidth
  backing.style.height = screenHeight
  backing.style.backgroundColor = "#000000"
  backing.style.opacity = 0.00;
  backing.style.zIndex = 980
  backing.addEventListener('click',sidePopIn())
  document.body.appendChild(backing)
  sideBar.push("fullBack")
*/




    var posFirst = offset(screenWidth, screenHeight, FULL_SCREEN_BAR, -screenWidth, 0);
    var grayBar = document.createElement('div');

    grayBar.id = FULL_SCREEN_BAR
    grayBar.style.position = 'absolute'
    grayBar.style.left = posFirst['Left'];
    grayBar.style.top = posFirst['Top'];
    grayBar.style.width = posFirst['Width']
    grayBar.style.height = posFirst['Height']
    grayBar.style.backgroundColor = "#DDDDDD"
    grayBar.style.zIndex = 1001
    grayBar.style.opacity = 0.0
    grayBar.onclick = function() {
    sidePopIn()
};
    //
    document.body.appendChild(grayBar)
    sideBar.push(FULL_SCREEN_BAR)


var posFirst = offset(screenWidth, screenHeight, BIG_BAR, -screenWidth, 0);
    var fullBar = document.createElement('div');

    fullBar.id = BIG_BAR
    fullBar.style.position = 'absolute'
    fullBar.style.left = posFirst['Left'];
    fullBar.style.top = posFirst['Top'];
    fullBar.style.width = posFirst['Width']
    fullBar.style.height = posFirst['Height']
    fullBar.style.backgroundColor = "#DDDDDD"
    fullBar.style.zIndex = 1000
    //fullBar.addEventListener('click',sidePopIn())
    document.body.appendChild(fullBar)
    sideBar.push(BIG_BAR)








    var posFirst = offset(screenWidth, screenHeight, BIG_BLUE_BAR, -screenWidth, 0);
    var blueBar = document.createElement('div');

    blueBar.id = BIG_BLUE_BAR
    blueBar.style.position = 'absolute'
    blueBar.style.left = posFirst['Left'];
    blueBar.style.top = posFirst['Top'];
    blueBar.style.width = posFirst['Width']
    blueBar.style.height = posFirst['Height']
    blueBar.style.backgroundColor = "#00a4f1"
    blueBar.style.zIndex = 1001
    document.body.appendChild(blueBar)
    sideBar.push(BIG_BLUE_BAR)

    var posFirst = offset(screenWidth, screenHeight, BLUE_BAR_IMAGE, -screenWidth, 0);
    var blueBarImage = document.createElement('img');

    blueBarImage.id = BLUE_BAR_IMAGE
    blueBarImage.style.position = 'absolute'
    blueBarImage.style.left = posFirst['Left'];
    blueBarImage.style.top = posFirst['Top'];
    blueBarImage.style.width = posFirst['Width']
    blueBarImage.style.height = posFirst['Height']
    blueBarImage.style.borderRadius = '50%';
    blueBarImage.src = userImage
    blueBarImage.style.zIndex = 1002
    document.body.appendChild(blueBarImage)
    sideBar.push(BLUE_BAR_IMAGE)

    var posFirst = offset(screenWidth, screenHeight, BLUE_BAR_TEXT, -screenWidth, 0);
    var blueBarImage = document.createElement('div');

    blueBarImage.id = BLUE_BAR_TEXT
    blueBarImage.style.position = 'absolute'
    blueBarImage.style.left = posFirst['Left'];
    blueBarImage.style.top = posFirst['Top'];
    blueBarImage.style.width = posFirst['Width']
    blueBarImage.style.height = posFirst['Height']
    blueBarImage.innerHTML = graphInfo['first_name'] +" " +graphInfo['last_name']
    blueBarImage.style.color = "#FFFFFF"
    //blueBarImage.style.lineHeight = "0px";
    blueBarImage.style.zIndex = 1003
    document.body.appendChild(blueBarImage)
    sideBar.push(BLUE_BAR_TEXT)




    var img = [
        "Home.png",
        "Profile.png",
        "HotVenues.png",
        "VenuesNearMe.png",
        "FavoriteVenues.png",
        /*"ReportVenues.png",*/
        "Notifications.png",
        //"Settings.png",
        "Back.png",

    ]

    var text = [
        "Home",
        "Profile",
        "Hot Venues",
        "Venues Near Me",
        "Favorite Venues",
        "Notifications",
        "Back",
        /*"Report Venues",*/

        //"Settings",

    ]


    var action = [
        "goMainScreen()",
        "goUserProfile()",
        "goHotVenues()",
        "goNearMe()",
        "goFavoriteVenue()",
        /*"goReportVenues()",*/
        "goNotifications()",
        //"goSettings()",
        "goBack()",
        "goBack()",



    ]



    for (var counter = 0; counter < 7; counter++) {

        var stepSize = counter * 59;

        var posFirst = offset(screenWidth, screenHeight, BLUE_CELL_ICON, -screenWidth, screenHeight * 0.25 + 10 + stepSize);
        var blueCellImage = document.createElement('img');

        blueCellImage.id = BLUE_BAR_IMAGE + counter
        blueCellImage.style.position = 'absolute'
        blueCellImage.style.left = posFirst['Left'];
        blueCellImage.style.top = posFirst['Top'];
        blueCellImage.style.width = posFirst['Width']
        blueCellImage.style.height = posFirst['Height']
        blueCellImage.src = img[counter]
        blueCellImage.style.zIndex = 1010
        document.body.appendChild(blueCellImage)
        sideBar.push(BLUE_BAR_IMAGE + counter)

        var posFirst = offset(screenWidth, screenHeight, BLUE_CELL_TEXT, -screenWidth, screenHeight * 0.25 + 20 + stepSize);
        var blueCellText = document.createElement('div');

        blueCellText.id = BLUE_CELL_TEXT + counter
        blueCellText.style.position = 'absolute'
        blueCellText.style.left = posFirst['Left'];
        blueCellText.style.top = posFirst['Top'];
        blueCellText.style.width = posFirst['Width']
        blueCellText.style.height = posFirst['Height']
        blueCellText.innerHTML = text[counter]
        blueCellText.style.color = "#000000"
        blueCellText.style.zIndex = 1011
        document.body.appendChild(blueCellText)
        sideBar.push(BLUE_CELL_TEXT + counter)


        var posFirst = offset(screenWidth, screenHeight, BLUE_CELL_CELL, -screenWidth, screenHeight * 0.25 + 20 + stepSize);

        $('<img />').attr({
            src: "Blank.png",
            zIndex: 1012,
            height: posFirst['Height'],
            width: posFirst['Width'],
            left: posFirst['Left'],
            top: posFirst['Top'],
            style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;z-index:1012',
            id: BLUE_CELL_CELL + counter
        }).appendTo($('<a />').attr({
            href: '#',
            onclick: action[counter]
        }).appendTo('body'));


        sideBar.push(BLUE_CELL_CELL + counter)


    }


    {
        var arrayLength = sideBar.length

        for (var i = 0; i < arrayLength; i++) {

            var toChange = $("#" + sideBar[i])
            toChange.animate({
                left: "+=" + screenWidth
            }, 500, function() {})
        }
    }




    return
}

function changeIcon(idValue) {

  console.log("Done");

    var toChange = $("#" + idValue)
    toChange = toChange[0]


    var key = keyRef[idValue];
    var placeData = placesRef[key]

    if (placeData['Favorite']) {

      $.ajax({
          type: 'POST',
          url: "/FavKey",
          data: {
              user:userID,
              key: key,
              fav: false
          },
      }).done(function(data) {


      })

        toChange.src = 'HeartIconGray.png'
        placesRef[key]['Favorite'] = false

    } else {

      $.ajax({
          type: 'POST',
          url: "/FavKey",
          data: {
              user:userID,
              key: key,
              fav: true
          },
      }).done(function(data) {


      })

        toChange.src = 'HeartIcon.png'
        placesRef[key]['Favorite'] = true
    }





}


function generateMap(offsetXV, theArray) {

    var arrayLength = theArray.length

    for (var counter = 0; counter < arrayLength; counter++) {
        globalIDCounter++;

    }

}

function generateSearchResultsASyncFav(){

  {

      hisPos = getCurrentPosition()

      allCurrentPlaces = [];

      $.ajax({
          type: 'POST',
          url: "/GetFav",
          data: {
              lati: hisPos['Latitude'],
              long: hisPos['Longitude'],
              dist: hisPos['Distance'],
              user: userID,
          },

      }).done(function(data) {

          allCurrentPlaces = data;

          var arrayLength = allCurrentPlaces.length

          for (var i = 0; i < arrayLength; i++) {

              placesRef[allCurrentPlaces[i]['Key']] = allCurrentPlaces[i];
          }
          generateSearchResults(-screenWidth, allCurrentPlaces)
          goRight(heldObjects, false);
      })





  }



}


function generateSearchResultsASyncHotNoMove(){


  {

      hisPos = getCurrentPosition()

      allCurrentPlaces = [];

      $.ajax({
          type: 'POST',
          url: "/GetBusiness",
          data: {
              lati: hisPos['Latitude'],
              long: hisPos['Longitude'],
              dist: hisPos['Distance'],
              user: userID,
          },

      }).done(function(data) {

          allCurrentPlaces = data;

          var arrayLength = allCurrentPlaces.length

          for (var i = 0; i < arrayLength; i++) {

              placesRef[allCurrentPlaces[i]['Key']] = allCurrentPlaces[i];
          }
          generateSearchResults(0, allCurrentPlaces)

      })





  }



}

function generateSearchResultsASyncHot(){


  {

      hisPos = getCurrentPosition()

      allCurrentPlaces = [];

      $.ajax({
          type: 'POST',
          url: "/GetBusiness",
          data: {
              lati: hisPos['Latitude'],
              long: hisPos['Longitude'],
              dist: hisPos['Distance'],
              user: userID,
          },

      }).done(function(data) {

          allCurrentPlaces = data;

          var arrayLength = allCurrentPlaces.length

          for (var i = 0; i < arrayLength; i++) {

              placesRef[allCurrentPlaces[i]['Key']] = allCurrentPlaces[i];
          }
          generateSearchResults(-screenWidth, allCurrentPlaces)
          goRight(heldObjects, false);
      })





  }



}




function generateSearchResults(offsetXV, theArray) {


    var arrayLength = theArray.length

    for (var counter = 0; counter < arrayLength; counter++) {
        globalIDCounter++;
        var searchObject = theArray[counter];

        var posFirst = offset(screenWidth, screenHeight, SEARCH_CELL, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);

        var countHeight = posFirst['Top']+posFirst['Height'];
        var botV = offset(screenWidth, screenHeight, BOT_BAR, 0, 0);

        if (countHeight>botV['Top']){
          break;


        }




        var notificationCell = document.createElement('div');

        notificationCell.id = SEARCH_CELL + globalIDCounter
        notificationCell.style.position = 'absolute'
        notificationCell.style.left = posFirst['Left'];
        notificationCell.style.top = posFirst['Top'];
        notificationCell.style.width = posFirst['Width']
        notificationCell.style.height = posFirst['Height']
        notificationCell.style.borderBottomStyle = "solid"
        notificationCell.style.borderBottomWidth = "thin"
        notificationCell.style.borderRadius = 1
        document.body.appendChild(notificationCell)
        heldObjects.push(SEARCH_CELL + globalIDCounter)


        posFirst = offset(screenWidth, screenHeight, SEARCH_ICON, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);

        var notificationIcon = document.createElement('img');


        $('<img />').attr({
            src: searchObject['Image'],
            height: posFirst['Height'],
            width: posFirst['Width'],
            left: posFirst['Left'],
            top: posFirst['Top'],
            style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;',
            id: SEARCH_ICON + globalIDCounter
        }).appendTo($('<a />').attr({
            href: '#',
            onclick: 'goVenues("' + searchObject['Key'] + '")',
            id: SEARCH_ICON + globalIDCounter + "_av"
        }).appendTo('body'));

        document.body.appendChild(notificationIcon)
        heldObjects.push(SEARCH_ICON + globalIDCounter)
        heldObjects.push(SEARCH_ICON + globalIDCounter + "_av")



        posFirst = offset(screenWidth, screenHeight, SEARCH_RIGHT, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);


        {

            var sourceURL;

            if (searchObject["Favorite"]) {
                sourceURL = "HeartIcon.png"
            } else {
                sourceURL = "HeartIconGray.png"
            }

            $('<img />').attr({
                src: sourceURL,
                height: posFirst['Height'],
                width: posFirst['Width'],
                left: posFirst['Left'],
                top: posFirst['Top'],
                style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;',
                id: SEARCH_RIGHT + globalIDCounter
            }).appendTo($('<a />').attr({
                href: '#',
                onclick: 'changeIcon(' + '"' + SEARCH_RIGHT + globalIDCounter + '"' + ')',
                touchstart: 'changeIcon(' + '"' + SEARCH_RIGHT + globalIDCounter + '"' + ')',
                specialID: searchObject['Key']
            }).appendTo('body'));
        }

        keyRef[SEARCH_RIGHT + globalIDCounter] = searchObject['Key'];

        heldObjects.push(SEARCH_RIGHT + globalIDCounter)

        posFirst = offset(screenWidth, screenHeight, SEARCH_DISTANCE, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);

        var distanceIcon = document.createElement('img');

        distanceIcon.id = SEARCH_DISTANCE + globalIDCounter
        distanceIcon.style.position = 'absolute'
        distanceIcon.style.left = posFirst['Left'];
        distanceIcon.style.top = posFirst['Top'];
        distanceIcon.style.width = posFirst['Width']
        distanceIcon.style.height = posFirst['Height']
        distanceIcon.src = "Distance.png"
        document.body.appendChild(distanceIcon)
        heldObjects.push(SEARCH_DISTANCE + globalIDCounter)

        posFirst = offset(screenWidth, screenHeight, SEARCH_TEXT, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);

        var notificationText = document.createElement('div');

        notificationText.id = SEARCH_TEXT + globalIDCounter
        notificationText.style.position = 'absolute'
        notificationText.style.left = posFirst['Left'];
        notificationText.style.top = posFirst['Top'];
        notificationText.style.width = posFirst['Width']
        notificationText.style.height = posFirst['Height']
        notificationText.style.display = "inline"
        notificationText.style.overflow = "scroll";
        notificationText.innerHTML = "<span id='PlaceName'>" + searchObject['Name'] + "</span>"
        notificationText.extraKey = searchObject['Key']
        notificationText.onclick = function() {
          goVenues(this.extraKey)

        };
        document.body.appendChild(notificationText)
        heldObjects.push(SEARCH_TEXT + globalIDCounter)


        posFirst = offset(screenWidth, screenHeight, SEARCH_DISTANCE_NUM, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);

        var notificationText = document.createElement('div');

        notificationText.id = SEARCH_DISTANCE_NUM + globalIDCounter
        notificationText.style.position = 'absolute'
        notificationText.style.left = posFirst['Left'];
        notificationText.style.top = posFirst['Top'];
        notificationText.style.width = posFirst['Width']
        notificationText.style.height = posFirst['Height']
        notificationText.style.display = "inline"
        notificationText.style.fontSize = 6
        notificationText.style.textAlign = "center"

        notificationText.innerHTML = "<span>" + searchObject['Distance'].toFixed(2) + " km</span>"
        document.body.appendChild(notificationText)
        heldObjects.push(SEARCH_DISTANCE_NUM + globalIDCounter)


        posFirst = offset(screenWidth, screenHeight, SEARCH_DISTANCE_VAL, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);

        var hotIconLevel = "MeterL1.png"
        if (searchObject['Hotness'] < 0) {
          hotIconLevel = "MeterL1.png"
        } else if (searchObject["Hotness"] < 1) {
            hotIconLevel = "MeterL2.png"
        } else if (searchObject["Hotness"] < 2) {
            hotIconLevel = "MeterL3.png"
        } else if (searchObject["Hotness"] < 3) {
            hotIconLevel = "MeterL4.png"
        } else {
            hotIconLevel = "MeterL5.png"
        }


        $('<img />').attr({
            src: hotIconLevel,
            height: posFirst['Height'],
            width: posFirst['Width'],
            left: posFirst['Left'],
            top: posFirst['Top'],
            style: 'position:absolute;left:' + posFirst['Left'] + 'px;width:' + posFirst['Width'] + 'px;top:' + posFirst['Top'] + 'px;height:' + posFirst['Height'] + 'px;',
            id: SEARCH_DISTANCE_VAL + globalIDCounter
        }).appendTo($('<a />').attr({
            href: '#',
            onclick: 'goReportVenuesSpecific("' + searchObject['Key'] + '")',
            id: SEARCH_DISTANCE_VAL + globalIDCounter + "_av"
        }).appendTo('body'));

        document.body.appendChild(notificationIcon)
        heldObjects.push(SEARCH_DISTANCE_VAL + globalIDCounter)
        heldObjects.push(SEARCH_DISTANCE_VAL + globalIDCounter + "_av")


/*
        var distanceIcon = document.createElement('img');

        distanceIcon.id = SEARCH_DISTANCE_VAL + globalIDCounter
        distanceIcon.style.position = 'absolute'
        distanceIcon.style.left = posFirst['Left'];
        distanceIcon.style.top = posFirst['Top'];
        distanceIcon.style.width = posFirst['Width']
        distanceIcon.style.height = posFirst['Height']
        distanceIcon.src = "MeterTest.png"

        if (searchObject['Hotness'] < 0) {
            distanceIcon.src = "MeterL1.png"
        } else if (searchObject["Hotness"] < 1) {
            distanceIcon.src = "MeterL2.png"
        } else if (searchObject["Hotness"] < 2) {
            distanceIcon.src = "MeterL3.png"
        } else if (searchObject["Hotness"] < 3) {
            distanceIcon.src = "MeterL4.png"
        } else {
            distanceIcon.src = "MeterL5.png"
        }

        document.body.appendChild(distanceIcon)
        heldObjects.push(SEARCH_DISTANCE_VAL + globalIDCounter)

*/
        posFirst = offset(screenWidth, screenHeight, SEARCH_DISTANCE_VAL_TEXT, offsetXV, counter * 80 + NAV_TOP_SIZE + NAV_TOP_BOT_SIZE);

        var distanceIcon = document.createElement('img');

        distanceIcon.id = SEARCH_DISTANCE_VAL_TEXT + globalIDCounter
        distanceIcon.style.position = 'absolute'
        distanceIcon.style.left = posFirst['Left'];
        distanceIcon.style.top = posFirst['Top'];
        distanceIcon.style.width = posFirst['Width']
        distanceIcon.style.height = posFirst['Height']

        if (searchObject['Hotness'] < 0) {
            distanceIcon.src = "meter_descriptor_1.png"
        } else if (searchObject["Hotness"] < 1) {
            distanceIcon.src = "meter_descriptor_2.png"
        } else if (searchObject["Hotness"] < 2) {
            distanceIcon.src = "meter_descriptor_3.png"
        } else if (searchObject["Hotness"] < 3) {
            distanceIcon.src = "meter_descriptor_4.png"
        } else {
            distanceIcon.src = "meter_descriptor_5.png"
        }
        document.body.appendChild(distanceIcon)
        heldObjects.push(SEARCH_DISTANCE_VAL_TEXT + globalIDCounter)




    }



}

function generateNotifications(offsetXV) {




    for (var counter = 0; counter < allNotification.length; counter++) {

        var posFirst = offset(screenWidth, screenHeight, NOTIFICATION_CELL, offsetXV, counter * 80 + NAV_TOP_SIZE);

        var notificationCell = document.createElement('div');

        notificationCell.id = NOTIFICATION_CELL + counter
        notificationCell.style.position = 'absolute'
        notificationCell.style.left = posFirst['Left'];
        notificationCell.style.top = posFirst['Top'];
        notificationCell.style.width = posFirst['Width']
        notificationCell.style.height = posFirst['Height']
        notificationCell.style.borderBottomStyle = "solid"
        notificationCell.style.borderBottomWidth = "thin"
        notificationCell.style.borderRadius = 1
        document.body.appendChild(notificationCell)
        heldObjects.push(NOTIFICATION_CELL + counter)


        posFirst = offset(screenWidth, screenHeight, NOTIFICATION_ICON, offsetXV, counter * 80 + NAV_TOP_SIZE);

        var notificationIcon = document.createElement('img');

        notificationIcon.id = NOTIFICATION_ICON + counter
        notificationIcon.style.position = 'absolute'
        notificationIcon.style.left = posFirst['Left'];
        notificationIcon.style.top = posFirst['Top'];
        notificationIcon.style.width = posFirst['Width']
        notificationIcon.style.height = posFirst['Height']
        notificationIcon.src = "VenueImage.png"
        document.body.appendChild(notificationIcon)
        heldObjects.push(NOTIFICATION_ICON + counter)

        posFirst = offset(screenWidth, screenHeight, NOTIFICATION_TEXT, offsetXV, counter * 80 + NAV_TOP_SIZE);

        var notificationText = document.createElement('div');

        notificationText.id = NOTIFICATION_TEXT + counter
        notificationText.style.position = 'absolute'
        notificationText.style.left = posFirst['Left'];
        notificationText.style.top = posFirst['Top'];
        notificationText.style.width = posFirst['Width']
        notificationText.style.height = posFirst['Height']
        notificationText.style.display = "inline"
        notificationText.src = "VenueImage.png"
        notificationText.innerHTML = "<span id='PlaceName'>Singing Sands </span><span id='NoteText'>Invited to go to Hot Location</span><span id='Time'> 10 hours ago</span>"
        document.body.appendChild(notificationText)
        heldObjects.push(NOTIFICATION_TEXT + counter)

    }



}


function postUser() {

  $.ajax({
    type: 'POST',
    url: "/CreateUser",
    data: {
        user:userID,
        name: graphInfo['first_name'] +" " +graphInfo['last_name'],
        birthday: graphInfo['birthday'],
        url:  userImage
    },
  }).done(function(data) {

    graphInfo['createDate']=data['createDate']
    graphInfo['age']=data['age']
  })




}
