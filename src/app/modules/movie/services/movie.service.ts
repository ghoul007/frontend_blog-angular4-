import { Injectable } from '@angular/core';
import {MOVIES} from "../classes/movie_data";
import {Movie} from "../classes/movie";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/map";


@Injectable()
export class MoviesService {

  constructor(private _http: Http) {

  }

  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }

  getMoviesRest() {
      return this._http.get("https://jsonplaceholder.typicode.com/photos")
          .map(res=>res.json());
  }

}