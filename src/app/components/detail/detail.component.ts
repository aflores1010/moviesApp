import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetail } from 'src/app/interfaces/interfaces';
import { ViewController } from '@ionic/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() id;
  movieDetails: MovieDetail;

  constructor( private moviesService: MoviesService,
               private modalController: ModalController) { }

  ngOnInit() {
    console.log('id ',this.id);
    this.getDetails();
  }

  getDetails() {
    this.moviesService.getMovieDetails(this.id).subscribe((resp: MovieDetail) => {
      this.movieDetails = resp;
      console.log(this.movieDetails);
    });
  }

  close() {
    this.modalController.dismiss();
  }

}
