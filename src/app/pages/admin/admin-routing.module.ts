import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'produits', component: ListProduitsComponent},
      {path: 'ajouter', component: AjoutProduitComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
