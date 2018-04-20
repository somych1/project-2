//GET  /v2/movies/?name=batman

module.exports = {
  "pageSize": 10,
  "pageNumber": 1,
  "count": 1,
  "_links": {
    "self": {
      "href": "http://api.amctheatres.com/v2/movies/now",
      "templated": false
    },
    "next": {
      "href": "http://api.amctheatres.com/v2/movies/now?page-number=2&page-size=10",
      "templated": false
    }
  },
  "_embedded": {
    "movies": [
      {
        "id": 13969,
        "name": "Dark Knight, The",
        "sortableName": "The Dark Knight",
        "starringActors": "",
        "directors": "",
        "genre": "Action",
        "mpaaRating": "PG13",
        "wwmReleaseNumber": 55304,
        "runTime": 152,
        "score": 0.0,
        "slug": "the-dark-knight",
        "synopsis": "The Dark Knight' reunites director Christopher Nolan with star Christian Bale, who returns to continue Batman's war on crime. With the help of Lieutenant Jim Gordon (Gary Oldman) and District Attorney Harvey Dent (Aaron Eckhart), Batman sets out to destroy organized crime in Gotham for good. The triumvirate proves to be effective, but they soon find themselves prey to a rising criminal mastermind known as the Joker (Heath Ledger), who thrusts Gotham into anarchy and forces the Dark Knight ever closer to crossing the fine line between hero and vigilante.",
        "synopsisTagLine": "The night is darkest before the dawn.",
        "releaseDateUtc": "2008-07-18T00:00:00Z",
        "earliestShowingUtc": "0001-01-01T00:00:00Z",
        "hasScheduledShowtimes": false,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/the-dark-knight",
        "showtimesUrl": "https://www.amctheatres.com/movies/the-dark-knight/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "http://media.amc.edgesuite.net/m/Posters/05530401.jpg",
          "posterStandard": "http://media.amc.edgesuite.net/m/Posters/055304H1.jpg",
          "posterLarge": "",
          "trailerFlv": "http://media.amc.edgesuite.net/55304_high.flv",
          "trailerHd": "http://media.amc.edgesuite.net/trailers/55304_hd.mov",
          "trailerMp4": "http://media.amc.edgesuite.net/m/Trailers/55304_med.mp4",
          "heroDesktopDynamic": "",
          "heroMobileDynamic": "",
          "posterDynamic": "",
          "posterAlternateDynamic": "",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "",
          "trailerTeaserDynamic": "",
          "trailerAlternateDynamic": ""
        },
        "_links": {
          "self": {
            "href": "http://api.amctheatres.com/v2/movies/13969",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/13969/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/13969/{media-type}",
            "templated": true
          }
        }
      }
    ]
  }
}