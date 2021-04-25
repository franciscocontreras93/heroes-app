import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddComponent } from '../../pages/add/add.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {

  durationInSeconds = 5;


  constructor(private _snack:MatSnackBar) { }

  openSnackBar() {
    this._snack.openFromComponent(AddComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
