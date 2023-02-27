import { MessageService } from 'primeng/api';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    InputTextModule,
    ButtonModule,
    ToastModule
  ],
  declarations: [LoginPage],
  providers: [MessageService]
})
export class LoginPageModule {}
