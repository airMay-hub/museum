!function(){"use strict";var e=document.querySelector(".burger"),t=document.querySelector(".navigation"),n=document.querySelectorAll(".navigation__link"),c=document.querySelector(".text-welcome");function o(){c.style.visibility="visible"}var i=document.querySelectorAll(".welcome-pagination__link"),r=document.querySelector(".welcome-pagination__next"),a=document.querySelector(".welcome-pagination__prev"),s=document.querySelector(".welcome-pagination__actual"),l=document.querySelector(".welcome-pagination__total"),u=document.querySelector(".welcome__slides"),d=[],v=0,m=0;function f(){var e=u.offsetWidth,t=document.createElement("img");t.src=d[v],t.classList.add("slides-welcome__slide"),t.style.left=m*e+"px",u.appendChild(t)}function y(){i[v].classList.add("welcome-pagination__active-link"),s.innerHTML="0"+(v+1)}function L(){i[v].classList.remove("welcome-pagination__active-link")}function _(){r.removeEventListener("click",_),L(),v+1==d.length?v=0:v++,m=1,f(),y();for(var e=document.querySelectorAll(".slides-welcome__slide"),t=u.offsetWidth,n=0,c=0;c<e.length;c++)e[c].style.left=n*t-t+"px",n++;setTimeout((function(){e[0].remove(),r.addEventListener("click",_)}),1e3)}function g(){a.removeEventListener("click",g),L(),v-1==-1?v=d.length-1:v--,m=-1,f(),y();for(var e=document.querySelectorAll(".slides-welcome__slide"),t=u.offsetWidth,n=0,c=e.length-1;c>=0;c--)e[c].style.left=n*t+"px",n++;setTimeout((function(){e[0].remove(),a.addEventListener("click",g)}),1e3)}var p=document.querySelector(".player"),h=p.querySelector(".player__screen"),E=document.querySelector(".video-bullets__next"),S=document.querySelector(".video-bullets__prev"),k=document.querySelectorAll(".video-bullets__link"),b=p.querySelector(".player__btn"),q=p.querySelector(".controls__play"),w=p.querySelector(".controls__progress"),M=p.querySelector(".controls__volume"),T=p.querySelector(".controls__mute"),H=p.querySelector(".controls__full-screen"),A=p.querySelector(".controls");function x(){h.src="assets/video/video".concat(D,".mp4"),h.poster="assets/video/poster".concat(D,".jpg"),k.forEach((function(e){e.classList.remove("video-bullets__active-link")})),k[D].classList.add("video-bullets__active-link"),B()}var D=0;function B(){h.paused?(b.style.display="none",h.play()):h.pause()}function F(){q.classList.contains("pause")?(q.classList.remove("pause"),q.classList.add("play")):(q.classList.remove("play"),q.classList.add("pause"))}function W(){w.addEventListener("input",(function(){var e=100*this.value/2;this.style.background="linear-gradient(to right, #710707 0%, #710707 ".concat(e,"%, #fff ").concat(e,"%, white 100%)")}))}function I(){M.addEventListener("input",(function(){var e=100*this.value;h.volume=e/100,this.style.background="linear-gradient(to right, #710707 0%, #710707 ".concat(e,"%, #fff ").concat(e,"%, white 100%)"),0===h.volume?(T.classList.remove("sound"),T.classList.add("mute")):(T.classList.remove("mute"),T.classList.add("sound"))}))}function Y(){0===h.volume?(M.style.background="linear-gradient(to right, #710707 0%, #710707 100%, #fff 100%, white 100%)",T.classList.remove("mute"),T.classList.add("sound"),M.value=1,h.volume=1):(M.style.background="linear-gradient(to right, #710707 0%, #710707 0%, #fff 0%, white 100%)",T.classList.remove("sound"),T.classList.add("mute"),M.value=0,h.volume=0)}function C(e){var t=e.offsetX/w.offsetWidth*h.duration;h.currentTime=t}h.addEventListener("click",B),b.addEventListener("click",B),q.addEventListener("click",B),h.addEventListener("pause",(function(){b.style.display=""})),h.addEventListener("play",F),h.addEventListener("pause",F),window.addEventListener("keypress",(function(e){"KeyK"===e.code&&B()})),w.addEventListener("mousemove",W),w.addEventListener("change",W),M.addEventListener("mousemove",I),M.addEventListener("change",I),T.addEventListener("click",Y),window.addEventListener("keydown",(function(e){"KeyM"===e.code&&Y()})),h.addEventListener("timeupdate",(function(){var e=h.currentTime/h.duration*100;w.value=2*Math.round(e)/100,w.style.background="linear-gradient(to right, #710707 0%, #710707 ".concat(e,"%, #fff ").concat(e,"%, white 100%)")})),H.addEventListener("click",(function(){document.fullscreenElement?(document.exitFullscreen(),H.classList.remove("fullScreenExit"),H.classList.add("fullScreen"),A.classList.remove("controls_hidden")):(p.requestFullscreen(),H.classList.remove("fullScreen"),H.classList.add("fullScreenExit"),A.classList.add("controls_hidden"))})),h.addEventListener("mousemove",(function(e){e.clientY>=.8*document.documentElement.clientHeight?A.classList.remove("controls_hidden"):A.classList.add("controls_hidden")}));var J=!1;w.addEventListener("click",C),w.addEventListener("mousemove",(function(e){return J&&C(e)})),w.addEventListener("mousedown",(function(){return J=!0})),w.addEventListener("mouseup",(function(){return J=!1}));var K=document.querySelector(".gallery__masonry"),X=document.querySelectorAll(".gallery__img"),j=document.querySelector(".gallery"),N=[],O=document.querySelector(".ticket-button"),P=document.querySelector(".popup"),R=document.querySelector(".popup__body"),z=document.querySelector(".popup__close"),G=document.querySelector(".basic-count"),Q=document.querySelector(".senior-count"),U=document.querySelector(".total-basic"),V=document.querySelector(".total-senior"),Z=document.querySelector(".total-tickets-cost"),$=document.querySelectorAll(".number-form__btn"),ee=document.getElementById("basic-form"),te=document.getElementById("senior-form");function ne(){G.innerHTML=ee.value,Q.innerHTML=te.value,U.innerHTML=G.innerHTML*se[0].innerHTML,V.innerHTML=Q.innerHTML*le[0].innerHTML,Z.innerHTML=+U.innerHTML+ +V.innerHTML}var ce=document.querySelector(".form__ticket-type"),oe=document.querySelector(".form__ticket-type-button"),ie=document.querySelector(".form__ticket-type-list"),re=document.querySelectorAll(".form__ticket-type-item"),ae=document.querySelector(".overview__type"),se=document.querySelectorAll(".basic-cost"),le=document.querySelectorAll(".senior-cost");function ue(){ie.classList.toggle("form__ticket-type-list-hidden"),oe.classList.toggle("form__ticket-type-button-active")}var de,ve,me,fe=document.getElementById("date"),ye=document.querySelector(".overview__date"),Le={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},_e={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},ge=new Date,pe=ge.getDay();function he(){return de=ge.getFullYear(),ve=ge.getMonth(),(me=ge.getDate())<10&&(me="0".concat(me)),ge="".concat(de,"-").concat(ve+1,"-").concat(me)}function Ee(){fe.value=ge}function Se(){pe=Le["".concat(pe)],ve=_e["".concat(ve)],ye.innerHTML="".concat(pe,", ").concat(ve," ").concat(me)}he();var ke,be,qe,we,Me=document.getElementById("time"),Te=document.querySelector(".overview__time"),He=new Date;function Ae(){ke<"09"?ke="09":ke>"18"&&(ke="18"),be<"30"&&be>"01"?qe="".concat(ke,":30"):be>"30"&&be<"59"&&(qe="".concat(ke,":00"))}function xe(){Te.innerHTML=qe}e.addEventListener("click",(function(){e.classList.toggle("burger-active"),t.classList.toggle("navigation-active"),t.classList.contains("navigation-active")?c.style.visibility="hidden":o()})),t.addEventListener("click",(function(c){n.forEach((function(n){c.target===n&&t.classList.contains("navigation-active")&&(t.classList.remove("navigation-active"),e.classList.remove("burger-active"),o())}))})),window.addEventListener("click",(function(n){n.target.matches(".header__navigation")||n.target.matches(".header__burger")||!t.classList.contains("navigation-active")||(e.classList.remove("burger-active"),t.classList.remove("navigation-active"),o())})),document.querySelectorAll(".slides-welcome__slide").forEach((function(e){d.push(e.src),e.remove()})),f(),y(),l.innerHTML="0"+d.length,r.addEventListener("click",_),a.addEventListener("click",g),function(){u.addEventListener("touchstart",(function(n){var c=n.touches[0];e=c.clientX,t=c.clientY})),u.addEventListener("touchmove",(function(n){if(!e||!t)return!1;var c=n.touches[0].clientX,o=n.touches[0].clientY,i=c-e,r=o-t;Math.abs(i)>Math.abs(r)&&(i>0?g():_()),e=0,t=0}));var e=null,t=null}(),E.addEventListener("click",(function(){D<5&&D++,5===D&&(D=0),x()})),S.addEventListener("click",(function(){D<=4&&D--,-1===D&&(D=4),x()})),window.addEventListener("click",(function(e){for(var t=0;t<k.length;t++)e.target==k[t]&&(D=t,x())})),X.forEach((function(e){N.push(e),e.remove()})),N.sort((function(){return Math.random()-.5})),N.forEach((function(e){K.prepend(e)})),we=document.querySelectorAll(".gallery__img"),window.addEventListener("scroll",(function(){var e,t=(e=j.getBoundingClientRect()).top,n=e.bottom,c=document.documentElement.clientHeight;(t<0||n>c)&&we.forEach((function(e){e.classList.add("gallery__img_active")})),(t>=c/4||n<0)&&we.forEach((function(e){e.classList.remove("gallery__img_active")}))})),O.addEventListener("click",(function(){P.classList.remove("popup__hidden"),R.classList.remove("popup__body-close"),document.body.style.overflow="hidden"})),z.addEventListener("click",(function(){P.classList.add("popup__hidden"),R.classList.add("popup__body-close"),document.body.style.overflow="auto"})),ce.addEventListener("click",ue),oe.addEventListener("click",ue),re.forEach((function(e){e.addEventListener("click",(function(){ce.value=e.innerHTML,ie.classList.add("form__ticket-type-list-hidden"),oe.classList.remove("form__ticket-type-button-active")}))})),re.forEach((function(e){e.addEventListener("click",(function(){switch(ce.value){case"Permanent exhibition":se.forEach((function(e){e.innerHTML=20}));break;case"Temporary exhibition":se.forEach((function(e){e.innerHTML=25}));break;case"Combined Admission":se.forEach((function(e){e.innerHTML=40}))}ae.innerHTML=ce.value,le.forEach((function(e){e.innerHTML=+se[0].innerHTML/2})),ne()}))})),$.forEach((function(e){e.addEventListener("click",ne)})),ne(),fe.min=ge,Ee(),Se(),fe.addEventListener("input",(function(){ge=new Date(fe.value),pe=ge.getDay(),he(),Ee(),Se()})),ke=He.getHours(),be=He.getMinutes(),Ae(),Me.value=qe,xe(),Me.addEventListener("input",(function(){qe=Me.value,ke=qe.substr(0,2),be=qe.substr(3),Ae(),Me.value=qe,xe()}))}();