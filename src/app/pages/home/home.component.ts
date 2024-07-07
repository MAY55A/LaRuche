import { Component } from '@angular/core';
import { Categorie } from 'src/app/shared/models/categorie';
import { categories } from 'src/app/shared/models/categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories: Categorie[] = categories;
}
