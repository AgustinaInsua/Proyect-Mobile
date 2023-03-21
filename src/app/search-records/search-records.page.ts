import { StatusRecord } from './../model/StatusRecord';
import { ApiService } from './../service/api-service/api.service';
import { FIELDS_TABLE_RECORDS } from './../model/mock-fieldsTableRecords';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DropdownFilterOptions } from 'primeng/dropdown';

@Component({
  selector: 'app-search-records',
  templateUrl: './search-records.page.html',
  styleUrls: ['./search-records.page.scss'],
})
export class SearchRecordsPage implements OnInit {
  records: any;
  fieldsTableRecords = FIELDS_TABLE_RECORDS;
  status!: any;
  selectedStatus!: StatusRecord;
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get(ApiService.apiURLCompanies + '/64640/actas').subscribe({
      next: (records) => {
        this.records = records;
      },
    });
    this.status = [
      {
        code: 'ABIERTA',
        label: 'Abierta',
      },
      {
        code: 'CERRADA',
        label: 'Cerrada',
      },
      {
        code: 'CANCELADA',
        label: 'Cancelada',
      },
    ];
  }

  paymentRecords() {
    this.router.navigate(['search-plans/search-records/actas-de-planes']);
  }

  onFilter(event: any, dtCompanies: Table) {}

  clear(table: Table) {
    table.clear();
  }

  filter(table: Table, value: any) {
    try {
      table.filter(value.code, 'estado', 'equals');
    } catch (e: any) {}
  }
}
