import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletasEmitidasPageRoutingModule } from './boletas-emitidas-routing.module';

import { BoletasEmitidasPage } from './boletas-emitidas.page';
import {TableModule} from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoletasEmitidasPageRoutingModule,
    TableModule
  ],
  declarations: [BoletasEmitidasPage]
})
export class BoletasEmitidasPageModule {}
