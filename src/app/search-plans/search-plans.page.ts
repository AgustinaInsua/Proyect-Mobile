import { RoutingService } from './../service/routing-service/routing.service';
import { MessageService } from 'primeng/api';
import { ApiService } from './../service/api-service/api.service';
import { FIELDS_TABLE_PLANS } from './../model/mock-fieldsTablePlans';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Company } from '../model/Company';

@Component({
  selector: 'app-search-plans',
  templateUrl: './search-plans.page.html',
  styleUrls: ['./search-plans.page.scss'],
})
export class SearchPlansPage implements OnInit {
  fieldsTablePlans = FIELDS_TABLE_PLANS;
  companies !: Company[];
  constructor(
    private router: Router,
    private apiService: ApiService,
    private messageService: MessageService,
    private routerService: RoutingService) { }

  ngOnInit() {
    this.apiService.get(ApiService.apiURLCompanies).subscribe({next: companies => {
      this.companies = companies;
    },
    error: (error: { message: any; }) =>{
      this.messageService.add({severity:'error', summary:error.message, life:2000});
    }
  })
  }

  navToSearchRecords(){
    //this.router.navigate(['search-records']);
    this.routerService.navTo("search-plans/search-records");
  }

  onFilter(event: any, table: Table){
  }

  clear (table: Table){
    table.clear();
  }
}
