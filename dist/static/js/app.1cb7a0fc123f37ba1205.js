webpackJsonp([0],{"/KV2":function(t,a){},"/iqK":function(t,a){},"5jDU":function(t,a){},"7zck":function(t,a){},"9+ES":function(t,a){},GAQ6:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("csSS");var s=e("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("section",[a("b-field",{attrs:{label:"Name"}},[a("b-input",{attrs:{value:"Kevin Garvey"}})],1),this._v(" "),a("b-field",{attrs:{label:"Email",type:"is-danger",message:"This email is invalid"}},[a("b-input",{attrs:{type:"email",value:"john@",maxlength:"30"}})],1),this._v(" "),a("b-field",{attrs:{label:"Username",type:"is-success",message:"This username is available"}},[a("b-input",{attrs:{value:"johnsilver",maxlength:"30"}})],1),this._v(" "),a("b-field",{attrs:{label:"Password",type:"is-warning",message:["Password is too short","Password must have at least 8 characters"]}},[a("b-input",{attrs:{value:"123",type:"password",maxlength:"30"}})],1),this._v(" "),a("b-field",{attrs:{label:"Subject"}},[a("b-select",{attrs:{placeholder:"Select a subject"}},[a("option",{attrs:{value:"1"}},[this._v("Option 1")]),this._v(" "),a("option",{attrs:{value:"2"}},[this._v("Option 2")])])],1)],1)},staticRenderFns:[]};var n={components:{ContactForm:e("VU/8")({data:function(){return{valid:!1,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},components:{}},i,!1,function(t){e("9+ES")},"data-v-3a1b99d1",null).exports},data:function(){return{name:"",email:"",message:"",dialog:!1,hamburger:!1,buttons:[{name:"projects",icon:"mdi-briefcase",route:"/projects"}],linkers:[{name:"linkedIn",icon:"mdi-linkedin-box",ref:"https://www.linkedin.com/in/alexander-young-b41b1071/"},{name:"GitHub",icon:"mdi-github-circle",ref:"https://github.com/Bricktown88"}],contacts:[{name:"contact",icon:"mdi-contact-mail"}]}},methods:{showModal:function(){this.dialog=!0},success:function(){this.dialog=!1,this.$toast.open({message:"Message sent!",type:"is-success",duration:2800})}}},o={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",[s("v-toolbar",{staticClass:"color5",attrs:{app:""}},[s("v-toolbar-side-icon",{attrs:{right:""},on:{click:function(a){t.hamburger=!t.hamburger}}}),t._v(" "),s("v-toolbar-title",{staticClass:"headline"},[s("router-link",{staticClass:"home",attrs:{tag:"span",to:{name:"portfolio"}}},[s("v-icon",{attrs:{medium:""}},[t._v("mdi-home-account")])],1)],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",t._l(t.buttons,function(a){return s("v-btn",{key:a.name,staticClass:"color4",attrs:{small:"",flat:"",dark:"",to:a.route}},[s("v-icon",{attrs:{left:""}},[t._v(t._s(a.icon))]),t._v(" "),s("span",{staticClass:"color2--text hidden-sm-and-down"},[t._v(t._s(a.name))])],1)}),1),t._v(" "),s("v-toolbar-items",[t._l(t.contacts,function(a){return s("v-btn",{key:a.name,staticClass:"color4",attrs:{block:"",small:"",flat:"",dark:"",target:"_blank"},on:{click:function(a){t.dialog=!0}}},[s("v-icon",{attrs:{left:""}},[t._v(t._s(a.icon))]),t._v(" "),s("span",{staticClass:"color2--text hidden-sm-and-down"},[t._v(t._s(a.name))])],1)}),t._v(" "),s("v-dialog",{attrs:{"max-width":"700px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[s("v-card",{staticClass:"color5"},[s("v-card-title",[s("span",{staticClass:"color2--text headline",attrs:{"align-center":""}},[t._v("Contact Alex")])]),t._v(" "),s("v-card-text",{staticClass:"color1--text"},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:"name*",required:""},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}}),t._v(" "),s("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),t._v(" "),s("v-textarea",{attrs:{label:"Message*",required:""},model:{value:t.message,callback:function(a){t.message=a},expression:"message"}})],1)],1),t._v(" "),s("small",[t._v("*indicates required field")])],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"red lighten-1",flat:""},on:{click:function(a){t.dialog=!1}}},[t._v("Close")]),t._v(" "),s("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.success}},[t._v("\r\n            Send Message\r\n          ")])],1)],1)],1),t._v(" "),t._l(t.linkers,function(a){return s("v-btn",{key:a.name,staticClass:"color4",attrs:{small:"",flat:"",dark:"",href:a.ref,target:"_blank"}},[s("v-icon",{attrs:{left:""}},[t._v(t._s(a.icon))]),t._v(" "),s("span",{staticClass:"color2--text hidden-sm-and-down"},[t._v(t._s(a.name))])],1)})],2)],1),t._v(" "),s("v-navigation-drawer",{staticClass:"color5",attrs:{width:"180",left:"",temporary:"",app:""},model:{value:t.hamburger,callback:function(a){t.hamburger=a},expression:"hamburger"}},[s("v-layout",{attrs:{column:"","align-center":""}},[s("v-flex",{staticClass:"mt-2"},[s("router-link",{staticClass:"home",attrs:{tag:"span",to:{name:"portfolio"}}},[s("v-avatar",{staticClass:"mb-3",attrs:{size:"100"}},[s("img",{attrs:{src:e("qMAm"),alt:"home"}})]),t._v(" "),s("p",{staticClass:"color1--text subheading"},[t._v("Alex Young")])],1),t._v(" "),t._l(t.buttons,function(a){return s("v-btn",{key:a.name,staticClass:"mb-2 color4",attrs:{block:"",small:"",flat:"",dark:"",to:a.route}},[s("v-icon",{attrs:{left:""}},[t._v(t._s(a.icon))]),t._v(" "),s("span",[t._v(t._s(a.name))])],1)}),t._v(" "),t._l(t.contacts,function(a){return s("v-btn",{key:a.name,staticClass:"mb-2 color4",attrs:{block:"",small:"",flat:"",dark:"",target:"_blank"},on:{click:function(a){t.dialog=!0}}},[s("v-icon",{attrs:{left:""}},[t._v(t._s(a.icon))]),t._v(" "),s("span",[t._v(t._s(a.name))])],1)}),t._v(" "),t._l(t.linkers,function(a){return s("v-btn",{key:a.name,staticClass:"mb-2 color4",attrs:{block:"",small:"",flat:"",dark:"",href:a.ref,target:"_blank"}},[s("v-icon",{attrs:{left:""}},[t._v(t._s(a.icon))]),t._v(" "),s("span",[t._v(t._s(a.name))])],1)})],2)],1)],1)],1)},staticRenderFns:[]};var r={name:"App",components:{PageHeader:e("VU/8")(n,o,!1,function(t){e("s+pV")},"data-v-c7566f0e",null).exports}},l={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{dark:""}},[a("PageHeader"),this._v(" "),a("main",[a("v-container",[a("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var c=e("VU/8")(r,l,!1,function(t){e("mxyL")},null,null).exports,u=e("/ocq"),d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"color3"},[e("v-toolbar",{staticClass:"color4",attrs:{flat:"",dense:""}},[e("v-toolbar-title",{staticClass:"color2--text",attrs:{flat:"",dark:""}},[t._v(t._s(t.title))]),t._v(" "),t._t("action")],2),t._v(" "),e("div",{staticClass:"color5--text pl-4 pr-4 pt-2 pb-2"},[t._t("default",[e("p",[t._v("This is a test.")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non, itaque odit corrupti maxime earum sit obcaecati eligendi quibusdam beatae et, dolorum voluptate nulla dignissimos alias doloremque neque nemo quo!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non, itaque odit corrupti maxime earum sit obcaecati eligendi quibusdam beatae et, dolorum voluptate nulla dignissimos alias doloremque neque nemo quo!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non, itaque odit corrupti maxime earum sit obcaecati eligendi quibusdam beatae et, dolorum voluptate nulla dignissimos alias doloremque neque nemo quo!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non, itaque odit corrupti maxime earum sit obcaecati eligendi quibusdam beatae et, dolorum voluptate nulla dignissimos alias doloremque neque nemo quo!")]),t._v(" "),e("v-btn",[t._v("\n      show button\n    ")])])],2)],1)},staticRenderFns:[]};var m={name:"portfolio",data:function(){return{msg:"Alex Young's Portfolio"}},components:{Panel:e("VU/8")({props:["title"]},d,!1,function(t){e("5jDU")},"data-v-67372cfe",null).exports}},v={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"hello"},[a("v-layout",{attrs:{column:"","align-left":""}},[a("v-flex",{staticClass:"ma-2"},[a("v-avatar",{attrs:{size:"200"}},[a("img",{attrs:{src:e("qMAm"),alt:""}})])],1)],1),this._v(" "),a("panel",{attrs:{title:"Example"}})],1)},staticRenderFns:[]};var p=e("VU/8")(m,v,!1,function(t){e("GAQ6")},"data-v-23076fa3",null).exports,_=(e("VU/8")(null,null,!1,null,null,null).exports,{render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.cards,function(a){return e("v-flex",{key:a.headline,attrs:{xs12:"",sm6:"",md4:""}},[e("v-card",{staticClass:"color4 ma-3",attrs:{hover:"",height:"400"}},[e("v-img",{attrs:{src:a.image,"aspect-ratio":16/9,alt:a.alt}}),t._v(" "),e("v-card-title",{staticClass:"color5--text justify-center",attrs:{"primary-title":""}},[e("div",[e("h3",{staticClass:"headline mb-0"},[t._v(t._s(a.headline))]),t._v(" "),e("div",{staticClass:"color2--text"},[t._v(t._s(a.description))])])]),t._v(" "),e("div",{staticClass:"text-xs-center justify-center"},[e("v-dialog",{attrs:{width:"400"},model:{value:a.dialog,callback:function(e){t.$set(a,"dialog",e)},expression:"card.dialog"}},[e("v-btn",{staticClass:"color1",attrs:{slot:"activator",dark:""},slot:"activator"},[e("span",{staticClass:"color5--text"},[t._v("See More")])]),t._v(" "),e("v-card",{staticClass:"color5"},[e("v-card-title",{staticClass:"color1 headline",attrs:{"primary-title":""}},[e("span",{staticClass:"color2--text"},[t._v(t._s(a.headline))])]),t._v(" "),e("v-card-text",{staticClass:"color2--text"},[t._v("\r\n              "+t._s(a.more)+"\r\n              ")]),t._v(" "),e("v-divider"),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{href:a.github,target:"_blank"}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-github-circle")]),t._v(" "),e("span",{staticClass:"color2--text"},[t._v("GitHub")])],1),t._v(" "),e("v-btn",{staticClass:"color1--text",attrs:{flat:""},on:{click:function(t){a.dialog=!1}}},[e("span"),t._v(" "),e("v-icon",{attrs:{right:""}},[t._v("mdi-close-circle-outline")])],1)],1)],1)],1)],1)],1)],1)}),1)],1)},staticRenderFns:[]});var f={name:"projects",components:{Cards:e("VU/8")({data:function(){return{cards:[{headline:"Kangaroo",description:"Located two hours south of Sydney in the",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg",alt:"Kangaroo Image",dialog:!1,github:""},{headline:"LIRI",description:"Using Node and the command line, search movies, songs, or concert APIs",image:"../../static/liri.png",alt:"LIRI",dialog:!1,more:"The purpose of this tool is to call various APIs and return their objects via the command line.",github:"https://github.com/Bricktown88/liri-node-app"},{headline:"Giphy API",description:"Click premade buttons to view GIFs, or add your own GIF button",image:"../../static/giphy2.png",alt:"Giphy API",dialog:!1,github:"https://github.com/Bricktown88/GifTastic"},{headline:"bAmazon",description:"CLI Marketplace",image:"../../static/bAmazon.png",alt:"bAmazon",dialog:!1,github:"https://github.com/Bricktown88/bAmazon"},{headline:"Game of Thrones FriendFinder",description:"Take the survey and find out which GoT character you are!",image:"../../static/FF.png",alt:"GoT FriendFinder",dialog:!1,github:"https://github.com/Bricktown88/FriendFinder"},{headline:"Kangaroo3",description:"Located two hours south of Sydney in the",image:"https://cdn.vuetifyjs.com/images/cards/desert.jpg",alt:"Kangaroo Image3",dialog:!1}]}}},_,!1,function(t){e("SOlH")},"data-v-2d966a90",null).exports}},h={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("Cards")],1)},staticRenderFns:[]};var g=e("VU/8")(f,h,!1,function(t){e("/iqK")},"data-v-3097c264",null).exports;s.default.use(u.a);var b=new u.a({mode:"history",routes:[{path:"/",name:"portfolio",component:p},{path:"/projects",name:"projects",component:g}]}),x=e("3EgV"),k=e.n(x),C=(e("7zck"),e("O3Oo")),y=e.n(C);e("/KV2");s.default.use(y.a),s.default.use(k.a,{iconfont:"mdi",theme:{color1:"E63946",color2:"F1FAEE",color3:"A8DADC",color4:"457B9D",color5:"1D3557"}}),s.default.config.productionTip=!1,new s.default({el:"#app",router:b,components:{App:c},template:"<App/>"})},SOlH:function(t,a){},csSS:function(t,a){},mxyL:function(t,a){},qMAm:function(t,a,e){t.exports=e.p+"static/img/Alex.b3069cb.png"},"s+pV":function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.1cb7a0fc123f37ba1205.js.map