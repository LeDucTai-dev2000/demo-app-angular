import { Params } from '@angular/router';
import { Movie } from './../models/movie.model';
// import { Movie } from '../models/movie.model';
import { environment } from '../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    const endPoint = `${this.apiUrl}/getall`;
    return this.http.get(endPoint);
  }

  add(movie: Movie): Observable<any> {
    const add = `${this.apiUrl}/add`;
    return this.http.post(add, movie);
  }
  update(movie: Movie): Observable<any> {
    const update = `${this.apiUrl}/update`;
    return this.http.post(update, movie);
  }

  delete(id: number): Observable<any> {
    const remove = `${this.apiUrl}/delete`;
    return this.http.post(remove, id);
  }

  findbyname(name: string): Observable<any> {
    const findname = `${this.apiUrl}/findbyname/`;
    let params1 = new HttpParams().set('name',name);
    return this.http.get(findname,{params:params1});
  }
}
