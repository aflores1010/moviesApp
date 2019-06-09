import { Pipe, PipeTransform } from '@angular/core';
import { MovieDetail, MovieInterface} from '../interfaces/interfaces';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(movies: MovieInterface[], type: string): MovieInterface [] {
    console.log('type :', type);
    if (type === 'backdrop') {
      return movies.filter( movie => {
        console.log('movie.backdrop_path ', movie.backdrop_path);
        return movie.backdrop_path;
      })
    } else if (type === 'poster') {
      return movies.filter( movie => {
        console.log('movie.poster_path ', movie.poster_path);
        return movie.poster_path;
      })
    }
  }

}
