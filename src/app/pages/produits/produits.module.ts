import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { ProduitsComponent } from './produits.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProduitsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    FormsModule
  ]
})
export class ProduitsModule { }
