import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProduitsService } from 'src/app/services/produits.service';


@NgModule({
  declarations: [
    AdminComponent,
    ListProduitsComponent,
    AjoutProduitComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProduitsService
  ]
})
export class AdminModule { }
