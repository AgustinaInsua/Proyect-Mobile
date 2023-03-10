import { Component, OnInit } from '@angular/core';
import { Calculadora } from 'src/app/model/Calculadora';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

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

  selectEvent(event:any){
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
