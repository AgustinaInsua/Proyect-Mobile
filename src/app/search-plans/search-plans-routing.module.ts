import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActasDePlanesPage } from '../actas-de-planes/actas-de-planes.page';
import { SearchRecordsPage } from '../search-records/search-records.page';

import { SearchPlansPage } from './search-plans.page';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Buscar Planes'
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: null
        },
        component: SearchPlansPage,
      },
      {
        path: 'search-records',       
        data: {
          breadcrumb: "Buscar Actas"
        },
        children: [
          {
            path: '',
            data: {
              breadcrumb: null
            },
              component: SearchRecordsPage,
          },
          {
            path: 'actas-de-planes',       
            data: {
              breadcrumb: "Actas de Planes"
            },
            children: [
              {
                path: '',
                data: {
                  breadcrumb: null
                },
                  component: ActasDePlanesPage,
              }
            ]
          }
        ]
      }

    ],
  },
  {
    path: 'search-records',
    loadChildren: () => import('../search-records/search-records.module').then( m => m.SearchRecordsPageModule)
  },
  {
    path: 'actas-de-planes',
    loadChildren: () => import('../actas-de-planes/actas-de-planes.module').then( m => m.ActasDePlanesPageModule)
  }

  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPlansPageRoutingModule {}
