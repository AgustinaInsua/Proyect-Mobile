import { Component, OnInit } from '@angular/core';

import { Boleta } from './boleta';
import { BOLETAS } from './mock-boletas';

@Component({
  selector: 'app-boletas-emitidas',
  templateUrl: './boletas-emitidas.page.html',
  styleUrls: ['./boletas-emitidas.page.scss'],
})
export class BoletasEmitidasPage implements OnInit {

  boletas= BOLETAS;
  selectedBoleta!: Boleta;
  constructor() { }

  ngOnInit() {
   
  }
  onSelect(boleta: Boleta): void {
    this.selectedBoleta = boleta;
  }
}
