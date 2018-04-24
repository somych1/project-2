//GET  /v2/theatres/610/showtimes

module.exports = {
  "pageSize": 10,
  "pageNumber": 1,
  "count": 1035,
  "lastUpdatedDateUtc": "2017-02-09T11:01:48Z",
  "_links": {
    "self": {
      "href": "http://api.homeoffice.amc.corp/v2/theatres/610/showtimes?page-number=1&page-size=10",
      "templated": false
    },
    "next": {
      "href": "http://api.homeoffice.amc.corp/v2/theatres/610/showtimes?page-number=2&page-size=10",
      "templated": false
    }
  },
  "_embedded": {
    "showtimes": [
      {
        "id": 52550358,
        "internalReleaseNumber": 57459,
        "performanceNumber": 92419,
        "movieId": 47041,
        "movieName": "The Great Wall",
        "sortableMovieName": "Great Wall, The",
        "genre": "ACTION",
        "showDateTimeUtc": "2017-02-24T16:00:00Z",
        "showDateTimeLocal": "2017-02-24T10:00:00",
        "sellUntilDateTimeUtc": "2017-02-24T16:10:00Z",
        "isSoldOut": false,
        "isAlmostSoldOut": false,
        "isCanceled": false,
        "utcOffset": "-06:00",
        "theatreId": 610,
        "auditorium": 14,
        "layoutId": 10,
        "layoutVersionNumber": 1,
        "runTime": 103,
        "mpaaRating": "PG13",
        "premiumFormat": "IMAX 3D",
        "purchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52550358",
        "mobilePurchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52550358",
        "movieUrl": "https://www.amctheatres.com/movies/the-great-wall",
        "wwmReleaseNumber": 235575,
        "lastUpdatedDateUtc": "2017-02-09T11:01:48Z",
        "attributes": [
          {
            "code": "RESERVEDSEATING",
            "name": "Reserved Seating",
            "description": "Select your seat when you buy your tickets online, on our mobile app or at the theatre."
          },
          {
            "code": "IMAX3D",
            "name": "IMAX 3D"
          }
        ],
        "ticketPrices": [
          {
            "price": 10.37,
            "type": "ADULT",
            "sku": "TICKET-RS-52550358-ADULT",
            "tax": 0.88
          },
          {
            "price": 10.37,
            "type": "CHILD",
            "sku": "TICKET-RS-52550358-CHILD",
            "agePolicy": "Age 2-12",
            "tax": 0.88
          },
          {
            "price": 10.37,
            "type": "SENIOR",
            "sku": "TICKET-RS-52550358-SENIOR",
            "agePolicy": "Age 60+",
            "tax": 0.88
          }
        ],
        "media": {
          "heroDesktopDynamic": "https://cdn.amctheatres.com/production/2/movies/47000/47041/MovieStills/26553.jpg",
          "heroMobileDynamic": "",
          "posterDynamic": "https://cdn.amctheatres.com/production/2/movies/47000/47041/Poster/218071R1.JPG",
          "posterAlternateDynamic": "",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "",
          "trailerTeaserDynamic": "",
          "trailerAlternateDynamic": ""
        },
        "languages": {
          "spoken": "English"
        },
        "_links": {
          "self": {
            "href": "http://api.homeoffice.amc.corp/v2/showtimes/52550358",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/movie": {
            "href": "http://api.homeoffice.amc.corp/v2/movies/47041",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/theatre": {
            "href": "http://api.homeoffice.amc.corp/v2/theatres/610",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v1/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v1/seating-layouts/610/92419",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v2/seating-layouts/610/92419",
            "templated": false
          }
        }
      },
      {
        "id": 52531057,
        "internalReleaseNumber": 57107,
        "performanceNumber": 92312,
        "movieId": 48505,
        "movieName": "Split",
        "sortableMovieName": "Split",
        "genre": "SUSPENSE",
        "showDateTimeUtc": "2017-02-24T16:00:00Z",
        "showDateTimeLocal": "2017-02-24T10:00:00",
        "sellUntilDateTimeUtc": "2017-02-24T16:10:00Z",
        "isSoldOut": false,
        "isAlmostSoldOut": false,
        "isCanceled": false,
        "utcOffset": "-06:00",
        "theatreId": 610,
        "auditorium": 10,
        "layoutId": 11,
        "layoutVersionNumber": 1,
        "runTime": 117,
        "mpaaRating": "PG13",
        "premiumFormat": "",
        "purchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52531057",
        "mobilePurchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52531057",
        "movieUrl": "https://www.amctheatres.com/movies/split",
        "wwmReleaseNumber": 221332,
        "lastUpdatedDateUtc": "2017-02-09T11:01:48Z",
        "attributes": [
          {
            "code": "ADULTS18ANDOVERONLY",
            "name": "Adults 18 and Over only",
            "description": "Only adults 18 and over are allowed in Cinema Suites auditoriums."
          },
          {
            "code": "RECLINERSEATING",
            "name": "Premium Power Recliners",
            "description": "This auditorium has recliner seats."
          },
          {
            "code": "DINEINSEATSIDESERVICE",
            "name": "Dine-In Full Service",
            "description": "The perfect way to experience dinner and a movie.  Reserve your seat and enjoy a made-from-scratch menu prepared fresh by our chefs, plus a full bar.  Just push the service button at your seat to order."
          },
          {
            "code": "RESERVEDSEATING",
            "name": "Reserved Seating",
            "description": "Select your seat when you buy your tickets online, on our mobile app or at the theatre."
          },
          {
            "code": "DESCRIPTIVEVIDEO",
            "name": "Audio Description",
            "description": "Audio Description."
          },
          {
            "code": "CLOSEDCAPTION",
            "name": "Closed Caption",
            "description": "Closed Caption"
          }
        ],
        "ticketPrices": [
          {
            "price": 6,
            "type": "ADULT",
            "sku": "TICKET-RS-52531057-ADULT",
            "tax": 0.51
          },
          {
            "price": 6,
            "type": "SENIOR",
            "sku": "TICKET-RS-52531057-SENIOR",
            "agePolicy": "Age 60+",
            "tax": 0.51
          }
        ],
        "media": {
          "heroDesktopDynamic": "https://cdn.amctheatres.com/production/2/movies/48500/48505/MovieStills/26722.jpg",
          "heroMobileDynamic": "",
          "posterDynamic": "https://cdn.amctheatres.com/production/2/movies/48500/48505/MovieStills/24647.jpg",
          "posterAlternateDynamic": "",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "",
          "trailerTeaserDynamic": "",
          "trailerAlternateDynamic": ""
        },
        "languages": {
          "spoken": "English"
        },
        "_links": {
          "self": {
            "href": "http://api.homeoffice.amc.corp/v2/showtimes/52531057",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/movie": {
            "href": "http://api.homeoffice.amc.corp/v2/movies/48505",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/theatre": {
            "href": "http://api.homeoffice.amc.corp/v2/theatres/610",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v1/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v1/seating-layouts/610/92312",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v2/seating-layouts/610/92312",
            "templated": false
          }
        }
      },
      {
        "id": 52554461,
        "internalReleaseNumber": 57177,
        "performanceNumber": 92492,
        "movieId": 51510,
        "movieName": "The Red Turtle",
        "sortableMovieName": "Red Turtle, The",
        "genre": "ANIMATION",
        "showDateTimeUtc": "2017-02-24T16:00:00Z",
        "showDateTimeLocal": "2017-02-24T10:00:00",
        "sellUntilDateTimeUtc": "2017-02-24T16:10:00Z",
        "isSoldOut": false,
        "isAlmostSoldOut": false,
        "isCanceled": false,
        "utcOffset": "-06:00",
        "theatreId": 610,
        "auditorium": 30,
        "layoutId": 12,
        "layoutVersionNumber": 1,
        "runTime": 80,
        "mpaaRating": "PG",
        "premiumFormat": "",
        "purchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52554461",
        "mobilePurchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52554461",
        "movieUrl": "https://www.amctheatres.com/movies/the-red-turtle",
        "wwmReleaseNumber": 231342,
        "lastUpdatedDateUtc": "2017-02-09T11:01:48Z",
        "attributes": [
          {
            "code": "RESERVEDSEATING",
            "name": "Reserved Seating",
            "description": "Select your seat when you buy your tickets online, on our mobile app or at the theatre."
          },
          {
            "code": "AMCINDEPENDENT",
            "name": "AMC independent",
            "description": "AMC independent identifies a Title sourced outside of normal distribution channels."
          },
          {
            "code": "DESCRIPTIVEVIDEO",
            "name": "Audio Description",
            "description": "Audio Description."
          },
          {
            "code": "CLOSEDCAPTION",
            "name": "Closed Caption",
            "description": "Closed Caption"
          }
        ],
        "ticketPrices": [
          {
            "price": 4.9,
            "type": "ADULT",
            "sku": "TICKET-RS-52554461-ADULT",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "CHILD",
            "sku": "TICKET-RS-52554461-CHILD",
            "agePolicy": "Age 2-12",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "SENIOR",
            "sku": "TICKET-RS-52554461-SENIOR",
            "agePolicy": "Age 60+",
            "tax": 0.41
          }
        ],
        "media": {
          "heroDesktopDynamic": "",
          "heroMobileDynamic": "",
          "posterDynamic": "https://cdn.amctheatres.com/production/2/movies/51500/51510/MovieStills/24865.jpg",
          "posterAlternateDynamic": "",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "",
          "trailerTeaserDynamic": "",
          "trailerAlternateDynamic": ""
        },
        "languages": {
          "spoken": "English"
        },
        "_links": {
          "self": {
            "href": "http://api.homeoffice.amc.corp/v2/showtimes/52554461",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/movie": {
            "href": "http://api.homeoffice.amc.corp/v2/movies/51510",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/theatre": {
            "href": "http://api.homeoffice.amc.corp/v2/theatres/610",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v1/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v1/seating-layouts/610/92492",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v2/seating-layouts/610/92492",
            "templated": false
          }
        }
      },
      {
        "id": 52554420,
        "internalReleaseNumber": 57466,
        "performanceNumber": 92451,
        "movieId": 50648,
        "movieName": "Fist Fight",
        "sortableMovieName": "Fist Fight",
        "genre": "COMEDY",
        "showDateTimeUtc": "2017-02-24T16:10:00Z",
        "showDateTimeLocal": "2017-02-24T10:10:00",
        "sellUntilDateTimeUtc": "2017-02-24T16:20:00Z",
        "isSoldOut": false,
        "isAlmostSoldOut": false,
        "isCanceled": false,
        "utcOffset": "-06:00",
        "theatreId": 610,
        "auditorium": 22,
        "layoutId": 13,
        "layoutVersionNumber": 1,
        "runTime": 91,
        "mpaaRating": "R",
        "premiumFormat": "",
        "purchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52554420",
        "mobilePurchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52554420",
        "movieUrl": "https://www.amctheatres.com/movies/fist-fight",
        "wwmReleaseNumber": 225354,
        "lastUpdatedDateUtc": "2017-02-09T11:01:48Z",
        "attributes": [
          {
            "code": "RESERVEDSEATING",
            "name": "Reserved Seating",
            "description": "Select your seat when you buy your tickets online, on our mobile app or at the theatre."
          },
          {
            "code": "DESCRIPTIVEVIDEO",
            "name": "Audio Description",
            "description": "Audio Description."
          },
          {
            "code": "CLOSEDCAPTION",
            "name": "Closed Caption",
            "description": "Closed Caption"
          }
        ],
        "ticketPrices": [
          {
            "price": 4.9,
            "type": "ADULT",
            "sku": "TICKET-RS-52554420-ADULT",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "CHILD",
            "sku": "TICKET-RS-52554420-CHILD",
            "agePolicy": "Age 2-12",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "SENIOR",
            "sku": "TICKET-RS-52554420-SENIOR",
            "agePolicy": "Age 60+",
            "tax": 0.41
          }
        ],
        "media": {
          "heroDesktopDynamic": "https://cdn.amctheatres.com/production/2/movies/50600/50648/MovieStills/26288.jpg",
          "heroMobileDynamic": "",
          "posterDynamic": "https://cdn.amctheatres.com/production/2/movies/50600/50648/MovieStills/26851.jpg",
          "posterAlternateDynamic": "",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "",
          "trailerTeaserDynamic": "",
          "trailerAlternateDynamic": ""
        },
        "languages": {
          "spoken": "English"
        },
        "_links": {
          "self": {
            "href": "http://api.homeoffice.amc.corp/v2/showtimes/52554420",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/movie": {
            "href": "http://api.homeoffice.amc.corp/v2/movies/50648",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/theatre": {
            "href": "http://api.homeoffice.amc.corp/v2/theatres/610",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v1/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v1/seating-layouts/610/92451",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v2/seating-layouts/610/92451",
            "templated": false
          }
        }
      },
      {
        "id": 52564276,
        "internalReleaseNumber": 56924,
        "performanceNumber": 92495,
        "movieId": 51148,
        "movieName": "Elle",
        "sortableMovieName": "Elle",
        "genre": "DRAMA",
        "showDateTimeUtc": "2017-02-24T16:10:00Z",
        "showDateTimeLocal": "2017-02-24T10:10:00",
        "sellUntilDateTimeUtc": "2017-02-24T16:20:00Z",
        "isSoldOut": false,
        "isAlmostSoldOut": false,
        "isCanceled": false,
        "utcOffset": "-06:00",
        "theatreId": 610,
        "auditorium": 18,
        "layoutId": 14,
        "layoutVersionNumber": 1,
        "runTime": 131,
        "mpaaRating": "R",
        "premiumFormat": "",
        "purchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52564276",
        "mobilePurchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52564276",
        "movieUrl": "https://www.amctheatres.com/movies/elle",
        "wwmReleaseNumber": 231497,
        "lastUpdatedDateUtc": "2017-02-09T11:01:48Z",
        "attributes": [
          {
            "code": "RESERVEDSEATING",
            "name": "Reserved Seating",
            "description": "Select your seat when you buy your tickets online, on our mobile app or at the theatre."
          },
          {
            "code": "AMCINDEPENDENT",
            "name": "AMC independent",
            "description": "AMC independent identifies a Title sourced outside of normal distribution channels."
          }
        ],
        "ticketPrices": [
          {
            "price": 4.9,
            "type": "ADULT",
            "sku": "TICKET-RS-52564276-ADULT",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "CHILD",
            "sku": "TICKET-RS-52564276-CHILD",
            "agePolicy": "Age 2-12",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "SENIOR",
            "sku": "TICKET-RS-52564276-SENIOR",
            "agePolicy": "Age 60+",
            "tax": 0.41
          }
        ],
        "media": {
          "heroDesktopDynamic": "",
          "heroMobileDynamic": "",
          "posterDynamic": "https://cdn.amctheatres.com/production/2/movies/51100/51148/Poster/231497R1.JPG",
          "posterAlternateDynamic": "",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "",
          "trailerTeaserDynamic": "",
          "trailerAlternateDynamic": ""
        },
        "languages": {
          "spoken": "English"
        },
        "_links": {
          "self": {
            "href": "http://api.homeoffice.amc.corp/v2/showtimes/52564276",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/movie": {
            "href": "http://api.homeoffice.amc.corp/v2/movies/51148",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/theatre": {
            "href": "http://api.homeoffice.amc.corp/v2/theatres/610",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v1/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v1/seating-layouts/610/92495",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v2/seating-layouts/610/92495",
            "templated": false
          }
        }
      },
      {
        "id": 52531040,
        "internalReleaseNumber": 57343,
        "performanceNumber": 92295,
        "movieId": 44762,
        "movieName": "The Lego Batman Movie",
        "sortableMovieName": "Lego Batman Movie, The",
        "genre": "ANIMATION",
        "showDateTimeUtc": "2017-02-24T16:15:00Z",
        "showDateTimeLocal": "2017-02-24T10:15:00",
        "sellUntilDateTimeUtc": "2017-02-24T16:25:00Z",
        "isSoldOut": false,
        "isAlmostSoldOut": false,
        "isCanceled": false,
        "utcOffset": "-06:00",
        "theatreId": 610,
        "auditorium": 6,
        "layoutId": 15,
        "layoutVersionNumber": 1,
        "runTime": 105,
        "mpaaRating": "PG",
        "premiumFormat": "",
        "purchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52531040",
        "mobilePurchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52531040",
        "movieUrl": "https://www.amctheatres.com/movies/the-lego-batman-movie",
        "wwmReleaseNumber": 209280,
        "lastUpdatedDateUtc": "2017-02-09T11:01:48Z",
        "attributes": [
          {
            "code": "DINEINSEATSIDESERVICE",
            "name": "Dine-In Full Service",
            "description": "The perfect way to experience dinner and a movie.  Reserve your seat and enjoy a made-from-scratch menu prepared fresh by our chefs, plus a full bar.  Just push the service button at your seat to order."
          },
          {
            "code": "RESERVEDSEATING",
            "name": "Reserved Seating",
            "description": "Select your seat when you buy your tickets online, on our mobile app or at the theatre."
          },
          {
            "code": "DESCRIPTIVEVIDEO",
            "name": "Audio Description",
            "description": "Audio Description."
          },
          {
            "code": "CLOSEDCAPTION",
            "name": "Closed Caption",
            "description": "Closed Caption"
          }
        ],
        "ticketPrices": [
          {
            "price": 4.9,
            "type": "ADULT",
            "sku": "TICKET-RS-52531040-ADULT",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "CHILD",
            "sku": "TICKET-RS-52531040-CHILD",
            "agePolicy": "Age 2-12",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "SENIOR",
            "sku": "TICKET-RS-52531040-SENIOR",
            "agePolicy": "Age 60+",
            "tax": 0.41
          }
        ],
        "media": {
          "heroDesktopDynamic": "https://cdn.amctheatres.com/production/2/movies/44800/44762/MovieStills/25892.jpg",
          "heroMobileDynamic": "",
          "posterDynamic": "https://cdn.amctheatres.com/production/2/movies/44800/44762/MovieStills/26678.jpg",
          "posterAlternateDynamic": "",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "",
          "trailerTeaserDynamic": "",
          "trailerAlternateDynamic": ""
        },
        "languages": {
          "spoken": "English"
        },
        "_links": {
          "self": {
            "href": "http://api.homeoffice.amc.corp/v2/showtimes/52531040",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/movie": {
            "href": "http://api.homeoffice.amc.corp/v2/movies/44762",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/theatre": {
            "href": "http://api.homeoffice.amc.corp/v2/theatres/610",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v1/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v1/seating-layouts/610/92295",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v2/seating-layouts/610/92295",
            "templated": false
          }
        }
      },
      {
        "id": 52554405,
        "internalReleaseNumber": 56409,
        "performanceNumber": 92436,
        "movieId": 43025,
        "movieName": "Moana",
        "sortableMovieName": "Moana",
        "genre": "ANIMATION",
        "showDateTimeUtc": "2017-02-24T16:30:00Z",
        "showDateTimeLocal": "2017-02-24T10:30:00",
        "sellUntilDateTimeUtc": "2017-02-24T16:40:00Z",
        "isSoldOut": false,
        "isAlmostSoldOut": false,
        "isCanceled": false,
        "utcOffset": "-06:00",
        "theatreId": 610,
        "auditorium": 19,
        "layoutId": 16,
        "layoutVersionNumber": 1,
        "runTime": 113,
        "mpaaRating": "PG",
        "premiumFormat": "",
        "purchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52554405",
        "mobilePurchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52554405",
        "movieUrl": "https://www.amctheatres.com/movies/moana",
        "wwmReleaseNumber": 164751,
        "lastUpdatedDateUtc": "2017-02-09T11:01:48Z",
        "attributes": [
          {
            "code": "RESERVEDSEATING",
            "name": "Reserved Seating",
            "description": "Select your seat when you buy your tickets online, on our mobile app or at the theatre."
          },
          {
            "code": "NOGREENRED",
            "name": "No Green or Red Tickets",
            "description": "No green or red tickets accepted for feature presentation."
          },
          {
            "code": "DESCRIPTIVEVIDEO",
            "name": "Audio Description",
            "description": "Audio Description."
          },
          {
            "code": "CLOSEDCAPTION",
            "name": "Closed Caption",
            "description": "Closed Caption"
          }
        ],
        "ticketPrices": [
          {
            "price": 4.9,
            "type": "ADULT",
            "sku": "TICKET-RS-52554405-ADULT",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "CHILD",
            "sku": "TICKET-RS-52554405-CHILD",
            "agePolicy": "Age 2-12",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "SENIOR",
            "sku": "TICKET-RS-52554405-SENIOR",
            "agePolicy": "Age 60+",
            "tax": 0.41
          }
        ],
        "media": {
          "heroDesktopDynamic": "https://cdn.amctheatres.com/titles/images/Hero/43025/Moana_Hero.jpg",
          "heroMobileDynamic": "",
          "posterDynamic": "https://cdn.amctheatres.com/production/2/movies/43000/43025/Poster/164751R1.JPG",
          "posterAlternateDynamic": "",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "",
          "trailerTeaserDynamic": "",
          "trailerAlternateDynamic": ""
        },
        "languages": {
          "spoken": "English"
        },
        "_links": {
          "self": {
            "href": "http://api.homeoffice.amc.corp/v2/showtimes/52554405",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/movie": {
            "href": "http://api.homeoffice.amc.corp/v2/movies/43025",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/theatre": {
            "href": "http://api.homeoffice.amc.corp/v2/theatres/610",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v1/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v1/seating-layouts/610/92436",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v2/seating-layouts/610/92436",
            "templated": false
          }
        }
      },
      {
        "id": 52550368,
        "internalReleaseNumber": 57143,
        "performanceNumber": 92429,
        "movieId": 48158,
        "movieName": "Fifty Shades Darker",
        "sortableMovieName": "Fifty Shades Darker",
        "genre": "DRAMA",
        "showDateTimeUtc": "2017-02-24T16:30:00Z",
        "showDateTimeLocal": "2017-02-24T10:30:00",
        "sellUntilDateTimeUtc": "2017-02-24T16:40:00Z",
        "isSoldOut": false,
        "isAlmostSoldOut": false,
        "isCanceled": false,
        "utcOffset": "-06:00",
        "theatreId": 610,
        "auditorium": 17,
        "layoutId": 17,
        "layoutVersionNumber": 1,
        "runTime": 120,
        "mpaaRating": "R",
        "premiumFormat": "",
        "purchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52550368",
        "mobilePurchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52550368",
        "movieUrl": "https://www.amctheatres.com/movies/fifty-shades-darker",
        "wwmReleaseNumber": 209336,
        "lastUpdatedDateUtc": "2017-02-09T11:01:48Z",
        "attributes": [
          {
            "code": "RESERVEDSEATING",
            "name": "Reserved Seating",
            "description": "Select your seat when you buy your tickets online, on our mobile app or at the theatre."
          },
          {
            "code": "DESCRIPTIVEVIDEO",
            "name": "Audio Description",
            "description": "Audio Description."
          },
          {
            "code": "CLOSEDCAPTION",
            "name": "Closed Caption",
            "description": "Closed Caption"
          }
        ],
        "ticketPrices": [
          {
            "price": 4.9,
            "type": "ADULT",
            "sku": "TICKET-RS-52550368-ADULT",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "CHILD",
            "sku": "TICKET-RS-52550368-CHILD",
            "agePolicy": "Age 2-12",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "SENIOR",
            "sku": "TICKET-RS-52550368-SENIOR",
            "agePolicy": "Age 60+",
            "tax": 0.41
          }
        ],
        "media": {
          "heroDesktopDynamic": "https://cdn.amctheatres.com/production/2/movies/48200/48158/MovieStills/26338.jpg",
          "heroMobileDynamic": "",
          "posterDynamic": "https://cdn.amctheatres.com/production/2/movies/48200/48158/Poster/209336R1.JPG",
          "posterAlternateDynamic": "",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "",
          "trailerTeaserDynamic": "",
          "trailerAlternateDynamic": ""
        },
        "languages": {
          "spoken": "English"
        },
        "_links": {
          "self": {
            "href": "http://api.homeoffice.amc.corp/v2/showtimes/52550368",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/movie": {
            "href": "http://api.homeoffice.amc.corp/v2/movies/48158",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/theatre": {
            "href": "http://api.homeoffice.amc.corp/v2/theatres/610",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v1/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v1/seating-layouts/610/92429",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v2/seating-layouts/610/92429",
            "templated": false
          }
        }
      },
      {
        "id": 52531030,
        "internalReleaseNumber": 56120,
        "performanceNumber": 92285,
        "movieId": 48198,
        "movieName": "La La Land",
        "sortableMovieName": "La La Land",
        "genre": "MUSICAL",
        "showDateTimeUtc": "2017-02-24T16:30:00Z",
        "showDateTimeLocal": "2017-02-24T10:30:00",
        "sellUntilDateTimeUtc": "2017-02-24T16:40:00Z",
        "isSoldOut": false,
        "isAlmostSoldOut": false,
        "isCanceled": false,
        "utcOffset": "-06:00",
        "theatreId": 610,
        "auditorium": 4,
        "layoutId": 18,
        "layoutVersionNumber": 1,
        "runTime": 128,
        "mpaaRating": "PG13",
        "premiumFormat": "",
        "purchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52531030",
        "mobilePurchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52531030",
        "movieUrl": "https://www.amctheatres.com/movies/la-la-land",
        "wwmReleaseNumber": 209869,
        "lastUpdatedDateUtc": "2017-02-09T11:01:48Z",
        "attributes": [
          {
            "code": "DINEINSEATSIDESERVICE",
            "name": "Dine-In Full Service",
            "description": "The perfect way to experience dinner and a movie.  Reserve your seat and enjoy a made-from-scratch menu prepared fresh by our chefs, plus a full bar.  Just push the service button at your seat to order."
          },
          {
            "code": "RESERVEDSEATING",
            "name": "Reserved Seating",
            "description": "Select your seat when you buy your tickets online, on our mobile app or at the theatre."
          },
          {
            "code": "AMCINDEPENDENT",
            "name": "AMC independent",
            "description": "AMC independent identifies a Title sourced outside of normal distribution channels."
          },
          {
            "code": "DESCRIPTIVEVIDEO",
            "name": "Audio Description",
            "description": "Audio Description."
          },
          {
            "code": "CLOSEDCAPTION",
            "name": "Closed Caption",
            "description": "Closed Caption"
          }
        ],
        "ticketPrices": [
          {
            "price": 4.9,
            "type": "ADULT",
            "sku": "TICKET-RS-52531030-ADULT",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "CHILD",
            "sku": "TICKET-RS-52531030-CHILD",
            "agePolicy": "Age 2-12",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "SENIOR",
            "sku": "TICKET-RS-52531030-SENIOR",
            "agePolicy": "Age 60+",
            "tax": 0.41
          }
        ],
        "media": {
          "heroDesktopDynamic": "https://cdn.amctheatres.com/titles/images/Hero/48198/lalaland_hero.jpg",
          "heroMobileDynamic": "",
          "posterDynamic": "https://cdn.amctheatres.com/production/2/movies/48200/48198/Poster/209869R1.JPG",
          "posterAlternateDynamic": "",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "",
          "trailerTeaserDynamic": "",
          "trailerAlternateDynamic": ""
        },
        "languages": {
          "spoken": "English"
        },
        "_links": {
          "self": {
            "href": "http://api.homeoffice.amc.corp/v2/showtimes/52531030",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/movie": {
            "href": "http://api.homeoffice.amc.corp/v2/movies/48198",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/theatre": {
            "href": "http://api.homeoffice.amc.corp/v2/theatres/610",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v1/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v1/seating-layouts/610/92285",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v2/seating-layouts/610/92285",
            "templated": false
          }
        }
      },
      {
        "id": 52554455,
        "internalReleaseNumber": 57119,
        "performanceNumber": 92486,
        "movieId": 50200,
        "movieName": "A Dog's Purpose",
        "sortableMovieName": "Dog's Purpose, A",
        "genre": "COMEDY",
        "showDateTimeUtc": "2017-02-24T16:30:00Z",
        "showDateTimeLocal": "2017-02-24T10:30:00",
        "sellUntilDateTimeUtc": "2017-02-24T16:40:00Z",
        "isSoldOut": false,
        "isAlmostSoldOut": false,
        "isCanceled": false,
        "utcOffset": "-06:00",
        "theatreId": 610,
        "auditorium": 29,
        "layoutId": 19,
        "layoutVersionNumber": 1,
        "runTime": 100,
        "mpaaRating": "PG",
        "premiumFormat": "",
        "purchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52554455",
        "mobilePurchaseUrl": "https://www.amctheatres.com/showtimes/all/2017-02-24/studio/all/52554455",
        "movieUrl": "https://www.amctheatres.com/movies/a-dog-s-purpose",
        "wwmReleaseNumber": 226073,
        "lastUpdatedDateUtc": "2017-02-09T11:01:48Z",
        "attributes": [
          {
            "code": "RESERVEDSEATING",
            "name": "Reserved Seating",
            "description": "Select your seat when you buy your tickets online, on our mobile app or at the theatre."
          },
          {
            "code": "DESCRIPTIVEVIDEO",
            "name": "Audio Description",
            "description": "Audio Description."
          },
          {
            "code": "CLOSEDCAPTION",
            "name": "Closed Caption",
            "description": "Closed Caption"
          }
        ],
        "ticketPrices": [
          {
            "price": 4.9,
            "type": "ADULT",
            "sku": "TICKET-RS-52554455-ADULT",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "CHILD",
            "sku": "TICKET-RS-52554455-CHILD",
            "agePolicy": "Age 2-12",
            "tax": 0.41
          },
          {
            "price": 4.9,
            "type": "SENIOR",
            "sku": "TICKET-RS-52554455-SENIOR",
            "agePolicy": "Age 60+",
            "tax": 0.41
          }
        ],
        "media": {
          "heroDesktopDynamic": "",
          "heroMobileDynamic": "",
          "posterDynamic": "https://cdn.amctheatres.com/production/2/movies/50200/50200/Poster/226073R1.JPG",
          "posterAlternateDynamic": "",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "",
          "trailerTeaserDynamic": "",
          "trailerAlternateDynamic": ""
        },
        "languages": {
          "spoken": "English"
        },
        "_links": {
          "self": {
            "href": "http://api.homeoffice.amc.corp/v2/showtimes/52554455",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/movie": {
            "href": "http://api.homeoffice.amc.corp/v2/movies/50200",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/theatre": {
            "href": "http://api.homeoffice.amc.corp/v2/theatres/610",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v1/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v1/seating-layouts/610/92486",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/seating-layout": {
            "href": "http://api.homeoffice.amc.corp/v2/seating-layouts/610/92486",
            "templated": false
          }
        }
      }
    ]
  }
}