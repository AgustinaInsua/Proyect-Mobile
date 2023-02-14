import { HeaderModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCompaniesPageRoutingModule } from './search-companies-routing.module';

import { SearchCompaniesPage } from './search-companies.page';
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
    SearchCompaniesPageRoutingModule,
    MenuModule,
    TableModule,
    ButtonModule,
    AutoCompleteModule,
    InputTextModule,
    HttpClientModule,
    HeaderModule
  ],
  declarations: [SearchCompaniesPage]
})
export class SearchCompaniesPageModule {}
