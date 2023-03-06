import { TranslateModule } from '@ngx-translate/core';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {BreadcrumbModule} from 'primeng/breadcrumb';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BreadcrumbModule
  ],
  declarations: [HeaderComponent, MenuComponent],
  exports: [HeaderComponent, MenuComponent]
})
export class ComponentsModule {}