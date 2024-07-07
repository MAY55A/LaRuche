import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitsService } from 'src/app/services/produits.service';
import { Categorie } from 'src/app/shared/models/categorie';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit{
  form!: FormGroup;
  submitted: boolean = false;
  categories!: Categorie[];
  alert: number = 0;
  constructor(private prodService: ProduitsService, private fb: FormBuilder) { } 
  ngOnInit(): void {
    this.categories = this.prodService.getListCategories();
    this.form = this.fb.group({
      nom: ['', Validators.required],
      ctg: ['', Validators.required],
      prix: ['', Validators.required],
    })
  }
  get f() {
    return this.form.value;
  }
  submit(): void{
    if(this.form.valid) {
      var produit = {
        nom:this.f.nom,
        prix:this.f.prix,
        dateAjout: new Date().toISOString().split('T')[0],
        categorie: this.f.ctg
      }
      console.log(produit);
      this.prodService.addProduct(produit);
      this.alert = 1;
    } else {
      this.alert = -1;
    }
  }
}
