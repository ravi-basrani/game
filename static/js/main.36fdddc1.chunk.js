(this.webpackJsonppractice4=this.webpackJsonppractice4||[]).push([[0],{18:function(e,c,t){},22:function(e,c,t){"use strict";t.r(c);var i=t(0),n=t(2),s=t.n(n),a=t(11),r=t.n(a),d=(t(18),t(12)),j=t(4),o=[{id:0,image:"/images/dance1.jpg"},{id:1,image:"/images/dance2.jpg"},{id:2,image:"/images/dance3.jpg"},{id:3,image:"/images/dance4.jpg"},{id:4,image:"/images/dance5.jpeg"},{id:5,image:"/images/dance6.png"},{id:6,image:"/images/dance7.jpg"},{id:7,image:"/images/dance8.jpg"},{id:8,image:"/images/dance9.jpg"},{id:9,image:"/images/dance10.jpg"}],l=t(24),b=t(25),g=t.p+"static/media/logo.9c916dff.png",h=function(e){return Object(i.jsxs)("div",{className:"row header box",children:[Object(i.jsx)("img",{className:"imgss",src:g,alt:"logo",height:"100",width:"100"}),Object(i.jsx)("div",{className:"cntrs",children:Object(i.jsx)("div",{id:"container",children:Object(i.jsxs)("div",{id:"flip",children:[Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:["Memory","\ud83e\udde0"]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:["Play","\ud83c\udfae"]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:["Win","\ud83c\udf7e"]})})]})})}),Object(i.jsxs)("div",{className:"scores",children:[Object(i.jsxs)("span",{children:["High score: ",e.lastScore]}),Object(i.jsxs)("span",{children:["Current score: ",e.score]})]})]})},m=function(){return Object(i.jsxs)("section",{className:"boxr",id:"rules",children:[Object(i.jsx)("h2",{children:"Rules"}),Object(i.jsx)("p",{children:"ravi wants to invite a great dance artist to his concert,not two or more would be allowed, so if you invite one more than once, you loose."})]})};function u(e){var c=Object(n.useState)(o),t=Object(j.a)(c,1)[0],s=Object(n.useState)([]),a=Object(j.a)(s,2),r=a[0],g=a[1],u=Object(n.useState)([]),O=Object(j.a)(u,2),x=O[0],v=O[1],p=Object(n.useState)(0),f=Object(j.a)(p,2),w=f[0],y=f[1],N=Object(n.useState)(0),S=Object(j.a)(N,2),C=S[0],k=S[1],F=function(){for(var e=[],c=t.length;e.length<3;){var i=Math.floor(Math.random()*c);-1===e.indexOf(i)&&e.push(i)}for(var n=[],s=0;s<3;s++)n.push(t[e[s]]);g(n)};Object(n.useEffect)((function(){F()}),[]);var M=r.map((function(e){return Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)(l.a,{children:Object(i.jsx)(b.a,{id:e.id,onClick:function(e){return function(e){var c=e.target.id;-1===x.indexOf(c)?(v([].concat(Object(d.a)(x),[c])),F(),y(w+1),document.body.style.backgroundColor="wheat"):(C<w&&k(w),y(0),v([]),document.body.style.backgroundColor="red")}(e)},src:e.image,className:"look"})})},e.id)}));return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(h,{lastScore:C,score:w}),Object(i.jsx)(m,{}),Object(i.jsx)("div",{className:"row",children:M})]})}var O=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(u,{})})},x=(t(21),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(c){var t=c.getCLS,i=c.getFID,n=c.getFCP,s=c.getLCP,a=c.getTTFB;t(e),i(e),n(e),s(e),a(e)}))});r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),x()}},[[22,1,2]]]);
//# sourceMappingURL=main.36fdddc1.chunk.js.map