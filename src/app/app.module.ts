import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [AppComponent],
  imports:[ BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
            InputTextModule,
            ButtonModule,
            BrowserAnimationsModule
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
