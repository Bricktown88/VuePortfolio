webpackJsonp([0],{"/KV2":function(t,e){},"/iqK":function(t,e){},"7zck":function(t,e){},"9+ES":function(t,e){},Dc6N:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("csSS");var n=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("b-field",{attrs:{label:"Name"}},[e("b-input",{attrs:{value:"Kevin Garvey"}})],1),this._v(" "),e("b-field",{attrs:{label:"Email",type:"is-danger",message:"This email is invalid"}},[e("b-input",{attrs:{type:"email",value:"john@",maxlength:"30"}})],1),this._v(" "),e("b-field",{attrs:{label:"Username",type:"is-success",message:"This username is available"}},[e("b-input",{attrs:{value:"johnsilver",maxlength:"30"}})],1),this._v(" "),e("b-field",{attrs:{label:"Password",type:"is-warning",message:["Password is too short","Password must have at least 8 characters"]}},[e("b-input",{attrs:{value:"123",type:"password",maxlength:"30"}})],1),this._v(" "),e("b-field",{attrs:{label:"Subject"}},[e("b-select",{attrs:{placeholder:"Select a subject"}},[e("option",{attrs:{value:"1"}},[this._v("Option 1")]),this._v(" "),e("option",{attrs:{value:"2"}},[this._v("Option 2")])])],1)],1)},staticRenderFns:[]};var s={components:{ContactForm:a("VU/8")({data:function(){return{valid:!1,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},components:{}},i,!1,function(t){a("9+ES")},"data-v-3a1b99d1",null).exports},data:function(){return{name:"",email:"",message:"",dialog:!1,hamburger:!1,buttons:[{name:"projects",icon:"folder",route:"/projects"}],linkers:[{name:"linkedIn",icon:"mdi-linkedin-box",ref:"https://www.linkedin.com/in/alexander-young-b41b1071/"},{name:"GitHub",icon:"mdi-github-circle",ref:"https://github.com/Bricktown88"}],contacts:[{name:"contact",icon:"mdi-contact-mail"}]}},methods:{showModal:function(){this.dialog=!0},success:function(){this.dialog=!1,this.$toast.open({message:"Message sent!",type:"is-success",duration:2800})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-toolbar",{staticClass:"pink",attrs:{app:""}},[n("v-toolbar-side-icon",{attrs:{right:""},on:{click:function(e){t.hamburger=!t.hamburger}}}),t._v(" "),n("v-toolbar-title",{staticClass:"headline"},[n("router-link",{staticClass:"home",attrs:{tag:"span",to:{name:"portfolio"}}},[n("v-icon",{attrs:{medium:""}},[t._v("mdi-home-account")])],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",t._l(t.buttons,function(e){return n("v-btn",{key:e.name,staticClass:"pink",attrs:{small:"",flat:"",dark:"",to:e.route}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(" "),n("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(e.name))])],1)}),1),t._v(" "),n("v-toolbar-items",[t._l(t.contacts,function(e){return n("v-btn",{key:e.name,staticClass:"pink",attrs:{block:"",small:"",flat:"",dark:"",target:"_blank"},on:{click:function(e){t.dialog=!0}}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(" "),n("span",[t._v(t._s(e.name))])],1)}),t._v(" "),n("v-dialog",{attrs:{"max-width":"700px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline",attrs:{"align-center":""}},[t._v("Contact Alex")])]),t._v(" "),n("v-card-text",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"name*",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-textarea",{attrs:{label:"Message*",required:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1),t._v(" "),n("small",[t._v("*indicates required field")])],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red lighten-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.success}},[t._v("\r\n            Send Message\r\n          ")])],1)],1)],1),t._v(" "),t._l(t.linkers,function(e){return n("v-btn",{key:e.name,staticClass:"pink",attrs:{small:"",flat:"",dark:"",href:e.ref,target:"_blank"}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(" "),n("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(e.name))])],1)})],2)],1),t._v(" "),n("v-navigation-drawer",{attrs:{width:"180",left:"",temporary:"",app:""},model:{value:t.hamburger,callback:function(e){t.hamburger=e},expression:"hamburger"}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("v-flex",{staticClass:"mt-2"},[n("router-link",{staticClass:"home",attrs:{tag:"span",to:{name:"portfolio"}}},[n("v-avatar",{staticClass:"mb-3",attrs:{size:"100"}},[n("img",{attrs:{src:a("qMAm"),alt:"home"}})]),t._v(" "),n("p",{staticClass:"white--text subheading"},[t._v("Alex Young")])],1),t._v(" "),t._l(t.buttons,function(e){return n("v-btn",{key:e.name,staticClass:"mb-2 pink",attrs:{block:"",small:"",flat:"",dark:"",to:e.route}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(" "),n("span",[t._v(t._s(e.name))])],1)}),t._v(" "),t._l(t.contacts,function(e){return n("v-btn",{key:e.name,staticClass:"mb-2 pink",attrs:{block:"",small:"",flat:"",dark:"",target:"_blank"},on:{click:function(e){t.dialog=!0}}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(" "),n("span",[t._v(t._s(e.name))])],1)}),t._v(" "),t._l(t.linkers,function(e){return n("v-btn",{key:e.name,staticClass:"mb-2 pink",attrs:{block:"",small:"",flat:"",dark:"",href:e.ref,target:"_blank"}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v(" "),n("span",[t._v(t._s(e.name))])],1)})],2)],1)],1)],1)},staticRenderFns:[]};var r={name:"App",components:{PageHeader:a("VU/8")(s,o,!1,function(t){a("rJd8")},"data-v-2ee2b2ea",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{dark:""}},[e("PageHeader"),this._v(" "),e("main",[e("v-container",[e("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(r,l,!1,function(t){a("nmlt")},null,null).exports,u=a("/ocq"),d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"white elevation-2"},[a("v-toolbar",{attrs:{flat:"",dense:"",dark:""}},[a("v-toolbar-title",{staticClass:"pink--text",attrs:{flat:"",dark:""}},[t._v(t._s(t.title))]),t._v(" "),t._t("action")],2),t._v(" "),a("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[t._t("default",[t._v("\n      No slot content defined.\n    ")])],2)],1)},staticRenderFns:[]};var v={name:"portfolio",data:function(){return{msg:"Alex Young's Portfolio"}},components:{Panel:a("VU/8")({props:["title"]},d,!1,function(t){a("Xg1z")},"data-v-479bb469",null).exports}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("v-layout",{attrs:{column:"","align-left":""}},[n("v-flex",{staticClass:"ma-2"},[n("v-avatar",{attrs:{size:"200"}},[n("img",{attrs:{src:a("qMAm"),alt:""}})])],1)],1),t._v(" "),n("panel",{attrs:{title:"Example"}},[n("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non, itaque odit corrupti maxime earum sit obcaecati eligendi quibusdam beatae et, dolorum voluptate nulla dignissimos alias doloremque neque nemo quo!")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non, itaque odit corrupti maxime earum sit obcaecati eligendi quibusdam beatae et, dolorum voluptate nulla dignissimos alias doloremque neque nemo quo!")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non, itaque odit corrupti maxime earum sit obcaecati eligendi quibusdam beatae et, dolorum voluptate nulla dignissimos alias doloremque neque nemo quo!")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non, itaque odit corrupti maxime earum sit obcaecati eligendi quibusdam beatae et, dolorum voluptate nulla dignissimos alias doloremque neque nemo quo!")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non, itaque odit corrupti maxime earum sit obcaecati eligendi quibusdam beatae et, dolorum voluptate nulla dignissimos alias doloremque neque nemo quo!")]),t._v(" "),n("v-btn",[t._v("\n      show button\n    ")])],1)],1)},staticRenderFns:[]};var p=a("VU/8")(v,m,!1,function(t){a("Dc6N")},"data-v-2a8d0ffe",null).exports,_=(a("VU/8")(null,null,!1,null,null,null).exports,{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.cards,function(e){return a("v-flex",{key:e.headline,attrs:{xs12:"",sm6:"",md4:""}},[a("v-card",{staticClass:"ma-3",attrs:{hover:"",height:"400"}},[a("v-img",{attrs:{src:e.image,"aspect-ratio":16/9,alt:e.alt}}),t._v(" "),a("v-card-title",{staticClass:"justify-center",attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.headline))]),t._v(" "),a("div",[t._v(t._s(e.description))])])]),t._v(" "),a("div",{staticClass:"text-xs-center justify-center"},[a("v-dialog",{attrs:{width:"400"},model:{value:e.dialog,callback:function(a){t.$set(e,"dialog",a)},expression:"card.dialog"}},[a("v-btn",{attrs:{slot:"activator",color:"pink",dark:""},slot:"activator"},[a("span",[t._v("See More")])]),t._v(" "),a("v-card",[a("v-card-title",{staticClass:"headline pink",attrs:{"primary-title":""}},[a("span",[t._v(t._s(e.headline))])]),t._v(" "),a("v-card-text",[t._v("\r\n              "+t._s(e.description)+"\r\n              ")]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{href:e.github,target:"_blank"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-github-circle")]),t._v(" "),a("span",[t._v("GitHub")])],1),t._v(" "),a("v-btn",{attrs:{color:"red",flat:""},on:{click:function(t){e.dialog=!1}}},[a("span"),t._v(" "),a("v-icon",{attrs:{right:""}},[t._v("mdi-close-circle-outline")])],1)],1)],1)],1)],1)],1)],1)}),1)],1)},staticRenderFns:[]});var f={name:"projects",components:{Cards:a("VU/8")({data:function(){return{cards:[{headline:"Kangaroo",description:"Located two hours south of Sydney in the",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg",alt:"Kangaroo Image",dialog:!1,github:""},{headline:"Giphy API",description:"Click premade buttons to view GIFs, or add your own GIF button",image:"../../static/giphy2.png",alt:"Kangaroo2 Image2",dialog:!1,github:"https://github.com/Bricktown88/GifTastic"},{headline:"Kangaroo3",description:"Located two hours south of Sydney in the",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg",alt:"Kangaroo Image3",dialog:!1}]}}},_,!1,function(t){a("hHa6")},"data-v-f53d4258",null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Cards")],1)},staticRenderFns:[]};var g=a("VU/8")(f,b,!1,function(t){a("/iqK")},"data-v-3097c264",null).exports;n.default.use(u.a);var h=new u.a({mode:"history",routes:[{path:"/",name:"portfolio",component:p},{path:"/projects",name:"projects",component:g}]}),k=a("3EgV"),x=a.n(k),q=(a("7zck"),a("O3Oo")),C=a.n(q);a("/KV2");n.default.use(C.a),n.default.use(x.a,{iconfont:"mdi"}),n.default.config.productionTip=!1,new n.default({el:"#app",router:h,components:{App:c},template:"<App/>"})},Xg1z:function(t,e){},csSS:function(t,e){},hHa6:function(t,e){},nmlt:function(t,e){},qMAm:function(t,e,a){t.exports=a.p+"static/img/Alex.b3069cb.png"},rJd8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.21485712a57366dd7c24.js.map