import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoletasEmitidasPage } from './boletas-emitidas.page';

const routes: Routes = [
  {
    path: '',
    component: BoletasEmitidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoletasEmitidasPageRoutingModule {}
