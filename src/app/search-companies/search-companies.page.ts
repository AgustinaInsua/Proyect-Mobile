import { environment } from 'src/environments/environment';
import { ApiService } from './../service/boleta-service/api-service/api.service';
import { Company } from './../model/Company';
import { COMPANIES } from './../model/mock-company';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { FIELDS_TABLE_COMPANY } from '../model/mock-fieldsTableCompany';
import { CompanyService } from '../service/company-service/company.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-search-companies',
  templateUrl: './search-companies.page.html',
  styleUrls: ['./search-companies.page.scss'],
})
export class SearchCompaniesPage implements OnInit {
  companies !: Company[];
  fieldsTableCompany = FIELDS_TABLE_COMPANY;
  suggestionsCompanies!: string[] ;
  urlCompanies: any;
  constructor(private companyService: CompanyService, private apiService: ApiService) { }

  ngOnInit() {
    this.urlCompanies = this.companyService.apiURL;
    /*this.companyService.getCompanies().subscribe(res => {
      this.companies = res;
    });*/
    this.apiService.get(this.urlCompanies).subscribe(companies => {
      this.companies = companies;
    })
  }

  onFilter(event: any, table: Table){

  }

  clear (table: Table){
    table.clear();
  }

}