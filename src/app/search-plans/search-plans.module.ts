import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ComponentsModule } from './../components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPlansPageRoutingModule } from './search-plans-routing.module';

import { SearchPlansPage } from './search-plans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPlansPageRoutingModule,
    ComponentsModule,
    ButtonModule,
    TranslateModule,
    InputTextModule,
    TableModule
  ],
  providers: [MessageService],
  declarations: [SearchPlansPage]
})
export class SearchPlansPageModule {}
