// GET  /v2/movies/views/coming-soon

module.exports = {
  "pageSize": 10,
  "pageNumber": 1,
  "count": 10,
  "_links": {
    "self": {
      "href": "https://api.amctheatres.com/v2/movies/coming-soon",
      "templated": false
    },
    "next": {
      "href": "https://api.amctheatres.com/v2/movies/coming-soon?page-number=2&page-size=10",
      "templated": false
    }
  },
  "_embedded": {
    "movies": [
      {
        "id": 6850,
        "name": "Summer's Tale, A",
        "sortableName": "A Summer's Tale",
        "starringActors": "",
        "directors": "",
        "genre": "Romantic Comedy",
        "wwmReleaseNumber": 0,
        "score": 0.0,
        "slug": "a-summer-s-tale",
        "releaseDateUtc": "2014-06-20T00:00:00Z",
        "earliestShowingUtc": "0001-01-01T00:00:00Z",
        "hasScheduledShowtimes": false,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/a-summer-s-tale",
        "showtimesUrl": "https://www.amctheatres.com/movies/a-summer-s-tale/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "",
          "posterStandard": "",
          "posterLarge": "",
          "trailerFlv": "",
          "trailerHd": "",
          "trailerMp4": "",
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
            "href": "https://api.amctheatres.com/v2/movies/6850",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/6850/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/6850/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 39000,
        "name": "Guardians Of The Galaxy",
        "sortableName": "Guardians Of The Galaxy",
        "starringActors": "",
        "directors": "",
        "genre": "Action",
        "wwmReleaseNumber": 0,
        "score": 0.05149375,
        "slug": "guardians-of-the-galaxy",
        "synopsis": "An action-packed, epic space adventure, Marvel's 'Guardians of the Galaxy' expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitious that threaten the entire universe.  To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits-Rocket, a gun-toting raccoon, Groot, a tree-like humanoid, the deadly and enigmatic Gamora and the revenge-driven humanoid, the deadly and enigmatic Gamora and the revenge-driven Drax the Destroyer.  But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand-with the galaxy's fate in the balance.",
        "synopsisTagLine": "When things get bad, they'll do their worst.",
        "releaseDateUtc": "2014-08-01T00:00:00Z",
        "earliestShowingUtc": "0001-01-01T00:00:00Z",
        "hasScheduledShowtimes": false,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/guardians-of-the-galaxy",
        "showtimesUrl": "https://www.amctheatres.com/movies/guardians-of-the-galaxy/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "",
          "posterStandard": "",
          "posterLarge": "",
          "trailerFlv": "",
          "trailerHd": "",
          "trailerMp4": "",
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
            "href": "https://api.amctheatres.com/v2/movies/39000",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/39000/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/39000/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 40000,
        "name": "Transformers: Age Of Extinction",
        "sortableName": "Transformers Age Of Extinction",
        "starringActors": "",
        "directors": "",
        "genre": "Action",
        "wwmReleaseNumber": 0,
        "score": 0.14725,
        "slug": "transformers-age-of-extinction",
        "synopsis": "As humanity picks up the pieces, following the conclusion of Transformers: Dark of the Moon, Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control a' all while an ancient, powerful Transformer menace sets Earth in his cross-hairs. The epic adventure and battle between good and evil, freedom and enslavement ensues. (unofficial)",
        "synopsisTagLine": "The rules have changed",
        "releaseDateUtc": "2014-06-27T00:00:00Z",
        "earliestShowingUtc": "0001-01-01T00:00:00Z",
        "hasScheduledShowtimes": false,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/transformers-age-of-extinction",
        "showtimesUrl": "https://www.amctheatres.com/movies/transformers-age-of-extinction/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "",
          "posterStandard": "",
          "posterLarge": "",
          "trailerFlv": "",
          "trailerHd": "",
          "trailerMp4": "",
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
            "href": "https://api.amctheatres.com/v2/movies/40000",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/40000/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/40000/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 40747,
        "name": "Dawn Of The Planet Of The Apes",
        "sortableName": "Dawn Of The Planet Of The Apes",
        "starringActors": "",
        "directors": "",
        "genre": "Action",
        "wwmReleaseNumber": 0,
        "score": 0.048944,
        "slug": "dawn-of-the-planet-of-the-apes",
        "synopsis": "A growing nation of genetically evolved apes led by Caesar is threatened by a band of human survivors of the devastating virus unleashed a decade earlier.  They reach a fragile peace, but it proves short-lived, as both sides are brought to the brink of a war that will determine who will emerge as Earthas dominant species.",
        "synopsisTagLine": "One last chance for peace.",
        "releaseDateUtc": "2014-07-11T00:00:00Z",
        "earliestShowingUtc": "0001-01-01T00:00:00Z",
        "hasScheduledShowtimes": false,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/dawn-of-the-planet-of-the-apes",
        "showtimesUrl": "https://www.amctheatres.com/movies/dawn-of-the-planet-of-the-apes/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "",
          "posterStandard": "",
          "posterLarge": "",
          "trailerFlv": "",
          "trailerHd": "",
          "trailerMp4": "",
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
            "href": "https://api.amctheatres.com/v2/movies/40747",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/40747/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/40747/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 40960,
        "name": "How To Train Your Dragon 2",
        "sortableName": "How To Train Your Dragon Sequel",
        "starringActors": "",
        "directors": "",
        "genre": "Animation",
        "wwmReleaseNumber": 0,
        "score": 0.054264,
        "slug": "how-to-train-your-dragon-sequel",
        "synopsis": "The thrilling second chapter of the epic HOW TO TRAIN YOUR DRAGON trilogy returns to the fantastical world of the heroic Viking Hiccup and his faithful dragon Toothless.  The inseparable duo must protect the peace -- and save the future of men and dragons from the power-hungry Drago.",
        "synopsisTagLine": "",
        "releaseDateUtc": "2014-06-13T00:00:00Z",
        "earliestShowingUtc": "0001-01-01T00:00:00Z",
        "hasScheduledShowtimes": false,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/how-to-train-your-dragon-sequel",
        "showtimesUrl": "https://www.amctheatres.com/movies/how-to-train-your-dragon-sequel/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "",
          "posterStandard": "",
          "posterLarge": "",
          "trailerFlv": "",
          "trailerHd": "",
          "trailerMp4": "",
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
            "href": "https://api.amctheatres.com/v2/movies/40960",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/40960/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/40960/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 41447,
        "name": "Edge Of Tomorrow",
        "sortableName": "Edge Of Tomorrow",
        "starringActors": "",
        "directors": "",
        "genre": "Action",
        "wwmReleaseNumber": 0,
        "score": 0.033048,
        "slug": "edge-of-tomorrow",
        "synopsis": "The story unfolds in a near future in which a hive-like alien race, called Mimics, have hit the Earth in an unrelenting assault, shredding great cities to rubble and leaving millions of human casualties in their wake. No army in the world can match the speed, brutality or seeming prescience of the weaponized Mimic fighters or their telepathic commanders. But now the world's armies have joined forces for a last stand offensive against the alien horde, with no second chances. Lt. Col. Bill Cage (Cruise) is an officer who has never seen a day of combat when he is unceremoniously demoted and then dropped,untrained and ill-equippedinto what amounts to little more than a suicide mission. Cage is killed within minutes, managing to take an Alpha down with him. But, impossibly, he awakens back at the beginning of the same hellish day, and is forced to fight and die again and again. Direct physical contact with the alien has thrown him into a time loop dooming him to live out the same brutal combat over and over. But with each pass, Cage becomes tougher, smarter, and able to engage the Mimics with increasing skill, alongside Special Forces warrior Rita Vrataski (Blunt), who has lain waste to more Mimics than anyone on Earth. As Cage and Rita take the fight to the aliens, each repeated battle becomes an opportunity to find the key to annihilating the alien invaders and saving the Earth.",
        "synopsisTagLine": "Live, Die, Repeat",
        "releaseDateUtc": "2014-06-06T00:00:00Z",
        "earliestShowingUtc": "0001-01-01T00:00:00Z",
        "hasScheduledShowtimes": false,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/edge-of-tomorrow",
        "showtimesUrl": "https://www.amctheatres.com/movies/edge-of-tomorrow/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "",
          "posterStandard": "",
          "posterLarge": "",
          "trailerFlv": "",
          "trailerHd": "",
          "trailerMp4": "",
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
            "href": "https://api.amctheatres.com/v2/movies/41447",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/41447/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/41447/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 42088,
        "name": "Hercules",
        "sortableName": "Hercules",
        "starringActors": "",
        "directors": "",
        "genre": "Action",
        "wwmReleaseNumber": 0,
        "score": 0.036423,
        "slug": "hercules",
        "synopsis": "Fourteen-hundred years ago, a tormented soul walked the Earth that was neither man nor god. Hercules, powerful son of the god king Zeus, received nothing but suffering his entire life. After twelve arduous labors and the loss of his family, this dark, world-weary soul turned his back on the gods, finding his only solace in bloody battle. Over the years he warmed to the company of six similar souls, their only bond being their love of fighting and the presence of death. These men and woman never question where, why, or whom they go to fight; only how much they will be paid. Knowing this, the King of Thrace has hired these mercenaries to train his men to become the greatest army of all time. Hercules begins to question King Cotys' motives when he takes his army out to battle and sees them practice on innocent men, women, and children of their neighbors. Deep in his soul something stirs, but is it enough to stop a mad king and his army of the damned from marching across Greece - or even Olympus itself?! (temp)",
        "synopsisTagLine": "Before he was a legend, he was a man.",
        "releaseDateUtc": "2014-07-25T00:00:00Z",
        "earliestShowingUtc": "0001-01-01T00:00:00Z",
        "hasScheduledShowtimes": false,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/hercules",
        "showtimesUrl": "https://www.amctheatres.com/movies/hercules/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "",
          "posterStandard": "",
          "posterLarge": "",
          "trailerFlv": "",
          "trailerHd": "",
          "trailerMp4": "",
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
            "href": "https://api.amctheatres.com/v2/movies/42088",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/42088/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/42088/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 42440,
        "name": "Jupiter Ascending",
        "sortableName": "Jupiter Ascending",
        "starringActors": "",
        "directors": "",
        "genre": "Science Fiction",
        "wwmReleaseNumber": 0,
        "score": 0.0176,
        "slug": "jupiter-ascending",
        "synopsis": "In a universe where humans are near the bottom of the evolutionary ladder, a young destitute human woman is targeted for assassination by the Queen of the Universe because her very existence threatens to end the Queen's reign. (unofficial)",
        "synopsisTagLine": "Expand your universe.",
        "releaseDateUtc": "2014-07-18T00:00:00Z",
        "earliestShowingUtc": "0001-01-01T00:00:00Z",
        "hasScheduledShowtimes": false,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/jupiter-ascending",
        "showtimesUrl": "https://www.amctheatres.com/movies/jupiter-ascending/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "",
          "posterStandard": "",
          "posterLarge": "",
          "trailerFlv": "",
          "trailerHd": "",
          "trailerMp4": "",
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
            "href": "https://api.amctheatres.com/v2/movies/42440",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/42440/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/42440/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 42729,
        "name": "Think Like A Man Too",
        "sortableName": "Think Like A Man Too",
        "starringActors": "",
        "directors": "",
        "genre": "Comedy",
        "wwmReleaseNumber": 0,
        "score": 0.0429,
        "slug": "think-like-a-man-too",
        "synopsis": "In the highly anticipated sequel, which was inspired by Steve Harveyas best-selling book Act Like a Lady, Think Like A Man, all the couples are back for a wedding in Las Vegas. But plans for a romantic weekend go awry when their various misadventures get them into some compromising situations that threaten to derail the big event.",
        "synopsisTagLine": "",
        "releaseDateUtc": "2014-06-20T00:00:00Z",
        "earliestShowingUtc": "0001-01-01T00:00:00Z",
        "hasScheduledShowtimes": false,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/think-like-a-man-too",
        "showtimesUrl": "https://www.amctheatres.com/movies/think-like-a-man-too/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "",
          "posterStandard": "",
          "posterLarge": "",
          "trailerFlv": "",
          "trailerHd": "",
          "trailerMp4": "",
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
            "href": "https://api.amctheatres.com/v2/movies/42729",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/42729/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/42729/{media-type}",
            "templated": true
          }
        }
      },
      {
        "id": 42845,
        "name": "22 Jump Street",
        "sortableName": "21 Jump Street 2",
        "starringActors": "",
        "directors": "",
        "genre": "Comedy",
        "wwmReleaseNumber": 0,
        "score": 0.04536,
        "slug": "21-jump-street-2",
        "synopsis": "After making their way through high school (twice), big changes are in store for officers Schmidt (Jonah Hill) and Jenko (Channing Tatum) when they go deep undercover at a local college. But when Jenko meets a kindred spirit on the football team, and Schmidt infiltrates the bohemian art major scene, they begin to question their partnership. Now they don't have to just crack the case - they have to figure out if they can have a mature relationship. If these two overgrown adolescents can grow from freshmen into real men, college might be the best thing that ever happened to them.",
        "synopsisTagLine": "They're not 21 anymore",
        "releaseDateUtc": "2014-06-13T00:00:00Z",
        "earliestShowingUtc": "0001-01-01T00:00:00Z",
        "hasScheduledShowtimes": false,
        "displayOnlineTicketAvailability": false,
        "onlineTicketAvailabilityDateUtc": "0001-01-01T00:00:00Z",
        "websiteUrl": "https://www.amctheatres.com/movies/21-jump-street-2",
        "showtimesUrl": "https://www.amctheatres.com/movies/21-jump-street-2/showtimes",
        "distributorId": 123,
        "distributorCode": "ABC",
        "media": {
          "posterThumbnail": "",
          "posterStandard": "",
          "posterLarge": "",
          "trailerFlv": "",
          "trailerHd": "",
          "trailerMp4": "",
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
            "href": "https://api.amctheatres.com/v2/movies/42845",
            "templated": false
          },
          "https://api.amctheatres.com/rels/v2/earliest-showtime": {
            "href": "http://api.amctheatres.com/v2/theatres/{theatre-id}/movies/42845/earliest-showtime",
            "templated": true
          },
          "https://api.amctheatres.com/rels/v2/media": {
            "href": "http://api.amctheatres.com/v2/media/movies/42845/{media-type}",
            "templated": true
          }
        }
      }
    ]
  }
}