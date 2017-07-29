import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movie.service";
import {Movie} from "../../classes/movie";



@Component({
  selector: 'app-movie-list',
  templateUrl: '../../views/movie-list.component.html',
  styleUrls: ['../../views/movie-list.component.css'],
  providers:[MoviesService]
})


export class MovieListComponent implements OnInit {
  movies: Movie[];
  constructor(private moviesService: MoviesService) { }
  getMovies(): void {
    this.moviesService.getMoviesRest().subscribe(movies => this.movies = movies);
  }
  ngOnInit() {
    this.getMovies();

  }
}
