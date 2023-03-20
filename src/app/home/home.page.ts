import { FIELDS_TABLE_CHEQUES } from './../model/mock-fieldsTableCheques';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Calculadora } from '../model/Calculadora';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display: boolean = false;  
  submitted: boolean = true;  
  value: any;
  minDate!: Date;
  selecAprobador: any;
  selecAmountPayments: any;
  selecPeriodicity: any;
  isRequerid:boolean =true;
  calculator!: Calculadora;
  fieldsTable = FIELDS_TABLE_CHEQUES;
  cheques: any;
  
  selectedBank: any;
  selectedBank2: any;
  accountNumber !: Number;
  zipCode !: string;
  constructor() {
  this.calculator = new Calculadora();
  }
    
  ngOnInit() {
    
    
  }



    guardarDatos(){

    }

}
