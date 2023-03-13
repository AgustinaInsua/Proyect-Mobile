import { ApiService } from './../service/api-service/api.service';
import { FIELDS_TABLE_RECORDS } from './../model/mock-fieldsTableRecords';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-records',
  templateUrl: './search-records.page.html',
  styleUrls: ['./search-records.page.scss'],
})
export class SearchRecordsPage implements OnInit {
  records : any;
  fieldsTableRecords = FIELDS_TABLE_RECORDS;
  constructor(private router: Router, private apiService: ApiService) { }
  
  ngOnInit() {
    this.apiService.get(ApiService.apiURLCompanies + "/64640/actas").subscribe({next: records => {
      this.records = records;
    }});
  }

  paymentRecords (){
    this.router.navigate(['search-plans/search-records/actas-de-planes']);
  }

  onFilter(event : any, dtCompanies: Table){

  }

  clear(table : Table){
    table.clear();
  }
}
