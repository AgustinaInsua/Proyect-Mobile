import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPlansPage } from './search-plans.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPlansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPlansPageRoutingModule {}
