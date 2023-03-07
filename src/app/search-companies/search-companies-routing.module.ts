import { ActualizarDatosPage } from './../actualizar-datos/actualizar-datos.page';
import { BoletasEmitidasPage } from './../boletas-emitidas/boletas-emitidas.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCompaniesPage } from './search-companies.page';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Buscar Empresas'
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: null
        },
        component: SearchCompaniesPage,
      },
      {
        path: 'boletas-emitidas',       
        data: {
          breadcrumb: "Boletas Emitidas"
        },
        children: [
          {
            path: '',
            data: {
              breadcrumb: null
            },
              component: BoletasEmitidasPage,
          }]
      },
      {
        path: 'actualizar-datos',       
        data: {
          breadcrumb: "Actualizar actas"
        },
        children: [
          {
            path: '',
            data: {
              breadcrumb: null
            },
              component: ActualizarDatosPage,
          }]
      }
    ],
  },
  {
    path: 'boletas-emitidas',       
    loadChildren: () => import('../boletas-emitidas/boletas-emitidas.module').then( m => m.BoletasEmitidasPageModule)
  },
  {
    path: 'actualizar-datos',
    loadChildren: () => import('../actualizar-datos/actualizar-datos.module').then( m => m.ActualizarDatosPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCompaniesPageRoutingModule {}
