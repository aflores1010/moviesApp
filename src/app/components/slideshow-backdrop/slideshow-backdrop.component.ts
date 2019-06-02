import { Component, OnInit, Input } from '@angular/core';
import { MovieInterface } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';


@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input('lastMovies') lastMovies: MovieInterface[];
  @Input() title: string;

  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true
  }

  constructor( private modalController: ModalController) {
  }

  ngOnInit() {}

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
