import { CompanyService } from './../service/company-service/company.service';
import { BoletasService } from './../service/boleta-service/boletas.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api-service/api.service';

import { Observable } from 'rxjs';
import { Table } from 'primeng/table';
import { FIELDS_TABLE_BOLETA } from '../model/mock-fieldsTableBoletas';
import { Boleta } from '../model/Boleta';
import { CompanyDTO } from '../model/dto/companyDTO';

@Component({
  selector: 'app-boletas-emitidas',
  templateUrl: './boletas-emitidas.page.html',
  styleUrls: ['./boletas-emitidas.page.scss'],
})

export class BoletasEmitidasPage implements OnInit {

  boletas!: Boleta[];
  fieldsTableBoleta = FIELDS_TABLE_BOLETA;
  suggestionsBoletas!: string[] ;
  urlBoletas : any;
  constructor(private apiService: ApiService, private boletasService: BoletasService, private companyDTO: CompanyDTO) { }

  ngOnInit() {
    this.urlBoletas = ApiService.apiURLBoletas;
    this.apiService.get(this.urlBoletas+"/"+this.companyDTO.id).subscribe(boletas => {
      this.boletas = boletas;
      console.log(boletas);
    })
    console.log(this.companyDTO.id);
  }

  onFilter(event: any, table: Table){

  }

  clear (table: Table){
    table.clear();
  }
}
