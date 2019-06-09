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
   console.log('movies', this.movies);
   this.genres = await this.moviesService.loadGenres();
   console.log('geneross', this.genres);
   this.filterMovies();
  }

  // filterMovies(genre: GenreInterface) {
  //   const id = genre.id;
  //   const name = genre.name;
  //   console.log('id: ', id, 'name:', name);

  //   this.movies.forEach(movieFilter => movieFilter.genres.forEach( (eachGenre) => {
  //    console.log('movieFilter', movieFilter.title);
  //    // console.log('eachGenre', eachGenre);
  //     if(eachGenre.id === id) {
  //       // console.log('SI CUMPLE', movieFilter);
        
  //     };

  //   }));
  //   return this.movies;
  // }

  //   filterMovies() {
  //   console.log('Inside filter');
  //   this.genres.forEach(eachGenre => {
  //     console.log('Genero', eachGenre.name);
  //          this.movies.forEach(eachMovie => {
  //           console.log('Pelicula', eachMovie.title);
  //             eachMovie.genres.forEach(actualMovieGenre => {
  //               if(eachGenre.id === actualMovieGenre.id) {

  //                   return actualMovieGenre;
  //                 }
  //            })
  //     })
  //   });

  // }

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
