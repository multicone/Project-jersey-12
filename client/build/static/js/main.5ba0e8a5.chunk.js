(this["webpackJsonpproject-jersey"]=this["webpackJsonpproject-jersey"]||[]).push([[0],{84:function(e,t,r){},85:function(e,t,r){},86:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(32),a=r.n(s),i=r(8),o=r(5),l=r(36),u=r(0),d=function(){return Object(u.jsx)("div",{className:"w-full py-16",children:Object(u.jsxs)("div",{className:"container-custom mx-auto px-4 flex",children:[Object(u.jsxs)("div",{className:"mt-12",children:[Object(u.jsx)("h1",{className:"text-6xl font-bold text-gray-900",style:{lineHeight:1.1},children:"Jersey design is now revealed!"}),Object(u.jsxs)("div",{className:"flex gap-4 items-center mt-12",children:[Object(u.jsx)("div",{children:Object(u.jsx)(i.b,{to:"/contact",className:"btn-secondary border px-6 py-3 border-indigo-500",children:"Learn more"})}),Object(u.jsx)("div",{children:Object(u.jsxs)(i.b,{to:"/sign-in",className:"border px-6 py-3 bg-gray-800 text-white hover:bg-indigo-600 flex items-center",children:[Object(u.jsx)(l.a,{className:"mr-2"})," ",Object(u.jsx)("span",{children:"Order Now"})]})})]})]}),Object(u.jsx)("div",{className:"pr-8",children:Object(u.jsx)("img",{src:"".concat("","/assets/images/jersey-front.png"),alt:"Jersey front side",width:"400"})})]})})},j=r(18),b=r(6),x=r.n(b),h=r(13),g=r(3),p=r(15),f=r.n(p),O=r(2),m=Object(n.createContext)(),v=function(e){var t=Object(n.useState)(void 0),r=Object(g.a)(t,2),c=r[0],s=r[1],a=function(){var e=Object(h.a)(x.a.mark((function e(t,r){var n,c,a,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!r){e.next=18;break}return n={email:t,password:r},e.prev=2,e.next=5,f.a.post("/api/users/signin",n);case 5:c=e.sent,a=c.data,console.log(a),localStorage.setItem("userInfo",JSON.stringify(a)),s(a),O.b.success("Login Successfull",{duration:1500}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),null===(i=e.t0.response.data)||void 0===i||i.errors.map((function(e){O.b.error(e.message,{duration:1500})}));case 16:e.next=19;break;case 18:O.b.error("Email and Password required");case 19:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,r){return e.apply(this,arguments)}}(),i=function(){var e=Object(h.a)(x.a.mark((function e(t,r,n){var c,a,i,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&r&&n)){e.next=18;break}return c={name:t,email:r,password:n},e.prev=2,e.next=5,f.a.post("/api/users/signup",c);case 5:a=e.sent,i=a.data,console.log(i),localStorage.setItem("userInfo",JSON.stringify(i)),s(i),O.b.success("Register Successful"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),null===(o=e.t0.response.data)||void 0===o||o.errors.map((function(e){O.b.error(e.message,{duration:1500})}));case 16:e.next=19;break;case 18:O.b.error("Name , Email and Password required");case 19:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,r,n){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){localStorage.getItem("userInfo")&&s(JSON.parse(localStorage.getItem("userInfo")))}),[]),Object(u.jsx)(m.Provider,{value:{user:c,login:a,logout:function(){localStorage.removeItem("userInfo"),s(void 0),O.b.success("Logout Successful")},register:i},children:Object(j.a)({},e.children)})},y=function(){var e=Object(n.useContext)(m),t=e.logout,r=e.user;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"w-full bg-gray-800 py-4",children:Object(u.jsxs)("div",{className:"container-custom flex justify-between items-center mx-auto px-4",children:[Object(u.jsx)("div",{children:Object(u.jsx)(i.b,{to:"/",className:"text-white text-lg uppercase",children:"12th Intake"})}),Object(u.jsx)("div",{children:r?Object(u.jsx)("button",{onClick:t,className:"bg-indigo-500 px-4 py-2 text-white rounded-xl hover:bg-indigo-600",children:"Logout"}):Object(u.jsx)(i.b,{to:"/sign-in",className:"bg-indigo-500 px-4 py-2 text-white rounded-xl hover:bg-indigo-600",children:"Sign in"})})]})}),Object(u.jsx)("div",{className:"bg-gray-600 flex justify-center py-2",children:Object(u.jsxs)("div",{className:"flex items-center gap-x-6",children:[Object(u.jsx)("div",{children:Object(u.jsx)(i.b,{to:"/",className:"text-gray-100",children:"Home"})}),Object(u.jsx)("div",{children:Object(u.jsx)(i.b,{to:"/dashboard",className:"text-gray-100",children:"Dashboard"})}),Object(u.jsx)("div",{children:Object(u.jsx)(i.b,{to:"/contact",className:"text-gray-100",children:"Contact"})})]})})]})},N=r(35),w=r.n(N),S=function(){return Object(u.jsx)("div",{className:"flex justify-center items-center",style:{height:"100vh"},children:Object(u.jsx)(w.a,{type:"Hearts",color:"#3480eb",height:80,width:80})})},k=function(){var e=Object(n.useState)(!0),t=Object(g.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){setTimeout((function(){c(!1)}),1e3)}),[]),r?Object(u.jsx)(S,{}):Object(u.jsx)("div",{style:{minHeight:"85vh"},children:Object(u.jsx)(d,{})})},C=Object(n.createContext)(),_=function(e){var t=Object(n.useState)(void 0),r=Object(g.a)(t,2),c=r[0],s=r[1],a=Object(n.useContext)(m).user,i=Object(n.useState)(!0),o=Object(g.a)(i,2),l=o[0],d=o[1],b=function(){var e=Object(h.a)(x.a.mark((function e(){var t,r,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d(!0),!a){e.next=18;break}return t={headers:{"content-Type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.prev=3,e.next=6,f.a.get("/api/joursey",t);case 6:r=e.sent,n=r.data,s(n),d(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),s(void 0),d(!1);case 16:e.next=19;break;case 18:d(!1);case 19:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(h.a)(x.a.mark((function e(t,r,n,c,i,o){var l,u,d,j,b;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&r&&n&&c&&i&&o)){e.next=18;break}return l={headers:{"content-Type":"application/json",Authorization:"Bearer ".concat(a.token)}},u={jourseyNumber:t,jourseyName:r,paymentMethod:n,txId:c,size:i,sleveSize:o},e.prev=3,e.next=6,f.a.post("/api/joursey",u,l);case 6:d=e.sent,j=d.data,console.log(j),s(j),O.b.success("Information Submitted Successful"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),null===(b=e.t0.response.data)||void 0===b||b.errors.map((function(e){O.b.error(e.message,{duration:1500})}));case 16:e.next=19;break;case 18:O.b.error("Something went Wrong in input. Please fill the form again",{duration:1500});case 19:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,r,n,c,s,a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[a]),l?Object(u.jsx)(S,{}):Object(u.jsx)(C.Provider,{value:{jersey:c,fetchJersey:b,submitJersey:p},children:Object(j.a)({},e.children)})},I=function(){Object(n.useContext)(m).user;var e=Object(n.useContext)(C).jersey;return Object(u.jsxs)("div",{className:"form-container bg-white rounded-xl mt-28 px-4 py-8 flex flex-col gap-4 shadow-lg",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Jersey Number : "}),Object(u.jsx)("span",{children:e.jourseyNumber})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Jersey Name : "}),Object(u.jsx)("span",{children:e.jourseyName})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Payment Method : "}),Object(u.jsx)("span",{children:e.paymentMethod})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Transaction Id : "}),Object(u.jsx)("span",{children:e.txId})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Size : "}),Object(u.jsx)("span",{children:e.size})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Sleve Size : "}),Object(u.jsx)("span",{children:e.sleveSize})]})]})},J=function(){var e=Object(n.useState)(),t=Object(g.a)(e,2),r=t[0],c=t[1],s=Object(n.useState)(),a=Object(g.a)(s,2),i=a[0],o=a[1],l=Object(n.useState)(),d=Object(g.a)(l,2),j=d[0],b=d[1],p=Object(n.useState)(),f=Object(g.a)(p,2),v=f[0],y=f[1],N=Object(n.useState)(),w=Object(g.a)(N,2),S=w[0],k=w[1],_=Object(n.useState)(),I=Object(g.a)(_,2),J=I[0],D=I[1],E=(Object(n.useContext)(m).user,Object(n.useContext)(C)),z=(E.jersey,E.submitJersey),P=function(){var e=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r){e.next=4;break}return O.b.error("Jersey Number is required"),e.abrupt("return");case 4:if(i){e.next=7;break}return O.b.error("Jersey Name is required"),e.abrupt("return");case 7:if(j){e.next=10;break}return O.b.error("Payment Method is required"),e.abrupt("return");case 10:if(v){e.next=13;break}return O.b.error("Transaction Id is required"),e.abrupt("return");case 13:if(S){e.next=16;break}return O.b.error("Size is required"),e.abrupt("return");case 16:if(J){e.next=19;break}return O.b.error("Sleve Size required"),e.abrupt("return");case 19:return e.next=21,z(r,i,j,v,S,J);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("form",{className:"form-container bg-white rounded-xl mt-28 px-4 py-8 flex flex-col gap-4 shadow-lg",children:[Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text",placeholder:"Desired jersey number",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:r,onChange:function(e){return c(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text",placeholder:"Your name in jersey",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:i,onChange:function(e){return o(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsxs)("select",{name:"paymentMethod",id:"payment",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",onChange:function(e){return b(e.target.value)},children:[Object(u.jsx)("option",{value:"0",selected:!0,disabled:!0,children:"-- select your payment method --"}),Object(u.jsx)("option",{value:"Bkash",children:"Bkash"}),Object(u.jsx)("option",{value:"DBBL Rocket",children:"DBBL Rocket"})]})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text",placeholder:"Enter your transaction ID",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:v,onChange:function(e){return y(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsxs)("select",{name:"Jersey Size",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",onChange:function(e){return k(e.target.value)},children:[Object(u.jsx)("option",{disabled:!0,selected:!0,children:"-- Pick your size --"}),Object(u.jsx)("option",{value:"S",children:"S"}),Object(u.jsx)("option",{value:"M",children:"M"}),Object(u.jsx)("option",{value:"L",children:"L"}),Object(u.jsx)("option",{value:"XL",children:"XL"})]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("select",{name:"Jersey Sleve Size",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",onChange:function(e){return D(e.target.value)},children:[Object(u.jsx)("option",{disabled:!0,selected:!0,children:"-- Pick your sleve size --"}),Object(u.jsx)("option",{value:"half",children:"Half"}),Object(u.jsx)("option",{value:"full",children:"Full"})]})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:P,className:"bg-indigo-500 px-4 py-2 w-full text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1",children:"Submit"})})]})},D=function(e){var t=e.history,r=Object(n.useContext)(m).user;Object(n.useEffect)((function(){r||t.push("/sign-in")}),[r]);var c=Object(n.useContext)(C).jersey;return r?Object(u.jsx)("div",{className:"w-full py-8 bg-gray-100",style:{minHeight:"85vh"},children:Object(u.jsxs)("div",{className:"container-custom mx-auto px-4 flex flex-col items-center",children:[Object(u.jsxs)("h1",{className:"text-gray-800 text-3xl text-center",children:["Hi, ",null===r||void 0===r?void 0:r.name," \ud83d\ude0a"]}),Object(u.jsxs)("div",{className:"flex lg:flex-row flex-col items-center lg:items-center gap-6",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"text-gray-700 text-3xl mt-16 mb-4",children:"Jersey Demo"}),Object(u.jsx)("img",{src:"".concat("","/assets/images/final.png"),alt:"Jersey preview"})]}),c?Object(u.jsx)(I,{}):Object(u.jsx)(J,{})]})]})}):Object(u.jsx)(S,{})},E=function(e){var t=e.history,r=Object(n.useContext)(m),c=r.login,s=r.user,a=Object(n.useState)(),o=Object(g.a)(a,2),l=o[0],d=o[1],j=Object(n.useState)(),b=Object(g.a)(j,2),p=b[0],f=b[1],O=function(){var e=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l&&0!=l.length){e.next=6;break}return window.alert("Email is required"),e.abrupt("return");case 6:if(p&&!(p.lenght<8)){e.next=9;break}return window.alert("Password must be 8 characters Long"),e.abrupt("return");case 9:return e.next=11,c(l,p);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s&&t.push("/dashboard")}),[s]),Object(u.jsxs)("div",{className:"w-full flex flex-col items-center bg-gray-100 py-4",style:{minHeight:"85vh"},children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"text-3xl text-gray-800 mt-8 mb-4",children:"Sign In"})}),Object(u.jsxs)("form",{className:"form-container bg-white rounded-xl mt-8 px-4 py-8 flex flex-col gap-4 shadow-lg",children:[Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"email",placeholder:"Enter your email",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500",value:l,onChange:function(e){return d(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"password",placeholder:"Enter your password",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500",value:p,onChange:function(e){return f(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:O,className:"bg-indigo-500 px-4 py-2 w-full text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1",children:"Sign In"})}),Object(u.jsx)(i.b,{to:"/create-account",children:Object(u.jsx)("p",{className:"text-sm text-indigo-600 hover:underline",children:"Don't have an account?"})})]})]})},z=function(e){var t=e.history,r=Object(n.useState)(),c=Object(g.a)(r,2),s=c[0],a=c[1],o=Object(n.useState)(),l=Object(g.a)(o,2),d=l[0],j=l[1],b=Object(n.useState)(),p=Object(g.a)(b,2),f=p[0],v=p[1],y=Object(n.useState)(),N=Object(g.a)(y,2),w=N[0],S=N[1],k=Object(n.useContext)(m),C=k.user,_=k.register,I=function(){var e=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s){e.next=4;break}return O.b.error("Name is required"),e.abrupt("return");case 4:if(d){e.next=7;break}return O.b.error("Email is required"),e.abrupt("return");case 7:if(f){e.next=10;break}return O.b.error("Password is required"),e.abrupt("return");case 10:if(w){e.next=13;break}return O.b.error("Confirm Password required"),e.abrupt("return");case 13:if(f==w){e.next=16;break}return O.b.error("Password does not matched"),e.abrupt("return");case 16:return e.next=18,_(s,d,f);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){C&&t.push("/dashboard")}),[C]),Object(u.jsxs)("div",{className:"w-full flex flex-col items-center bg-gray-100 py-4",style:{minHeight:"85vh"},children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"text-3xl text-gray-800 mt-8 mb-4",children:"Create an account"})}),Object(u.jsxs)("form",{className:"form-container bg-white rounded-xl mt-8 px-4 py-8 flex flex-col gap-4 shadow-lg",children:[Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text",placeholder:"Your name",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:s,onChange:function(e){return a(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"email",placeholder:"Enter your email",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:d,onChange:function(e){return j(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"password",placeholder:"Enter your new password",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:f,onChange:function(e){return v(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"password",placeholder:"Confirm your password",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:w,onChange:function(e){return S(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:I,className:"bg-indigo-500 px-4 py-2 w-full text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1",children:"Create account"})}),Object(u.jsx)(i.b,{to:"/sign-in",children:Object(u.jsx)("p",{className:"text-sm text-indigo-600 hover:underline",children:"Already have an account?"})})]})]})},P=function(){return Object(u.jsx)("div",{className:"footer py-3 px-2 w-full border-t flex justify-center",children:Object(u.jsx)("p",{children:"Copyright \xa9 Multicone 2021"})})},q=function(){var e=Object(n.useState)(!0),t=Object(g.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){setTimeout((function(){c(!1)}),700)}),[]),r?Object(u.jsx)(S,{}):Object(u.jsx)("div",{className:"w-full pt-20 pb-12 bg-gray-100",style:{minHeight:"85vh"},children:Object(u.jsxs)("div",{className:"container-custom mx-auto flex flex-col items-center",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{className:"text-4xl font-bold text-gray-800",children:"Contributors"})}),Object(u.jsxs)("div",{className:"w-full grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-x-8 gap-y-12",children:[Object(u.jsxs)("div",{className:"card shadow-lg",children:[Object(u.jsx)("div",{style:{height:400},className:"card__image card__image-1"}),Object(u.jsxs)("div",{className:"px-3 py-4",children:[Object(u.jsx)("h1",{className:"card__title",children:"Shafiqul Islam"}),Object(u.jsx)("p",{children:"Designer and Developer"})]})]}),Object(u.jsxs)("div",{className:"card shadow-lg",children:[Object(u.jsx)("div",{style:{height:400},className:"card__image card__image-2"}),Object(u.jsxs)("div",{className:"px-3 py-4",children:[Object(u.jsx)("h1",{className:"card__title",children:"Sourav Sarkar"}),Object(u.jsx)("p",{children:"Managing Director"}),Object(u.jsx)("p",{})]})]}),Object(u.jsxs)("div",{className:"card shadow-lg",children:[Object(u.jsx)("div",{style:{height:400},className:"card__image card__image-3"}),Object(u.jsxs)("div",{className:"px-3 py-4",children:[Object(u.jsx)("h1",{className:"card__title",children:"Nawab Khairuzzaman Mohammad Kibria"}),Object(u.jsx)("p",{children:"Backend Developer"})]})]}),Object(u.jsxs)("div",{className:"card shadow-lg",children:[Object(u.jsx)("div",{style:{height:400},className:"card__image card__image-4"}),Object(u.jsxs)("div",{className:"px-3 py-4",children:[Object(u.jsx)("h1",{className:"card__title",children:"Shakib Hossen Shanto"}),Object(u.jsx)("p",{children:"Programmer and Co Managing Director"})]})]}),Object(u.jsxs)("div",{className:"card shadow-lg",children:[Object(u.jsx)("div",{style:{height:400},className:"card__image card__image-5"}),Object(u.jsxs)("div",{className:"px-3 py-4",children:[Object(u.jsx)("h1",{className:"card__title",children:"Tarek Jaman Labu (Ultron)"}),Object(u.jsx)("p",{children:"Frontend Developer"})]})]}),Object(u.jsxs)("div",{className:"card shadow-lg",children:[Object(u.jsx)("div",{style:{height:400},className:"card__image card__image-6"}),Object(u.jsxs)("div",{className:"px-3 py-4",children:[Object(u.jsx)("h1",{className:"card__title",children:"Rishad Nur (Watcher)"}),Object(u.jsx)("p",{children:"Programmer and Co Managing Director"})]})]})]})]})})},M=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(O.a,{}),Object(u.jsx)(v,{children:Object(u.jsx)(_,{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(y,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",component:k,exact:!0}),Object(u.jsx)(o.a,{path:"/dashboard",component:D,exact:!0}),Object(u.jsx)(o.a,{path:"/contact",component:q,exact:!0}),Object(u.jsx)(o.a,{path:"/sign-in",component:E,exact:!0}),Object(u.jsx)(o.a,{path:"/create-account",component:z,exact:!0})]}),Object(u.jsx)(P,{})]})})})]})};r(84),r(85);a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.5ba0e8a5.chunk.js.map