import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';
import { Categorie } from 'src/app/shared/models/categorie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  tabProduits: any[] = [];
  ProduitsAvantRecherche: any[] = [];
  categorie?: Categorie;
  ctg!:string | null;
  sort: number = 0;
  order: number = 0;
  nom: string = '';
  constructor(private prodService: ProduitsService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap)=> {
        this.ctg = params.get('categorie');
        if(this.ctg == null)
          this.getProducts();
        else {
          this.categorie = this.prodService.getCategory(Number(this.ctg));
          this.getProductsByCategory(this.categorie!);
        }
        });
  }
  onSortChange(): void {
    
    if(this.sort==1)
      this.tabProduits.sort((a,b)=>a.prix - b.prix);
    else{
      this.tabProduits.sort((a,b)=> Date.parse(a.dateAjout) - Date.parse(b.dateAjout));
    }
    if(!this.order) {
      this.onOrderChange();
      this.order = 1;
    }
  }
  onOrderChange(): void {
    this.tabProduits.reverse();
  }
  getProducts(): void {
        this.tabProduits.push(...this.prodService.getProducts());
        this.ProduitsAvantRecherche.push(...this.prodService.getProducts());
        this.onSortChange();
  }
  getProductsByCategory(ctg: Categorie): void {
        this.tabProduits = this.prodService.getProducts().filter((p: any) => p.categorie === ctg);
        this.ProduitsAvantRecherche = [...this.tabProduits];
        this.onSortChange();

  }
  onSearchChange() : void {
    this.tabProduits = this.ProduitsAvantRecherche.filter((p)=>p.nom.toLowerCase().includes(this.nom.toLowerCase()));
  }
}
