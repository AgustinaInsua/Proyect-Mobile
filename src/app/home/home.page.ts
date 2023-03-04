import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display: boolean = false;
  value: any;
  minDate!: Date;
  selecAprobador: any;
  selecAmountPayments: any;
  selecPeriodicity: any;
  isRequerid:boolean =true;
  aprobadores:any;
  amountPayments:any;
  periodicity:any;
  myForm!: FormGroup;

  constructor() {}
    
  ngOnInit() {
    this.minDate = new Date();
    this.aprobadores = ["Gaston Alles", "Noelia Sosa"];
    this.amountPayments = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    this.periodicity = ["15","30","60"];
    this.myForm = new FormGroup ({
      calendar: new FormControl('', [
        Validators.required
      ]),
    pago: new FormControl('', [
        Validators.required
      ])
    })
  }   
  get f(){
    return this.myForm.controls;
  } 
  get calendar(){
    return this.myForm.get('calendar');
  }
  get pago(){
    return this.myForm.get('calendar');
  }

  public isDirty(field: string): boolean {
    return this.myForm.controls[field].dirty;
  }

  public isTouched(field: string): boolean {
    return this.myForm.controls[field].touched;
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
