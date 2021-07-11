(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(4),s=c.n(a),i=c(29),r=c.n(i);c(37);var o=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(n.jsxs)("div",{class:"container-fluid",children:[Object(n.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{class:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[Object(n.jsx)("a",{class:"navbar-brand",href:"#",children:"Interview Buddy"}),Object(n.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)("a",{class:"nav-link ","aria-current":"page",href:"/#/review",children:"Review Questions"})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)("a",{class:"nav-link",href:"/#/practice",children:"Practice Questions"})})]})]})]})})})},l=c(14);c(38);var d=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),o=r[0],d=r[1],j=Object(a.useState)(""),b=Object(l.a)(j,2),u=b[0],h=b[1],O=Object(a.useState)(1),v=Object(l.a)(O,2),x=v[0],f=v[1],p=Object(a.useState)(""),m=Object(l.a)(p,2),g=m[0],y=m[1];return Object(a.useEffect)((function(){console.log("working"),fetch("https://interview-buddy.herokuapp.com/question",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:x})}).then((function(e){console.log(e),e.json().then((function(e){s(e.question),d(e.solution),h(e.difficulty)}))})).catch((function(e){return console.log(e)}))})),Object(n.jsxs)("div",{children:[g.length>0&&Object(n.jsx)("div",{className:"alert alert-success",role:"alert",children:g}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"row memorizePanel",children:Object(n.jsxs)("div",{className:"col-xs-8 col-xs-offset-2",children:[Object(n.jsx)("div",{className:"panel panel-default cardFront",children:Object(n.jsx)("div",{className:"panel-body",children:Object(n.jsx)("div",{className:"alignContainer",children:Object(n.jsx)("div",{className:"alignMiddle frontText",children:Object(n.jsx)("h3",{className:"text-center",children:c})})})})}),Object(n.jsx)("div",{className:"panel panel-primary cardBack",children:Object(n.jsx)("div",{className:"panel-body",children:Object(n.jsx)("div",{className:"alignContainer",children:Object(n.jsx)("div",{className:"alignMiddle frontText"})})})})]})}),Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsxs)("div",{className:"col-xs-12 text-center ",children:[Object(n.jsxs)("a",{href:o,target:"_blank",className:"btn btn-info  flipCard",children:[Object(n.jsx)("i",{className:"fa fa-exchange"}),"View Solution"]}),"\xa0 \xa0",Object(n.jsxs)("button",{className:"btn btn-success ",onClick:function(){fetch("https://interview-buddy.herokuapp.com/add-review",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:c,solution:o,difficulty:u})}).then((function(e){e.json().then((function(e){console.log(e),y(e.message)}))})).catch((function(e){return console.log(e)}))},children:[Object(n.jsx)("i",{className:"fa fa-check"}),"Add for review"]}),"\xa0 \xa0",Object(n.jsxs)("button",{className:"btn btn-primary my-3 ",onClick:function(){y(""),f(x+1)},children:["Next Question",Object(n.jsx)("i",{className:"fa fa-arrow-right"})]})]})})]})},j=c(11);var b=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{class:"card my-4",children:[Object(n.jsx)("div",{class:"card-header",children:"Practice for your upcoming interview"}),Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h5",{class:"card-title",children:"Practice Questions"}),Object(n.jsx)("p",{class:"card-text",children:"Want help in preparing for your upcoming interview , we have compiled a lot of question from geeks for geeks to help you prepare for your next interview , do check them out ."}),Object(n.jsx)("a",{href:"#/practice",class:"btn btn-success",children:"Practice Questions"})]})]}),Object(n.jsxs)("div",{class:"card my-4",children:[Object(n.jsx)("div",{class:"card-header",children:"Practice for your upcoming interview"}),Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsxs)("h5",{class:"card-title",children:["Revisit the question which you want anytime"," "]}),Object(n.jsx)("p",{class:"card-text",children:"Stuck with a question ? Add it to review it later and revisit anytime and try to upsolve it , you can also check the solutions if you are stuck at any point . HAPPY SOLVING !"}),Object(n.jsx)("a",{href:"#/review",class:"btn btn-info",children:"See your review Questions"})]})]})]})},u=(c(24),c(39),{apiKey:"AIzaSyC6ScEOwW_jIWPYifPrloCA8fiz1Ej-dEw",authDomain:"interview-buddy-713d1.firebaseapp.com",projectId:"interview-buddy-713d1",storageBucket:"interview-buddy-713d1.appspot.com",messagingSenderId:"528565308763",appId:"1:528565308763:web:01be3db08aae9c6aa29e7e",measurementId:"G-GLHG1T5BP0"}),h=c(18),O=c(30),v=c(8);var x=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{class:"card text-center my-4",children:Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("p",{class:"card-text",children:e.question}),Object(n.jsx)("a",{href:e.solution,target:"_blank",class:"btn btn-info",children:"See Solution"})]})})})};var f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(1),r=Object(l.a)(i,2),o=r[0],d=(r[1],Object(a.useState)("")),j=Object(l.a)(d,2);return j[0],j[1],Object(a.useEffect)((function(){fetch("https://interview-buddy.herokuapp.com/review",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o})}).then((function(e){e.json().then((function(e){s(e.review),console.log(c)}))})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsxs)("div",{children:[0==c.length&&Object(n.jsx)("div",{className:"alert alert-success",role:"alert",children:"There are no Questions for you to review"}),c.map((function(e){return Object(n.jsx)(x,{question:e.question,solution:e.solution})}))]})};var p=function(){return Object(a.useEffect)((function(){h.a.initializeApp(u);var e=new h.a.auth.GoogleAuthProvider;h.a.auth().onAuthStateChanged((function(t){t?console.log("signed in "):h.a.auth().signInWithPopup(e).then((function(e){e.credential.accessToken,e.user})).catch((function(e){e.code,e.message,e.email,e.credential}))}))})),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(O.a,{basename:"/",history:Object(j.a)(),children:[Object(n.jsx)(o,{}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.a,{exact:!0,path:"/",component:b}),Object(n.jsx)(v.a,{exact:!0,path:"/practice",component:d}),Object(n.jsx)(v.a,{exact:!0,path:"/review",component:f})]})]})})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.5fe51719.chunk.js.map