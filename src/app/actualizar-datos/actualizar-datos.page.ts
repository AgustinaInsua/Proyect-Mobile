import { CompanyService } from './../service/company-service/company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../model/Company';
import { Router } from '@angular/router';
import { CompanyDTO } from '../model/dto/companyDTO';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.page.html',
  styleUrls: ['./actualizar-datos.page.scss'],
})

export class ActualizarDatosPage implements OnInit {

  companies: any;

  constructor(private companyDTO: CompanyDTO,private router: Router) { }

  ngOnInit() {
    this.companies = this.companyDTO.getCompanyInformation();
    console.log(this.companies);
  }

  saveData(){
    this.companyDTO.setCompanyInformationMail(this.companies.mail);
    this.router.navigate(['search-companies']);
  }

  cancelData(){
    this.router.navigate(['search-companies']);
  }

}
