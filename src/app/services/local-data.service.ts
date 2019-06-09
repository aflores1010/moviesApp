import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MovieDetail } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  movies: MovieDetail[] = [];
  message = '';


  constructor(private storage: Storage, private toastController: ToastController) {
    this.getFromStorage();
   }

  saveMovie(movie: MovieDetail) {

    let exist = false;

    for(const movieLocal of this.movies) {
      if(movieLocal.id === movie.id ) {
        exist = true;
        break;
      }
    }

    if(exist) {
      this.movies = this.movies.filter( movieFilter =>  movieFilter.id !== movie.id);
      this.message = 'Deleted from favorites';
    } else {
      this.movies.push( movie );
      this.message = 'Added to favorites';
    }

    this.storage.set('movies', this.movies);
    this.presentToast();

  }

  async getFromStorage() {
    const wait = await this.storage.get('movies');
    this.movies = wait || [];
    return this.movies;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  
  async verifyMovie(id) {
    await this.getFromStorage();
    const exist = this.movies.find( movieFound => movieFound.id === id);
    return (exist) ? true : false;
  }

}
