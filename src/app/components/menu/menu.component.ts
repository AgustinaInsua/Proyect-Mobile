import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() title!: string;
  @Input () icon!: string;

  itemsMenuAccess = [
      {
        title: "Home",
        icon: "home",
        url: "/home"
      },
      {
        title: "Buscar Empresas",
        icon: "search",
        url: "/search-companies"
      },
      {
        title: "Buscar Planes",
        icon: "documents",
        url: "/search-plans"
      }
    ]

  itemsMenuAccount = [
    {
      title: "Cerrar Sesion",
      icon: "exit-outline",
      url: "/login"
    }
  ]
  constructor() { }



  ngOnInit() {}

}
