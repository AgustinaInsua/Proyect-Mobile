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

  constructor() {
  this.calculator = new Calculadora();
  }
    
  ngOnInit() {
  }

  onSelect(event:any){
    if(this.selecAmountPayments !=null && this.calculator.date != null ){
      this.submitted = false; 
      }else {
      this.submitted = true; }
  }

  showDialog() {
    this.display = true;
   }

    guardarDatos(){

    }
}
