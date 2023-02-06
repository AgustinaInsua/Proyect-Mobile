import { COMPANIES } from './../model/mock-company';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { FIELDS_TABLE_COMPANY } from '../model/mock-fieldsTableCompany';

@Component({
  selector: 'app-search-companies',
  templateUrl: './search-companies.page.html',
  styleUrls: ['./search-companies.page.scss'],
})
export class SearchCompaniesPage implements OnInit {
  companies = COMPANIES;
  fieldsTableCompany = FIELDS_TABLE_COMPANY;
  suggestionsCompanies!: string[] ;
  constructor() { }

  ngOnInit() {
  }

  onFilter(event: any, table: Table){

  }

  clear (table: Table){
    table.clear();
  }

}
