import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchRecordsPage } from './search-records.page';

const routes: Routes = [
  {
    path: '',
    component: SearchRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRecordsPageRoutingModule {}
