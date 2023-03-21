import { ComponentsModule } from './../components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchRecordsPageRoutingModule } from './search-records-routing.module';

import { SearchRecordsPage } from './search-records.page';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchRecordsPageRoutingModule,
    ComponentsModule,
    ButtonModule,
    TableModule,
    ComponentsModule,
    DropdownModule,
  ],
  declarations: [SearchRecordsPage],
})
export class SearchRecordsPageModule {}
