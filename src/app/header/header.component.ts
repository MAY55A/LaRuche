import { Component } from '@angular/core';
import { categories } from '../shared/models/categories';
import { Categorie } from '../shared/models/categorie';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  categories: Categorie[] = categories;
}
