export class Categorie {
    id? : number; 
    nom? : string; 
    description? : string; 

   constructor(args: Categorie = {}) { 
    this.id = args.id; 
    this.nom = args.nom; 
    this.description = args.description; 
    } 
   } 