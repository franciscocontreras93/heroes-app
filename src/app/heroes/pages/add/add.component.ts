import { Component, OnInit } from '@angular/core';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';




@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  agregar = true

  
  heroe: Heroe = {
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.MarvelComics,
    alt_img:''
  }


  publisher = [
    
    {
      id: 'DC Comics',
      descripcion: 'DC Comics'
   },
    {
      id: 'Marvel Comics',
      descripcion: 'Marvel Comics'
   }

]

  constructor(
    private HeroesService:HeroesService,
    private ActivatedRoute: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {

    if(!this.router.url.includes(`/edit`)) {
      this.agregar = false
      return;
      
    } else {

      this.ActivatedRoute.params
      .pipe(switchMap( ({id}) => this.HeroesService.getHeroId(id)))
      .subscribe(
        heroe => this.heroe = heroe
        
      )

    }
    

  }


  save() {
    
    if(this.heroe.superhero.trim().length === 0) {
      return;
    }
    
    if(this.heroe.id ) {
      this.HeroesService.editHero(this.heroe).subscribe(resp => {
        this.router.navigate(['/heroes', resp.id])
        alert(`Modificado ${resp.id}`)
      })
      
    } else {
      
      this.HeroesService.addHeroe(this.heroe).subscribe(resp => {
        this.router.navigate(['/heroes',resp.id])
        
      })
    }


    
    
  }

  delete() {
    if ( this.heroe.id) {
      this.HeroesService.deleteHero(this.heroe).subscribe(resp => this.router.navigate(['heroes/list']))
    }
  }
}
