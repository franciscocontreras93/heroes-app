import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/service.service';
import { DeleteDialogComponent } from '../../components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private activateRoute:ActivatedRoute,
    private heroesService: HeroesService,
    private dialog:MatDialog,
    private router:Router,
    ) { }

  ngOnInit(): void {
    
    this.activateRoute.params.pipe(switchMap(({id}) => this.heroesService.getHeroId(id)))
    .subscribe(resp => {
      this.heroe = resp
      //console.log(this.heroe)
    })

  }

  back() {
    this.router.navigate(['/heroes/list'])
  }

  delete() {
    this.dialog.open(DeleteDialogComponent, {
      data:this.heroe })
  }

}
