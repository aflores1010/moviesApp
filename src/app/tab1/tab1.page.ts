import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ResponseMovieInterface, MovieInterface } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lastMovies: MovieInterface[] = [];
  popularMovies: MovieInterface[] = [];

  constructor(private moviesService: MoviesService) {
    this.getLastMovies();
    this.getPopular();
  }

  getLastMovies() {
    this.moviesService.getLastMovies().subscribe((resp: ResponseMovieInterface)=> {
     // console.log(resp.results);
      this.lastMovies = resp.results;
    });
  }

  getPopular() {
    this.moviesService.getPopular().subscribe((resp: ResponseMovieInterface)=> {
      console.log(resp);
      const tempFix = [...this.popularMovies, ...resp.results ]
      this.popularMovies = tempFix;
    });
  }

  loadMore() {
    this.getPopular();
  }

}
