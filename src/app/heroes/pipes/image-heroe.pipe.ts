import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImageHeroePipe implements PipeTransform {
  srcUrl: string = "assets/heroes/"
  transform(value: Heroe) {

    return `assets/heroes/${value.id}.jpg`
  }

}
