import { Injectable } from '@angular/core';
import { Produit } from '../shared/models/produit';
import { produits } from '../shared/models/produits';
import { Categorie } from '../shared/models/categorie';
import { categories } from '../shared/models/categories';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  produits: Produit[] = produits;
  categories: Categorie[] = categories;
  constructor() { }
  getProducts(): Produit[] {
    return this.produits;
  }
  getProductIndex(id: number): number {
    return produits.findIndex(p => p.id == id);
  }
  getCategory(id: number): Categorie | undefined{
    return this.categories.find(c => c.id == id);
  }
  getListCategories(): Categorie[] {
    return this.categories;
  }
  addProduct(data: Produit){
    if(produits.length == 0)
      data.id = 1;
    else 
      data.id = produits[produits.length-1].id! + 1;
    produits.push(data);
  }
  updateProduct(data: Produit){
    produits[this.getProductIndex(data.id!)] = data;
  }
  deleteProduct(id: number)  {
    produits.splice(this.getProductIndex(id), 1);
  }

}
