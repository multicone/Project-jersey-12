(this["webpackJsonpproject-jersey"]=this["webpackJsonpproject-jersey"]||[]).push([[0],{84:function(e,t,r){},85:function(e,t,r){},86:function(e,t,r){"use strict";r.r(t);var c=r(1),s=r.n(c),n=r(32),a=r.n(n),i=r(8),o=r(6),l=r(36),d=r(0),u=function(){return Object(d.jsx)("div",{className:"w-full py-16",children:Object(d.jsxs)("div",{className:"container-custom mx-auto px-4 flex flex-col items-center md:flex-row md:items-center ",children:[Object(d.jsxs)("div",{className:"mt-6 md:mt-0",children:[Object(d.jsx)("h1",{className:"text-4xl md:text-6xl font-bold text-gray-900",style:{lineHeight:1.1},children:"Jersey design is now revealed!"}),Object(d.jsxs)("div",{className:"flex gap-4 items-center mt-12",children:[Object(d.jsx)("div",{children:Object(d.jsx)(i.b,{to:"/contact",className:"btn-secondary border px-4 md:px-6 py-3 border-indigo-500",children:"Learn more"})}),Object(d.jsx)("div",{children:Object(d.jsxs)(i.b,{to:"/sign-in",className:"border px-6 py-3 bg-gray-800 text-white hover:bg-indigo-600 flex items-center",children:[Object(d.jsx)(l.a,{className:"mr-2"})," ",Object(d.jsx)("span",{className:"text-sm md:text-md",children:"Order Now"})]})})]})]}),Object(d.jsx)("div",{className:"md:pr-8 p-4 mt-16 md:mt-6",children:Object(d.jsx)("img",{src:"".concat("","/assets/images/jersey-front.png"),alt:"Jersey front side",width:"400"})})]})})},j=r(16),b=r(4),x=r.n(b),h=r(9),p=r(3),f=r(14),g=r.n(f),m=r(2),O=Object(c.createContext)(),v=function(e){var t=Object(c.useState)(void 0),r=Object(p.a)(t,2),s=r[0],n=r[1],a=function(){var e=Object(h.a)(x.a.mark((function e(t,r){var c,s,a,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!r){e.next=19;break}return c={email:t,password:r},e.prev=2,e.next=5,g.a.post("/api/users/signin",c);case 5:s=e.sent,a=s.data,console.log(a),localStorage.setItem("userInfo",JSON.stringify(a)),n(a),m.b.success("Login Successfull",{duration:1500}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0.response.data.errors),null===(i=e.t0.response.data)||void 0===i||i.errors.map((function(e){m.b.error(e.message,{duration:1500})}));case 17:e.next=20;break;case 19:m.b.error("Email and Password required");case 20:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,r){return e.apply(this,arguments)}}(),i=function(){var e=Object(h.a)(x.a.mark((function e(t,r,c){var s,a,i,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&r&&c)){e.next=18;break}return s={name:t,email:r,password:c},e.prev=2,e.next=5,g.a.post("/api/users/signup",s);case 5:a=e.sent,i=a.data,console.log(i),localStorage.setItem("userInfo",JSON.stringify(i)),n(i),m.b.success("Register Successful"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),null===(o=e.t0.response.data)||void 0===o||o.errors.map((function(e){m.b.error(e.message,{duration:1500})}));case 16:e.next=19;break;case 18:m.b.error("Name , Email and Password required");case 19:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,r,c){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){localStorage.getItem("userInfo")&&n(JSON.parse(localStorage.getItem("userInfo")))}),[]),Object(d.jsx)(O.Provider,{value:{user:s,login:a,logout:function(){localStorage.removeItem("userInfo"),n(void 0),m.b.success("Logout Successful")},register:i},children:Object(j.a)({},e.children)})},y=function(){var e=Object(c.useContext)(O),t=e.logout,r=e.user;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"w-full bg-gray-800 py-4",children:Object(d.jsxs)("div",{className:"container-custom flex justify-between items-center mx-auto px-4",children:[Object(d.jsx)("div",{children:Object(d.jsx)(i.b,{to:"/",className:"text-white text-lg uppercase",children:"12th Intake"})}),Object(d.jsx)("div",{children:r?Object(d.jsx)("button",{onClick:t,className:"bg-indigo-500 px-4 py-2 text-white rounded-xl hover:bg-indigo-600",children:"Logout"}):Object(d.jsx)(i.b,{to:"/sign-in",className:"bg-indigo-500 px-4 py-2 text-white rounded-xl hover:bg-indigo-600",children:"Sign in"})})]})}),Object(d.jsx)("div",{className:"bg-gray-600 flex justify-center py-2",children:Object(d.jsxs)("div",{className:"flex items-center gap-x-6",children:[Object(d.jsx)("div",{children:Object(d.jsx)(i.b,{to:"/",className:"text-gray-100",children:"Home"})}),Object(d.jsx)("div",{children:Object(d.jsx)(i.b,{to:"/dashboard",className:"text-gray-100",children:"Dashboard"})}),Object(d.jsx)("div",{children:Object(d.jsx)(i.b,{to:"/contact",className:"text-gray-100",children:"Contact"})})]})})]})},N=r(35),w=r.n(N),k=function(){return Object(d.jsx)("div",{className:"flex justify-center items-center",style:{height:"100vh"},children:Object(d.jsx)(w.a,{type:"Hearts",color:"#3480eb",height:80,width:80})})},S=function(){var e=Object(c.useState)(!0),t=Object(p.a)(e,2),r=t[0],s=t[1];return Object(c.useEffect)((function(){setTimeout((function(){s(!1)}),1e3)}),[]),r?Object(d.jsx)(k,{}):Object(d.jsx)("div",{style:{minHeight:"85vh"},children:Object(d.jsx)(u,{})})},C=Object(c.createContext)(),_=function(e){var t=Object(c.useState)(void 0),r=Object(p.a)(t,2),s=r[0],n=r[1],a=Object(c.useContext)(O).user,i=Object(c.useState)(!0),o=Object(p.a)(i,2),l=o[0],u=o[1],b=function(){var e=Object(h.a)(x.a.mark((function e(){var t,r,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u(!0),!a){e.next=18;break}return t={headers:{"content-Type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.prev=3,e.next=6,g.a.get("/api/joursey",t);case 6:r=e.sent,c=r.data,n(c),u(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),n(void 0),u(!1);case 16:e.next=19;break;case 18:u(!1);case 19:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(h.a)(x.a.mark((function e(t,r,c,s,i,o){var l,d,u,j,b;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&r&&c&&s&&i&&o)){e.next=18;break}return l={headers:{"content-Type":"application/json",Authorization:"Bearer ".concat(a.token)}},d={jourseyNumber:t,jourseyName:r,paymentMethod:c,txId:s,size:i,sleveSize:o},e.prev=3,e.next=6,g.a.post("/api/joursey",d,l);case 6:u=e.sent,j=u.data,console.log(j),n(j),m.b.success("Information Submitted Successful"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),null===(b=e.t0.response.data)||void 0===b||b.errors.map((function(e){m.b.error(e.message,{duration:1500})}));case 16:e.next=19;break;case 18:m.b.error("Something went Wrong in input. Please fill the form again",{duration:1500});case 19:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,r,c,s,n,a){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[a]),l?Object(d.jsx)(k,{}):Object(d.jsx)(C.Provider,{value:{jersey:s,fetchJersey:b,submitJersey:f},children:Object(j.a)({},e.children)})},z=function(){Object(c.useContext)(O).user;var e=Object(c.useContext)(C).jersey;return Object(d.jsxs)("div",{className:"form-container bg-white rounded-xl mt-28 px-4 py-8 flex flex-col gap-4 shadow-lg",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"text-2xl font-semibold",children:"Jersey Details"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Payment Status : "}),Object(d.jsx)("span",{children:e.status.toUpperCase()})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Jersey Number : "}),Object(d.jsx)("span",{children:e.jourseyNumber})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Jersey Name : "}),Object(d.jsx)("span",{children:e.jourseyName})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Payment Method : "}),Object(d.jsx)("span",{children:e.paymentMethod})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Transaction Id : "}),Object(d.jsx)("span",{children:e.txId})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Size : "}),Object(d.jsx)("span",{children:e.size})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Sleve Size : "}),Object(d.jsx)("span",{children:e.sleveSize})]})]})},I=function(){var e=Object(c.useState)(),t=Object(p.a)(e,2),r=t[0],s=t[1],n=Object(c.useState)(),a=Object(p.a)(n,2),i=a[0],o=a[1],l=Object(c.useState)(),u=Object(p.a)(l,2),j=u[0],b=u[1],f=Object(c.useState)(),g=Object(p.a)(f,2),v=g[0],y=g[1],N=Object(c.useState)(),w=Object(p.a)(N,2),k=w[0],S=w[1],_=Object(c.useState)(),z=Object(p.a)(_,2),I=z[0],P=z[1],J=(Object(c.useContext)(O).user,Object(c.useContext)(C)),E=(J.jersey,J.submitJersey),D=function(){var e=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r){e.next=4;break}return m.b.error("Jersey Number is required"),e.abrupt("return");case 4:if(i){e.next=7;break}return m.b.error("Jersey Name is required"),e.abrupt("return");case 7:if(j){e.next=10;break}return m.b.error("Payment Method is required"),e.abrupt("return");case 10:if(v){e.next=13;break}return m.b.error("Transaction Id is required"),e.abrupt("return");case 13:if(k){e.next=16;break}return m.b.error("Size is required"),e.abrupt("return");case 16:if(I){e.next=19;break}return m.b.error("Sleve Size required"),e.abrupt("return");case 19:return e.next=21,E(r,i,j,v,k,I);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("form",{className:"form-container bg-white rounded-xl mt-28 px-4 py-8 flex flex-col gap-4 shadow-lg",children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",placeholder:"Desired jersey number",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:r,onChange:function(e){return s(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",placeholder:"Your name in jersey",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:i,onChange:function(e){return o(e.target.value)}})}),Object(d.jsx)("div",{class:"bg-indigo-100 border-t-4 border-indigo-500 rounded-b text-indigo-900 px-4 py-3 shadow-md",role:"alert",children:Object(d.jsxs)("div",{class:"flex",children:[Object(d.jsx)("div",{class:"py-1",children:Object(d.jsx)("svg",{class:"fill-current h-6 w-6 text-teal-500 mr-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(d.jsx)("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"})})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"font-bold mb-2",children:"Read this carefully before Submit"}),Object(d.jsxs)("p",{className:"text-sm ",children:[Object(d.jsx)("span",{className:"font-bold",children:"Pay to : "}),Object(d.jsx)("span",{className:"text-green-400 font-bold",children:"01722041511"})," ","(Bkash / Nagad)"]}),Object(d.jsx)("p",{className:"text-sm",children:Object(d.jsx)("span",{className:"font-bold",children:"Amount : 430 (Half) / 450 (Full)"})}),Object(d.jsxs)("p",{className:"font-bold text-sm mt-2",children:["If you pay directly on cash , Add the short name on transaction id."," "]})]})]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("select",{name:"paymentMethod",id:"payment",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",onChange:function(e){return b(e.target.value)},children:[Object(d.jsx)("option",{value:"0",selected:!0,disabled:!0,children:"-- select your payment method --"}),Object(d.jsx)("option",{value:"Bkash",children:"Bkash"}),Object(d.jsx)("option",{value:"Nagad",children:"Nagad"}),Object(d.jsx)("option",{value:"Cash",children:"Cash"})]})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",placeholder:"Enter your transaction ID",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:v,onChange:function(e){return y(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsxs)("select",{name:"Jersey Size",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",onChange:function(e){return S(e.target.value)},children:[Object(d.jsx)("option",{disabled:!0,selected:!0,children:"-- Pick your size --"}),Object(d.jsx)("option",{value:"S",children:"S"}),Object(d.jsx)("option",{value:"M",children:"M"}),Object(d.jsx)("option",{value:"L",children:"L"}),Object(d.jsx)("option",{value:"XL",children:"XL"})]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("select",{name:"Jersey Sleve Size",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",onChange:function(e){return P(e.target.value)},children:[Object(d.jsx)("option",{disabled:!0,selected:!0,children:"-- Pick your sleve size --"}),Object(d.jsx)("option",{value:"half",children:"Half"}),Object(d.jsx)("option",{value:"full",children:"Full"})]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:D,className:"bg-indigo-500 px-4 py-2 w-full text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1",children:"Submit"})})]})},P=function(e){var t=e.history,r=Object(c.useContext)(O).user;Object(c.useEffect)((function(){r||t.push("/sign-in")}),[r]);var s=Object(c.useContext)(C).jersey;return r?Object(d.jsx)("div",{className:"w-full py-8 bg-gray-100",style:{minHeight:"85vh"},children:Object(d.jsxs)("div",{className:"container-custom mx-auto px-4 flex flex-col items-center",children:[Object(d.jsxs)("h1",{className:"text-gray-800 text-3xl text-center",children:["Hi, ",null===r||void 0===r?void 0:r.name," \ud83d\ude0a"]}),Object(d.jsxs)("div",{className:"flex lg:flex-row flex-col items-center lg:items-center gap-6",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-gray-700 text-3xl mt-16 mb-4",children:"Jersey Demo"}),Object(d.jsx)("img",{src:"".concat("","/assets/images/final.png"),alt:"Jersey preview"})]}),s?Object(d.jsx)(z,{}):Object(d.jsx)(I,{})]})]})}):Object(d.jsx)(k,{})},J=function(e){var t=e.history,r=Object(c.useContext)(O),s=r.login,n=r.user,a=Object(c.useState)(),o=Object(p.a)(a,2),l=o[0],u=o[1],j=Object(c.useState)(),b=Object(p.a)(j,2),f=b[0],g=b[1],m=function(){var e=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l&&0!=l.length){e.next=6;break}return window.alert("Email is required"),e.abrupt("return");case 6:if(f&&!(f.lenght<8)){e.next=9;break}return window.alert("Password must be 8 characters Long"),e.abrupt("return");case 9:return e.next=11,s(l,f);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n&&t.push("/dashboard")}),[n]),Object(d.jsxs)("div",{className:"w-full flex flex-col items-center bg-gray-100 py-4",style:{minHeight:"85vh"},children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"text-3xl text-gray-800 mt-8 mb-4",children:"Sign In"})}),Object(d.jsxs)("form",{className:"form-container bg-white rounded-xl mt-8 px-4 py-8 flex flex-col gap-4 shadow-lg",children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"email",placeholder:"Enter your email",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500",value:l,onChange:function(e){return u(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"password",placeholder:"Enter your password",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500",value:f,onChange:function(e){return g(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:m,className:"bg-indigo-500 px-4 py-2 w-full text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1",children:"Sign In"})}),Object(d.jsx)(i.b,{to:"/create-account",children:Object(d.jsx)("p",{className:"text-sm text-indigo-600 hover:underline",children:"Don't have an account?"})})]})]})},E=function(e){var t=e.history,r=Object(c.useState)(),s=Object(p.a)(r,2),n=s[0],a=s[1],o=Object(c.useState)(),l=Object(p.a)(o,2),u=l[0],j=l[1],b=Object(c.useState)(),f=Object(p.a)(b,2),g=f[0],v=f[1],y=Object(c.useState)(),N=Object(p.a)(y,2),w=N[0],k=N[1],S=Object(c.useContext)(O),C=S.user,_=S.register,z=function(){var e=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n){e.next=4;break}return m.b.error("Name is required"),e.abrupt("return");case 4:if(u){e.next=7;break}return m.b.error("Email is required"),e.abrupt("return");case 7:if(g){e.next=10;break}return m.b.error("Password is required"),e.abrupt("return");case 10:if(w){e.next=13;break}return m.b.error("Confirm Password required"),e.abrupt("return");case 13:if(g==w){e.next=16;break}return m.b.error("Password does not matched"),e.abrupt("return");case 16:return e.next=18,_(n,u,g);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){C&&t.push("/dashboard")}),[C]),Object(d.jsxs)("div",{className:"w-full flex flex-col items-center bg-gray-100 py-4",style:{minHeight:"85vh"},children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"text-3xl text-gray-800 mt-8 mb-4",children:"Create an account"})}),Object(d.jsxs)("form",{className:"form-container bg-white rounded-xl mt-8 px-4 py-8 flex flex-col gap-4 shadow-lg",children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",placeholder:"Your name",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:n,onChange:function(e){return a(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"email",placeholder:"Enter your email",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:u,onChange:function(e){return j(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"password",placeholder:"Enter your new password",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:g,onChange:function(e){return v(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"password",placeholder:"Confirm your password",className:"px-3 py-2 rounded-xl bg-gray-100 w-full border border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 ",value:w,onChange:function(e){return k(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:z,className:"bg-indigo-500 px-4 py-2 w-full text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1",children:"Create account"})}),Object(d.jsx)(i.b,{to:"/sign-in",children:Object(d.jsx)("p",{className:"text-sm text-indigo-600 hover:underline",children:"Already have an account?"})})]})]})},D=function(){return Object(d.jsx)("div",{className:"footer py-3 px-2 w-full border-t flex justify-center",children:Object(d.jsx)("p",{children:"Copyright \xa9 Multicone 2021"})})},H=function(){var e=Object(c.useState)(!0),t=Object(p.a)(e,2),r=t[0],s=t[1];return Object(c.useEffect)((function(){setTimeout((function(){s(!1)}),700)}),[]),r?Object(d.jsx)(k,{}):Object(d.jsx)("div",{className:"w-full pt-20 pb-12 bg-gray-100",style:{minHeight:"85vh"},children:Object(d.jsxs)("div",{className:"container-custom mx-auto flex flex-col items-center",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"text-4xl font-bold text-gray-800",children:"Contributors"})}),Object(d.jsxs)("div",{className:"w-full grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-x-8 gap-y-12",children:[Object(d.jsxs)("div",{className:"card shadow-lg",children:[Object(d.jsx)("div",{style:{height:400},className:"card__image card__image-1"}),Object(d.jsxs)("div",{className:"px-3 py-4",children:[Object(d.jsx)("h1",{className:"card__title",children:"Shafiqul Islam"}),Object(d.jsx)("p",{children:"Designer and Developer"})]})]}),Object(d.jsxs)("div",{className:"card shadow-lg",children:[Object(d.jsx)("div",{style:{height:400},className:"card__image card__image-2"}),Object(d.jsxs)("div",{className:"px-3 py-4",children:[Object(d.jsx)("h1",{className:"card__title",children:"Sourav Sarkar"}),Object(d.jsx)("p",{children:"Managing Director"}),Object(d.jsx)("p",{})]})]}),Object(d.jsxs)("div",{className:"card shadow-lg",children:[Object(d.jsx)("div",{style:{height:400},className:"card__image card__image-3"}),Object(d.jsxs)("div",{className:"px-3 py-4",children:[Object(d.jsx)("h1",{className:"card__title",children:"Nawab Khairuzzaman Mohammad Kibria"}),Object(d.jsx)("p",{children:"Backend Developer"})]})]}),Object(d.jsxs)("div",{className:"card shadow-lg",children:[Object(d.jsx)("div",{style:{height:400},className:"card__image card__image-4"}),Object(d.jsxs)("div",{className:"px-3 py-4",children:[Object(d.jsx)("h1",{className:"card__title",children:"Shakib Hossen Shanto"}),Object(d.jsx)("p",{children:"Programmer and Co Managing Director"})]})]}),Object(d.jsxs)("div",{className:"card shadow-lg",children:[Object(d.jsx)("div",{style:{height:400},className:"card__image card__image-5"}),Object(d.jsxs)("div",{className:"px-3 py-4",children:[Object(d.jsx)("h1",{className:"card__title",children:"Tarek Jaman Labu (Ultron)"}),Object(d.jsx)("p",{children:"Frontend Developer"})]})]}),Object(d.jsxs)("div",{className:"card shadow-lg",children:[Object(d.jsx)("div",{style:{height:400},className:"card__image card__image-6"}),Object(d.jsxs)("div",{className:"px-3 py-4",children:[Object(d.jsx)("h1",{className:"card__title",children:"Rishad Nur (Watcher)"}),Object(d.jsx)("p",{children:"Programmer and Co Managing Director"})]})]})]})]})})},M=Object(c.createContext)(),q=function(e){var t=Object(c.useState)(),r=Object(p.a)(t,2),s=r[0],n=r[1],a=Object(c.useContext)(O).user,i=Object(c.useState)(!0),o=Object(p.a)(i,2),l=(o[0],o[1]),u=function(){var e=Object(h.a)(x.a.mark((function e(){var t,r,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(!0),!a){e.next=18;break}return t={headers:{"content-Type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.prev=3,e.next=6,g.a.get("/api/orders",t);case 6:r=e.sent,c=r.data,n(c),l(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),n(void 0),l(!1);case 16:e.next=19;break;case 18:l(!1);case 19:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){u()}),[a]);var b=function(){var e=Object(h.a)(x.a.mark((function e(t){var r,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(!0),!a){e.next=20;break}return r={headers:{"content-Type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.prev=3,e.next=6,g.a.post("/api/orders/confirm/".concat(t),{},r);case 6:c=e.sent,s=c.data,console.log(s),m.b.success("Payment Status Updated Successfully"),u(),l(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),n(void 0),l(!1);case 18:e.next=21;break;case 20:l(!1);case 21:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(h.a)(x.a.mark((function e(t){var r,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(!0),!a){e.next=20;break}return r={headers:{"content-Type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.prev=3,e.next=6,g.a.post("/api/orders/reject/".concat(t),{},r);case 6:c=e.sent,s=c.data,console.log(s),m.b.success("Payment Status Updated Successfully"),u(),l(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),n(void 0),l(!1);case 18:e.next=21;break;case 20:l(!1);case 21:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(M.Provider,{value:{orders:s,confirm:b,reject:f},children:Object(j.a)({},e.children)})},A=function(){var e=Object(c.useContext)(M),t=e.orders,r=e.confirm,s=e.reject;return t?Object(d.jsx)("div",{class:"container flex overflow-auto",children:Object(d.jsx)("div",{class:"flex flex-col",children:Object(d.jsx)("div",{class:"w-full",children:Object(d.jsxs)("table",{class:"",children:[Object(d.jsx)("thead",{class:"bg-gray-50",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{class:"px-6 py-2 text-xs text-gray-500",children:"Name"}),Object(d.jsx)("th",{class:"px-6 py-2 text-xs text-gray-500",children:"Jersey Details"}),Object(d.jsx)("th",{class:"px-6 py-2 text-xs text-gray-500",children:"Payment Info"}),Object(d.jsx)("th",{class:"px-6 py-2 text-xs text-gray-500",children:"Payment Status"}),Object(d.jsx)("th",{class:"px-6 py-2 text-xs text-gray-500",children:"Action"})]})}),Object(d.jsx)("tbody",{class:"bg-white",children:t.map((function(e){return Object(d.jsxs)("tr",{class:"",children:[Object(d.jsx)("td",{class:"px-6 py-4",children:Object(d.jsx)("div",{class:"text-sm text-gray-900",children:e.user.name})}),Object(d.jsx)("td",{class:"px-6 py-4",children:Object(d.jsxs)("div",{class:"text-sm text-gray-500",children:[e.jourseyName," (",e.jourseyNumber,") - ",e.size," -"," ",e.sleveSize]})}),Object(d.jsx)("td",{class:"px-6 py-4",children:Object(d.jsxs)("div",{class:"text-sm text-gray-500",children:[e.paymentMethod," - ",e.txId]})}),Object(d.jsx)("td",{class:"px-6 py-4",children:Object(d.jsx)("div",{class:"text-sm text-gray-500",children:e.status})}),Object(d.jsxs)("td",{class:"px-6 py-4",children:[Object(d.jsx)("button",{onClick:function(){return r(e._id)},class:"px-4 py-1 text-sm text-white bg-blue-400 rounded w-20",children:"Confirm"}),Object(d.jsx)("button",{onClick:function(){return s(e._id)},class:"px-4 py-1 text-sm text-white bg-red-400 rounded w-20 xl:ml-2",children:"Reject"})]})]},e._id)}))})]})})})}):Object(d.jsx)(d.Fragment,{})},B=function(e){var t=e.history,r=Object(c.useContext)(O).user;Object(c.useEffect)((function(){r||t.push("/sign-in"),r&&"admin"==!r.role&&t.push("/dashboard")}),[r]);Object(c.useContext)(C).jersey;return r?r&&"admin"==r.role?Object(d.jsx)("div",{className:"w-full py-8 bg-gray-100",style:{minHeight:"85vh"},children:Object(d.jsxs)("div",{className:"container-custom mx-auto px-4 flex flex-col items-center",children:[Object(d.jsxs)("h1",{className:"text-gray-800 text-3xl text-center mb-8",children:["Hi, ",null===r||void 0===r?void 0:r.name," \ud83d\ude0a"]}),Object(d.jsx)(A,{})]})}):Object(d.jsxs)("div",{className:"flex justify-center items-center bg-gray-100",style:{minHeight:"85vh"},children:[" ","You are not admin"," "]}):Object(d.jsx)(k,{})},L=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(m.a,{}),Object(d.jsx)(v,{children:Object(d.jsx)(_,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(y,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",component:S,exact:!0}),Object(d.jsx)(o.a,{path:"/sign-in",component:J,exact:!0}),Object(d.jsx)(o.a,{path:"/create-account",component:E,exact:!0}),Object(d.jsx)(o.a,{path:"/dashboard",component:P,exact:!0}),Object(d.jsx)(o.a,{path:"/contact",component:H,exact:!0}),Object(d.jsx)(q,{children:Object(d.jsx)(o.a,{path:"/orders",component:B,exact:!0})})]}),Object(d.jsx)(D,{})]})})})]})};r(84),r(85);a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.e2a3677e.chunk.js.map