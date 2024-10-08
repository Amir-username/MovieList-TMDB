/*

{
  "adult": false,
  "backdrop_path": "/cXQH2u7wUIX1eoIdEj51kHXoWhX.jpg",
  "belongs_to_collection": null,
  "budget": 1350000,
  "genres": [
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    }
  ],
  "homepage": "http://www.universalstudiosentertainment.com/lock-stock-and-two-smoking-barrels/",
  "id": 100,
  "imdb_id": "tt0120735",
  "original_language": "en",
  "original_title": "Lock, Stock and Two Smoking Barrels",
  "overview": "A card shark and his unwillingly-enlisted friends need to make a lot of cash quick after losing a sketchy poker match. To do this they decide to pull a heist on a small-time gang who happen to be operating out of the flat next door.",
  "popularity": 16.406,
  "poster_path": "/wt2TRBmFmBn5M5MBcPTwovlREaB.jpg",
  "production_companies": [
    {
      "id": 491,
      "logo_path": "/5LvDUt3KmvRnXQ4NrdWJYHeuA8J.png",
      "name": "Summit Entertainment",
      "origin_country": "US"
    },
    {
      "id": 21920,
      "logo_path": null,
      "name": "The Steve Tisch Company",
      "origin_country": ""
    },
    {
      "id": 13419,
      "logo_path": null,
      "name": "SKA Films",
      "origin_country": "GB"
    },
    {
      "id": 1382,
      "logo_path": "/8b5XGJ8YhZoEo9LgFP8KRQWHjYL.png",
      "name": "PolyGram Filmed Entertainment",
      "origin_country": "US"
    },
    {
      "id": 20076,
      "logo_path": "/i9qXGJIP9fGN22PP5jXUVENbyHi.png",
      "name": "HandMade Films",
      "origin_country": "GB"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "GB",
      "name": "United Kingdom"
    },
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "1998-08-28",
  "revenue": 28356188,
  "runtime": 105,
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "A Disgrace to Criminals Everywhere.",
  "title": "Lock, Stock and Two Smoking Barrels",
  "video": false,
  "vote_average": 8.121,
  "vote_count": 6278
}

*/

export class Movie {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  original_language: string;
  overview: string;
  vote_average: number;

  constructor(
    id: number,
    title: string,
    genre_ids: number[],
    poster_path: string,
    backdrop_path: string,
    release_date: string,
    original_language: string,
    overview: string,
    vote_average: number,
  ) {
    this.id = id;
    this.title = title;
    this.genre_ids = genre_ids;
    this.poster_path = poster_path;
    this.backdrop_path = backdrop_path;
    this.release_date = release_date;
    this.original_language = original_language;
    this.overview = overview;
    this.vote_average = vote_average;
  }
}
