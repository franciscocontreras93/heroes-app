import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Users } from '../../auth/interfaces/auth.interfaces';


interface NavbarItems {
  name: string,
  path: string,
  icon: string,

}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [
    './sidenav.component.css'
  ]
})
export class SidenavComponent {
 
  
  constructor(
    private router:Router,
    private AuthService:AuthService,
  ){}

  get auth() {
    return this.AuthService.user;
  }


  
  sidenavItems: NavbarItems[] = [
    {
      name: 'Listado de Heroes',
      path: './list',
      icon: 'format_list_bulleted'
    },
    {
      name: 'Agregar Heroes',
      path: './add',
      icon: 'add'
    },
    {
      name: 'Buscar Heroes',
      path: './find',
      icon: 'search'
    },
  ]

  logout() {
    this.AuthService.logout()
  }

}
