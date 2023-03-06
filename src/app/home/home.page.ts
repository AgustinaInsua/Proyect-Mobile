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
    console.log(event);
    if(this.selecAmountPayments !=null && this.calculator.date != null ){
      console.log("Estan los campos completados", this.selecAmountPayments);
      this.submitted = false; 
      }
      console.log("NO Estan los campos completados");
    this.submitted = true;
  }

    showDialog() {
    this.display = true;
   }

    guardarDatos(){

    }
}
