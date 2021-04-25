import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {


  @Input() heroe!: Heroe;

  constructor (private heroesService: HeroesService,
                private router:Router) {}

  delete() {

    if(this.heroe.id) {
      this.heroesService.deleteHero(this.heroe).subscribe(resp => window.location.reload())
    }

  }

}
