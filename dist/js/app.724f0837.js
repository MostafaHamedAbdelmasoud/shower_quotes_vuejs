(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"567c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t.isLoaded?r("full-page",{attrs:{options:t.options,id:"fullpage"}},t._l(t.showerThoughts,(function(e){return r("div",{key:e.data.id,staticClass:"section"},[r("div",{staticClass:"container"},[r("img",{attrs:{src:n("9875"),alt:"shower icon"}}),r("div",{staticClass:"quote-symbol"},[t._v("“")]),r("p",{staticClass:"quote"},[r("a",{attrs:{href:e.data.url}},[t._v(t._s(e.data.title))])]),r("div",{staticClass:"details"},[r("div",{staticClass:"details-author"},[t._v("Author: "+t._s(e.data.author))]),r("div",{staticClass:"details-stats"},[t._v(t._s(e.data.ups)+" Upvote | "+t._s(e.data.num_comments)+" Comments")])])])])})),0):r("div",[r("loading-spinner")],1)],1)},a=[],s=(n("d3b7"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-ellipsis"},[n("div"),n("div"),n("div"),n("div")])}],c=(n("58e0"),n("2877")),u={},l=Object(c["a"])(u,s,i,!1,null,null,null),f=l.exports,d={name:"App",components:{LoadingSpinner:f},created:function(){var t=this;fetch("https://www.reddit.com/r/showerthoughts.json?limit=20").then((function(t){return t.json()})).then((function(e){t.showerThoughts=e.data.children,t.showerThoughts.shift(),t.showerThoughts.shift(),t.isLoaded=!0}))},data:function(){return{isLoaded:!1,showerThoughts:[],options:{scrollBar:!0,sectionsColor:["#41b883","#448803","#ff5f45","#0798ec","#fec401","#1bcee6","#ee1a59","#ba5be9","#b4b8ab","#41b883","#ff5f45","#0798ec","#fec401","#1bcee6","#ee1a59","#ba5be9","#b4b8ab","#41b883","#ff5f45","#0798ec","#fec401"]}}}},p=d,h=(n("034f"),Object(c["a"])(p,o,a,!1,null,null,null)),v=h.exports,b=n("a45e"),g=n.n(b);r["a"].use(g.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(v)}}).$mount("#app")},"58e0":function(t,e,n){"use strict";var r=n("567c"),o=n.n(r);o.a},"85ec":function(t,e,n){},9875:function(t,e,n){t.exports=n.p+"img/shower.6f1b712a.png"}});
//# sourceMappingURL=app.724f0837.js.map