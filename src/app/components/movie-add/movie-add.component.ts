import { Routes, Router } from '@angular/router';
import { Movie } from '../../../models/movie.model';

import { MovieService } from './../../../service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
 public movies :Movie[] = [];
  id: number;
  movieName: string;
  description: string;
  duration: number;
  nameAlias: string;
  status: boolean = false;
  thumbUrl: string;
  constructor( private movieService : MovieService,
    private Routes:Router

    )
  { }

  ngOnInit(): void {

  }

  onAddMovie(){
    console.log(`${this.movieName}-${this.description}-${this.duration}-${this.nameAlias}--${this.status}-${this.thumbUrl}` );
    let movie = new Movie(this.id,this.movieName,this.description,this.duration,this.nameAlias,this.status,this.thumbUrl);
    this.movieService.add(movie).subscribe(
      data => {
        this.Routes.navigate(['index']);
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}

