(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["qiankun_child1-app"]=t():e["qiankun_child1-app"]=t()})(window,(function(){return function(e){function t(t){for(var r,i,u=t[0],s=t[1],l=t[2],c=0,f=[];c<u.length;c++)i=u[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4be50de7"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp_qiankun_child1"]=window["webpackJsonp_qiankun_child1"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;return a.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},3576:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return R})),n.d(t,"mount",(function(){return q})),n.d(t,"unmount",(function(){return $}));n("fe59"),n("fe8a"),n("08ba"),n("6a61");var r=n("cf7f"),o=n("e793"),a=(n("a133"),n("ed0d"),n("f09c"),n("e117"),n("0261")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),n("router-link",{attrs:{to:"/list"}},[e._v("Listasss")])],1),n("router-view")],1)},u=[],s=(n("5c0b"),n("9ca4")),l={},c=Object(s["a"])(l,i,u,!1,null,null,null),p=c.exports,f=n("c730");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=n("3211"),v=(n("e18c"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._v(" qiankun_child1 -----"+e._s(e.curData)+" "),n("div",[e._v(e._s(e.data1))]),n("div",[e._v(e._s(e.data2))])])}),h=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha",target:"_blank",rel:"noopener"}},[e._v("unit-mocha")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],g={name:"HelloWorld",props:{msg:String}},b=g,w=(n("ea27"),Object(s["a"])(b,_,m,!1,null,"b93813b6",null)),k=w.exports,y={name:"Home",components:{HelloWorld:k},data:function(){return{curData:window.a,data1:"",data2:""}},mounted:function(){this.data1=this.add1(this.curData),this.data2=this.add2(this.curData)}},j=y,E=Object(s["a"])(j,v,h,!1,null,null,null),S=E.exports;a["a"].use(d["a"]);var O="qiankun_child1",I=[{path:O+"/",name:"Home",component:S},{path:O+"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:O+"/list",name:"List",component:function(){return n.e("about").then(n.bind(null,"1a33"))}}],N=I,x=n("9f3a"),L={state:{domain:"",token:localStorage.getItem("token"),userName:localStorage.getItem("userName"),menuList:localStorage.getItem("menuList"),menuIndex:"",isLogin:"",isfresh:!1,emialSum:"",emailList:[],allEmail:{},name:"^^^^^^^^^8………………………………………………"},mutations:{SET_USERNAME:function(e,t){e.userName=t,localStorage.setItem("userName",t)},SET_MENULIST:function(e,t){e.menuList=t,localStorage.setItem("menuList",t)},IS_FRESH:function(e,t){e.isfresh=!0},SET_MENUINDEX:function(e,t){e.menuIndex=t},EMAIL_SUM:function(e,t){e.emialSum=t},EMAIL_LIST:function(e,t){e.emailList=t},ALL_EMAIL:function(e,t){e.allEmail=t},set_token:function(e,t){e.token=t,localStorage.FASTJEE_ACCESS_TOKEN=t},set_domain:function(e,t){e.domain=t},login_status:function(e,t){e.islogin=t}},actions:{}},A=L;a["a"].use(x["a"]);var P=new x["a"].Store({state:{},mutations:{},actions:{},modules:{userInfo:A}});n("83f4");a["a"].config.productionTip=!1,console.log("*****************子项目测试window*****************"),console.log(window.huangyue);var T=null,C=null;function M(e){T=new d["a"]({base:window.__POWERED_BY_QIANKUN__?"/qiankun_child1":"/",mode:"history",routes:N}),C=new a["a"]({router:T,store:P,render:function(t){return t(p,{props:Object(o["a"])({},e)})}}).$mount("#app")}function R(e){return D.apply(this,arguments)}function D(){return D=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("***************进入child1项目bootstrap******************"),console.log(t);case 2:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function q(e){return U.apply(this,arguments)}function U(){return U=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a["a"].use(t.data.components),Object.keys(t.data.libraryJs).forEach((function(e){a["a"].prototype[e]=t.data.libraryJs[e]})),console.log("***************进入child1项目mount******************"),console.log(t),M(t.data.store);case 5:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function $(){return H.apply(this,arguments)}function H(){return H=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:C.$destroy(),C=null,T=null;case 3:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}window.huangyue={setNane:"sssd"},window.__POWERED_BY_QIANKUN__||M()},"5c0b":function(e,t,n){"use strict";var r=n("3576"),o=n.n(r);o.a},"83f4":function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},ea27:function(e,t,n){"use strict";var r=n("f6ba"),o=n.n(r);o.a},f6ba:function(e,t,n){}})}));
//# sourceMappingURL=app.6d0da002.js.map