(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(91)),i={id:"datatype-math",title:"DataType Math"},c={unversionedId:"guides/datatype-math",id:"guides/datatype-math",isDocsHomePage:!1,title:"DataType Math",description:'Roblox features a bunch of "DataType" classes and many of these use operator overloading for math operations. i.e. Vector2, Vector3, CFrame',source:"@site/docs/guides/datatype-math.mdx",slug:"/guides/datatype-math",permalink:"/docs/guides/datatype-math",editUrl:"https://github.com/roblox-ts/roblox-ts.github.io/blob/master/docs/guides/datatype-math.mdx",version:"current",sidebar:"docs",previous:{title:"Indexing Children",permalink:"/docs/guides/indexing-children"},next:{title:"LuaTuple<T>",permalink:"/docs/guides/lua-tuple"}},p=[],l={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.roblox.com/en-us/api-reference/data-types"}),'Roblox features a bunch of "DataType" classes')," and many of these use operator overloading for math operations. i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"Vector2"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Vector3"),", ",Object(o.b)("inlineCode",{parentName:"p"},"CFrame")),Object(o.b)("p",null,"Unfortunately, TypeScript does not have a way to describe operator overloading with types."),Object(o.b)("p",null,"To get around this, roblox-ts adds four macro methods ",Object(o.b)("inlineCode",{parentName:"p"},".add()"),", ",Object(o.b)("inlineCode",{parentName:"p"},".sub()"),", ",Object(o.b)("inlineCode",{parentName:"p"},".mul()"),", and ",Object(o.b)("inlineCode",{parentName:"p"},".div()")," to DataType classes which support math operators."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"a.add(b)")," compiles to ",Object(o.b)("inlineCode",{parentName:"li"},"a + b")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"a.sub(b)")," compiles to ",Object(o.b)("inlineCode",{parentName:"li"},"a - b")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"a.mul(b)")," compiles to ",Object(o.b)("inlineCode",{parentName:"li"},"a * b")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"a.div(b)")," compiles to ",Object(o.b)("inlineCode",{parentName:"li"},"a / b"))),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/roblox-ts/types/blob/master/include/macro_math.d.ts"}),"You can see an up to date list of classes which support math operators here.")))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);