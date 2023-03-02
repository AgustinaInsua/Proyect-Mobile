import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display: boolean = false;
  value: any;
  selecAprobador: any;
  selecAmountPayments: any;
  selecPeriodicity: any;
  constructor() {}

    aprobadores = ["Gaston Alles", "Noelia Sosa"];
    amountPayments = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    periodicity = ["15","30","60"];
    showDialog() {
        this.display = true;
    }
}
