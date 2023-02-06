import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCompaniesPage } from './search-companies.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCompaniesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCompaniesPageRoutingModule {}
