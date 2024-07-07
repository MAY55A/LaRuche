import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ProduitsComponent,
    children: [
      {path: 'list/:categorie', component: ListComponent},
      {path: 'list', component: ListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }
