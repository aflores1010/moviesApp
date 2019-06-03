import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseMovieInterface, CreditsInterface } from '../interfaces/interfaces';
import { MovieDetail } from '../interfaces/interfaces';


const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
  private popularPage = 0;

  constructor(private http: HttpClient) { }
  
  private executeQuery<T>(query: string,) {
    query = URL + query;
    query += '&language=es&include_image_language=es&api_key=' + apiKey;
    console.log('Query', query);
    return this.http.get<T>(query);
  }

  getLastMovies() {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1 , 0).getDate();

    // manipulando el mes
    const monthNumber = today.getMonth() + 1;
    let month;
    if(monthNumber < 10) {
      month = '0' + monthNumber;
    } else {
      month = monthNumber;
    }

    const mockfirstDate = '2012-12-01';
    const mocklastDate = '2012-12-30'


    // creando las fechas con estructura del api
    const firstDate = '' + today.getFullYear() + '-' + month + '-01'; 
    const lastDate = '' + today.getFullYear() + '-' + month + '-' + lastDay;
    // const lastDay
    return this.executeQuery<ResponseMovieInterface>('/discover/movie?primary_release_date.gte='+ firstDate + 
                                                                    '&primary_release_date.lte=' + lastDate);
  }

  getPopular() {
    this.popularPage++;
    return this.executeQuery<ResponseMovieInterface>('/discover/movie?sort_by=popularity.desc&page=' + this.popularPage);
  }

  getMovieDetails(id: string) {
    return this.executeQuery<MovieDetail>('/movie/' + id + '?a=1');
  }

  getCredits(id:string) {
    return this.executeQuery<CreditsInterface>('/movie/' + id + '/credits?a=1');
  }
}
