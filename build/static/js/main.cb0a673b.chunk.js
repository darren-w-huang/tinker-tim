(this["webpackJsonpcheckout-one-time-payments-react-cra"]=this["webpackJsonpcheckout-one-time-payments-react-cra"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports={header:"Header_header__38Uft",header__content:"Header_header__content__2yVHz",header__content__logo:"Header_header__content__logo__2hL-f",header__content__nav:"Header_header__content__nav__3ItkL",isMenu:"Header_isMenu__2gZw3",header__content__toggle:"Header_header__content__toggle__3m2lR"}},,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/cover.e21a0b67.png"},,,,,,,function(e,t,a){e.exports={container:"Layout_container__3-Kyo"}},,,,,,function(e,t,a){e.exports=a.p+"static/media/tim_logo_draft.b9b2756f.png"},function(e,t,a){e.exports=a.p+"static/media/draft.f4cfe0a3.png"},function(e,t,a){e.exports=a.p+"static/media/contact.a1d7c161.png"},function(e,t,a){e.exports=a(45)},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(21),s=a.n(r),o=a(8),i=a(3),l=a(22),u=a.n(l),m=a(2),d=a(25),h=a(26),f=a(10),b=a.n(f),E=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(i.f)(),l=function(){r((function(e){return!e}))},u=Object(n.useState)({width:void 0,height:void 0}),f=Object(m.a)(u,2),E=f[0],p=f[1];Object(n.useEffect)((function(){E.width>768&&a&&r(!1)}),[E.width,a]),Object(n.useEffect)((function(){var e=function(){p({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);return c.a.createElement("header",{className:b.a.header},c.a.createElement("div",{className:b.a.header__content},c.a.createElement(o.b,{to:"/",className:b.a.header__content__logo},"Tinker Tim"),c.a.createElement("nav",{className:"".concat(b.a.header__content__nav," ").concat(a&&E.width<768?b.a.isMenu:""," ")},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/",onClick:l}," The Story ")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/reason",onClick:l}," The Reason ")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/presales",onClick:l}," Pre-sales ")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/contact",onClick:l}," Contact Us "))),c.a.createElement("button",{onClick:function(){l(),s.push("/order")}}," Order ")),c.a.createElement("div",{className:b.a.header__content__toggle},a?c.a.createElement(h.a,{onClick:l}):c.a.createElement(d.a,{onClick:l}))))},p=function(e){var t=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(E,null),c.a.createElement("div",{className:u.a.container}," ",t," "))},_=a(11),O=a.n(_),j=a(14),y=a(27),w=a(15),v=a.n(w),g=function(){var e=Object(n.useState)(1),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(0),o=Object(m.a)(s,2),i=o[0],l=o[1],u=Object(n.useState)("USD"),d=Object(m.a)(u,2),h=d[0],f=d[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(O.a.mark((function e(){var t,a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config").then((function(e){return e.json()}));case 2:t=e.sent,a=t.unitAmount,n=t.currency,l(a),f(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("div",{className:"sr-root"},c.a.createElement("div",{className:"sr-main"},c.a.createElement("section",{className:"container"},c.a.createElement("div",null,c.a.createElement("h1",null,"Pre-order Tinker Tim"),c.a.createElement("div",{className:"pasha-image"},c.a.createElement("img",{alt:"Tinker Tim",src:v.a,width:"140",height:"160"}))),c.a.createElement("form",{action:"/create-checkout-session",method:"POST"},c.a.createElement("div",{className:"quantity-setter"},c.a.createElement("button",{className:"increment-btn",disabled:1===a,onClick:function(){return r(a-1)},type:"button"},"-"),c.a.createElement("input",{type:"number",id:"quantity-input",min:"1",max:"20",value:a,name:"quantity",readOnly:!0}),c.a.createElement("button",{className:"increment-btn",disabled:20===a,onClick:function(){return r(a+1)},type:"button"},"+")),c.a.createElement("p",{className:"sr-legal-text"},"Number of copies (max 20)"),c.a.createElement("button",{role:"link",id:"submit",type:"submit"},"Pre-order ",function(e){var t,a=e.amount,n=e.currency,c=e.quantity,r=new Intl.NumberFormat("en-US",{style:"currency",currency:n,currencyDisplay:"symbol"}),s=r.formatToParts(a),o=!0,i=Object(y.a)(s);try{for(i.s();!(t=i.n()).done;){"decimal"===t.value.type&&(o=!1)}}catch(u){i.e(u)}finally{i.f()}var l=(c*(a=o?a:a/100)).toFixed(2);return r.format(l)}({amount:i,currency:h,quantity:a}))))))},k=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=(t[0],t[1]),r=Object(i.g)().search.replace("?session_id=","");return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Success.html calling"),e.t0=a,e.next=4,fetch("/checkout-session?sessionId="+r).then((function(e){return e.json()}));case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),c.a.createElement("div",{className:"sr-root"},c.a.createElement("header",{className:"sr-header"},c.a.createElement("div",{className:"sr-header__logo"})),c.a.createElement("div",{className:"sr-payment-summary completed-view"},c.a.createElement("h1",null,"Your payment succeeded. Thank you for your support!")))},S=(a(13),function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),o=Object(m.a)(s,2),i=o[0],l=o[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),h=d[0],f=d[1];return Object(n.useEffect)((function(){f(!0)}),[h]),Object(n.useEffect)((function(){r(!0)}),[a]),Object(n.useEffect)((function(){l(!0)}),[i]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:h?"headerShow":"textHide"}," The Story "),c.a.createElement("p",{className:a?"textShow":"textHide"},"Tim is a bear who loves to tinker. Tim flies paper airplanes for his brother and necklaces for his mom but Tim's dad doesn't seem to get  it. He pushes Tim to do something productive instead, like learning an instrument. Tim's mom reminds his dad that he likes to tinker in his own way as well, so at the end of the day, Tim's dad comes around to encourage Tim\u2019s natural curiosity."),c.a.createElement("img",{className:i?"show":"hide",src:v.a,alt:"Cover of tinker tim"}),c.a.createElement("div",{className:"line-breaks"}))}),x=a(28),N=a.n(x),T=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),o=Object(m.a)(s,2),i=o[0],l=o[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),h=d[0],f=d[1],b=Object(n.useState)(!1),E=Object(m.a)(b,2),p=E[0],_=E[1],O=Object(n.useState)(!1),j=Object(m.a)(O,2),y=j[0],w=j[1];return Object(n.useEffect)((function(){f(!0)}),[h]),Object(n.useEffect)((function(){r(!0)}),[a]),Object(n.useEffect)((function(){l(!0)}),[i]),Object(n.useEffect)((function(){_(!0)}),[p]),Object(n.useEffect)((function(){w(!0)}),[y]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:h?"headerShow":"textHide"}," The Reason"),c.a.createElement("p",{className:a?"textShow":"textHide"},"Tinker Tim was inspired by our team's childhood and upbringing. Many of our team members were encouraged to pursue specific activities for success like math, chemistry, or even piano as children. Simply exploring our own interest wasn't really a thing. In writing this story, we want to encourage parents and their children to freely explore whatever comes to mind. To have fun, and tinker!"),c.a.createElement("img",{src:N.a,className:i?"show":"hide",alt:"Cover of tinker tim"}),c.a.createElement("h1",{className:p?"secondHeaderShow":"secondHeaderHide"}," The Authors"),c.a.createElement("p",{className:y?"secondTextShow":"secondTextHide"}," We're a group of four students at the University of Washington. Darren and Alex will be graduating this year, Kenny will be pursuing his Masters, and Aroosh will be entering his senior year. "))},H=a(29),C=a.n(H),M=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),o=Object(m.a)(s,2),i=o[0],l=o[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),h=d[0],f=d[1];return Object(n.useEffect)((function(){f(!0)}),[h]),Object(n.useEffect)((function(){r(!0)}),[a]),Object(n.useEffect)((function(){l(!0)}),[i]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:h?"headerShow":"textHide"}," Presales"),c.a.createElement("p",{className:a?"textShow":"textHide"}," We are currently finishing up illustrations, and we will submit our order to publish in mid-May. We expect to receive our books in late May, and we will ship your orders from then to early June!"),c.a.createElement("img",{src:C.a,className:i?"show":"hide",alt:"Cover of tinker tim"}))},P=a(30),F=a.n(P);var U=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),o=Object(m.a)(s,2),i=o[0],l=o[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),h=d[0],f=d[1];return Object(n.useEffect)((function(){l(!0)}),[i]),Object(n.useEffect)((function(){r(!0)}),[a]),Object(n.useEffect)((function(){f(!0)}),[h]),c.a.createElement("div",null,c.a.createElement("h1",{className:i?"headerShow":"textHide"},"  Contact Us"),c.a.createElement("p",{className:a?"textShow":"textHide"}," You can reach us at tinkertimbook@gmail.com "),c.a.createElement("br",null),c.a.createElement("p",{className:a?"textShow":"textHide"},"  After an order, you should receive a receipt. Please let us know if you have any issues! "),c.a.createElement("img",{src:F.a,className:h?"show":"hide",alt:"Cover of tinker tim"}))};a(42),a(43),a(44);function q(){return c.a.createElement(o.a,null,c.a.createElement(p,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/success_payment"},c.a.createElement(k,null)),c.a.createElement(i.a,{path:"/canceled.html"},c.a.createElement(S,null)),c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(S,null)),c.a.createElement(i.a,{path:"/reason"},c.a.createElement(T,null)),c.a.createElement(i.a,{path:"/presales"},c.a.createElement(M,null)),c.a.createElement(i.a,{path:"/order"},c.a.createElement(g,null)),c.a.createElement(i.a,{path:"/contact"},c.a.createElement(U,null)))))}s.a.render(c.a.createElement(q,null),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.cb0a673b.chunk.js.map