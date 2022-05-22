"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6946],{6946:(T,r,l)=>{l.r(r),l.d(r,{ProfilePageModule:()=>Z});var u=l(9808),c=l(4182),i=l(2159),a=l(333),d=l(8091),t=l(2096),f=l(7053),g=l(8555);function p(e,s){if(1&e&&(t.TgZ(0,"ion-list")(1,"ion-item")(2,"ion-avatar",1),t._UZ(3,"img",2),t.qZA(),t.TgZ(4,"ion-label")(5,"h2"),t._uU(6),t.qZA(),t.TgZ(7,"h3"),t._uU(8,"Position (Year-Year)"),t.qZA(),t.TgZ(9,"p"),t._uU(10,"Description"),t.qZA()()()()),2&e){const o=s.$implicit;t.xp6(6),t.Oqu(o.channel_data)}}let m=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile-item"]],inputs:{contacts:"contacts"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["slot","start"],["src","./avatar-han.png"]],template:function(o,n){1&o&&t.YNc(0,p,11,1,"ion-list",0),2&o&&t.Q6J("ngForOf",n.contacts)},directives:[u.sg,i.q_,i.Ie,i.BJ,i.Q$],styles:[""]}),e})();const h=[{path:"",component:(()=>{class e{constructor(o,n,v,A){this.router=o,this.route=n,this.authService=v,this.loader=A,this.student=new d.D}ngOnInit(){let o=this.route.snapshot.paramMap.get("id");o?this.loadProfile(o):this.loadProfile()}loadProfile(o=null){o?(console.log("loading "+o),this.authService.getProfileFromServer(o).subscribe(n=>{"ok"==n.status&&(this.student=n.data.info,this.contacts=n.data.contacts),"error"==n.status&&(this.loader.showToast("The profile not found!","danger",5e3),this.router.navigate(["homepage"]))})):(console.log("profile loader"),this.authService.getProfile().then(n=>{this.student=n}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.F0),t.Y36(a.gz),t.Y36(f.$),t.Y36(g.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile"]],decls:28,vars:5,consts:[["color","primary"],["slot","start"],["size-lg","4","size-md","4","size-sm","4","size-xl","4","size-xs","12"],[1,"avatar"],["alt","","src","../../../../assets/shapes.svg"],["color","primary","expand","full"],["color","secondary","expand","full"],["color","success","expand","full"],["size-lg","8","size-md","8","size-sm","8","size-xl","8","size-xs","12"],[3,"contacts"]],template:function(o,n){1&o&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"profile"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-row")(8,"ion-col",2)(9,"ion-card")(10,"ion-header")(11,"div",3),t._UZ(12,"img",4),t.qZA(),t.TgZ(13,"ion-card-title"),t._uU(14),t.qZA(),t.TgZ(15,"ion-card-subtitle"),t._uU(16),t.qZA()(),t.TgZ(17,"ion-card-content")(18,"ion-button",5),t._uU(19,"Send Message"),t.qZA(),t.TgZ(20,"ion-button",6),t._uU(21,"Edit profile"),t.qZA(),t.TgZ(22,"ion-button",6),t._uU(23,"Request contact"),t.qZA(),t.TgZ(24,"ion-button",7),t._uU(25,"Add new contact"),t.qZA()()()(),t.TgZ(26,"ion-col",8),t._UZ(27,"app-profile-item",9),t.qZA()()()),2&o&&(t.xp6(14),t.AsE("",null==n.student?null:n.student.full_name," (",null==n.student?null:n.student.student_id,")"),t.xp6(2),t.AsE("",null==n.student?null:n.student.department_id," - ",null==n.student?null:n.student.batch,"th"),t.xp6(11),t.Q6J("contacts",n.contacts))},directives:[i.Gu,i.sr,i.Sm,i.fG,i.wd,i.W2,i.Nd,i.wI,i.PM,i.Dq,i.tO,i.FN,i.YG,m],styles:[""]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.Bz.forChild(h)],a.Bz]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,c.u5,i.Pc,P]]}),e})()}}]);