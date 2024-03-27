/*

{
  "adult": false,
  "backdrop_path": "/94VA7AoSsZhoeBNiylGoEUSSXbw.jpg",
  "created_by": [
    {
      "id": 1589213,
      "credit_id": "56e3a8049251416d4000210f",
      "name": "Bill Nuss",
      "gender": 2,
      "profile_path": null
    }
  ],
  "episode_run_time": [
    60
  ],
  "first_air_date": "1996-03-02",
  "genres": [
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10759,
      "name": "Action & Adventure"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 10768,
      "name": "War & Politics"
    }
  ],
  "homepage": "",
  "id": 50,
  "in_production": false,
  "languages": [
    "en"
  ],
  "last_air_date": "2000-04-09",
  "last_episode_to_air": {
    "id": 1291,
    "name": "S.N.A.F.U.",
    "overview": "While Russ, Bobby, Monica and Jamie are out tracking pot growers in the Santa Monica mountains, Chris Kelly returns to visit a wounded T.C. Callaway, who's fighting addiction to pain pills, as well as kidnap victim Cory McNamara.All hell breaks loose when Chris finds out T.C. slept with her best friend, Cory, and that Cory doesn't know if her pregnancy is the result of Will Blake or T.C. Callaway.  The season-ending cliffhanger occurs when Cory opens the blood test results to find out which one is the father.",
    "vote_average": 0,
    "vote_count": 0,
    "air_date": "2000-04-09",
    "episode_number": 22,
    "episode_type": "finale",
    "production_code": "",
    "runtime": 60,
    "season_number": 5,
    "show_id": 50,
    "still_path": null
  },
  "name": "Pacific Blue",
  "next_episode_to_air": null,
  "networks": [
    {
      "id": 30,
      "logo_path": "/g1e0H0Ka97IG5SyInMXdJkHGKiH.png",
      "name": "USA Network",
      "origin_country": "US"
    }
  ],
  "number_of_episodes": 101,
  "number_of_seasons": 5,
  "origin_country": [
    "US"
  ],
  "original_language": "en",
  "original_name": "Pacific Blue",
  "overview": "Pacific Blue is an American crime drama series about a team of police officers with the Santa Monica Police Department who patrolled its beaches on bicycles. The show ran for five seasons on the USA Network, from March 2, 1996 to April 9, 2000, with a total of one hundred and one episodes. Often compared as \"Baywatch on bikes,\" the series enjoyed a popular run among the Network's viewers, and was popular in France, Israel, Sweden, Bulgaria, Norway, Spain, Russia, Austria, Germany, Italy, South America, Canada, Denmark, Poland, and other foreign markets.",
  "popularity": 77.419,
  "poster_path": "/lVyEixUIkSWSuUQ1RO4fQMXcXgB.jpg",
  "production_companies": [
    {
      "id": 113377,
      "logo_path": null,
      "name": "Gary Nardino Productions",
      "origin_country": ""
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "seasons": [
    {
      "air_date": "1996-03-02",
      "episode_count": 13,
      "id": 83,
      "name": "Season 1",
      "overview": "",
      "poster_path": "/aDZvyMtC4t1dCg1krQsf3pudcMi.jpg",
      "season_number": 1,
      "vote_average": 0
    },
    {
      "air_date": "1996-08-17",
      "episode_count": 22,
      "id": 82,
      "name": "Season 2",
      "overview": "",
      "poster_path": "/4ngIUTfqa7RVHlXRqEKCuDLpSd3.jpg",
      "season_number": 2,
      "vote_average": 0
    },
    {
      "air_date": "1997-08-03",
      "episode_count": 22,
      "id": 81,
      "name": "Season 3",
      "overview": "",
      "poster_path": null,
      "season_number": 3,
      "vote_average": 0
    },
    {
      "air_date": "1998-07-26",
      "episode_count": 22,
      "id": 84,
      "name": "Season 4",
      "overview": "",
      "poster_path": null,
      "season_number": 4,
      "vote_average": 0
    },
    {
      "air_date": "1999-07-18",
      "episode_count": 22,
      "id": 80,
      "name": "Season 5",
      "overview": "",
      "poster_path": null,
      "season_number": 5,
      "vote_average": 0
    }
  ],
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Ended",
  "tagline": "",
  "type": "Scripted",
  "vote_average": 5.367,
  "vote_count": 79
}

*/

import { Genre } from "./Genre";

export class Tv {
  id: number;
  title: string;
  genres: Genre[];
  poster: string;
  createdBy: string;
  overview: string;

  constructor(
    id: number,
    title: string,
    genres: Genre[],
    poster: string,
    createdBy: string,
    overview: string
  ) {
    this.id = id;
    this.title = title;
    this.genres = genres;
    this.poster = poster;
    this.createdBy = createdBy;
    this.overview = overview;
  }
}
