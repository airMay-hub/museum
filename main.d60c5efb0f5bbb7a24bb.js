!function(){"use strict";var e=document.querySelector(".burger"),t=document.querySelector(".navigation"),n=document.querySelectorAll(".navigation__link"),c=document.querySelector(".text-welcome");function o(){c.style.visibility="visible"}var i=document.querySelector(".ticket-button"),r=document.querySelector(".popup"),a=document.querySelector(".popup__body"),u=document.querySelector(".popup__close"),s=document.querySelector(".basic-count"),l=document.querySelector(".senior-count"),d=document.querySelector(".total-basic"),m=document.querySelector(".total-senior"),v=document.querySelector(".total-tickets-cost"),y=document.querySelectorAll(".number-form__btn"),L=document.getElementById("basic-form"),f=document.getElementById("senior-form");function _(){s.innerHTML=L.value,l.innerHTML=f.value,d.innerHTML=s.innerHTML*h[0].innerHTML,m.innerHTML=l.innerHTML*E[0].innerHTML,v.innerHTML=+d.innerHTML+ +m.innerHTML}var g=document.querySelector(".form__ticket-type"),b=document.querySelector(".form__ticket-type-button"),p=document.querySelector(".form__ticket-type-list"),S=document.querySelectorAll(".form__ticket-type-item"),M=document.querySelector(".overview__type"),h=document.querySelectorAll(".basic-cost"),E=document.querySelectorAll(".senior-cost");function k(){p.classList.toggle("form__ticket-type-list-hidden"),b.classList.toggle("form__ticket-type-button-active")}var q,T,H,w=document.getElementById("date"),A=document.querySelector(".overview__date"),D={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},B={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},I=new Date,x=I.getDay();function F(){return q=I.getFullYear(),T=I.getMonth(),(H=I.getDate())<10&&(H="0".concat(H)),I="".concat(q,"-").concat(T+1,"-").concat(H)}function J(){w.value=I}function C(){x=D["".concat(x)],T=B["".concat(T)],A.innerHTML="".concat(x,", ").concat(T," ").concat(H)}F();var N,O,P,W=document.getElementById("time"),Y=document.querySelector(".overview__time"),j=new Date;function z(){N<"09"?N="09":N>"18"&&(N="18"),O<"30"&&O>"01"?P="".concat(N,":30"):O>"30"&&O<"59"&&(P="".concat(N,":00"))}function G(){Y.innerHTML=P}e.addEventListener("click",(function(){e.classList.toggle("burger-active"),t.classList.toggle("navigation-active"),t.classList.contains("navigation-active")?c.style.visibility="hidden":o()})),t.addEventListener("click",(function(c){n.forEach((function(n){c.target===n&&t.classList.contains("navigation-active")&&(t.classList.remove("navigation-active"),e.classList.remove("burger-active"),o())}))})),window.addEventListener("click",(function(n){n.target.matches(".header__navigation")||n.target.matches(".header__burger")||!t.classList.contains("navigation-active")||(e.classList.remove("burger-active"),t.classList.remove("navigation-active"),o())})),i.addEventListener("click",(function(){r.classList.remove("popup__hidden"),a.classList.remove("popup__body-close"),document.body.style.overflow="hidden"})),u.addEventListener("click",(function(){r.classList.add("popup__hidden"),a.classList.add("popup__body-close"),document.body.style.overflow="auto"})),g.addEventListener("click",k),b.addEventListener("click",k),S.forEach((function(e){e.addEventListener("click",(function(){g.value=e.innerHTML,p.classList.add("form__ticket-type-list-hidden"),b.classList.remove("form__ticket-type-button-active")}))})),S.forEach((function(e){e.addEventListener("click",(function(){switch(g.value){case"Permanent exhibition":h.forEach((function(e){e.innerHTML=20}));break;case"Temporary exhibition":h.forEach((function(e){e.innerHTML=25}));break;case"Combined Admission":h.forEach((function(e){e.innerHTML=40}))}M.innerHTML=g.value,E.forEach((function(e){e.innerHTML=+h[0].innerHTML/2})),_()}))})),y.forEach((function(e){e.addEventListener("click",_)})),_(),w.min=I,J(),C(),w.addEventListener("input",(function(){I=new Date(w.value),x=I.getDay(),F(),J(),C()})),N=j.getHours(),O=j.getMinutes(),z(),W.value=P,G(),W.addEventListener("input",(function(){P=W.value,N=P.substr(0,2),O=P.substr(3),z(),W.value=P,G()}))}();