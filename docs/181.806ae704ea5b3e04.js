"use strict";(self.webpackChunkFoody=self.webpackChunkFoody||[]).push([[181],{3181:(P,d,o)=>{o.r(d),o.d(d,{DashboardModule:()=>A});var c=o(6814),a=o(3403),t=o(5879),l=o(7042);function m(e,r){if(1&e&&(t.TgZ(0,"li",7)(1,"a",8)(2,"span"),t._UZ(3,"i"),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.qZA()()()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("routerLink",n.link),t.xp6(2),t.Tol(n.icon),t.xp6(2),t.Oqu(n.text)}}function g(e,r){if(1&e&&(t.ynx(0),t.YNc(1,m,6,4,"li",6),t.BQk()),2&e){const n=r.$implicit;t.xp6(1),t.Q6J("ngIf",n.isActive)}}let p=(()=>{class e{constructor(n){this._AuthService=n,this.menu=[{text:"Home",link:"/dashboard/home",icon:"fa-solid fa-house",isActive:this.isAdmin()||this.isUser()},{text:"Users",link:"/dashboard/admin/users",icon:"fa-solid fa-users",isActive:this.isAdmin()},{text:"Recipes",link:"/dashboard/user/recipes",icon:"fa-solid fa-grip-vertical",isActive:this.isUser()},{text:"Favorites",link:"/dashboard/user/favorites",icon:"fa-solid fa-heart",isActive:this.isUser()},{text:"Recipes",link:"/dashboard/admin/recipes",icon:"fa-solid fa-grip-vertical",isActive:this.isAdmin()},{text:"Categories",link:"/dashboard/admin/categories",icon:"fa-solid fa-layer-group",isActive:this.isAdmin()}]}isAdmin(){return"SuperAdmin"==this._AuthService.role}isUser(){return"SystemUser"==this._AuthService.role}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(l.e))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-sidebar"]],decls:6,vars:1,consts:[[1,"bg-dark-main","overflow-hidden","py-5"],[1,"mx-auto"],["src","./assets/images/3.svg","alt","logo food food-app",1,"w-75"],[1,"mt-5"],[1,"list-unstyled","d-flex","flex-column","gap-3"],[4,"ngFor","ngForOf"],["routerLinkActive","active-li",4,"ngIf"],["routerLinkActive","active-li"],[1,"text-decoration-none",3,"routerLink"]],template:function(i,s){1&i&&(t.TgZ(0,"aside",0)(1,"figure",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"ul",4),t.YNc(5,g,2,1,"ng-container",5),t.qZA()()()),2&i&&(t.xp6(5),t.Q6J("ngForOf",s.menu))},dependencies:[c.sg,c.O5,a.rH,a.Od],styles:['aside[_ngcontent-%COMP%]{border-top-right-radius:6rem;position:sticky;height:100dvh;top:0;left:0}aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;padding:5px 30px;cursor:pointer}aside[_ngcontent-%COMP%]   li.active-li[_ngcontent-%COMP%]{background-color:#00924d30;transform:translate(12px)}aside[_ngcontent-%COMP%]   li.active-li[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:-15px;height:100%;width:10px;background-color:#00924d}aside[_ngcontent-%COMP%]   li.active-li[_ngcontent-%COMP%]:hover{animation:_ngcontent-%COMP%_shakeAnimation .5s linear}aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-size:1.5rem}aside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 10px}@media (max-width: 991px){section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.5rem}}@media (max-width: 767px){section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.2rem}}@keyframes _ngcontent-%COMP%_shakeAnimation{0%,to,50%{transform:translate(12px)}25%,75%{transform:translate(-12px)}}']})}return e})(),u=(()=>{class e{constructor(){this.userName=""}ngOnInit(){this.userName=localStorage.getItem("userName")??"Upskilling"}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-navbar"]],decls:15,vars:1,consts:[[1,"p-1","p-md-3"],[1,"row","align-items-center"],[1,"col-md-8","col-7"],[1,"d-flex","align-items-center","bg-white","px-4","py-1","rounded-5"],[1,"fa-solid","fa-magnifying-glass"],["type","email","id","exampleFormControlInput1","placeholder","SEARCH HERE",1,"form-control","border-0","rounded-2"],[1,"col-md-4","col-4"],[1,"d-flex","align-items-center","justify-content-center","gap-3","px-3","user-details"],[1,"mb-0"],["src","../../../assets/images/image.svg","alt",""],[1,"d-flex","align-items-center","gap-md-5","gap-2"],[1,"mb-0","title"],[1,"fa-solid","fa-chevron-down"],[1,"fa-solid","fa-bell"]],template:function(i,s){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"i",4)(5,"input",5),t.qZA()(),t.TgZ(6,"div",6)(7,"div",7)(8,"figure",8),t._UZ(9,"img",9),t.qZA(),t.TgZ(10,"div",10)(11,"span",11),t._uU(12),t.qZA(),t._UZ(13,"i",12),t.qZA(),t._UZ(14,"i",13),t.qZA()()()()),2&i&&(t.xp6(12),t.Oqu(s.userName))},styles:["section[_ngcontent-%COMP%]{background-color:#f8f9fb;border-radius:10rem}section[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#1f263e!important}section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{box-shadow:none!important}section[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer}section[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:bolder}section[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{display:block}@media (max-width: 767px){section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{gap:.2rem}section[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{display:none}}"]})}return e})();function C(e,r){if(1&e&&(t.TgZ(0,"div",13)(1,"div",14)(2,"div",15)(3,"h2",4),t._uU(4),t.TgZ(5,"span"),t._uU(6,"Recipes"),t.qZA(),t._uU(7,"!"),t.qZA(),t.TgZ(8,"p",8),t._uU(9),t.qZA()(),t.TgZ(10,"div",16)(11,"button",17),t._uU(12),t._UZ(13,"i",18),t.qZA()()()()),2&e){const n=t.oxw().$implicit;t.xp6(4),t.hij("",n.text," "),t.xp6(5),t.hij(" ",n.content," "),t.xp6(2),t.Q6J("routerLink",n.link),t.xp6(1),t.hij(" ",n.textButton," ")}}function x(e,r){if(1&e&&(t.ynx(0),t.YNc(1,C,14,4,"div",12),t.BQk()),2&e){const n=r.$implicit;t.xp6(1),t.Q6J("ngIf",n.isActive)}}const O=[{path:"",component:(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],decls:7,vars:0,consts:[[1,"row","align-items-start"],[1,"col-md-2"],[1,"col-md-10","p-5"]],template:function(i,s){1&i&&(t.TgZ(0,"section")(1,"div",0)(2,"div",1),t._UZ(3,"app-sidebar"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"app-navbar")(6,"router-outlet"),t.qZA()()())},dependencies:[a.lC,p,u]})}return e})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class e{constructor(n){this._AuthService=n,this.userName="",this.role=[{text:"Fill The",textButton:"Fill Recipe",link:"/dashboard/admin/recipes",isActive:this.isAdmin(),content:"you can now fill the meals easily using the table and form , click here and sill it with the table !"},{text:"Show All",textButton:"Fill Recipe",link:"/dashboard/user/recipes",isActive:this.isUser(),content:"you can now show the meals easily using this button, click here and sill it with the table !"}]}isAdmin(){return"SuperAdmin"==this._AuthService.role}isUser(){return"SystemUser"==this._AuthService.role}ngOnInit(){this.userName=localStorage.getItem("userName")??"Upskilling"}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(l.e))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:15,vars:2,consts:[[1,"top-section","mt-5","text-center","bg-main","pt-3","ps-sm-4","rounded-4"],[1,"row","justify-content-around","align-items-center"],[1,"col-md-6","col-12"],[1,"d-flex","gap-2","text-white"],[1,"fw-bolder"],[1,"fw-normal"],[1,"mb-0","mt-3","text-start","text-white"],[1,"col-md-6","col-12","imgBx","d-flex","justify-content-end"],[1,"mb-0"],["src","../../../assets/images/vegan.png","alt","vegan",1,"w-75"],[1,"mt-3"],[4,"ngFor","ngForOf"],["class","fill-recipe rounded-4 px-5 py-4",4,"ngIf"],[1,"fill-recipe","rounded-4","px-5","py-4"],[1,"row","align-items-center","justify-content-center"],[1,"col-6"],[1,"col-6","text-end"],[1,"primary","px-3","py-3","fs-4","fw-bold",3,"routerLink"],[1,"fa-solid","fa-arrow-right"]],template:function(i,s){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3)(4,"span",4),t._uU(5,"Welcome"),t.qZA(),t.TgZ(6,"span",5),t._uU(7),t.qZA()(),t.TgZ(8,"p",6),t._uU(9," This is a welcoming screen for the entry of the application , you can now see the options "),t.qZA()(),t.TgZ(10,"div",7)(11,"figure",8),t._UZ(12,"img",9),t.qZA()()()(),t.TgZ(13,"section",10),t.YNc(14,x,2,1,"ng-container",11),t.qZA()),2&i&&(t.xp6(7),t.Oqu(s.userName),t.xp6(7),t.Q6J("ngForOf",s.role))},dependencies:[c.sg,c.O5,a.rH],styles:[".top-section[_ngcontent-%COMP%]{background-image:url(header-bg.e7cd2c7a9e952177.svg);background-size:cover;background-repeat:no-repeat;background-position:center center}h2[_ngcontent-%COMP%]{font-size:2.3rem}.imgBx[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}@media (min-width: 450px){.imgBx[_ngcontent-%COMP%]{transform:translateY(28px)}}.fill-recipe[_ngcontent-%COMP%]{background-color:#f0ffef}.fill-recipe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#009247}.fill-recipe[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.7rem}"]})}return e})(),title:"home"},{path:"admin",canActivate:[(e,r)=>{const n=(0,t.f3M)(a.F0),s=(0,t.f3M)(l.e).role;return console.log(s),null!==localStorage.getItem("userToken")&&"SuperAdmin"==s||(n.navigate(["/auth/login"]),!1)}],loadChildren:()=>o.e(790).then(o.bind(o,4790)).then(e=>e.AdminModule)},{path:"user",canActivate:[(e,r)=>{const n=(0,t.f3M)(a.F0),s=(0,t.f3M)(l.e).role;return console.log(s),null!==localStorage.getItem("userToken")&&"SystemUser"==s||(n.navigate(["/auth/login"]),!1)}],loadChildren:()=>o.e(590).then(o.bind(o,1590)).then(e=>e.UserModule)}]}];let _=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(O),a.Bz]})}return e})();var M=o(6208);let A=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.ez,_,M.m]})}return e})()}}]);