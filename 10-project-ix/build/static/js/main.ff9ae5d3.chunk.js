(this["webpackJsonpproject-i"]=this["webpackJsonpproject-i"]||[]).push([[0],{10:function(t,e,c){},11:function(t,e,c){"use strict";c.r(e);var n=c(2),s=c(1),r=c(4),i=c(0);function o(t){var e=Object(s.useState)(0),c=Object(n.a)(e,2),r=c[0],o=c[1],a=t.details;return console.log(a),Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("img",{width:"50",alt:"",src:a.image}),Object(i.jsxs)("div",{className:"product-info",children:[Object(i.jsx)("h2",{children:a.name}),Object(i.jsx)("p",{children:a.description})]}),Object(i.jsxs)("div",{className:"product-buttons",children:[Object(i.jsx)("button",{className:"product-sub",disabled:0===r,onClick:function(){r>0&&o(r-1)},children:"-"}),Object(i.jsx)("h3",{className:"product-count",children:r||""}),Object(i.jsx)("button",{className:"product-add",onClick:function(){o(r+1)},children:"+"})]})]})}function a(){return Object(i.jsx)("svg",{className:"spinner",width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})})}function j(){var t=Object(s.useState)(!0),e=Object(n.a)(t,2),c=e[0],r=e[1],j=Object(s.useState)([]),u=Object(n.a)(j,2),l=u[0],b=u[1];return Object(s.useEffect)((function(){fetch("https://react-tutorial-demo.firebaseio.com/products.json").then((function(t){return t.json()})).then((function(t){return b(t)})).catch((function(t){return console.error(t)})).finally((function(t){return r(!1)}))}),[]),c?Object(i.jsx)(a,{}):!c&&Object(i.jsx)("div",{className:"store-front",children:l&&l.map((function(t){return Object(i.jsx)(o,{details:t})}))})}c(10);function u(){var t=Object(s.useState)(!1),e=Object(n.a)(t,2),c=e[0],r=e[1];return c?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)("button",{className:"btn btn-outline",onClick:function(){return r(!1)},children:"Logout"})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"Please login"}),Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(){return r(!0)},children:"Login"})]})}Object(r.render)(Object(i.jsx)(u,{}),document.querySelector("#react-root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.ff9ae5d3.chunk.js.map