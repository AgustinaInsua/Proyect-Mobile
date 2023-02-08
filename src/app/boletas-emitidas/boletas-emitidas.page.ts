import { BoletasService } from './../service/boleta-service/boletas.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api-service/api.service';

import { Observable } from 'rxjs';
import { Table } from 'primeng/table';
import { FIELDS_TABLE_BOLETA } from '../model/mock-fieldsTableBoletas';
import { Boleta } from '../model/Boleta';

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
  constructor(private apiService: ApiService, private boletasService: BoletasService) { }

  ngOnInit() {
    this.urlBoletas = this.boletasService.apiURL;
    this.apiService.get(this.urlBoletas).subscribe(boletas => {
      this.boletas = boletas;
      console.log(boletas);
    })
  }

  onFilter(event: any, table: Table){

  }
/*  companies !: Company[];
  fieldsTableCompany = FIELDS_TABLE_COMPANY;
  suggestionsCompanies!: string[] ;
  urlCompanies: any;
  constructor(private companyService: CompanyService, private apiService: ApiService) { }

  ngOnInit() {
    this.urlCompanies = this.companyService.apiURL;
    this.apiService.get(this.urlCompanies).subscribe(companies => {
      this.companies = companies;
    })
  }

  onFilter(event: any, table: Table){

  }

  clear (table: Table){
    table.clear();
  }*/

  clear (table: Table){
    table.clear();
  }
}
