import { CompanyService } from './../service/company-service/company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../model/Company';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.page.html',
  styleUrls: ['./actualizar-datos.page.scss'],
})
export class ActualizarDatosPage implements OnInit {

  companies: any;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companies = this.companyService.getCompanyInformation();
  }



}
