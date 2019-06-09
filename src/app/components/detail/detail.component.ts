import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetail, CreditsInterface } from 'src/app/interfaces/interfaces';
import { ViewController } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() id;
  movieDetails: MovieDetail;
  credits: CreditsInterface;
  overviewLength = 150;
  slideOption = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  }
  movieExist = false;

  constructor( private moviesService: MoviesService,
               private localDataService: LocalDataService,
               private modalController: ModalController) { }

  async ngOnInit() {
    this.movieExist = await this.localDataService.verifyMovie(this.id);
    this.getDetails();
    this.getCredits();
  }

  getDetails() {
    this.moviesService.getMovieDetails(this.id).subscribe((resp: MovieDetail) => {
      this.movieDetails = resp;
      console.log(this.movieDetails);
    });
  }

  getCredits() {
    this.moviesService.getCredits(this.id).subscribe((resp: CreditsInterface) => {
      this.credits = resp;
      console.log('Creditos: ', this.credits);
    });
  }

  close() {
    this.modalController.dismiss();
  }

  saveFavorite() {
    this.movieExist = !this.movieExist;
    this.localDataService.saveMovie(this.movieDetails);
  }

}
