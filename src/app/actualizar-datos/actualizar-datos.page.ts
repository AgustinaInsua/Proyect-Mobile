import { CompanyService } from './../service/company-service/company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../model/Company';
import { CompanyDTO } from '../model/dto/companyDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.page.html',
  styleUrls: ['./actualizar-datos.page.scss'],
})
export class ActualizarDatosPage implements OnInit {
  companies: any;

  constructor(private companyDTO: CompanyDTO, private router: Router) {}

  ngOnInit() {
    this.companies = this.companyDTO.getCompanyInformation();
  }

  saveData() {
    this.companyDTO.setCompanyInformationMail(this.companies.mail);
    this.router.navigate(['search-companies']);
  }

  cancelData() {
    this.router.navigate(['search-companies']);
  }
}
