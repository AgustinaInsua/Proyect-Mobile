import { ComponentsModule } from './../components.module';
import { HeaderModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletasEmitidasPageRoutingModule } from './boletas-emitidas-routing.module';
import { BoletasEmitidasPage } from './boletas-emitidas.page';

import { MenuModule } from '../components/menu/menu.module';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoletasEmitidasPageRoutingModule,
    TableModule,
    ButtonModule,
    AutoCompleteModule,
    InputTextModule,
    HttpClientModule,
    ComponentsModule
  ],
  declarations: [BoletasEmitidasPage]
})
export class BoletasEmitidasPageModule {}
