"use strict";(self.webpackChunkLaRuche=self.webpackChunkLaRuche||[]).push([[669],{669:(Z,l,r)=>{r.r(l),r.d(l,{ProduitsModule:()=>x});var d=r(6814),s=r(9310),h=r(9618),t=r(4946);const C=function(e){return["./list",e]};function m(e,p){if(1&e&&(t.TgZ(0,"li",1)(1,"a",2),t._uU(2),t.qZA()()),2&e){const n=p.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,C,n.id)),t.xp6(1),t.Oqu(n.nom)}}let f=(()=>{class e{constructor(n){this.router=n,this.categories=h.b}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(s.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-produits"]],decls:4,vars:1,consts:[["routerLinkActive","active",4,"ngFor","ngForOf"],["routerLinkActive","active"],[3,"routerLink"]],template:function(o,i){1&o&&(t.TgZ(0,"nav")(1,"ul"),t.YNc(2,m,3,4,"li",0),t.qZA()(),t._UZ(3,"router-outlet")),2&o&&(t.xp6(2),t.Q6J("ngForOf",i.categories))},dependencies:[d.sg,s.lC,s.rH,s.Od],styles:["nav[_ngcontent-%COMP%]{width:800px;margin:50px auto}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:25%;list-style:none;text-align:center;padding:10px 0;cursor:pointer;transition:all .2s;-webkit-transition:all .2s;border:1px #facd1a solid}@media (max-width: 800px){nav[_ngcontent-%COMP%]{width:50%}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%}}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#facd1a}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;flex-wrap:wrap;padding:0;box-shadow:0 10px 20px #facd1933,0 6px 6px #facd194d}a[_ngcontent-%COMP%]{text-decoration:none;color:#facd1a}nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#facd1a}nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#fff}"]})}return e})();var _=r(8211),a=r(95);function P(e,p){if(1&e&&(t.TgZ(0,"h3"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij('" ',n.categorie.description,' "')}}function M(e,p){if(1&e&&(t.TgZ(0,"div",9),t._UZ(1,"img",10),t.TgZ(2,"h3",11),t._uU(3),t.qZA(),t.TgZ(4,"h4",12),t._uU(5),t.qZA()()),2&e){const n=p.$implicit;t.xp6(1),t.Q6J("src","../assets/images/"+n.id+".png",t.LSH),t.xp6(2),t.Oqu(n.nom),t.xp6(2),t.hij("",n.prix," Dts")}}let u=(()=>{class e{constructor(n,o){this.prodService=n,this.route=o,this.tabProduits=[],this.ProduitsAvantRecherche=[],this.sort=0,this.order=0,this.nom=""}ngOnInit(){this.route.paramMap.subscribe(n=>{this.ctg=n.get("categorie"),null==this.ctg?this.getProducts():(this.categorie=this.prodService.getCategory(Number(this.ctg)),this.getProductsByCategory(this.categorie))})}onSortChange(){this.tabProduits.sort(1==this.sort?(n,o)=>n.prix-o.prix:(n,o)=>Date.parse(n.dateAjout)-Date.parse(o.dateAjout)),this.order||(this.onOrderChange(),this.order=1)}onOrderChange(){this.tabProduits.reverse()}getProducts(){this.tabProduits.push(...this.prodService.getProducts()),this.ProduitsAvantRecherche.push(...this.prodService.getProducts()),this.onSortChange()}getProductsByCategory(n){this.tabProduits=this.prodService.getProducts().filter(o=>o.categorie===n),this.ProduitsAvantRecherche=[...this.tabProduits],this.onSortChange()}onSearchChange(){this.tabProduits=this.ProduitsAvantRecherche.filter(n=>n.nom.toLowerCase().includes(this.nom.toLowerCase()))}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(_.o),t.Y36(s.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-list"]],decls:24,vars:5,consts:[[4,"ngIf"],[1,"form"],["id","search"],["type","text","placeholder","Chercher",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["value","0"],["value","1"],["id","produits"],["class","prod",4,"ngFor","ngForOf"],[1,"prod"],[1,"prod-img",3,"src"],[1,"prod-name"],[1,"prod-prix"]],template:function(o,i){1&o&&(t.YNc(0,P,2,1,"h3",0),t.TgZ(1,"div",1)(2,"div",2)(3,"input",3),t.NdJ("ngModelChange",function(g){return i.nom=g})("ngModelChange",function(){return i.onSearchChange()}),t.qZA()(),t.TgZ(4,"div")(5,"label"),t._uU(6,"tri\xe9 par :"),t.qZA(),t._uU(7,"\xa0 "),t.TgZ(8,"select",4),t.NdJ("ngModelChange",function(g){return i.sort=g})("ngModelChange",function(){return i.onSortChange()}),t.TgZ(9,"option",5),t._uU(10,"date d'ajout"),t.qZA(),t.TgZ(11,"option",6),t._uU(12,"prix"),t.qZA()(),t._uU(13,"\xa0\xa0 "),t.TgZ(14,"label"),t._uU(15,"ordre :"),t.qZA(),t._uU(16,"\xa0 "),t.TgZ(17,"select",4),t.NdJ("ngModelChange",function(g){return i.order=g})("ngModelChange",function(){return i.onOrderChange()}),t.TgZ(18,"option",6),t._uU(19,"ascendant"),t.qZA(),t.TgZ(20,"option",5),t._uU(21,"descendant"),t.qZA()()()(),t.TgZ(22,"div",7),t.YNc(23,M,6,3,"div",8),t.qZA()),2&o&&(t.Q6J("ngIf",i.categorie),t.xp6(3),t.Q6J("ngModel",i.nom),t.xp6(5),t.Q6J("ngModel",i.sort),t.xp6(9),t.Q6J("ngModel",i.order),t.xp6(6),t.Q6J("ngForOf",i.tabProduits))},dependencies:[d.sg,d.O5,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.On],styles:["h3[_ngcontent-%COMP%]{text-align:center;margin:5%}#produits[_ngcontent-%COMP%]{margin:5%;padding:2%;display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap;gap:10px}.prod[_ngcontent-%COMP%]{width:300px;height:450px;background-color:#ffea6180;text-align:center;box-shadow:0 10px 20px #00000030,0 6px 6px #0000003b}.prod-img[_ngcontent-%COMP%]{height:300px}.prod-prix[_ngcontent-%COMP%]{font-weight:700}.form[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;flex-wrap:wrap;margin:2%}#search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:50px;padding-left:5px;margin-bottom:10px}"]})}return e})();const v=[{path:"",component:f,children:[{path:"list/:categorie",component:u},{path:"list",component:u}]}];let O=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(v),s.Bz]})}return e})(),x=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[d.ez,O,a.u5]})}return e})()}}]);