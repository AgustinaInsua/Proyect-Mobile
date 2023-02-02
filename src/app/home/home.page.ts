import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { COMPANIES } from '../model/mock-company';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fizcalizaciones = COMPANIES;
  items !: MenuItem[];
  constructor() {}

  ngOnInit(){
    this.items = [
      {
          icon: 'pi pi-file-excel',
          command: () => {
            console.log();
              //this.exportExcel();
              //this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          },
      },
      {
        icon: 'pi pi-file-pdf',
        command: () => {
          console.log();
            //this.exportPdf();
            //this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        },
    }
  ];
  }

  onFilter(event: any, otro: any){

  }

  clear (table: Table){
    table.clear();
  }
}
