import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })

export class RecordDTO {
  recordByCompany:any;
  period:any;
  id: any;
  mail: any;

  constructor() { }

  setRecordByCompany(recordInformation: any){
    this.recordByCompany = recordInformation; 
    console.log(this.recordByCompany);
  }

  getRecordByCompany(){
    return this.recordByCompany;
  }
 /* getEmployeesByCompany(company :string){    this.employees =
    COMPANIES.find(c => c.name == company)?.employees!;    return this.employees;  } */
  setPeriodByRecord(recordInformation: string){
    this.period = this.recordByCompany.find( (c: { nroActa: string; }) => c.nroActa == recordInformation)?.periodos!; 
    console.log(this.period);
  }

  getPeriodByRecord(){
    return this.period;
  }

}
