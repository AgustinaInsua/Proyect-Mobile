import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActasDePlanesPage } from './actas-de-planes.page';

const routes: Routes = [
  {
    path: '',
    component: ActasDePlanesPage,
    data: {
      breadcrumb: 'Actas de planes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActasDePlanesPageRoutingModule {}
