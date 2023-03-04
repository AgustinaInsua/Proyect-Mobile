import { TranslateModule } from '@ngx-translate/core';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MenubarModule
  ],
  declarations: [HeaderComponent, MenuComponent],
  exports: [HeaderComponent, MenuComponent]
})
export class ComponentsModule {}