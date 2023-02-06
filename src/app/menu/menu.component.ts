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
        title: "Boletas",
        icon: "albums",
        url: "/boletas-emitidas"
      }]

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
