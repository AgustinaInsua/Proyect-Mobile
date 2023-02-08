import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {AuxTablePageRoutingModule} from './aux-table-routing.module';
import { AuxTablePage } from './aux-table.page';

import { TableModule } from 'primeng/table';
import { MenuModule } from './../menu/menu.module';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuxTablePageRoutingModule,
    MenuModule,
    TableModule,
    ButtonModule,
    AutoCompleteModule,
    InputTextModule,
    HttpClientModule
  ],
  declarations: [AuxTablePage]
})
export class AuxTablePageModule {}
