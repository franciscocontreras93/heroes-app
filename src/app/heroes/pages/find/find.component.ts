import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/service.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styles: [
  ]
})
export class FindComponent implements OnInit {


  termino:string = '';
  heroes: Heroe[]=[];
  respLength:boolean=false

  heroeSeleccionado: Heroe | undefined;

  


  constructor( private serviceHeroes:HeroesService ) { }

  ngOnInit(): void {
  }


  buscando() {

    this.serviceHeroes.getSugerencias(this.termino.trim()).subscribe(
      resp => {
        this.heroes = resp
      })
    }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    
    const heroe:Heroe = event.option.value;

    if(this.termino.length === 0) {
      this.heroeSeleccionado = undefined
      return;
    }

    this.termino = heroe.superhero

    this.serviceHeroes.getHeroId(heroe.id!)
    .subscribe(
      resp=> this.heroeSeleccionado = heroe
    )

  }

  }

