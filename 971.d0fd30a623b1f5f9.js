"use strict";(self.webpackChunkLaRuche=self.webpackChunkLaRuche||[]).push([[971],{9971:(M,p,c)=>{c.r(p),c.d(p,{AdminModule:()=>y});var u=c(6814),m=c(9310),t=c(4946),l=c(8211),f=c(4632),n=c(95);function h(o,d){if(1&o&&(t.TgZ(0,"div",8),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.alert,"\n")}}function Z(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"tbody")(1,"tr")(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td",9)(13,"button",10),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.openEditForm(s))}),t._uU(14,"Modifier"),t.qZA(),t.TgZ(15,"button",11),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.deleteProduct(s))}),t._uU(16,"Supprimer"),t.qZA()()()()}if(2&o){const e=d.$implicit;t.xp6(3),t.Oqu(e.id),t.xp6(2),t.Oqu(e.nom),t.xp6(2),t.Oqu(e.prix),t.xp6(2),t.Oqu(e.categorie.nom),t.xp6(2),t.Oqu(e.dateAjout)}}function v(o,d){if(1&o&&(t.TgZ(0,"option",28),t._uU(1),t.qZA()),2&o){const e=d.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e.nom)}}function x(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"div",12)(1,"h2",13),t._uU(2,"Modifier Produit"),t.qZA(),t.TgZ(3,"div",14)(4,"form",15),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.submitEditForm())}),t.TgZ(5,"div",16)(6,"label",17),t._uU(7,"Nom:"),t.qZA(),t.TgZ(8,"input",18),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.selectedProduct.nom=r)}),t.qZA()(),t.TgZ(9,"div",16)(10,"label",19),t._uU(11,"Prix (en Dt):"),t.qZA(),t.TgZ(12,"input",20),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.selectedProduct.prix=r)}),t.qZA()(),t.TgZ(13,"div",16)(14,"label",21),t._uU(15,"Date d'ajout:"),t.qZA(),t.TgZ(16,"input",22),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.selectedProduct.dateAjout=r)}),t.qZA()(),t.TgZ(17,"div",16)(18,"label",23),t._uU(19,"Cat\xe9gorie:"),t.qZA(),t.TgZ(20,"select",24),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.selectedProduct.categorie=r)}),t.YNc(21,v,2,2,"option",25),t.qZA()(),t.TgZ(22,"button",26),t._uU(23,"Save Changes"),t.qZA(),t.TgZ(24,"button",27),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.closeEditForm())}),t._uU(25,"Cancel"),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(8),t.Q6J("ngModel",e.selectedProduct.nom),t.xp6(4),t.Q6J("ngModel",e.selectedProduct.prix),t.xp6(4),t.Q6J("ngModel",e.selectedProduct.dateAjout),t.xp6(4),t.Q6J("ngModel",e.selectedProduct.categorie),t.xp6(1),t.Q6J("ngForOf",e.categories)}}const C=function(o){return{display:o}};let g=(()=>{class o{constructor(e,i){this.prodService=e,this.app=i,this.tabProduits=[],this.selectedProduct=null,this.alert=null,this.displayStyle="none"}ngOnInit(){this.categories=this.prodService.getListCategories(),this.tabProduits=this.prodService.getProducts()}openEditForm(e){this.selectedProduct={...e},this.displayStyle="block"}closeEditForm(){this.selectedProduct=null,this.displayStyle="none"}submitEditForm(){this.prodService.updateProduct(this.selectedProduct),this.closeEditForm(),this.tabProduits=this.prodService.getProducts(),this.alert="Produit n\xb0"+this.selectedProduct.id+" modifi\xe9 !"}deleteProduct(e){if(confirm("Supprimer ce Produit ?")){var i=e.id;this.prodService.deleteProduct(i);const r=this.tabProduits.indexOf(e);-1!==r&&this.tabProduits.splice(r,1),this.alert="Produit n\xb0"+i+" supprim\xe9 !"}}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(l.o),t.Y36(f.y))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-produits"]],decls:19,vars:6,consts:[["class","alert alert-info","role","alert",4,"ngIf"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["tabindex","-1","role","dialog",1,"modal",3,"ngStyle"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-body"],["class","card",4,"ngIf"],["role","alert",1,"alert","alert-info"],[1,"d-flex"],[1,"btn","btn-primary",3,"click"],[1,"mx-3","btn","btn-danger",3,"click"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"ngSubmit"],[1,"form-group"],["for","nom"],["id","nom","name","nom","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","prix"],["type","number","step","0.250","min","1","id","prix","name","prix","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","date"],["type","date","id","date","name","date","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","ctg"],["id","ctg","name","ctg","required","",1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary"],["type","button",1,"btn","btnsecondary",3,"click"],[3,"value"]],template:function(i,r){1&i&&(t.YNc(0,h,2,1,"div",0),t.TgZ(1,"table",1)(2,"tr")(3,"TH"),t._uU(4,"Id"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Nom"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Prix(Dts)"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Cat\xe9gorie"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Date d'ajout"),t.qZA()(),t.YNc(13,Z,17,5,"tbody",2),t.qZA(),t.TgZ(14,"div",3)(15,"div",4)(16,"div",5)(17,"div",6),t.YNc(18,x,26,5,"div",7),t.qZA()()()()),2&i&&(t.Q6J("ngIf",r.alert),t.xp6(13),t.Q6J("ngForOf",r.tabProduits),t.xp6(1),t.Q6J("ngStyle",t.VKq(4,C,r.displayStyle)),t.xp6(4),t.Q6J("ngIf",r.selectedProduct))},dependencies:[u.sg,u.O5,u.PC,n._Y,n.YN,n.Kr,n.Fj,n.wV,n.EJ,n.JJ,n.JL,n.Q7,n.qQ,n.On,n.F]})}return o})();function A(o,d){1&o&&(t.TgZ(0,"div",12),t._uU(1," produit ajout\xe9!\n"),t.qZA())}function P(o,d){1&o&&(t.TgZ(0,"div",13)(1,"strong"),t._uU(2,"Ech\xe9c !"),t.qZA(),t._uU(3," Remplir tous les champs par des donn\xe9es valides !\n"),t.qZA())}function T(o,d){if(1&o&&(t.TgZ(0,"option",14),t._uU(1),t.qZA()),2&o){const e=d.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e.nom,"")}}let _=(()=>{class o{constructor(e,i){this.prodService=e,this.fb=i,this.submitted=!1,this.alert=0}ngOnInit(){this.categories=this.prodService.getListCategories(),this.form=this.fb.group({nom:["",n.kI.required],ctg:["",n.kI.required],prix:["",n.kI.required]})}get f(){return this.form.value}submit(){if(this.form.valid){var e={nom:this.f.nom,prix:this.f.prix,dateAjout:(new Date).toISOString().split("T")[0],categorie:this.f.ctg};console.log(e),this.prodService.addProduct(e),this.alert=1}else this.alert=-1}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(l.o),t.Y36(n.qu))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-ajout-produit"]],decls:19,vars:4,consts:[["class","alert alert-success","role","alert",4,"ngIf"],["class","alert alert-danger","role","alert",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","nom"],["formControlName","nom","type","text",1,"form-control"],["for","ctg"],["formControlName","ctg","name","ctg","id","ctg",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["for","prix"],["formControlName","prix","type","number","step","0.250","min","1",1,"form-control"],["type","submit",1,"btn","btn-outline-success","mt-2"],["role","alert",1,"alert","alert-success"],["role","alert",1,"alert","alert-danger"],[3,"value"]],template:function(i,r){1&i&&(t.YNc(0,A,2,0,"div",0),t.YNc(1,P,4,0,"div",1),t.TgZ(2,"form",2),t.NdJ("ngSubmit",function(){return r.submit()}),t.TgZ(3,"div",3)(4,"label",4),t._uU(5,"Nom Produit"),t.qZA(),t._UZ(6,"input",5),t.qZA(),t.TgZ(7,"div",3)(8,"label",6),t._uU(9,"Cat\xe9gorie"),t.qZA(),t.TgZ(10,"select",7),t.YNc(11,T,2,2,"option",8),t.qZA()(),t.TgZ(12,"div",3)(13,"label",9),t._uU(14,"Prix (Dts)"),t.qZA(),t._UZ(15,"input",10),t.qZA(),t.TgZ(16,"div",3)(17,"button",11),t._uU(18,"Ajouter"),t.qZA()()()),2&i&&(t.Q6J("ngIf",1==r.alert),t.xp6(1),t.Q6J("ngIf",-1==r.alert),t.xp6(1),t.Q6J("formGroup",r.form),t.xp6(9),t.Q6J("ngForOf",r.categories))},dependencies:[u.sg,u.O5,n._Y,n.YN,n.Kr,n.Fj,n.wV,n.EJ,n.JJ,n.JL,n.qQ,n.sg,n.u]})}return o})();const b=[{path:"",component:(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-admin"]],decls:8,vars:0,consts:[[1,"container"],["mt-3","",1,"row"],[1,"col","list"],[1,"col","add"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"Gestion des Produits"),t.qZA(),t.TgZ(3,"div",1)(4,"div",2),t._UZ(5,"app-list-produits"),t.qZA(),t.TgZ(6,"div",3),t._UZ(7,"app-ajout-produit"),t.qZA()()())},dependencies:[g,_],styles:["h2[_ngcontent-%COMP%]{text-align:center;font-size:250%;margin:5%}.col[_ngcontent-%COMP%]{box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b;margin:2%;padding:2%}.list[_ngcontent-%COMP%]{min-width:min-content}.add[_ngcontent-%COMP%]{height:500px}"]})}return o})(),children:[{path:"produits",component:g},{path:"ajouter",component:_}]}];let q=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(b),m.Bz]})}return o})(),y=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({providers:[l.o],imports:[u.ez,q,n.UX,n.u5]})}return o})()}}]);