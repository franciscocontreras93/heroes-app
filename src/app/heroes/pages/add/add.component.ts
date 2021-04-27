import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog.component';




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
    private snackBar: MatSnackBar,
    private dialog:MatDialog,
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
        this.mostrarSnackbar(`Editado Correctamente: ${resp.superhero}`)
        this.router.navigate(['/heroes', resp.id])
      })
      
    } else {
        this.HeroesService.addHeroe(this.heroe).subscribe(resp => {
        this.mostrarSnackbar(`Agregado Correctamente: ${resp.superhero}`)
        this.router.navigate(['/heroes',resp.id])
        
      })
    }
  }
  delete() {
    this.dialog.open(DeleteDialogComponent, {
      data: this.heroe
    })
  }
  mostrarSnackbar(mensaje:string){
    this.snackBar.open(mensaje,'Cerrar', {
      duration: 5000      
    })
  }
}
