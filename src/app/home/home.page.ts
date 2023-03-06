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
  submitted!: boolean;
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
  onSubmit() { 
    if(this.calculator.date == null  || this.selecAmountPayments ==null){
      console.log("no hay fecha");
        this.submitted = true; 
    }
    console.log("mostrar boton");
    this.submitted = false;
}

  onSelect(event:any){
    console.log(event);
  }
    showDialog() {
    this.display = true;
   }

    guardarDatos(){

    }
}
