import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
// COMPONENTES HEROES

import { AddComponent } from './pages/add/add.component';
import { FindComponent } from './pages/find/find.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImageHeroePipe } from './pipes/image-heroe.pipe';
import { FormsModule } from '@angular/forms';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';






@NgModule({

  declarations: [
    AddComponent,
    FindComponent,
    HomeComponent,
    HeroeComponent,
    ListadoComponent,
    SidenavComponent,
    HeroeTarjetaComponent,
    ImageHeroePipe,
    SnackbarComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class HeroesModule { }
