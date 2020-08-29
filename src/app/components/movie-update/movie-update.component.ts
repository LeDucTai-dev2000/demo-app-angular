import { Movie } from './../../../models/movie.model';
import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../../service/movie.service';
import { Routes, Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css'],
})
export class MovieUpdateComponent implements OnInit {
  public movies: Movie;

  id: number;
  movieName: string;
  description: string;
  duration: number;
  nameAlias: string;
  status: boolean = false;
  thumbUrl: string;
  constructor(
    private movieService: MovieService,
    private Routes: Router,
    private activateRouteService: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onUpdateMovie() {
    let movie = new Movie(
      this.id,
      this.movieName,
      this.description,
      this.duration,
      this.nameAlias,
      this.status,
      this.thumbUrl
    );
    this.movieService.update(movie).subscribe(
      (data) => {
        this.Routes.navigate(['index']);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
