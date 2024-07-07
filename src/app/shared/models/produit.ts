import { Categorie } from "./categorie";

export class Produit {
    id? : number; 
    nom? : string; 
    prix? : number; 
    dateAjout? : string;
    categorie? : Categorie;

   constructor(args: Produit = {}) { 
    this.id = args.id; 
    this.nom = args.nom; 
    this.prix = args.prix; 
    this.dateAjout = args.dateAjout;
    this.categorie = args.categorie; 
    } 
   } 