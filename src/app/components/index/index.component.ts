import { Movie } from './../../../models/movie.model';
import { MovieService } from './../../../service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  // movies: [];
  name: string;
  public movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadAllMovie();
  }
  loadAllMovie(): void {
    this.movieService.getAll().subscribe(
      (data) => {
        this.movies = data.data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onDeleteMovie(id: number) {

    this.movieService.delete(id).subscribe(
      (data) => {

        this.DataAfterDelete(id);
        this.loadAllMovie();
        //  console.log(data);
      });
  }

  DataAfterDelete(id: number) {
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].id == id) {
        this.movies.splice(i, 1);
        break;
      }
    }
  }

  onSearch(name: string){
    this.movieService.findbyname(name).subscribe(data =>{
      console.log(data);
      this.movies = data.data;

    })

  }
}
