import { Component, OnInit, Input } from '@angular/core';
import { MovieInterface } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() title: string;
  @Input('lastMovies') lastMovies: MovieInterface[];
  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true,
    spaceBeteen: -10
  }

  constructor( private modalController: ModalController) { }
  async ngOnInit() {
  }

  async showDetail(id: string) {

    const modal = await this.modalController.create({
      component: DetailComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }

}
