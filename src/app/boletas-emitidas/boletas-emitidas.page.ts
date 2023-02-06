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

  boletas: any;
  selectedBoleta!: Boleta;
  urlGetBoletas : any;
  boleta = new Boleta();
  constructor(private apiService: ApiService, private boletasService: BoletasService) { }

  ngOnInit() {
    this.urlGetBoletas = this.boletasService.apiURL;
    this.boletas = this.urlGetBoletas;
  }

  onSelect(boleta: Boleta): void {
    this.selectedBoleta = boleta;
  }

  get(){
    this.returnResponse(this.apiService.get(this.urlGetBoletas));
  }

  returnResponse(obs: Observable<any>){
    obs.subscribe( {next: (response: any) => {   
      console.log(response);
    },
    error: (error: { message: any; }) =>{
      console.log(error.message);
    }
   })
  }
}
