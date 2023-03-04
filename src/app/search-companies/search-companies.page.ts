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
import { error } from 'console';
import { MessageService } from 'primeng/api';
import { CompanyDTO } from '../model/dto/companyDTO';
import {MegaMenuItem,MenuItem} from 'primeng/api';

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
  megaItems!: MegaMenuItem [];
  items!: MenuItem[];
  display: boolean = false;
  value: any;
  selecAprobador: any;
  selecAmountPayments: any;
  selecPeriodicity: any;

  aprobadores = ["Gaston Alles", "Noelia Sosa"];
  amountPayments = ["1","2","3","4","5","6","7","8","9","10","11","12"];
  periodicity = ["15","30","60"];
    
  constructor(private router: Router,private messageService: MessageService,private companyDTO: CompanyDTO,private companyService: CompanyService, private apiService: ApiService) { }

  ngOnInit() {

    this.urlCompanies = ApiService.apiURLCompanies;
    this.urlCompaniesPDF = ApiService.apiPdfURL;
    this.apiService.get(ApiService.apiURLCompanies).subscribe({next: companies => {
      this.companies = companies;
      console.log(companies);
    },
    error: (error: { message: any; }) =>{
      console.log(error.message);
      this.messageService.add({severity:'error', summary:error.message, life:2000});
    }
  })

  this.items = [
    {
      label: "Home"
    },
    {
      label: "Actas",
      items: [
          {
            label: "Calculadora",
            command: (event) => {
              this.showDialog();
          }}
      ]
    }
  ];
   }

  onFilter(event: any, table: Table){
  }

  searchActas(i:string) {
    this.companyDTO.setCompanyInformationID(this.companies[parseInt(i)].id);
    this.router.navigate(['boletas-emitidas']);
  }

  editData(i:string){
    this.companyDTO.setCompanyInformation(this.companies[parseInt(i)]);
    this.urlCompanies = ApiService.apiURLCompanies + this.companyDTO.getCompanyInformationMail();
    this.router.navigate(['actualizar-datos']);
  }

  clear (table: Table){
    table.clear();
  }

  showDialog() {
    this.display = true;
}

}
