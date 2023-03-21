import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from './../components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCompaniesPageRoutingModule } from './search-companies-routing.module';

import { SearchCompaniesPage } from './search-companies.page';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCompaniesPageRoutingModule,
    TableModule,
    ButtonModule,
    AutoCompleteModule,
    InputTextModule,
    HttpClientModule,
    ComponentsModule,
    TranslateModule,
    MessageModule,
    MessagesModule,
    ToastModule,
  ],
  providers: [MessageService],
  declarations: [SearchCompaniesPage],
})
export class SearchCompaniesPageModule {}
