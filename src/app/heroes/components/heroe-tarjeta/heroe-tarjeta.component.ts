import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {


  @Input() heroe!: Heroe;

  constructor (
              private dialog:MatDialog
              ) {}

  delete() {
    this.dialog.open(DeleteDialogComponent, {
      data: this.heroe})
  }

}
