import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ProduitsService } from 'src/app/services/produits.service';
import { Categorie } from 'src/app/shared/models/categorie';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit{
  tabProduits: any[] = [];
  categories!: Categorie[];
  selectedProduct: any = null;
  alert: string | null = null;

  constructor(private prodService: ProduitsService, private app: AppComponent) {}
  ngOnInit(): void {
    this.categories = this.prodService.getListCategories();
    this.tabProduits = this.prodService.getProducts()
  }
  displayStyle = "none";
  openEditForm(Product: any): void {
    this.selectedProduct = {...Product};
    this.displayStyle = "block";
  }
  closeEditForm(): void {
    this.selectedProduct = null;
    this.displayStyle = "none";
  }
  submitEditForm(): void {
    this.prodService.updateProduct(this.selectedProduct);
    this.closeEditForm();
    this.tabProduits = this.prodService.getProducts()
    this.alert = "Produit n°" + this.selectedProduct.id + " modifié !";
  }
  deleteProduct(Product: any): void {
    if (confirm('Supprimer ce Produit ?')) {
      var id = Product.id;
      this.prodService.deleteProduct(id);
      const index = this.tabProduits.indexOf(Product);
      if (index !== -1) {
        this.tabProduits.splice(index, 1);
      }
      this.alert = "Produit n°" + id + " supprimé !";
    }
  }
}
