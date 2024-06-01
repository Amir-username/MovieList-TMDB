export class Credit {
  id: number;
  name: string;
  birthday: string;
  biography: string;
  known_for_department: string;
  profile_path: string;

  constructor(
    id: number,
    name: string,
    birthday: string,
    biography: string,
    known_for_department: string,
    profile_path: string
  ) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.biography = biography;
    this.known_for_department = known_for_department;
    this.profile_path = profile_path;
  }
}
