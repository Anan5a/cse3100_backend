"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4066],{4066:(E,d,s)=>{s.r(d),s.d(d,{SignupPageModule:()=>L});var u=s(9808),o=s(4182),a=s(9537),l=s(333),c=s(655),e=s(2096),m=s(8572),_=s(5148),f=s(8555);function h(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"Enter your full student ID"),e.qZA())}function Z(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"The input is invalid"),e.qZA())}function v(n,r){if(1&n&&(e.TgZ(0,"div",19),e.YNc(1,h,2,0,"span",20),e.YNc(2,Z,2,0,"span",20),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.student_id.errors?null:t.student_id.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.student_id.errors?null:t.student_id.errors.student_id)}}function T(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"Enter your full name"),e.qZA())}function S(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"The input is invalid"),e.qZA())}function x(n,r){if(1&n&&(e.TgZ(0,"div",19),e.YNc(1,T,2,0,"span",20),e.YNc(2,S,2,0,"span",20),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.full_name.errors?null:t.full_name.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.full_name.errors?null:t.full_name.errors.full_name)}}function P(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"Type your batch number"),e.qZA())}function w(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"The input is invalid"),e.qZA())}function I(n,r){if(1&n&&(e.TgZ(0,"div",19),e.YNc(1,P,2,0,"span",20),e.YNc(2,w,2,0,"span",20),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.batch.errors?null:t.batch.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.batch.errors?null:t.batch.errors.batch)}}function q(n,r){if(1&n&&(e.TgZ(0,"ion-select-option",21),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name_short)}}function b(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"Email address is required"),e.qZA())}function A(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"The email is invalid"),e.qZA())}function y(n,r){if(1&n&&(e.TgZ(0,"div",19),e.YNc(1,b,2,0,"span",20),e.YNc(2,A,2,0,"span",20),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.email.errors?null:t.email.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.email.errors?null:t.email.errors.email)}}function U(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"Password is required"),e.qZA())}function N(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"Password needs to be 8 characters"),e.qZA())}function J(n,r){if(1&n&&(e.TgZ(0,"div",19),e.YNc(1,U,2,0,"span",20),e.YNc(2,N,2,0,"span",20),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.password.errors?null:t.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.password.errors?null:t.password.errors.minlength)}}function Y(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"Confirm Password is required"),e.qZA())}function Q(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"Confirm password doesn't match"),e.qZA())}function C(n,r){if(1&n&&(e.TgZ(0,"div",19),e.YNc(1,Y,2,0,"span",20),e._UZ(2,"br"),e.YNc(3,Q,2,0,"span",20),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.c_password.errors?null:t.c_password.errors.required),e.xp6(2),e.Q6J("ngIf",t.credentials.hasError("notSame"))}}const k=[{path:"",component:(()=>{class n{constructor(t,i,p,O,B,F){this.fb=t,this.authService=i,this.alertController=p,this.departmentService=O,this.router=B,this.loaderService=F,this.credentials=new o.cw({}),this.checkPasswords=g=>g.get("password").value===g.get("c_password").value?null:{notSame:!0}}ngOnInit(){this.authService.isLoggedIn().then(i=>{1==i&&this.router.navigateByUrl("/profile",{replaceUrl:!0})}),this.credentials=this.fb.group({student_id:["",[o.kI.required,o.kI.minLength(9),o.kI.maxLength(9)]],email:["",[o.kI.required,o.kI.email]],password:["",[o.kI.required,o.kI.minLength(8)]],c_password:["",[o.kI.required,o.kI.minLength(8)]],full_name:["",[o.kI.required,o.kI.minLength(10),o.kI.maxLength(60)]],batch:["",[o.kI.required,o.kI.minLength(1),o.kI.maxLength(2)]],department_id:["",[o.kI.required]]},{validators:this.checkPasswords})}load_departments(){console.log("loading departments"),this.departmentService.getDepartments().subscribe(t=>{this.departments=t})}signup(){return(0,c.mG)(this,void 0,void 0,function*(){this.authService.signup(this.credentials.value).subscribe(t=>{this.loaderService.showToast("Account created successfully!","success"),this.router.navigateByUrl("/login",{replaceUrl:!0})},t=>{})})}get student_id(){return this.credentials.get("student_id")}get email(){return this.credentials.get("email")}get password(){return this.credentials.get("password")}get full_name(){return this.credentials.get("full_name")}get batch(){return this.credentials.get("batch")}get c_password(){return this.credentials.get("c_password")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(o.qu),e.Y36(m.$),e.Y36(a.Br),e.Y36(_.n),e.Y36(l.F0),e.Y36(f.D))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-signup"]],decls:44,vars:9,consts:[["color","primary"],["slot","start"],["size-xs","12","size-md","3","size-lg","4"],[1,""],["ion-text","",1,"white"],[3,"formGroup","ngSubmit"],[1,"input-group"],["type","text","placeholder","Student ID","formControlName","student_id"],["class","errors",4,"ngIf"],["type","text","placeholder","Full Name","formControlName","full_name"],["type","text","placeholder","Batch","formControlName","batch"],[3,"click"],["name","department","formControlName","department_id"],[3,"value",4,"ngFor","ngForOf"],["type","text","placeholder","Email","formControlName","email"],["type","password","placeholder","Password","formControlName","password"],["type","password","placeholder","Confirm Password","formControlName","c_password"],["type","submit","expand","block",3,"disabled"],["color","light"],[1,"errors"],[4,"ngIf"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"signup"),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row"),e._UZ(9,"ion-col",2),e.TgZ(10,"ion-col",3)(11,"h1",4),e._uU(12,"Signup"),e.qZA(),e.TgZ(13,"p",4),e._uU(14,"Create new account"),e.qZA(),e.TgZ(15,"form",5),e.NdJ("ngSubmit",function(){return i.signup()}),e.TgZ(16,"div",6)(17,"ion-item"),e._UZ(18,"ion-input",7),e.qZA(),e.YNc(19,v,3,2,"div",8),e.TgZ(20,"ion-item"),e._UZ(21,"ion-input",9),e.qZA(),e.YNc(22,x,3,2,"div",8),e.TgZ(23,"ion-item"),e._UZ(24,"ion-input",10),e.qZA(),e.YNc(25,I,3,2,"div",8),e.TgZ(26,"ion-item",11),e.NdJ("click",function(){return i.load_departments()}),e.TgZ(27,"ion-label"),e._uU(28,"Department"),e.qZA(),e.TgZ(29,"ion-select",12),e.YNc(30,q,2,2,"ion-select-option",13),e.qZA()(),e.TgZ(31,"ion-item"),e._UZ(32,"ion-input",14),e.qZA(),e.YNc(33,y,3,2,"div",8),e.TgZ(34,"ion-item"),e._UZ(35,"ion-input",15),e.qZA(),e.YNc(36,J,3,2,"div",8),e.TgZ(37,"ion-item"),e._UZ(38,"ion-input",16),e.qZA(),e.YNc(39,C,4,2,"div",8),e.qZA(),e.TgZ(40,"ion-button",17),e._uU(41,"Signup"),e.qZA(),e.TgZ(42,"ion-text",18),e._uU(43,"Not yet a member? Contact your department. "),e.qZA()()()()()()),2&t&&(e.xp6(15),e.Q6J("formGroup",i.credentials),e.xp6(4),e.Q6J("ngIf",(i.student_id.dirty||i.student_id.touched)&&i.student_id.errors),e.xp6(3),e.Q6J("ngIf",(i.full_name.dirty||i.full_name.touched)&&i.full_name.errors),e.xp6(3),e.Q6J("ngIf",(i.batch.dirty||i.batch.touched)&&i.batch.errors),e.xp6(5),e.Q6J("ngForOf",i.departments),e.xp6(3),e.Q6J("ngIf",(i.email.dirty||i.email.touched)&&i.email.errors),e.xp6(3),e.Q6J("ngIf",(i.password.dirty||i.password.touched)&&i.password.errors),e.xp6(3),e.Q6J("ngIf",(i.c_password.dirty||i.c_password.touched)&&i.c_password.errors),e.xp6(1),e.Q6J("disabled",!i.credentials.valid))},directives:[a.Gu,a.sr,a.Sm,a.fG,a.wd,a.W2,a.jY,a.Nd,a.wI,o._Y,o.JL,o.sg,a.Ie,a.pK,a.j9,o.JJ,o.u,u.O5,a.Q$,a.t9,a.QI,u.sg,a.n0,a.YG,a.yW],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 10%;--background: url(https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80) 0 0/100% 100% no-repeat}form[_ngcontent-%COMP%]{max-width:400px;align-items:center}.input-group[_ngcontent-%COMP%]{background:#fff;border-radius:10px;overflow:hidden;margin-bottom:15px}.errors[_ngcontent-%COMP%]{font-size:small;color:#fff;background:var(--ion-color-danger);padding-left:15px;padding-top:5px;padding-bottom:5px}.white[_ngcontent-%COMP%]{color:#fff}"]}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.Bz.forChild(k)],l.Bz]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.ez,o.u5,a.Pc,M,o.UX]]}),n})()}}]);