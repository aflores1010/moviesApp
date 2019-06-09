import { Component } from '@angular/core';
import { MovieDetail, GenreInterface, MovieInterface } from '../interfaces/interfaces';
import { LocalDataService } from '../services/local-data.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  movies: MovieDetail[] = [];
  genres: GenreInterface[] = [];
  genderMovie: GenderMovie[];

  constructor(private localDataService: LocalDataService, private moviesService: MoviesService) {}

  async ngOnInit() {
   this.movies = await this.localDataService.getFromStorage();
   this.genres = await this.moviesService.loadGenres();
   this.filterMovies();
  }

  filterMovies() {
    this.genderMovie = [];
    this.genres.forEach(eachGenre => {
    this.genderMovie.push({
    
    gender: eachGenre.id,
    name: eachGenre.name,
    movies: this.movies.filter(eachMovie => {
              return eachMovie.genres.find(actualMovieGenre => 
                eachGenre.id === actualMovieGenre.id)
        })
      })
    });
    return this.genderMovie;
  }

}

interface GenderMovie {
  gender: number,
  name: string,
  movies: MovieDetail[]
}
