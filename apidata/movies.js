// GET  /v2/movies/views/now-playing

module.exports = {
  "pageSize": 10,
  "pageNumber": 1,
  "count": 10,
  "_links": {
    "self": {
      "href": "https://api.amctheatres.com/v2/movies/now",
      "templated": false
    },
    "next": {
      "href": "https://api.amctheatres.com/v2/movies/now?page-number=2&page-size=10",
      "templated": false
    }
  },
  "_embedded": {
    "movies": [
      {
        "id": 40722,
        "name": "One Direction: This Is Us",
        "sortableName": "One Direction Concert Movie",
        "starringActors": "HARRY STYLES, LIAM PAYNE, NIALL HORAN, ZAYN MALIK, LOUIS TOMLINSON",
        "directors": "MORGAN SPURLOCK",
        "genre": "Documentary",
        "mpaaRating": "PG",
        "wwmReleaseNumber": 154051,
        "runTime": 88,
        "score": 0.0190085884,
        "slug": "one-direction-concert-movie",
        "synopsis": "Fly on the wall documentary following the young boy band's rise to fame.",
        "synopsisTagLine": "Experience their lives on the road.",
        "releaseDateUtc": "2013-08-30T00:00:00Z",
        "earliestShowingUtc": "2014-06-05T10:15:00Z",
        "hasScheduledShowtimes": true,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/one-direction-concert-movie",
        "showtimesUrl": "https://www.amctheatres.com/movies/one-direction-concert-movi/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "http://media.amc.edgesuite.net/m/Posters/15405101.jpg",
          "posterStandard": "http://media.amc.edgesuite.net/m/Posters/154051H1.jpg",
          "posterLarge": "",
          "trailerFlv": "http://media.amc.edgesuite.net/154051_high.flv",
          "trailerHd": "http://media.amc.edgesuite.net/trailers/154051_hd.mov",
          "trailerMp4": "http://media.amc.edgesuite.net/m/Trailers/154051_med.mp4",
          "heroDesktopDynamic": "http://media.amc.edgesuite.net/images/177174.jpg",
          "heroMobileDynamic": "http://media.amc.edgesuite.net/m/images/177174.jpg",
          "posterDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "posterAlternateDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "http://media.amc.edgesuite.net/imax/trailers/177174_hd.jpg",
          "trailerTeaserDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "trailerAlternateDynamic": ""
        },
        "_links": {
          "self": {
            "href": "https://api.amctheatres.com/v2/movies/40722",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/40722/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/40722/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 40431,
        "name": "Maleficent",
        "sortableName": "Maleficent",
        "starringActors": "ANGELINA JOLIE",
        "directors": "ROBERT STROMBERG",
        "genre": "Action",
        "mpaaRating": "PG",
        "wwmReleaseNumber": 134965,
        "runTime": 98,
        "score": 0.025281,
        "slug": "maleficent",
        "synopsis": "MALEFICENT explores the untold story of Disney's most iconic villain from the classic 'Sleeping Beauty' and the elements of her betrayal that ultimately turn her pure heart to stone. Driven by revenge and a fierce desire to protect the moors over which she presides, Maleficent cruelly places an irrevocable curse upon the human king's newborn infant Aurora. As the child grows, Aurora is caught in the middle of the seething conflict between the forest kingdom she has grown to love and the human kingdom that holds her legacy. Maleficent realizes that Aurora may hold the key to peace in the land and is forced to take drastic actions that will change both worlds forever.",
        "synopsisTagLine": "Evil has a beginning.",
        "releaseDateUtc": "2014-05-30T00:00:00Z",
        "earliestShowingUtc": "2014-06-05T10:30:00Z",
        "hasScheduledShowtimes": true,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/maleficent",
        "showtimesUrl": "https://www.amctheatres.com/movies/maleficent/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "http://media.amc.edgesuite.net/m/Posters/13496501.jpg",
          "posterStandard": "http://media.amc.edgesuite.net/m/Posters/134965H1.jpg",
          "posterLarge": "",
          "trailerFlv": "http://media.amc.edgesuite.net/134965_high.flv",
          "trailerHd": "http://media.amc.edgesuite.net/trailers/134965_hd.mov",
          "trailerMp4": "http://media.amc.edgesuite.net/m/Trailers/134965_med.mp4",
          "heroDesktopDynamic": "http://media.amc.edgesuite.net/images/177174.jpg",
          "heroMobileDynamic": "http://media.amc.edgesuite.net/m/images/177174.jpg",
          "posterDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "posterAlternateDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "http://media.amc.edgesuite.net/imax/trailers/177174_hd.jpg",
          "trailerTeaserDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "trailerAlternateDynamic": ""
        },
        "_links": {
          "self": {
            "href": "https://api.amctheatres.com/v2/movies/40431",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/40431/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/40431/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 43594,
        "name": "Million Dollar Arm",
        "sortableName": "Million Dollar Arm",
        "starringActors": "JON HAMM",
        "directors": "CRAIG GILLESPIE",
        "genre": "Drama",
        "mpaaRating": "PG",
        "wwmReleaseNumber": 164674,
        "runTime": 124,
        "score": 0.0085,
        "slug": "million-dollar-arm",
        "synopsis": "In a last ditch effort to save his career as a sports agent, JB Bernstein (Jon Hamm) concocts a scheme to find baseball's next great pitching ace. Hoping to find a young cricket pitcher he can turn into a major league baseball star, JB travels to India to produce a reality show competition called 'Million Dollar Arm.' With the help of a cantankerous but eagle-eyed retired baseball scout (Alan Arkin) he discovers Dinesh (played by Madhur Mittal from 'Slumdog Millionaire') and Rinku (played by Suraj Sharma from 'Life of Pi'), two 18 year old boys who have no idea about playing baseball, yet have a knack for throwing a fastball. Hoping to sign them to major league contracts and make a quick buck, JB brings the boys home to America to train. While the Americans are definitely out of their element in India -- the boys, who have never left their rural villages -- are equally challenged when they come to the States. As the boys learn the finer points of baseball -- JB, with the help of his charming friend Brenda (Lake Bell) -- learns valuable life lessons about teamwork, commitment and what it means to be a family.",
        "synopsisTagLine": "From the producers of Invincible and Miracle",
        "releaseDateUtc": "2014-05-16T00:00:00Z",
        "earliestShowingUtc": "2014-06-05T19:30:00Z",
        "hasScheduledShowtimes": true,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/million-dollar-arm",
        "showtimesUrl": "https://www.amctheatres.com/movies/million-dollar-arm/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "http://media.amc.edgesuite.net/m/Posters/16467401.jpg",
          "posterStandard": "http://media.amc.edgesuite.net/m/Posters/164674H1.jpg",
          "posterLarge": "",
          "trailerFlv": "http://media.amc.edgesuite.net/164674_high.flv",
          "trailerHd": "http://media.amc.edgesuite.net/trailers/164674_hd.mov",
          "trailerMp4": "http://media.amc.edgesuite.net/m/Trailers/164674_med.mp4",
          "heroDesktopDynamic": "http://media.amc.edgesuite.net/images/177174.jpg",
          "heroMobileDynamic": "http://media.amc.edgesuite.net/m/images/177174.jpg",
          "posterDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "posterAlternateDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "http://media.amc.edgesuite.net/imax/trailers/177174_hd.jpg",
          "trailerTeaserDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "trailerAlternateDynamic": ""
        },
        "_links": {
          "self": {
            "href": "https://api.amctheatres.com/v2/movies/43594",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/43594/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/43594/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 41653,
        "name": "Getaway",
        "sortableName": "Getaway",
        "starringActors": "",
        "directors": "",
        "genre": "Action",
        "mpaaRating": "PG13",
        "wwmReleaseNumber": 138753,
        "runTime": 90,
        "score": 0.0047932514,
        "slug": "getaway",
        "synopsis": "Ethan Hawke plays Brent Magna, a burned out race car driver who is thrust into a do-or-die mission behind the wheel when his wife is kidnapped. With Brent's only ally a young hacker (Selena Gomez), his one hope of saving his wife is to follow the orders of the mysterious voice (Jon Voight) who's watching his every move through cameras mounted on the car Brent's driving.",
        "synopsisTagLine": "Get in. Get out. Getaway.",
        "releaseDateUtc": "2013-08-30T00:00:00Z",
        "earliestShowingUtc": "2014-06-05T11:45:00Z",
        "hasScheduledShowtimes": true,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/getaway",
        "showtimesUrl": "https://www.amctheatres.com/movies/getaway/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "http://media.amc.edgesuite.net/m/Posters/13875301.jpg",
          "posterStandard": "http://media.amc.edgesuite.net/m/Posters/138753H1.jpg",
          "posterLarge": "",
          "trailerFlv": "http://media.amc.edgesuite.net/138753_high.flv",
          "trailerHd": "http://media.amc.edgesuite.net/trailers/138753_hd.mov",
          "trailerMp4": "http://media.amc.edgesuite.net/m/Trailers/138753_med.mp4",
          "heroDesktopDynamic": "http://media.amc.edgesuite.net/images/177174.jpg",
          "heroMobileDynamic": "http://media.amc.edgesuite.net/m/images/177174.jpg",
          "posterDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "posterAlternateDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "http://media.amc.edgesuite.net/imax/trailers/177174_hd.jpg",
          "trailerTeaserDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "trailerAlternateDynamic": ""
        },
        "_links": {
          "self": {
            "href": "https://api.amctheatres.com/v2/movies/41653",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/41653/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/41653/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 42914,
        "name": "Million Ways To Die In The West, A",
        "sortableName": "A Million Ways To Die In The West",
        "starringActors": "CHARLIZE THERON, SETH MACFARLANE",
        "directors": "SETH MACFARLANE",
        "genre": "Comedy",
        "mpaaRating": "R",
        "wwmReleaseNumber": 163564,
        "runTime": 114,
        "score": 0.0296925,
        "slug": "a-million-ways-to-die-in-the-west",
        "synopsis": "After a cowardly sheep farmer backs out of a gunfight, his fickle girlfriend leaves him for another man.  When a mysterious and beautiful woman rides into town, she helps him find his courage and they begin to fall in love.  But when her husband, a notorious outlaw, arrives seeking revenge, the farmer must put his newfound courage to the test.",
        "synopsisTagLine": "Bring protection",
        "releaseDateUtc": "2014-05-30T00:00:00Z",
        "earliestShowingUtc": "2014-06-05T09:30:00Z",
        "hasScheduledShowtimes": true,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/a-million-ways-to-die-in-the-west",
        "showtimesUrl": "https://www.amctheatres.com/movies/a-million-ways-to-die-in-the-west/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "http://media.amc.edgesuite.net/m/Posters/16356401.jpg",
          "posterStandard": "http://media.amc.edgesuite.net/m/Posters/163564H1.jpg",
          "posterLarge": "",
          "trailerFlv": "http://media.amc.edgesuite.net/163564_high.flv",
          "trailerHd": "http://media.amc.edgesuite.net/trailers/163564_hd.mov",
          "trailerMp4": "http://media.amc.edgesuite.net/m/Trailers/163564_med.mp4",
          "heroDesktopDynamic": "http://media.amc.edgesuite.net/images/177174.jpg",
          "heroMobileDynamic": "http://media.amc.edgesuite.net/m/images/177174.jpg",
          "posterDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "posterAlternateDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "http://media.amc.edgesuite.net/imax/trailers/177174_hd.jpg",
          "trailerTeaserDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "trailerAlternateDynamic": ""
        },
        "_links": {
          "self": {
            "href": "https://api.amctheatres.com/v2/movies/42914",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/42914/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/42914/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 42402,
        "name": "Lee Daniels' The Butler",
        "sortableName": "The Butler",
        "starringActors": "OPRAH WINFREY, TERRENCE HOWARD",
        "directors": "LEE DANIELS",
        "genre": "Drama",
        "mpaaRating": "PG13",
        "wwmReleaseNumber": 142799,
        "runTime": 132,
        "score": 0.0253025194,
        "slug": "the-butler",
        "synopsis": "LEE DANIELS' THE BUTLER tells the story of a White House butler who served seven American presidents over three decades. The film traces the dramatic changes that swept American society during this time, from the civil rights movement to Vietnam and beyond, and how those changes affected this manas life and family. Forest Whitaker stars as the butler with Robin Williams as Dwight Eisenhower, James Marsden as John F. Kennedy, Liev Schreiber as Lyndon B. Johnson, John Cusack as Richard Nixon, Alan Rickman as Ronald Reagan, and many more. Academy Award nominated Lee Daniels (PRECIOUS) directs and Emmy-award winning Danny Strong (GAME CHANGE) wrote the script.",
        "synopsisTagLine": "One quiet voice can ignite a revolution",
        "releaseDateUtc": "2013-08-16T00:00:00Z",
        "earliestShowingUtc": "2014-06-05T12:05:00Z",
        "hasScheduledShowtimes": true,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/the-butler",
        "showtimesUrl": "https://www.amctheatres.com/movies/the-butler/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "http://media.amc.edgesuite.net/m/Posters/14279901.jpg",
          "posterStandard": "http://media.amc.edgesuite.net/m/Posters/142799H1.jpg",
          "posterLarge": "",
          "trailerFlv": "http://media.amc.edgesuite.net/142799_high.flv",
          "trailerHd": "http://media.amc.edgesuite.net/trailers/142799_hd.mov",
          "trailerMp4": "http://media.amc.edgesuite.net/m/Trailers/142799_med.mp4",
          "heroDesktopDynamic": "http://media.amc.edgesuite.net/images/177174.jpg",
          "heroMobileDynamic": "http://media.amc.edgesuite.net/m/images/177174.jpg",
          "posterDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "posterAlternateDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "http://media.amc.edgesuite.net/imax/trailers/177174_hd.jpg",
          "trailerTeaserDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "trailerAlternateDynamic": ""
        },
        "_links": {
          "self": {
            "href": "https://api.amctheatres.com/v2/movies/42402",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/42402/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/42402/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 41539,
        "name": "We're The Millers",
        "sortableName": "We're The Millers",
        "starringActors": "JENNIFER ANISTON, JASON SUDEIKIS",
        "directors": "RAWSON MARSHALL THURBER",
        "genre": "Comedy",
        "mpaaRating": "R",
        "wwmReleaseNumber": 143965,
        "runTime": 110,
        "score": 0.0225225351,
        "slug": "we-re-the-millers",
        "synopsis": "David Burke (Sudeikis) is a small-time pot dealer whose clientele includes chefs and soccer moms, but no kids after all, he has his scruples. So what could go wrong? Plenty. Preferring to keep a low profile for obvious reasons, he learns the hard way that no good deed goes unpunished when he tries to help out some local teens and winds up getting jumped by a trio of gutter punks. Stealing his stash and his cash, they leave him in major debt to his supplier, Brad (Ed Helms). In order to wipe the slate clean and maintain a clean bill of health David must now become a big-time drug smuggler by bringing Brad's latest shipment in from Mexico. Twisting the arms of his neighbors, cynical stripper Rose (Aniston) and wannabe customer Kenny (Will Poulter), and the tatted-and-pierced streetwise teen Casey (Emma Roberts), he devises a foolproof plan. One fake wife, two pretend kids and a huge, shiny RV later, the 'Millers' are headed south of the border for a Fourth of July weekend that is sure to end with a bang.",
        "synopsisTagLine": "-If anyone asks.",
        "releaseDateUtc": "2013-08-07T00:00:00Z",
        "earliestShowingUtc": "2014-06-05T12:00:00Z",
        "hasScheduledShowtimes": true,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/we-re-the-millers",
        "showtimesUrl": "https://www.amctheatres.com/movies/we-re-the-millers/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "http://media.amc.edgesuite.net/m/Posters/14396501.jpg",
          "posterStandard": "http://media.amc.edgesuite.net/m/Posters/143965H1.jpg",
          "posterLarge": "",
          "trailerFlv": "http://media.amc.edgesuite.net/143965_high.flv",
          "trailerHd": "http://media.amc.edgesuite.net/trailers/143965_hd.mov",
          "trailerMp4": "http://media.amc.edgesuite.net/m/Trailers/143965_med.mp4",
          "heroDesktopDynamic": "http://media.amc.edgesuite.net/images/177174.jpg",
          "heroMobileDynamic": "http://media.amc.edgesuite.net/m/images/177174.jpg",
          "posterDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "posterAlternateDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "http://media.amc.edgesuite.net/imax/trailers/177174_hd.jpg",
          "trailerTeaserDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "trailerAlternateDynamic": ""
        },
        "_links": {
          "self": {
            "href": "https://api.amctheatres.com/v2/movies/41539",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/41539/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/41539/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 41639,
        "name": "Closed Circuit",
        "sortableName": "Closed Circuit",
        "starringActors": "",
        "directors": "",
        "genre": "Suspense",
        "mpaaRating": "R",
        "wwmReleaseNumber": 152673,
        "runTime": 96,
        "score": 0.0020951914,
        "slug": "closed-circuit",
        "synopsis": "In this international thriller, two ex-lovers, Martin (Eric Bana of 'Hanna') and Claudia (Golden Globe Award nominee Rebecca Hall), find their loyalties tested and their lives at risk when they are joined together on the defense team in a terrorism trial.",
        "synopsisTagLine": "They see your every move",
        "releaseDateUtc": "2013-08-28T00:00:00Z",
        "earliestShowingUtc": "2014-06-05T12:00:00Z",
        "hasScheduledShowtimes": true,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/closed-circuit",
        "showtimesUrl": "https://www.amctheatres.com/movies/closed-circuit/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "http://media.amc.edgesuite.net/m/Posters/15267301.jpg",
          "posterStandard": "http://media.amc.edgesuite.net/m/Posters/152673H1.jpg",
          "posterLarge": "",
          "trailerFlv": "http://media.amc.edgesuite.net/152673_high.flv",
          "trailerHd": "http://media.amc.edgesuite.net/trailers/152673_hd.mov",
          "trailerMp4": "http://media.amc.edgesuite.net/m/Trailers/152673_med.mp4",
          "heroDesktopDynamic": "http://media.amc.edgesuite.net/images/177174.jpg",
          "heroMobileDynamic": "http://media.amc.edgesuite.net/m/images/177174.jpg",
          "posterDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "posterAlternateDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "http://media.amc.edgesuite.net/imax/trailers/177174_hd.jpg",
          "trailerTeaserDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "trailerAlternateDynamic": ""
        },
        "_links": {
          "self": {
            "href": "https://api.amctheatres.com/v2/movies/41639",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/41639/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/41639/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 40385,
        "name": "Mortal Instruments, The",
        "sortableName": "Mortal Instruments",
        "starringActors": "",
        "directors": "",
        "genre": "Action",
        "mpaaRating": "PG13",
        "wwmReleaseNumber": 134847,
        "runTime": 130,
        "score": 0.0084032613,
        "slug": "mortal-instruments",
        "synopsis": "When her mom is attacked and taken from their home in New York City by a demon, a seemingly ordinary teenage girl, Clary Fray, finds out truths about her past and bloodline on her quest to get her back, that changes her entire life.",
        "synopsisTagLine": "Worlds will collide August 21",
        "releaseDateUtc": "2013-08-21T00:00:00Z",
        "earliestShowingUtc": "2014-06-05T12:00:00Z",
        "hasScheduledShowtimes": true,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/mortal-instruments",
        "showtimesUrl": "https://www.amctheatres.com/movies/mortal-instruments/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "http://media.amc.edgesuite.net/m/Posters/13484701.jpg",
          "posterStandard": "http://media.amc.edgesuite.net/m/Posters/134847H1.jpg",
          "posterLarge": "",
          "trailerFlv": "http://media.amc.edgesuite.net/134847_high.flv",
          "trailerHd": "http://media.amc.edgesuite.net/trailers/134847_hd.mov",
          "trailerMp4": "http://media.amc.edgesuite.net/m/Trailers/134847_med.mp4",
          "heroDesktopDynamic": "http://media.amc.edgesuite.net/images/177174.jpg",
          "heroMobileDynamic": "http://media.amc.edgesuite.net/m/images/177174.jpg",
          "posterDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "posterAlternateDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "http://media.amc.edgesuite.net/imax/trailers/177174_hd.jpg",
          "trailerTeaserDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "trailerAlternateDynamic": ""
        },
        "_links": {
          "self": {
            "href": "https://api.amctheatres.com/v2/movies/40385",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/40385/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/40395/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 41313,
        "name": "You're Next",
        "sortableName": "You're Next",
        "starringActors": "",
        "directors": "",
        "genre": "Horror",
        "mpaaRating": "R",
        "wwmReleaseNumber": 122168,
        "runTime": 95,
        "score": 0.0065603732,
        "slug": "you-re-next",
        "synopsis": "When Crispian Davison (Bowen) brings his new girlfriend (Vinson) along to celebrate the wedding anniversary of his parents (Moran and Crampton), the family's evening together is shattered when a gang of mysterious killers begin to hunt the family down with brutal precision.  However, unfortunately for the killers, one of the victims harbors a secret talent for fighting back.",
        "synopsisTagLine": "Don't bother locking the doors. Animals don't use doors.",
        "releaseDateUtc": "2013-08-23T00:00:00Z",
        "earliestShowingUtc": "2014-06-05T11:30:00Z",
        "hasScheduledShowtimes": true,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/you-re-next",
        "showtimesUrl": "https://www.amctheatres.com/movies/you-re-next/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "http://media.amc.edgesuite.net/m/Posters/12216801.jpg",
          "posterStandard": "http://media.amc.edgesuite.net/m/Posters/122168H1.jpg",
          "posterLarge": "",
          "trailerFlv": "http://media.amc.edgesuite.net/122168_high.flv",
          "trailerHd": "http://media.amc.edgesuite.net/trailers/122168_hd.mov",
          "trailerMp4": "http://media.amc.edgesuite.net/m/Trailers/122168_med.mp4",
          "heroDesktopDynamic": "http://media.amc.edgesuite.net/images/177174.jpg",
          "heroMobileDynamic": "http://media.amc.edgesuite.net/m/images/177174.jpg",
          "posterDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "posterAlternateDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "poster3DDynamic": "",
          "posterIMAXDynamic": "http://media.amc.edgesuite.net/imax/trailers/177174_hd.jpg",
          "trailerTeaserDynamic": "http://media.amc.edgesuite.net/posters/177174_hd.jpg",
          "trailerAlternateDynamic": ""
        },
        "_links": {
          "self": {
            "href": "https://api.amctheatres.com/v2/movies/41313",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/41313/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/41313/{media-type}",
            "templated": true
          }
        }
      }
    ]
  }
}