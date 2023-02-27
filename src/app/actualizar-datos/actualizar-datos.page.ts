import { CompanyService } from './../service/company-service/company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../model/Company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.page.html',
  styleUrls: ['./actualizar-datos.page.scss'],
})

export class ActualizarDatosPage implements OnInit {

  companies: any;

  constructor(private companyService: CompanyService,private router: Router) { }

  ngOnInit() {
    this.companies = this.companyService.getCompanyInformation();
    console.log(this.companies);
  }

  saveData(){
    this.companyService.setCompanyInformationMail(this.companies.mail);
    this.router.navigate(['search-companies']);
  }

}
