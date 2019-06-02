import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment'


const url = environment.imgPath;


@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {


  transform(imagePath: string, size: string = 'w500'): string {
    if (!imagePath) {
      return 'assets/no-image-banner.jpg'
    }

    const imgUrl = url + size +imagePath;
    return imgUrl;
  }

}

