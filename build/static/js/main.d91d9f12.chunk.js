(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{30:function(e,t){},31:function(e,t){},46:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/video-placeholder.ca40af56.jpg"},47:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/feature-tile-icon-01.e13cef8e.svg"},48:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/feature-tile-icon-02.46935659.svg"},49:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/feature-tile-icon-03.69e94e20.svg"},50:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/feature-tile-icon-04.1acd4dac.svg"},51:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/feature-tile-icon-05.af2bae11.svg"},52:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/feature-tile-icon-06.74b0477e.svg"},53:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/features-split-image-01.94b14c16.png"},54:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/features-split-image-02.49942613.png"},55:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/features-split-image-03.7bd67155.png"},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(25),n=a.n(l),s=a(11),c=a(7),o=a(2),m=["component","layout"],d=function(e){var t=e.component,a=e.layout,i=Object(o.a)(e,m);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(s.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},u=a(10),v=a(3),p=a.n(v),h=a(19),f=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),l=Object(u.a)(a,2),n=l[0],s=l[1],c=Object(i.useState)([]),o=Object(u.a)(c,2),m=o[0],d=o[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",E),window.addEventListener("resize",b)),p())}),[m]);var f=function(){v()&&(window.removeEventListener("scroll",E),window.removeEventListener("resize",b))},E=Object(h.throttle)((function(){f(),p()}),30),b=Object(h.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){f(),p()}),[n]),r.a.createElement(r.a.Fragment,null,e.children())}));f.propTypes={children:p.a.func.isRequired};var E=f,b=a(14),g=a(32),N=a(29),w=new(a.n(N).a),O=a(1),x=a.n(O),D=a(6),y=["className","src","width","height","alt"],j=function(e){var t=e.className,a=e.src,l=e.width,n=e.height,s=e.alt,c=Object(o.a)(e,y),m=Object(i.useState)(!1),d=Object(u.a)(m,2),v=d[0],p=d[1],h=Object(i.useRef)(null);Object(i.useEffect)((function(){f(h.current)}),[]);var f=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},c,{ref:h,className:t,src:a,width:l,height:n,alt:s,onLoad:function(){p(!0)}}))};j.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var C=j,k=["className"],L=function(e){var t=e.className,a=Object(o.a)(e,k),i=x()("brand",t);return r.a.createElement("div",Object.assign({},a,{className:i}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(D.a,{to:"/"},r.a.createElement(C,{src:"https://i.imgur.com/OD8miYh.png",alt:"E.G. Services Logo",width:250,height:120}))))},S=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],F=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,n=e.hideSignin,s=e.bottomOuterDivider,c=e.bottomDivider,m=Object(o.a)(e,S),d=Object(i.useState)(!1),v=Object(u.a)(d,2),p=v[0],h=v[1],f=Object(i.useRef)(null),E=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&b(),document.addEventListener("keydown",N),document.addEventListener("click",w),function(){document.removeEventListener("keydown",N),document.removeEventListener("click",w),g()}}));var b=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",h(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),h(!1)},N=function(e){p&&27===e.keyCode&&g()},w=function(e){f.current&&p&&!f.current.contains(e.target)&&e.target!==E.current&&g()},O=x()("site-header",s&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},m,{className:O}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:x()("site-header-inner",c&&"has-bottom-divider")},r.a.createElement(L,null),!l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:E,className:"header-nav-toggle",onClick:p?g:b},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:f,className:x()("header-nav",p&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:x()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null,r.a.createElement(D.a,{to:"./get-more",onClick:g},"Get More!"))),!n&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement(D.a,{to:"./signin",className:"button button-primary button-wide-mobile button-sm",onClick:g},"Sign In")))))))))};F.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var H=F,P=["className"],A=function(e){var t=e.className,a=Object(o.a)(e,P),i=x()("brand",t);return r.a.createElement("div",Object.assign({},a,{className:i}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(D.a,{to:"/"},r.a.createElement(C,{src:"https://i.imgur.com/kkLtnmW.png",alt:"Logo",width:90,height:90}))))},B=["className"],q=function(e){var t=e.className,a=Object(o.a)(e,B),i=x()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement(D.a,{to:"#0"},"Contact")),r.a.createElement("li",null,r.a.createElement(D.a,{to:"#0"},"About us")),r.a.createElement("li",null,r.a.createElement(D.a,{to:"#0"},"FAQ's")),r.a.createElement("li",null,r.a.createElement(D.a,{to:"#0"},"Support"))))},T=["className"],M=function(e){var t=e.className,a=Object(o.a)(e,T),i=x()("footer-social",t);return r.a.createElement("div",Object.assign({},a,{className:i}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://facebook.com/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Facebook"),r.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Twitter"),r.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://google.com/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Instagram"),r.a.createElement("g",null,r.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),r.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),r.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},z=["className","topOuterDivider","topDivider"],R=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,l=Object(o.a)(e,z),n=x()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},l,{className:n}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:x()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(A,null),r.a.createElement(M,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(q,null),r.a.createElement("div",{className:"footer-copyright"},"Made by ",r.a.createElement("a",{href:"https://github.com/ZCErik"},"E.G. Services"),". 2021 All rights reserved")))))};R.defaultProps={topOuterDivider:!1,topDivider:!1};var _=R,G=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(_,null))},W=a(4),I={types:{topOuterDivider:p.a.bool,bottomOuterDivider:p.a.bool,topDivider:p.a.bool,bottomDivider:p.a.bool,hasBgColor:p.a.bool,invertColor:p.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},V={types:Object(W.a)({},I.types),defaults:Object(W.a)({},I.defaults)},K={types:Object(W.a)(Object(W.a)({},I.types),{},{invertMobile:p.a.bool,invertDesktop:p.a.bool,alignTop:p.a.bool,imageFill:p.a.bool}),defaults:Object(W.a)(Object(W.a)({},I.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},U={types:Object(W.a)(Object(W.a)({},I.types),{},{pushLeft:p.a.bool}),defaults:Object(W.a)(Object(W.a)({},I.defaults),{},{pushLeft:!1})},Y=["className"],Z=function(e){var t=e.className,a=Object(o.a)(e,Y),i=x()("button-group",t);return r.a.createElement("div",Object.assign({},a,{className:i}))},J=["className","tag","color","size","loading","wide","wideMobile","disabled"],$=function(e){var t=e.className,a=e.tag,i=e.color,l=e.size,n=e.loading,s=e.wide,c=e.wideMobile,m=e.disabled,d=Object(o.a)(e,J),u=x()("button",i&&"button-".concat(i),l&&"button-".concat(l),n&&"is-loading",s&&"button-block",c&&"button-wide-mobile",t),v=a;return r.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};$.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var Q=$,X=["className","children","handleClose","show","closeHidden","video","videoTag"],ee=function(e){var t=e.className,a=e.children,l=e.handleClose,n=e.show,s=e.closeHidden,c=e.video,m=e.videoTag,d=Object(o.a)(e,X);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&l(e)},p=function(e){e.stopPropagation()},h=x()("modal",n&&"is-active",c&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",Object.assign({},d,{className:h,onClick:l}),r.a.createElement("div",{className:"modal-inner",onClick:p},c?r.a.createElement("div",{className:"responsive-video"},"iframe"===m?r.a.createElement("iframe",{title:"video",src:c,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:c})):r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:l}),r.a.createElement("div",{className:"modal-content"},a)))))};ee.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var te=ee,ae=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],ie=Object(W.a)({},V.defaults),re=function(e){var t=e.className,l=e.topOuterDivider,n=e.bottomOuterDivider,s=e.topDivider,c=e.bottomDivider,m=e.hasBgColor,d=e.invertColor,v=Object(o.a)(e,ae),p=Object(i.useState)(!1),h=Object(u.a)(p,2),f=h[0],E=h[1],b=x()("hero section center-content",l&&"has-top-divider",n&&"has-bottom-divider",m&&"has-bg-color",d&&"invert-color",t),g=x()("hero-inner section-inner",s&&"has-top-divider",c&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},v,{className:b}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:g},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("span",{className:"text-color-primary"},"Expert")," General ",r.a.createElement("span",{className:"text-color-primary"},"Services")),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Our expertise is investing in people, our business success is their success."),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement(Z,null,r.a.createElement(Q,{tag:"a",color:"primary",wideMobile:!0,href:"https://cruip.com/"},"Get started"),r.a.createElement(Q,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/cruip/open-react-template/"},"View our work"))))),r.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},r.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),E(!0)}},r.a.createElement(C,{className:"has-shadow",src:a(46),alt:"Hero",width:896,height:504}))),r.a.createElement(te,{id:"video-modal",show:f,handleClose:function(e){e.preventDefault(),E(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};re.defaultProps=ie;var le=re,ne=["className","data","children","tag"],se=function(e){var t=e.className,a=e.data,i=e.children,l=e.tag,n=Object(o.a)(e,ne),s=x()("section-header",t),c=l;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},n,{className:s}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(c,{className:x()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};se.defaultProps={children:null,tag:"h2"};var ce=se,oe=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],me=Object(W.a)({},U.defaults),de=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(o.a)(e,oe),v=x()("features-tiles section",i&&"has-top-divider",l&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t),p=x()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",s&&"has-bottom-divider"),h=x()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},u,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(ce,{data:{title:"Find what you want!",paragraph:"Our technology is designed by people for the people! The customer view is our priority to make sure they active their success, and everyone wins! What you have generated, cannot be changed."},className:"center-content"}),r.a.createElement("div",{className:h},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(C,{src:a(47),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Cleaning Services"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(C,{src:a(48),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Real States"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(C,{src:a(49),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Pick up Services"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(C,{src:a(50),alt:"Features tile icon 04",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Edibles"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(C,{src:a(51),alt:"Features tile icon 05",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Basic Financial Plan"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(C,{src:a(52),alt:"Features tile icon 06",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Content Creator"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."))))))))};de.defaultProps=me;var ue=de,ve=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],pe=Object(W.a)({},K.defaults),he=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,h=Object(o.a)(e,ve),f=x()("features-split section",i&&"has-top-divider",l&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t),E=x()("features-split-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),b=x()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return r.a.createElement("section",Object.assign({},h,{className:f}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:E},r.a.createElement(ce,{data:{title:"Workflow that just works",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),r.a.createElement("div",{className:b},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),r.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),r.a.createElement("div",{className:x()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(C,{src:a(53),alt:"Features split 01",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),r.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),r.a.createElement("div",{className:x()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(C,{src:a(54),alt:"Features split 02",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),r.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),r.a.createElement("div",{className:x()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(C,{src:a(55),alt:"Features split 03",width:528,height:396})))))))};he.defaultProps=pe;var fe=he,Ee=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],be=Object(W.a)({},U.defaults),ge=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.pushLeft,d=Object(o.a)(e,Ee),u=x()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=x()("testimonial-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider"),p=x()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(ce,{data:{title:"What they are saying",paragraph:"Our community is what driven us to achieve more and more. Here everyone has a voice and everybody votes for a better future."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName")))))))))};ge.defaultProps=be;var Ne=ge,we=["className","children","labelHidden","id"],Oe=function(e){var t=e.className,a=e.children,i=e.labelHidden,l=e.id,n=Object(o.a)(e,we),s=x()("form-label",i&&"screen-reader",t);return r.a.createElement("label",Object.assign({},n,{className:s,htmlFor:l}),a)};Oe.defaultProps={children:null,labelHidden:!1,id:null};var xe=Oe,De=["children","className","status"],ye=function(e){var t=e.children,a=e.className,i=e.status,l=Object(o.a)(e,De),n=x()("form-hint",i&&"text-color-".concat(i),a);return r.a.createElement("div",Object.assign({},l,{className:n}),t)};ye.defaultProps={children:null,status:!1};var je=ye,Ce=["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"],ke=function(e){var t=e.className,a=e.children,i=e.label,l=e.labelHidden,n=e.type,s=e.name,c=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,h=e.placeholder,f=e.rows,E=e.hint,b=Object(o.a)(e,Ce),g=x()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),N=x()("form-input",p&&"form-input-".concat(p),c&&"form-".concat(c),t),w="textarea"===n?"textarea":"input";return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(xe,{labelHidden:l,id:b.id},i),r.a.createElement("div",{className:g},r.a.createElement(w,Object.assign({},b,{type:"textarea"!==n?n:null,className:N,name:s,disabled:m,value:d,placeholder:h,rows:"textarea"===n?f:null})),a),E&&r.a.createElement(je,{status:c},E))};ke.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var Le=ke,Se=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],Fe=Object(W.a)(Object(W.a)({},V.defaults),{},{split:!1}),He=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.split,d=Object(o.a)(e,Se),u=function(e){console.log("Working",e),!function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e)?alert("".concat(e," is not a valid email address. Please try again")):alert("Thanks for subrscribing! You will receive an email shortly")},v=x()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),p=x()("cta-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider",m&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"Keep yourself up to date!")),r.a.createElement("div",{className:"cta-action"},r.a.createElement(Le,{onKeyDown:function(e){if("Enter"===e.key)return u(e.target.value)},id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your email here"},r.a.createElement("svg",{onClick:u,width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};He.defaultProps=Fe;var Pe=He,Ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,{className:"illustration-section-01"}),r.a.createElement(ue,null),r.a.createElement(fe,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(Ne,{topDivider:!0}),r.a.createElement(Pe,{split:!0}))},Be=a(30),qe=a.n(Be),Te=function(){return r.a.createElement("h1",null,"Signup Page!")},Me=function(){return r.a.createElement("h1",null,"GetMore Page!")},ze=a(31),Re=a.n(ze);b.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GA_CODE);var _e=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){b.a.set({page:e}),b.a.pageview(e)}(a)}),[t]),r.a.createElement(g.a,{authClient:w},r.a.createElement(E,{ref:e,children:function(){return r.a.createElement(s.c,null,r.a.createElement(d,{exact:!0,path:"/",component:Ae,layout:G}),r.a.createElement(d,{exact:!0,path:"/signin",component:qe.a,layout:G}),r.a.createElement(d,{exact:!0,path:"/signup",component:Te,layout:G}),r.a.createElement(d,{exact:!0,path:"/get-more",component:Me,layout:G}),r.a.createElement(d,{exact:!0,path:"/booking",component:Re.a,layout:G}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(56);var Ge=Object(c.a)();n.a.render(r.a.createElement(s.b,{history:Ge},r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.d91d9f12.chunk.js.map