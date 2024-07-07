import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'accueil',
        loadChildren: ()=>import("./home/home.module").then((m)=>m.HomeModule)
      },
      {
        path: 'produits',
        loadChildren: ()=>import("./produits/produits.module").then((m)=>m.ProduitsModule)
      },
      {
        path: 'admin',
        loadChildren: ()=>import("./admin/admin.module").then((m)=>m.AdminModule)
      },
      {
        path: '', redirectTo: 'accueil', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
