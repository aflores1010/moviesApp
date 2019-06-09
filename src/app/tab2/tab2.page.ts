import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ResulSearchtInterface } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../components/detail/detail.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textSearch = '';
  ideas: string[] =  ['Spiderman', 'Lord of the rings', 'star wars'];
  movies: ResulSearchtInterface[] = [];
  isLoading: boolean = false;

  constructor( private moviesService: MoviesService, private modalController: ModalController) {}

  search(event) {
    this.isLoading = true;
    const text = event.detail.value;
    console.log(text);
    if(text){
      this.moviesService.search(text).subscribe((resp)=>{
        this.isLoading = false;
        this.movies = resp.results;
        console.log(this.ideas);
      });
    } else {
      this.isLoading = false;
    }
  }

  selectIdea(idea: string){
    this.textSearch = idea;
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
