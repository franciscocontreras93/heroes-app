import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTES HEROES

import { AddComponent } from './pages/add/add.component';
import { FindComponent } from './pages/find/find.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [
    AddComponent,
    FindComponent,
    HomeComponent,
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
