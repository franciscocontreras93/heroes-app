import { Component, OnInit } from '@angular/core';


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

}
