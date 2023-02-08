import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Company } from '../model/Company';
import { FIELDS_TABLE_COMPANY } from '../model/mock-fieldsTableCompany';
import { ApiService } from '../service/boleta-service/api-service/api.service';
import { CompanyService } from '../service/company-service/company.service';

@Component({
  selector: 'app-aux-table',
  templateUrl: './aux-table.page.html',
  styleUrls: ['./aux-table.page.scss'],
})
export class AuxTablePage implements OnInit {

  companies !: Company[];
  fieldsTableCompany = FIELDS_TABLE_COMPANY;
  suggestionsCompanies!: string[] ;
  urlCompanies: any;
  constructor(private router: Router,private companyService: CompanyService, private apiService: ApiService) { }

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
  }
  searchActas(i: string) {
    this.router.navigate(['boletas-emitidas']);
  }
}
