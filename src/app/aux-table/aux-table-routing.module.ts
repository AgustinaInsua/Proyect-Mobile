import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuxTablePage } from './aux-table.page';

const routes: Routes = [
  {
    path: '',
    component: AuxTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxTablePageRoutingModule {}
