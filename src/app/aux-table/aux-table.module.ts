import { ComponentsModule } from './../components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {AuxTablePageRoutingModule} from './aux-table-routing.module';
import { AuxTablePage } from './aux-table.page';

import { TableModule } from 'primeng/table';
import { MenuModule } from '../components/menu/menu.module';
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
    TableModule,
    ButtonModule,
    AutoCompleteModule,
    InputTextModule,
    HttpClientModule,
    ComponentsModule
  ],
  declarations: [AuxTablePage]
})
export class AuxTablePageModule {}
