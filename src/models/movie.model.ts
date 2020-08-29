export class Movie {
  id: number;
  movieName: string;
  description: string;
  duration: number;
  nameAlias: string;
  status: boolean = true;
  thumbUrl: string;

  constructor(
    id : number,
    movieName: string,
    description: string,
    duration: number,
    nameAlias: string,
    status: boolean = false,
    thumbUrl: string
  ) {
    this.id = id;
    this.movieName = movieName;
    this.description = description;
    this.duration = duration;
    this.nameAlias = nameAlias;
    this.status = status;
    this.thumbUrl = thumbUrl;
  }
}
