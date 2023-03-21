import { FIELDS_TABLE_BOLETA_MODAL } from './../model/mock-fieldsTableBoletas';
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
  selectedBoleta!: Array<any>;
  displayBoleta: boolean = false;
  fieldsTableBoleta = FIELDS_TABLE_BOLETA;
  fieldsTableBoletaModal = FIELDS_TABLE_BOLETA_MODAL;
  suggestionsBoletas!: string[];
  urlBoletas: any;
  constructor(
    private apiService: ApiService,
    private boletasService: BoletasService,
    private companyDTO: CompanyDTO
  ) {}

  ngOnInit() {
    this.urlBoletas = ApiService.apiURLBoletas;
    this.apiService
      .get(this.urlBoletas + '/' + this.companyDTO.id)
      .subscribe((boletas) => {
        this.boletas = boletas;
      });
    console.log(this.companyDTO.id);
  }

  onFilter(event: any, table: Table) {}

  showDialogBoleta(event: any) {
    this.displayBoleta = true;
    this.selectedBoleta = new Array();
    this.selectedBoleta.push(event);
  }

  clear(table: Table) {
    table.clear();
  }
}
