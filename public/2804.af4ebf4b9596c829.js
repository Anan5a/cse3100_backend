"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2804],{2804:(T,m,i)=>{i.r(m),i.d(m,{DepartmentPageModule:()=>x});var p=i(9808),l=i(4182),e=i(9537),c=i(333),t=i(2096),u=i(5148),g=i(8555),Z=i(2313);function h(n,o){if(1&n){const r=t.EpF();t.TgZ(0,"ion-col",3)(1,"ion-card",4)(2,"ion-card-header"),t._UZ(3,"img",5),t.TgZ(4,"ion-card-title"),t._uU(5),t.qZA(),t.TgZ(6,"ion-card-subtitle"),t._uU(7),t.qZA()(),t.TgZ(8,"ion-card-content"),t._uU(9),t.TgZ(10,"ion-list")(11,"ion-item")(12,"ion-button",6),t.NdJ("click",function(){const s=t.CHM(r).$implicit;return t.oxw().router.navigateByUrl("/admin/department/edit/"+s.id)}),t._UZ(13,"ion-icon",7),t._uU(14," Edit "),t.qZA(),t.TgZ(15,"ion-button",6),t.NdJ("click",function(){const s=t.CHM(r).$implicit;return t.oxw().router.navigateByUrl("/departments/"+s.id+"/students")}),t._UZ(16,"ion-icon",8),t._uU(17," Students "),t.qZA()()()()()()}if(2&n){const r=o.$implicit,a=t.oxw();t.xp6(1),t.Q6J("button",!0),t.xp6(2),t.MGl("alt","dept image ",r.name,""),t.Q6J("src",a.sanitizer.bypassSecurityTrustUrl(r.backdrop),t.LSH),t.xp6(2),t.AsE("",r.name," (",r.name_short,")"),t.xp6(2),t.hij("Since: ",r.birth_date," "),t.xp6(2),t.hij(" ",r.description," ")}}const D=[{path:"",component:(()=>{class n{constructor(r,a,d,s){this.router=r,this.departmentService=a,this.loaderService=d,this.sanitizer=s}ngOnInit(){this.loadDepartments()}loadDepartments(){this.departmentService.getDepartments().subscribe(r=>{this.departments=r},r=>{this.loaderService.showToast("Failed to load departments","danger",3e3)})}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(c.F0),t.Y36(u.n),t.Y36(g.D),t.Y36(Z.H7))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-department"]],decls:10,vars:1,consts:[["color","primary"],["slot","start"],["size-sm","4","size-xl","4","size-md","6","size-lg","4","size-xs","12",4,"ngFor","ngForOf"],["size-sm","4","size-xl","4","size-md","6","size-lg","4","size-xs","12"],[3,"button"],[3,"src","alt"],["color","primary",3,"click"],["name","create-sharp","ios","create-outline","md","create-sharp"],["name","list-sharp","ios","list-outline","md","list-sharp"]],template:function(r,a){1&r&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"admin>departments"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row"),t.YNc(9,h,18,7,"ion-col",2),t.qZA()()()),2&r&&(t.xp6(9),t.Q6J("ngForOf",a.departments))},directives:[e.Gu,e.sr,e.Sm,e.fG,e.wd,e.W2,e.jY,e.Nd,p.sg,e.wI,e.PM,e.Zi,e.Dq,e.tO,e.FN,e.q_,e.Ie,e.YG,e.gu],styles:[""]}),n})(),children:[{path:"add",component:(()=>{class n{constructor(){}ngOnInit(){}createDepartment(){}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-department"]],decls:15,vars:0,consts:[["color","primary"],["slot","start"],["size-xs","12","size-md","3","size-lg","4"],[1,""],["ion-text","",1,"white"]],template:function(r,a){1&r&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"admin>add departments"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row"),t._UZ(9,"ion-col",2),t.TgZ(10,"ion-col",3)(11,"h1",4),t._uU(12,"Add department"),t.qZA(),t.TgZ(13,"p",4),t._uU(14,"Create new department"),t.qZA()()()()())},directives:[e.Gu,e.sr,e.Sm,e.fG,e.wd,e.W2,e.jY,e.Nd,e.wI],styles:[""]}),n})()},{path:"edit/:id",component:(()=>{class n{constructor(){}ngOnInit(){}loadDepartment(r){}updateDepartment(){}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-department"]],decls:15,vars:0,consts:[["color","primary"],["slot","start"],["size-xs","12","size-md","3","size-lg","4"],[1,""],["ion-text","",1,"white"]],template:function(r,a){1&r&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"admin>edit departments"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row"),t._UZ(9,"ion-col",2),t.TgZ(10,"ion-col",3)(11,"h1",4),t._uU(12,"Signup"),t.qZA(),t.TgZ(13,"p",4),t._uU(14,"Create new account"),t.qZA()()()()())},directives:[e.Gu,e.sr,e.Sm,e.fG,e.wd,e.W2,e.jY,e.Nd,e.wI],styles:[""]}),n})()}]}];let f=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(D)],c.Bz]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,l.u5,e.Pc,f,l.UX]]}),n})()}}]);