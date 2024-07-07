import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/shared/models/categorie';
import { categories } from 'src/app/shared/models/categories';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{
  categories: Categorie[] = categories;
  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  
}
