export class Cast {
  id: number;
  name: string;
  profile_path: string;
  character: string;

  constructor(
    id: number,
    name: string,
    profile_path: string,
    character: string
  ) {
    (this.id = id),
      (this.name = name),
      (this.profile_path = profile_path),
      (this.character = character);
  }
}

// {
//     "adult": false,
//     "gender": 2,
//     "id": 2,
//     "known_for_department": "Acting",
//     "name": "Mark Hamill",
//     "original_name": "Mark Hamill",
//     "popularity": 55.807,
//     "profile_path": "/2ZulC2Ccq1yv3pemusks6Zlfy2s.jpg",
//     "cast_id": 3,
//     "character": "Luke Skywalker",
//     "credit_id": "52fe420dc3a36847f8000441",
//     "order": 0
//   },
