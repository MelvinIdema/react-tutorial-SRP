(this["webpackJsonpproject-i"]=this["webpackJsonpproject-i"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n(1),s=n(4),i=n(0);function o(t){var e=Object(r.useState)(0),n=Object(c.a)(e,2),s=n[0],o=n[1],u=t.details;return Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{src:u.image,width:"50",alt:u.name}),Object(i.jsxs)("div",{className:"product-info",children:[Object(i.jsx)("h2",{children:u.name}),Object(i.jsx)("p",{children:u.description})]}),Object(i.jsxs)("div",{className:"product-buttons",children:[Object(i.jsx)("button",{className:"product-sub",disabled:0===s,onClick:function(){s>0&&o(s-1)},children:"-"}),Object(i.jsx)("h3",{className:"product-count",children:s||""}),Object(i.jsx)("button",{className:"product-add",onClick:function(){o(s+1)},children:"+"})]})]})}function u(){return Object(i.jsx)("svg",{className:"spinner",width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})})}function a(){var t=Object(r.useState)([]),e=Object(c.a)(t,2),n=e[0],s=e[1],a=function(t){var e=Object(r.useState)(!0),n=Object(c.a)(e,2),s=n[0],i=n[1];return{get:function(e){return new Promise((function(n,c){fetch(t+e).then((function(t){return t.json()})).then((function(t){if(!t)return i(!1),c(t);i(!1),n(t)})).catch((function(t){i(!1),c(t)}))}))},post:function(e,n){return new Promise((function(c,r){fetch(t+e,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){return t.json()})).then((function(t){if(!t)return i(!1),r(t);i(!1),c(t)})).catch((function(t){i(!1),r(t)}))}))},loading:s}}("https://react-tutorial-demo.firebaseio.com/"),j=a.get,b=a.loading;return Object(r.useEffect)((function(){j("products.json").then((function(t){return s(t)}))}),[]),Object(i.jsxs)("div",{className:"store-front",children:[b&&Object(i.jsx)(u,{}),n.map((function(t){return Object(i.jsx)(o,{details:t},t.id)}))]})}n(10);function j(){var t=Object(r.useState)(!1),e=Object(c.a)(t,2),n=e[0],s=e[1];return n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(a,{}),Object(i.jsx)("button",{className:"btn btn-outline",onClick:function(){return s(!1)},children:"Logout"})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Please login"}),Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(){return s(!0)},children:"Login"})]})}Object(s.render)(Object(i.jsx)(j,{}),document.querySelector("#react-root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.84719633.chunk.js.map