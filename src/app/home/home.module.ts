import { ComponentsModule } from './../components.module';
import { HeaderModule } from './../components/header/header.module';
import { MenuModule } from '../components/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {SpeedDialModule} from 'primeng/speeddial';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    InputTextModule,
    TableModule,
    SpeedDialModule,
    ComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
