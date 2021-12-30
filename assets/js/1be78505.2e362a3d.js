"use strict";(self.webpackChunkroblox_ts_com=self.webpackChunkroblox_ts_com||[]).push([[514,75],{5642:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),r=n(3905),l=n(6291),o=n(4161),c=n(6010),i=n(3810),s=n(3783),u=n(5537),d=n(7462);var m=function(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(5999),h=n(3366),b=n(9960),f=n(3919),v=n(541),g="menuLinkText_OKON",E="hasHref_TwRn",k=n(2389),_=["items"],C=["item"],Z=["item","onItemClick","activePath","level"],N=["item","onItemClick","activePath","level"],y=(0,a.memo)((function(e){var t=e.items,n=(0,h.Z)(e,_);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(S,(0,d.Z)({key:t,item:e},n))})))}));function S(e){var t=e.item,n=(0,h.Z)(e,C);return"category"===t.type?0===t.items.length?null:a.createElement(T,(0,d.Z)({item:t},n)):a.createElement(I,(0,d.Z)({item:t},n))}function T(e){var t,n=e.item,r=e.onItemClick,l=e.activePath,o=e.level,s=(0,h.Z)(e,Z),u=n.items,m=n.label,f=n.collapsible,v=n.className,_=n.href,C=function(e){var t=(0,k.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(n),N=(0,i._F)(n,l),S=(0,i.uR)({initialState:function(){return!!f&&(!N&&n.collapsed)}}),T=S.collapsed,I=S.setCollapsed,x=S.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:N,collapsed:T,setCollapsed:I}),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":T},v)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(b.Z,(0,d.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":f&&!_,"menu__link--active":N},t[g]=!f,t[E]=!!C,t)),onClick:f?function(e){null==r||r(n),_?I(!1):(e.preventDefault(),x())}:function(){null==r||r(n)},href:f?null!=C?C:"#":C},s),m),_&&f&&a.createElement("button",{"aria-label":(0,p.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),x()}})),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},a.createElement(y,{items:u,tabIndex:T?-1:0,onItemClick:r,activePath:l,level:o+1})))}function I(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,o=(0,h.Z)(e,N),s=t.href,u=t.label,m=t.className,p=(0,i._F)(t,r);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:u},a.createElement(b.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},o),(0,f.Z)(s)?u:a.createElement("span",null,u,a.createElement(v.Z,null))))}var x="sidebar_a3j0",w="sidebarWithHideableNavbar_VlPv",B="sidebarHidden_OqfG",M="sidebarLogo_hmkv",j="menu_cyFh",A="menuWithAnnouncementBar_+O1J",L="collapseSidebarButton_eoK2",F="collapseSidebarButtonIcon_e+kA";function P(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",L),onClick:t},a.createElement(m,{className:F}))}function R(e){var t,n,r=e.path,l=e.sidebar,o=e.onCollapse,s=e.isHidden,d=function(){var e=(0,i.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,i.LU)(),p=m.navbar.hideOnScroll,h=m.hideableSidebar;return a.createElement("div",{className:(0,c.Z)(x,(t={},t[w]=p,t[B]=s,t))},p&&a.createElement(u.Z,{tabIndex:-1,className:M}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",j,(n={},n[A]=d,n))},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:l,activePath:r,level:1}))),h&&a.createElement(P,{onClick:o}))}var D=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function H(e){return a.createElement(i.Cv,{component:D,props:e})}var W=a.memo(R),U=a.memo(H);function O(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(W,e),r&&a.createElement(U,e))}var q=n(7440),z=n(4608),K="backToTopButton_i9tI",Y="backToTopButtonShow_wCmF";function $(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var G=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useRef)(!1),o=$(),s=o.smoothScrollTop,u=o.cancelScrollToTop;return(0,i.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(l.current)l.current=!1;else{var o=n<a;if(o||u(),n<300)r(!1);else if(o){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&r(!0)}else r(!1)}})),(0,i.SL)((function(e){e.location.hash&&(l.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,K,(e={},e[Y]=n,e)),type:"button",onClick:function(){return s()}})},J=n(6775),Q={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"},V=n(2859);function X(e){var t,n,l,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,h=e.sidebarName,b=(0,i.Vq)(),f=u.pluginId,v=u.version,g=(0,a.useState)(!1),E=g[0],k=g[1],_=(0,a.useState)(!1),C=_[0],Z=_[1],N=(0,a.useCallback)((function(){C&&Z(!1),k((function(e){return!e}))}),[C]);return a.createElement(o.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:v,tag:(0,i.os)(f,v)}},a.createElement("div",{className:Q.docPage},a.createElement(G,null),b&&a.createElement("aside",{className:(0,c.Z)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=E,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&E&&Z(!0)}},a.createElement(O,{key:h,sidebar:b,path:s.path,onCollapse:N,isHidden:C}),C&&a.createElement("div",{className:Q.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(m,{className:Q.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(Q.docMainContainer,(n={},n[Q.docMainContainerEnhanced]=E||!b,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(l={},l[Q.docItemWrapperEnhanced]=E,l))},a.createElement(r.Zo,{components:q.Z},d)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,J.LX)(r.pathname,e)}));if(!o)return a.createElement(z.default,null);var c=o.sidebar,s=c?n.docsSidebars[c]:null;return a.createElement(a.Fragment,null,a.createElement(V.Z,null,a.createElement("html",{className:n.className})),a.createElement(i.qu,{version:n},a.createElement(i.bT,{sidebar:s},a.createElement(X,{currentDocRoute:o,versionMetadata:n,sidebarName:c},(0,l.Z)(t,{versionMetadata:n})))))}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(4161),l=n(5999);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},9013:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(7462),r=n(7294),l=n(6010),o=n(3746),c=n(195),i=n(7594),s=n.n(i),u=n(3229),d="codeBlockContent_X2I6",m="codeBlockTitle_PQMO",p="codeBlock_UxnK",h="codeBlockWithTitle_3DUw",b="codeButtons_kJ7+",f="codeButton_dv+f",v="codeBlockLines_W6UD",g=n(3810),E=n(4996),k=n(4877),_=new Set(["typescript","ts","typescriptreact","tsx"]),C=/{([\d,-]+)}/,Z=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},N=/(?:title=")(.*)(?:")/,y=function(e){var t=e.children,n=e.className,i=e.metastring,y=(0,g.LU)().prism,S=(0,r.useState)(!1),T=S[0],I=S[1],x=(0,r.useState)(!1),w=x[0],B=x[1];(0,r.useEffect)((function(){B(!0)}),[]);var M=(0,r.useRef)(null),j=(0,r.useRef)(null),A=new Array,L="",F=(0,u.Z)(),P=Array.isArray(t)?t.join(""):t;if(i&&C.test(i)){var R=i.match(C)[1];A=s()(R).filter((function(e){return e>0}))}i&&N.test(i)&&(L=i.match(N)[1]);var D=n&&n.replace(/language-/,""),H="string"==typeof D&&_.has(D.toLowerCase());!D&&y.defaultLanguage&&(D=y.defaultLanguage);var W=P.replace(/\n$/,"");if(0===A.length&&void 0!==D){for(var U,O="",q=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return Z(["js","jsBlock"]);case"jsx":case"tsx":return Z(["js","jsBlock","jsx"]);case"html":return Z(["js","jsBlock","html"]);case"python":case"py":return Z(["python"]);default:return Z()}}(D),z=P.replace(/\n$/,"").split("\n"),K=0;K<z.length;){var Y=K+1,$=z[K].match(q);if(null!==$){switch($.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":O+=Y+",";break;case"highlight-start":U=Y;break;case"highlight-end":O+=U+"-"+(Y-1)+","}z.splice(K,1)}else K+=1}A=s()(O),W=z.join("\n")}var G=function(){(0,c.Z)(W),I(!0),setTimeout((function(){return I(!1)}),2e3)},J=(0,E.Z)("playground/"),Q=function(){return open(J+(0,k.T)(W))};return r.createElement(o.ZP,(0,a.Z)({},o.lG,{key:String(w),theme:F,code:W,language:D}),(function(e){var t,n=e.className,o=e.style,c=e.tokens,i=e.getLineProps,s=e.getTokenProps;return r.createElement(r.Fragment,null,L&&r.createElement("div",{style:o,className:m},L),r.createElement("div",{className:d},r.createElement("div",{tabIndex:0,className:(0,l.Z)(n,p,"thin-scrollbar",(t={},t[h]=L,t))},r.createElement("div",{className:v,style:o},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return A.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.createElement("div",(0,a.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,a.Z)({key:t},s({token:e,key:t})))})))})))),r.createElement("div",{className:b},r.createElement("button",{ref:M,type:"button","aria-label":"Copy code to clipboard",className:(0,l.Z)(f),onClick:G},T?"Copied":"Copy"),H&&r.createElement("button",{ref:j,type:"button","aria-label":"Compile code in playground",className:(0,l.Z)(f),onClick:Q},"Compile"))))}))}},4877:function(e,t,n){n.d(t,{E:function(){return u},T:function(){return m}});var a=n(5861),r=n(7757),l=n.n(r),o=n(6961),c=n.n(o),i="#code/",s="#gist/";function u(e){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(l().mark((function e(t){var n,a,r,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.startsWith(i)){e.next=6;break}if(null===(n=c().decompressFromEncodedURIComponent(t.substr(i.length)))){e.next=4;break}return e.abrupt("return",n);case 4:e.next=16;break;case 6:if(!t.startsWith(s)){e.next=16;break}return a=t.substr(s.length),e.next=10,fetch("https://api.github.com/gists/"+a);case 10:if(200!==(r=e.sent).status){e.next=16;break}return e.next=14,r.json();case 14:return o=e.sent,e.abrupt("return",Object.values(o.files)[0].content);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return i+c().compressToEncodedURIComponent(e)}}}]);