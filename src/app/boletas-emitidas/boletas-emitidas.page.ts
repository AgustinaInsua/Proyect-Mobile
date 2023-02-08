import { BoletasService } from './../service/boleta-service/boletas.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/boleta-service/api-service/api.service';

import { Boleta } from './boleta';
import { BOLETAS } from './mock-boletas';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-boletas-emitidas',
  templateUrl: './boletas-emitidas.page.html',
  styleUrls: ['./boletas-emitidas.page.scss'],
})
export class BoletasEmitidasPage implements OnInit {

  boletas!: Boleta[];
  selectedBoleta!: Boleta;
  urlGetBoletas : any;
  constructor(private apiService: ApiService, private boletasService: BoletasService) { }

  ngOnInit() {
    this.urlGetBoletas = this.boletasService.apiURL;
    this.apiService.get(this.urlGetBoletas).subscribe(boletas => {
      this.boletas = boletas;
    })
  }

  onSelect(boleta: Boleta): void {
    this.selectedBoleta = boleta;
  }
}
