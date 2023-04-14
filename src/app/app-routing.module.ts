import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  { 
    //Este es solo para pruebas directas en menu
    path: 'menu',
    component:MenuComponent
  },
  {
    path: 'search-companies',
    loadChildren: () => import('./search-companies/search-companies.module').then( m => m.SearchCompaniesPageModule)
  },
  {
    path: 'search-plans',
    loadChildren: () => import('./search-plans/search-plans.module').then( m => m.SearchPlansPageModule)
  },
  {
    path: 'search-records',
    loadChildren: () => import('./search-records/search-records.module').then( m => m.SearchRecordsPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./components/calculator/calculator.module').then( m => m.CalculatorPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
