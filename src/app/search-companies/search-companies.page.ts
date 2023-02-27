import { environment } from 'src/environments/environment';
import { ApiService } from '../service/api-service/api.service';
import { Company } from './../model/Company';
import { COMPANIES } from './../model/mock-company';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { FIELDS_TABLE_COMPANY } from '../model/mock-fieldsTableCompany';
import { CompanyService } from '../service/company-service/company.service';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { error } from 'console';
import { MessageService } from 'primeng/api';

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
  urlCompaniesPDF:any;
  constructor(private router: Router,private messageService: MessageService,private companyService: CompanyService, private apiService: ApiService) { }

  ngOnInit() {

    this.urlCompanies = this.companyService.apiURL;
    this.urlCompaniesPDF = this.urlCompanies+'companies.pdf'+'/';
    this.apiService.get(this.urlCompanies).subscribe({next: companies => {
      this.companies = companies;
    },
    error: (error: { message: any; }) =>{
      console.log(error.message);
      this.messageService.add({severity:'error', summary:error.message, life:2000});
    }
  })

  }

  onFilter(event: any, table: Table){
  }

  searchActas(i:string) {
    this.companyService.setCompanyInformationID(this.companies[parseInt(i)].id);
    this.router.navigate(['boletas-emitidas']);
  }

  editData(i:string){
    this.companyService.setCompanyInformation(this.companies[parseInt(i)]);
    this.urlCompanies = this.companyService.apiURL + this.companyService.getCompanyInformationMail();
    this.router.navigate(['actualizar-datos']);
  }

  clear (table: Table){
    table.clear();
  }

}
