import React from 'react';
import Search from './components/Search';
import Result from './components/Result';
import Favs from './components/Result';

const buttonText = 'Buscar';
const inputText = 'Nombre de Serie';
const labelText = 'Busca tu serie favorita.';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      api:[
            [
              {
                "score": 13.108466,
                "show": {
                    "id": 5369,
                    "url": "http://www.tvmaze.com/shows/5369/gundam-g-no-reconguista",
                    "name": "Gundam: G no Reconguista",
                    "type": "Animation",
                    "language": "Japanese",
                    "genres": [
                        "Action",
                        "Anime",
                        "Science-Fiction"
                    ],
                    "status": "Ended",
                    "runtime": 25,
                    "premiered": "2014-10-03",
                    "officialSite": "http://www.g-reco.net/",
                    "schedule": {
                        "time": "",
                        "days": [
                            "Friday"
                        ]
                    },
                    "rating": {
                        "average": null
                    },
                    "weight": 0,
                    "network": {
                        "id": 24,
                        "name": "MBS",
                        "country": {
                            "name": "Japan",
                            "code": "JP",
                            "timezone": "Asia/Tokyo"
                        }
                    },
                    "webChannel": null,
                    "externals": {
                        "tvrage": null,
                        "thetvdb": 283929,
                        "imdb": "tt3996158"
                    },
                    "image": {
                        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/22/55455.jpg",
                        "original": "http://static.tvmaze.com/uploads/images/original_untouched/22/55455.jpg"
                    },
                    "summary": "<p>The year is Regild Century (R.C.) 1014. A millennium has past since the catastrophic end of the Universal Century era. Mankind has rebuilt itself and, through the lessons learned from the previous era, managed to sustain a long lasting peace. However conflict has once again arisen, resulting from disagreements regarding the world's only space orbital elevator, the Capital Tower, and its role as the sole means by which nations on Earth obtain energy. During a routine training session while ascending the Capital Tower, Capital Guard pilot cadet Bellri Zenam, tasked with protection of the Tower, fights off an attacking space pirate, Aida Rayhunton, and helps capture her mobile suit, the G-Self. Strangely, Bellri finds out that he is one of the only three individuals to be able to pilot this mysterious mobile suit. Seemingly chosen by the G-Self, Bellri is thus drawn into a brewing conflict that will have consequences for the entire world.</p><p>(Source: ANN)</p>",
                    "updated": 1463758277,
                    "_links": {
                        "self": {
                            "href": "http://api.tvmaze.com/shows/5369"
                        },
                        "previousepisode": {
                            "href": "http://api.tvmaze.com/episodes/324981"
                        }
                    }
                }
              },
              {
                  "score": 13.103984,
                  "show": {
                      "id": 5244,
                      "url": "http://www.tvmaze.com/shows/5244/mobile-suit-zeta-gundam",
                      "name": "Mobile Suit Zeta Gundam",
                      "type": "Animation",
                      "language": "Japanese",
                      "genres": [
                          "Action",
                          "Anime",
                          "Science-Fiction",
                          "War"
                      ],
                      "status": "Ended",
                      "runtime": 25,
                      "premiered": "1985-03-02",
                      "officialSite": "http://www.z-gundam.net/",
                      "schedule": {
                          "time": "",
                          "days": [
                              "Saturday"
                          ]
                      },
                      "rating": {
                          "average": null
                      },
                      "weight": 0,
                      "network": {
                          "id": 136,
                          "name": "Nagoya Broadcasting Network",
                          "country": {
                              "name": "Japan",
                              "code": "JP",
                              "timezone": "Asia/Tokyo"
                          }
                      },
                      "webChannel": null,
                      "externals": {
                          "tvrage": 6697,
                          "thetvdb": 71535,
                          "imdb": "tt0159186"
                      },
                      "image": {
                          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/21/54938.jpg",
                          "original": "http://static.tvmaze.com/uploads/images/original_untouched/21/54938.jpg"
                      },
                      "summary": "<p>The year is Universal Century 0087. Seven years have passed since the end of the One Year War. In its zeal to stamp out any remaining opposition, the Earth Federation has organized the Titans, an elite fighting force. However, the Titans soon get out of hand, committing atrocities on par with the worst the Principality of Zeon had to offer during the war. In response, dissatisified citizens, former Zeon soldiers, and even members of the Earth Federal Forces form a resistance group known as the Anti-Earth Union Group, or AEUG. As the next war is brewing, a small AEUG group arrives at Side 7 to investigate the new Gundam Mk. II...</p>",
                      "updated": 1446261912,
                      "_links": {
                          "self": {
                              "href": "http://api.tvmaze.com/shows/5244"
                          },
                          "previousepisode": {
                              "href": "http://api.tvmaze.com/episodes/320404"
                          }
                      }
                  }
              },
              {
                  "score": 13.102988,
                  "show": {
                      "id": 5242,
                      "url": "http://www.tvmaze.com/shows/5242/mobile-suit-gundam",
                      "name": "Mobile Suit Gundam",
                      "type": "Animation",
                      "language": "Japanese",
                      "genres": [
                          "Action",
                          "Anime",
                          "Science-Fiction",
                          "War"
                      ],
                      "status": "Ended",
                      "runtime": 25,
                      "premiered": "1979-04-07",
                      "officialSite": "http://www.gundam.jp/movie/index.html",
                      "schedule": {
                          "time": "",
                          "days": [
                              "Saturday"
                          ]
                      },
                      "rating": {
                          "average": null
                      },
                      "weight": 0,
                      "network": {
                          "id": 136,
                          "name": "Nagoya Broadcasting Network",
                          "country": {
                              "name": "Japan",
                              "code": "JP",
                              "timezone": "Asia/Tokyo"
                          }
                      },
                      "webChannel": null,
                      "externals": {
                          "tvrage": null,
                          "thetvdb": 76547,
                          "imdb": "tt0159172"
                      },
                      "image": {
                          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/21/54937.jpg",
                          "original": "http://static.tvmaze.com/uploads/images/original_untouched/21/54937.jpg"
                      },
                      "summary": "<p>In the year Universal Century 0079, humanity lives in space colonies called Sides. Side 3, the Principality of Zeon, has declared war on the Earth Federation. After the intial fighting, an 8-month stalemate occured. However that stalemate breaks when Amuro Ray stumbles into the Gundam, the Earth Federation's secret weapon. Now Amuro and the crew of White Base must stand up to Zeon in order to end the war.</p>",
                      "updated": 1446261984,
                      "_links": {
                          "self": {
                              "href": "http://api.tvmaze.com/shows/5242"
                          },
                          "previousepisode": {
                              "href": "http://api.tvmaze.com/episodes/320290"
                          }
                      }
                  }
              },
              {
                  "score": 11.231561,
                  "show": {
                      "id": 35249,
                      "url": "http://www.tvmaze.com/shows/35249/gundam-build-divers",
                      "name": "Gundam Build Divers",
                      "type": "Animation",
                      "language": "Japanese",
                      "genres": [
                          "Action",
                          "Anime",
                          "Science-Fiction"
                      ],
                      "status": "Ended",
                      "runtime": 30,
                      "premiered": "2018-04-03",
                      "officialSite": "http://www.tv-tokyo.co.jp/anime/gundam-bd",
                      "schedule": {
                          "time": "17:55",
                          "days": [
                              "Tuesday"
                          ]
                      },
                      "rating": {
                          "average": null
                      },
                      "weight": 0,
                      "network": {
                          "id": 76,
                          "name": "TV Tokyo",
                          "country": {
                              "name": "Japan",
                              "code": "JP",
                              "timezone": "Asia/Tokyo"
                          }
                      },
                      "webChannel": null,
                      "externals": {
                          "tvrage": null,
                          "thetvdb": 345055,
                          "imdb": null
                      },
                      "image": {
                          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/161/403307.jpg",
                          "original": "http://static.tvmaze.com/uploads/images/original_untouched/161/403307.jpg"
                      },
                      "summary": "<p>In the near future, Gunpla Battles are held in a new massive multiplayer online game called \"Gunpla Battle Nexus Online\" (GBN), where players immerse themselves and their Gunpla in a virtual world and battle other players around the world. Riku Minami, a 14-year-old student, looks to follow the footsteps of top Gunpla Diver Kyoya Kujo with his Gundam 00 Diver and his ragtag team.</p>",
                      "updated": 1564531890,
                      "_links": {
                          "self": {
                              "href": "http://api.tvmaze.com/shows/35249"
                          },
                          "previousepisode": {
                              "href": "http://api.tvmaze.com/episodes/1536380"
                          }
                      }
                  }
              },
              {
                  "score": 9.958247,
                  "show": {
                      "id": 5241,
                      "url": "http://www.tvmaze.com/shows/5241/mobile-suit-gundam-wing",
                      "name": "Mobile Suit Gundam Wing",
                      "type": "Animation",
                      "language": "Japanese",
                      "genres": [
                          "Action",
                          "Anime",
                          "Science-Fiction",
                          "War"
                      ],
                      "status": "Ended",
                      "runtime": 25,
                      "premiered": "1995-04-07",
                      "officialSite": "http://www.gundam-w.jp/index.html",
                      "schedule": {
                          "time": "",
                          "days": [
                              "Friday"
                          ]
                      },
                      "rating": {
                          "average": null
                      },
                      "weight": 0,
                      "network": {
                          "id": 263,
                          "name": "TV Asahi",
                          "country": {
                              "name": "Japan",
                              "code": "JP",
                              "timezone": "Asia/Tokyo"
                          }
                      },
                      "webChannel": null,
                      "externals": {
                          "tvrage": null,
                          "thetvdb": 79327,
                          "imdb": "tt0159193"
                      },
                      "image": {
                          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/21/54935.jpg",
                          "original": "http://static.tvmaze.com/uploads/images/original_untouched/21/54935.jpg"
                      },
                      "summary": "<p>It is the year After Colony 195, and war between the Space Colonies and Earth has begun. To give the colonies an edge, they send 5 young soldiers, trained to perfection, to earth in the most powerful of Mobile Suits-Gundams. With their arrival, the tide of the war changes as they battle against the Earth forces and the Colonies of their origin.</p>",
                      "updated": 1528611783,
                      "_links": {
                          "self": {
                              "href": "http://api.tvmaze.com/shows/5241"
                          },
                          "previousepisode": {
                              "href": "http://api.tvmaze.com/episodes/320155"
                          }
                      }
                  }
              },
              {
                  "score": 9.958247,
                  "show": {
                      "id": 5366,
                      "url": "http://www.tvmaze.com/shows/5366/mobile-suit-gundam-00",
                      "name": "Mobile Suit Gundam 00",
                      "type": "Animation",
                      "language": "Japanese",
                      "genres": [
                          "Action",
                          "Anime",
                          "Science-Fiction",
                          "War"
                      ],
                      "status": "Ended",
                      "runtime": 25,
                      "premiered": "2007-10-06",
                      "officialSite": "http://www.gundam00.net/",
                      "schedule": {
                          "time": "",
                          "days": [
                              "Saturday"
                          ]
                      },
                      "rating": {
                          "average": null
                      },
                      "weight": 0,
                      "network": {
                          "id": 24,
                          "name": "MBS",
                          "country": {
                              "name": "Japan",
                              "code": "JP",
                              "timezone": "Asia/Tokyo"
                          }
                      },
                      "webChannel": null,
                      "externals": {
                          "tvrage": 18038,
                          "thetvdb": 80675,
                          "imdb": "tt1134000"
                      },
                      "image": {
                          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/22/55453.jpg",
                          "original": "http://static.tvmaze.com/uploads/images/original_untouched/22/55453.jpg"
                      },
                      "summary": "<p>It is the year A.D. 2307. Fossil fuels on Earth have been depleted entirely, with mankind turning to the next available power source: solar energy. During this time, 3 orbital elevators with solar power generation systems are built, each under control by the Union (formerly United States of America), the Human Reformist Alliance (Russia, China and India) and the AEU (Europe); however, not all countries are able to enjoy the benefits of this system, leading to widespread resentment and war. Arising out of the conflict, a mysterious non-profit military organization known as Celestial Being appears, dedicated to end all warfare using Mobile Suits called Gundam. This begins the stories of Gundam Meisters (pilots) Setsuna F. Seiei, Lockon Stratos, Allelujah Haptism and Tieria Erde as they are thrown into conflict between the 3 superpowers and the other various factions.</p>",
                      "updated": 1464003002,
                      "_links": {
                          "self": {
                              "href": "http://api.tvmaze.com/shows/5366"
                          },
                          "previousepisode": {
                              "href": "http://api.tvmaze.com/episodes/324860"
                          }
                      }
                  }
              },
              {
                  "score": 9.958247,
                  "show": {
                      "id": 5367,
                      "url": "http://www.tvmaze.com/shows/5367/mobile-suit-gundam-age",
                      "name": "Mobile Suit Gundam AGE",
                      "type": "Animation",
                      "language": "Japanese",
                      "genres": [
                          "Action",
                          "Anime",
                          "Science-Fiction",
                          "War"
                      ],
                      "status": "Ended",
                      "runtime": 25,
                      "premiered": "2011-10-09",
                      "officialSite": "http://www.gundam-age.net/",
                      "schedule": {
                          "time": "",
                          "days": [
                              "Sunday"
                          ]
                      },
                      "rating": {
                          "average": null
                      },
                      "weight": 0,
                      "network": {
                          "id": 24,
                          "name": "MBS",
                          "country": {
                              "name": "Japan",
                              "code": "JP",
                              "timezone": "Asia/Tokyo"
                          }
                      },
                      "webChannel": null,
                      "externals": {
                          "tvrage": null,
                          "thetvdb": 252621,
                          "imdb": "tt2193783"
                      },
                      "image": {
                          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/22/55454.jpg",
                          "original": "http://static.tvmaze.com/uploads/images/original_untouched/22/55454.jpg"
                      },
                      "summary": "<p>In A.G. 101 (the 101st year of the Advanced Generation calendar) a mysterious entity known only as \"UE\", or \"unknown enemy\", attacks and destroys the space colony Angel. This brutal attack becomes infamous as the \"The Day the Angel Fell\", and marks the beginning of humanity's war for survival.</p><p>The series begins in A.G. 108 when the UE attack the space colony Ovan, where Flit Asuno lives with his mother. Flit's mother is killed by the UE, and in her belongings (in an object called a \"AGE Device\") he discovers the blueprints for a powerful weapon from the past - the ancient messiah named \"Gundam.\"</p><p>From these blueprints, Flit spends the next several years studying engineering at an Earth Federation base on the Nora space colony and designing the AGE-1 Gundam. Seven years later, in A.G. 115, Flit completes the Gundam, just as the UE attack Nora. Flit and his lineage's battle piloting the AGE-1 to protect mankind is about to begin.</p>",
                      "updated": 1464003020,
                      "_links": {
                          "self": {
                              "href": "http://api.tvmaze.com/shows/5367"
                          },
                          "previousepisode": {
                              "href": "http://api.tvmaze.com/episodes/324920"
                          }
                      }
                  }
              },
              {
                  "score": 9.958247,
                  "show": {
                      "id": 5245,
                      "url": "http://www.tvmaze.com/shows/5245/mobile-suit-gundam-zz",
                      "name": "Mobile Suit Gundam ZZ",
                      "type": "Animation",
                      "language": "Japanese",
                      "genres": [
                          "Action",
                          "Anime",
                          "Science-Fiction",
                          "War"
                      ],
                      "status": "Ended",
                      "runtime": 25,
                      "premiered": "1986-03-01",
                      "officialSite": "http://www.gundam-zz.net/index.html",
                      "schedule": {
                          "time": "",
                          "days": [
                              "Saturday"
                          ]
                      },
                      "rating": {
                          "average": null
                      },
                      "weight": 0,
                      "network": {
                          "id": 136,
                          "name": "Nagoya Broadcasting Network",
                          "country": {
                              "name": "Japan",
                              "code": "JP",
                              "timezone": "Asia/Tokyo"
                          }
                      },
                      "webChannel": null,
                      "externals": {
                          "tvrage": null,
                          "thetvdb": 72352,
                          "imdb": "tt0159184"
                      },
                      "image": {
                          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/21/54939.jpg",
                          "original": "http://static.tvmaze.com/uploads/images/original_untouched/21/54939.jpg"
                      },
                      "summary": "<p>The year is Universal Century 0088. Directly after the end of the Gryps War, Haman Karn and her army of Zeon remnants on the asteroid Axis begin their quest of reviving the lost empire of the Zabi's, and proclaim themselves as the Neo-Zeon. With the Earth Federation as hapless as ever, only the Anti-Earth Union Group (AEUG) is able oppose the plans of Neo-Zeon. In need of all the help it can get after being decimated in the previous war and losing many of its key members, the AEUG ship Argama enlists the aid of a young junk collector from the Side 1 colony of Shangri-La named Judau Ashta to pilot its newest mobile suit, the Double Zeta Gundam.</p>",
                      "updated": 1446262168,
                      "_links": {
                          "self": {
                              "href": "http://api.tvmaze.com/shows/5245"
                          },
                          "previousepisode": {
                              "href": "http://api.tvmaze.com/episodes/320451"
                          }
                      }
                  }
              },
              {
                  "score": 9.958247,
                  "show": {
                      "id": 5362,
                      "url": "http://www.tvmaze.com/shows/5362/gundam-build-fighters",
                      "name": "Gundam Build Fighters",
                      "type": "Animation",
                      "language": "Japanese",
                      "genres": [
                          "Action",
                          "Anime",
                          "Science-Fiction"
                      ],
                      "status": "Ended",
                      "runtime": 25,
                      "premiered": "2013-10-07",
                      "officialSite": "http://gundam-bf.net/",
                      "schedule": {
                          "time": "18:00",
                          "days": [
                              "Wednesday"
                          ]
                      },
                      "rating": {
                          "average": null
                      },
                      "weight": 0,
                      "network": {
                          "id": 76,
                          "name": "TV Tokyo",
                          "country": {
                              "name": "Japan",
                              "code": "JP",
                              "timezone": "Asia/Tokyo"
                          }
                      },
                      "webChannel": null,
                      "externals": {
                          "tvrage": null,
                          "thetvdb": 273004,
                          "imdb": "tt3213642"
                      },
                      "image": {
                          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/22/55449.jpg",
                          "original": "http://static.tvmaze.com/uploads/images/original_untouched/22/55449.jpg"
                      },
                      "summary": "<p>The story of Gundam Build Fighters Try is set 7 years after the end of the 1st series. Now Seiho Academy's Gunpla Battle Club has only one member, Hoshino Fumina, who is a third grade student in junior high. As the president of the club, she needs two more members to participate in the upcoming All-Japan Gunpla Battle Championships. One day she encounters a transfer student named Kamiki Sekai, who has traveled around for Kenpo training with his master. Then joining by a young Gunpla builder Kousaka Yuuma, their challenge to the Gunpla Battle begins....</p>",
                      "updated": 1463758246,
                      "_links": {
                          "self": {
                              "href": "http://api.tvmaze.com/shows/5362"
                          },
                          "previousepisode": {
                              "href": "http://api.tvmaze.com/episodes/324644"
                          }
                      }
                  }
              },
              {
                  "score": 9.958247,
                  "show": {
                      "id": 5364,
                      "url": "http://www.tvmaze.com/shows/5364/turn-a-gundam",
                      "name": "Turn a Gundam",
                      "type": "Animation",
                      "language": "Japanese",
                      "genres": [
                          "Drama",
                          "Action",
                          "Adventure",
                          "Anime"
                      ],
                      "status": "Ended",
                      "runtime": 25,
                      "premiered": "1999-04-09",
                      "officialSite": "http://www.turn-a-gundam.net/",
                      "schedule": {
                          "time": "",
                          "days": [
                              "Sunday"
                          ]
                      },
                      "rating": {
                          "average": null
                      },
                      "weight": 0,
                      "network": {
                          "id": 131,
                          "name": "Fuji TV",
                          "country": {
                              "name": "Japan",
                              "code": "JP",
                              "timezone": "Asia/Tokyo"
                          }
                      },
                      "webChannel": null,
                      "externals": {
                          "tvrage": null,
                          "thetvdb": 71585,
                          "imdb": null
                      },
                      "image": {
                          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/22/55451.jpg",
                          "original": "http://static.tvmaze.com/uploads/images/original_untouched/22/55451.jpg"
                      },
                      "summary": "<p>This story is set thousands of years in the future. The people of Earth have forgotten the space wars of the past, reverting back to a pre-industrial existence. But the lunar settlers known as the Moonrace, who have retained their high technology, now plan to seize their mother planet for themselves. As the war of the worlds begins, a young Moonrace citizen named Loran Cehack, pilot of the legendary Turn a Gundam, struggles to bridge the gap between humanity's long-separated branches.</p>",
                      "updated": 1520481976,
                      "_links": {
                          "self": {
                              "href": "http://api.tvmaze.com/shows/5364"
                          },
                          "previousepisode": {
                              "href": "http://api.tvmaze.com/episodes/324741"
                          }
                        }
                    }
              }
            ]
          ]
      }
  }

  render() {
    return (
      <div className="App">
        <Search 
          textoBoton = {buttonText} 
          textoInput = {inputText}
          textoEtiqueta = {labelText}  
        />
        <Result 
        data={this.state.api}
        />
        <Favs />
      </div>
    );
  }
}

export default App;
