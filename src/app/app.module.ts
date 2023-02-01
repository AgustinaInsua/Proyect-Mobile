import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [AppComponent],
  imports:[ BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
            InputTextModule
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
