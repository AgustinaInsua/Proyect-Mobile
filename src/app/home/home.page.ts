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
  banks: any;
  selectedBank: any;
  accountNumber !: Number;
  zipCode !: string;
  constructor() {
  this.calculator = new Calculadora();
  }
    
  ngOnInit() {
    this.cheques = [
      {
        cuote: "1",
        datePayment: "10-02-23",
        dateAcred: "",
        amountPay: "4215",
        import: "4215",
        bank : ""
      },
      {
        cuote: "2",
        datePayment: "10-03-23",
        dateAcred: "",
        amountPay: "4324",
        import: "4324",
        bank : ""
      }     
    ];
    this.banks = [
      {name:"Santander"}, 
      {name:"ICBC"}, 
      {name:"Galicia"}, 
      {name:"Credicoop"}, 
      {name:"Provincia"}, 
      {name:"Brubank"}, 
      {name:"Nacion"}, 
      {name:"BBVA"}, 
      {name:"Patagonia"}];
  }


  showDialog() {
    this.display = true;
   }

    guardarDatos(){

    }

}
