import { HeaderModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ActualizarDatosPageRoutingModule } from './actualizar-datos-routing.module';
import { ActualizarDatosPage } from './actualizar-datos.page';

import { TableModule } from 'primeng/table';
import { MenuModule } from './../menu/menu.module';
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
    MenuModule,
    ButtonModule,
    AutoCompleteModule,
    InputTextModule,
    HttpClientModule,
    CardModule,
    AccordionModule,
    HeaderModule
  ],
  declarations: [ActualizarDatosPage]
})
export class ActualizarDatosPageModule {}
