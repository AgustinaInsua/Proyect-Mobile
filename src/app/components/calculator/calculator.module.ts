import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorPageRoutingModule } from './calculator-routing.module';

import { CalculatorPage } from './calculator.page';

import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {SpeedDialModule} from 'primeng/speeddial';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatorPageRoutingModule,
    InputTextModule,
    TableModule,
    SpeedDialModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [CalculatorPage]
})
export class CalculatorPageModule {}
