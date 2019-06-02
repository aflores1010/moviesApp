import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieInterface } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {

  @Input() movies: MovieInterface[];
  @Input() title: string;
  @Output() loadMore = new EventEmitter();

  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true,
    spaceBeteen: -10
  }

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  load() {
    this.loadMore.emit();
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
