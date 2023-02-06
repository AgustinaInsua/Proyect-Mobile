import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'search-companies',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'actualizar-datos',
    loadChildren: () => import('./actualizar-datos/actualizar-datos.module').then( m => m.ActualizarDatosPageModule)
  },
  {
    path: 'boletas-emitidas',
    loadChildren: () => import('./boletas-emitidas/boletas-emitidas.module').then( m => m.BoletasEmitidasPageModule)
  },
  { 
    //Este es solo para pruebas directas en menu
    path: 'menu',
    component:MenuComponent
  },
  {
    path: 'search-companies',
    loadChildren: () => import('./search-companies/search-companies.module').then( m => m.SearchCompaniesPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
