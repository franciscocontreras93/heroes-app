import { Component, OnInit } from '@angular/core';


interface NavbarItems {
  name: string,
  path: string,
  icon: string,

}





@Component({
  selector: 'app-heroes-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css'
  ]
})
export class HomeComponent {


  items: NavbarItems[] = [
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
