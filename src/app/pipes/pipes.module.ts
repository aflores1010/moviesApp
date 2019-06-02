import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesPipe } from './images.pipe';
import { PairsPipe } from './pairs.pipe';

@NgModule({
  declarations: [ImagesPipe, PairsPipe],
  exports: [ImagesPipe, PairsPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
