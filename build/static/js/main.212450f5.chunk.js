(this["webpackJsonpcheckout-one-time-payments-react-cra"]=this["webpackJsonpcheckout-one-time-payments-react-cra"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports={header:"Header_header__38Uft",header__content:"Header_header__content__2yVHz",header__content__logo:"Header_header__content__logo__2hL-f",header__content__nav:"Header_header__content__nav__3ItkL",order:"Header_order__1-RVH",isMenu:"Header_isMenu__2gZw3",header__content__toggle:"Header_header__content__toggle__3m2lR"}},,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/cover.e21a0b67.png"},,,,,,,function(e,t,a){e.exports={container:"Layout_container__3-Kyo"}},,,,,,function(e,t,a){e.exports=a.p+"static/media/dripping_scold.1005cce8.png"},function(e,t,a){e.exports=a.p+"static/media/plane_brother.43b51ab7.png"},function(e,t,a){e.exports=a.p+"static/media/slingshot.fe7bd4ae.png"},function(e,t,a){e.exports=a.p+"static/media/draft.f4cfe0a3.png"},function(e,t,a){e.exports=a.p+"static/media/contact.419d04c5.png"},function(e,t,a){e.exports=a(47)},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(21),i=a.n(r),s=a(8),o=a(3),l=a(22),u=a.n(l),m=a(2),d=a(25),h=a(26),f=a(10),p=a.n(f),E=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],i=(Object(o.f)(),function(){r((function(e){return!e}))}),l=Object(n.useState)({width:void 0,height:void 0}),u=Object(m.a)(l,2),f=u[0],E=u[1];Object(n.useEffect)((function(){f.width>768&&a&&r(!1)}),[f.width,a]),Object(n.useEffect)((function(){var e=function(){E({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);return c.a.createElement("header",{className:p.a.header},c.a.createElement("div",{className:p.a.header__content},c.a.createElement(s.b,{to:"/",className:p.a.header__content__logo},"Tinker Tim"),c.a.createElement("nav",{className:"".concat(p.a.header__content__nav," ").concat(a&&f.width<768?p.a.isMenu:""," ")},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.b,{to:"/",onClick:i}," Story ")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/inspiration",onClick:i}," Inspiration ")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/presales",onClick:i}," Presales ")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/contact",onClick:i}," Contact ")),c.a.createElement("li",null,c.a.createElement(s.b,{className:"order",to:"/order",onClick:i}," Order ")))),c.a.createElement("div",{className:p.a.header__content__toggle},a?c.a.createElement(h.a,{onClick:i}):c.a.createElement(d.a,{onClick:i}))))},b=function(e){var t=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(E,null),c.a.createElement("div",{className:u.a.container}," ",t," "))},_=a(11),O=a.n(_),j=a(14),g=a(27),w=a(15),y=a.n(w),v=function(){var e=Object(n.useState)(1),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(0),s=Object(m.a)(i,2),o=s[0],l=s[1],u=Object(n.useState)("USD"),d=Object(m.a)(u,2),h=d[0],f=d[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(O.a.mark((function e(){var t,a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config").then((function(e){return e.json()}));case 2:t=e.sent,a=t.unitAmount,n=t.currency,l(a),f(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("div",{className:"sr-root"},c.a.createElement("div",{className:"sr-main"},c.a.createElement("section",{className:"container"},c.a.createElement("div",null,c.a.createElement("h1",null,"Pre-order Tinker Tim"),c.a.createElement("div",{className:"pasha-image"},c.a.createElement("img",{alt:"Tinker Tim",src:y.a,width:"140",height:"160"}))),c.a.createElement("form",{action:"/create-checkout-session",method:"POST"},c.a.createElement("div",{className:"quantity-setter"},c.a.createElement("button",{className:"increment-btn",disabled:1===a,onClick:function(){return r(a-1)},type:"button"},"-"),c.a.createElement("input",{type:"number",id:"quantity-input",min:"1",max:"20",value:a,name:"quantity",readOnly:!0}),c.a.createElement("button",{className:"increment-btn",disabled:20===a,onClick:function(){return r(a+1)},type:"button"},"+")),c.a.createElement("p",{className:"sr-legal-text"},"Number of copies (max 20)"),c.a.createElement("button",{role:"link",id:"submit",type:"submit"},"Pre-order ",function(e){var t,a=e.amount,n=e.currency,c=e.quantity,r=new Intl.NumberFormat("en-US",{style:"currency",currency:n,currencyDisplay:"symbol"}),i=r.formatToParts(a),s=!0,o=Object(g.a)(i);try{for(o.s();!(t=o.n()).done;){"decimal"===t.value.type&&(s=!1)}}catch(u){o.e(u)}finally{o.f()}var l=(c*(a=s?a:a/100)).toFixed(2);return r.format(l)}({amount:o,currency:h,quantity:a}))))))},k=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=(t[0],t[1]),r=Object(o.g)().search.replace("?session_id=","");return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Success.html calling"),e.t0=a,e.next=4,fetch("/checkout-session?sessionId="+r).then((function(e){return e.json()}));case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),c.a.createElement("div",{className:"sr-root"},c.a.createElement("header",{className:"sr-header"},c.a.createElement("div",{className:"sr-header__logo"})),c.a.createElement("div",{className:"sr-payment-summary completed-view"},c.a.createElement("h1",null,"Your payment succeeded. Thank you for your support!")))},x=(a(13),a(28)),N=a.n(x),S=a(29),T=a.n(S),H=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),s=Object(m.a)(i,2),o=s[0],l=s[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),h=d[0],f=d[1];return Object(n.useEffect)((function(){f(!0)}),[h]),Object(n.useEffect)((function(){r(!0)}),[a]),Object(n.useEffect)((function(){l(!0)}),[o]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:h?"headerShow":"textHide"}," The Story "),c.a.createElement("img",{className:o?"secondImageFadeIn":"hide",src:y.a,alt:"Cover of tinker tim"}),c.a.createElement("p",{className:a?"textShow":"textHide"},"Tim is a young bear who ",c.a.createElement("em",null,"loves")," to tinker. He makes planes that fly and potions that explode. "),c.a.createElement("img",{className:o?"show":"hide",src:T.a,alt:"Tim flying a paper airplane for his brother"}),c.a.createElement("p",{className:a?"textShow":"textHide"},"At first, Tim\u2019s dad doesn\u2019t understand his son\u2019s tinkering and pushes Tim to do something productive instead, like learning an instrument. Tim's mom reminds his dad that he used to tinker too. In the end, Tim's dad comes around to encouraging Tim\u2019s natural curiosity."),c.a.createElement("img",{className:o?"show":"hide",src:N.a,alt:"Tim's dad scolding Tim"}),c.a.createElement("div",{className:"line-breaks"}))},C=a(30),I=a.n(C),F=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),s=Object(m.a)(i,2),o=s[0],l=s[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),h=d[0],f=d[1],p=Object(n.useState)(!1),E=Object(m.a)(p,2),b=E[0],_=E[1],O=Object(n.useState)(!1),j=Object(m.a)(O,2),g=j[0],w=j[1];return Object(n.useEffect)((function(){f(!0)}),[h]),Object(n.useEffect)((function(){r(!0)}),[a]),Object(n.useEffect)((function(){l(!0)}),[o]),Object(n.useEffect)((function(){_(!0)}),[b]),Object(n.useEffect)((function(){w(!0)}),[g]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:h?"headerShow":"textHide"}," Our Inspiration "),c.a.createElement("p",{className:a?"textShow":"textHide"},"Through Tinker Tim, we reflect on the pressure we felt as kids to focus on \u201cuseful\u201d activities like math classes and practicing the piano. Tinker Tim was written to encourage kids to tinker and be curious, and to encourage parents to support their kids\u2019 natural curiosity."),c.a.createElement("img",{src:I.a,className:o?"show":"hide",alt:"Cover of tinker tim"}),c.a.createElement("h1",{className:b?"secondHeaderShow":"secondHeaderHide"}," The Illustrator and Authors "),c.a.createElement("p",{className:g?"secondTextShow":"secondTextHide"}," Shiuan, the illustrator, is an interdisciplinary art student at the University of Washington who has worked on a variety of projects, including animation, ceramics, and other art. She's always wanted to illustrate a children's picture book, and we couldn't be happier with how it turned out."),c.a.createElement("p",{className:g?"secondTextShow":"secondTextHide"}," The authors are a group of four students at the University of Washington. Darren and Alex will be graduating this year, Kenny will be pursuing his Masters, and Aroosh will be entering his senior year. "))},P=a(31),A=a.n(P),M=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),s=Object(m.a)(i,2),o=s[0],l=s[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),h=d[0],f=d[1];return Object(n.useEffect)((function(){f(!0)}),[h]),Object(n.useEffect)((function(){r(!0)}),[a]),Object(n.useEffect)((function(){l(!0)}),[o]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:h?"headerShow":"textHide"}," Presales"),c.a.createElement("p",{className:a?"textShow":"textHide"}," We are currently finishing up illustrations, and we will submit our order to publish in mid-May. We expect to receive our books in late May, and we will ship your orders from then to early June!"),c.a.createElement("img",{src:A.a,className:o?"show":"hide",alt:"Cover of tinker tim"}))},U=a(32),q=a.n(U);var L=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),s=Object(m.a)(i,2),o=s[0],l=s[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),h=d[0],f=d[1];return Object(n.useEffect)((function(){l(!0)}),[o]),Object(n.useEffect)((function(){r(!0)}),[a]),Object(n.useEffect)((function(){f(!0)}),[h]),c.a.createElement("div",null,c.a.createElement("h1",{className:o?"headerShow":"textHide"},"  Contact Us"),c.a.createElement("p",{className:a?"textShow":"textHide"}," You can reach the authors at tinkertimstory@gmail.com, and our wonderful illustrator at chus4@uw.edu"),c.a.createElement("p",{className:a?"textShow":"textHide"},"  After an order, you should receive a receipt. Please let us know if you have any issues! "),c.a.createElement("img",{src:q.a,className:h?"show":"hide",alt:"Cover of tinker tim"}))};a(44),a(45),a(46);function W(){return c.a.createElement(s.a,null,c.a.createElement(b,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/success_payment"},c.a.createElement(k,null)),c.a.createElement(o.a,{path:"/canceled.html"},c.a.createElement(H,null)),c.a.createElement(o.a,{exact:!0,path:"/"},c.a.createElement(H,null)),c.a.createElement(o.a,{path:"/inspiration"},c.a.createElement(F,null)),c.a.createElement(o.a,{path:"/presales"},c.a.createElement(M,null)),c.a.createElement(o.a,{path:"/order"},c.a.createElement(v,null)),c.a.createElement(o.a,{path:"/contact"},c.a.createElement(L,null)))))}i.a.render(c.a.createElement(W,null),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.212450f5.chunk.js.map