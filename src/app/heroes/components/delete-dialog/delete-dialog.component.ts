import { Component, OnInit, Input, Inject } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/service.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  listado:boolean = false


  constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>,
              private service:HeroesService,
              private router:Router,
              @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
    if (this.router.url.includes('list')) {
      this.listado = true
    }
  }

  delete() {
    if (this.data.id) {

      this.service.deleteHero(this.data).subscribe(resp => {
        if (this.listado) {
          window.location.reload()
          
          this.listado = true 
        }
        else {
          this.router.navigate(['/heroes/list'])
        }
      });    
      this.dialogRef.close(true)

    } else {
      this.dialogRef.close(true)

    }
    
    
    
    
      
    
  }
}
