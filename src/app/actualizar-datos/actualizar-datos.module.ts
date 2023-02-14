import { ComponentsModule } from './../components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ActualizarDatosPageRoutingModule } from './actualizar-datos-routing.module';
import { ActualizarDatosPage } from './actualizar-datos.page';

import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarDatosPageRoutingModule,
    TableModule,
    ButtonModule,
    AutoCompleteModule,
    InputTextModule,
    HttpClientModule,
    CardModule,
    AccordionModule,
    ComponentsModule
  ],
  declarations: [ActualizarDatosPage]
})
export class ActualizarDatosPageModule {}
