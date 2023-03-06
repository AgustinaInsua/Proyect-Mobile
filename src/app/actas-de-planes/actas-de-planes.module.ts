import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from './../components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';


import { ActasDePlanesPageRoutingModule } from './actas-de-planes-routing.module';

import { ActasDePlanesPage } from './actas-de-planes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActasDePlanesPageRoutingModule,
    TableModule,
    ButtonModule,
    AutoCompleteModule,
    InputTextModule,
    HttpClientModule,
    CardModule,
    AccordionModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [ActasDePlanesPage]
})
export class ActasDePlanesPageModule {}
