"use strict";(self.webpackChunkroblox_ts_com=self.webpackChunkroblox_ts_com||[]).push([[340],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6053:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Constructors"},p=void 0,s={unversionedId:"api/constructors",id:"api/constructors",title:"Constructors",description:"new Array(length? T)",source:"@site/docs/api/constructors.mdx",sourceDirName:"api",slug:"/api/constructors",permalink:"/docs/api/constructors",editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/api/constructors.mdx",tags:[],version:"current",frontMatter:{title:"Constructors"},sidebar:"docs",previous:{title:"Identifiers",permalink:"/docs/api/identifiers"},next:{title:"Functions",permalink:"/docs/api/functions"}},c=[{value:"<code>new Array&lt;T&gt;(length?: number, value?: T)</code>",id:"new-arraytlength-number-value-t",children:[],level:3},{value:"<code>new Map&lt;K, V&gt;(entries?: Array&lt;[K, V]&gt;)</code>",id:"new-mapk-ventries-arrayk-v",children:[],level:3},{value:"<code>new ReadonlyMap&lt;K, V&gt;(entries?: Array&lt;[K, V]&gt;)</code>",id:"new-readonlymapk-ventries-arrayk-v",children:[],level:3},{value:"<code>new WeakMap&lt;K, V&gt;(entries?: Array&lt;[K, V]&gt;)</code>",id:"new-weakmapk-ventries-arrayk-v",children:[],level:3},{value:"<code>new Set&lt;V&gt;(values?: Array&lt;T&gt;)</code>",id:"new-setvvalues-arrayt",children:[],level:3},{value:"<code>new ReadonlySet&lt;V&gt;(values?: Array&lt;T&gt;)</code>",id:"new-readonlysetvvalues-arrayt",children:[],level:3},{value:"<code>new WeakSet&lt;V&gt;(values?: Array&lt;T&gt;)</code>",id:"new-weaksetvvalues-arrayt",children:[],level:3},{value:"<code>new Promise&lt;T&gt;()</code>",id:"new-promiset",children:[],level:3}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"new-arraytlength-number-value-t"},(0,l.kt)("inlineCode",{parentName:"h3"},"new Array<T>(length?: number, value?: T)")),(0,l.kt)("p",null,"Creates a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Array<T>")," type with the given preallocated length and pre-filled with ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,l.kt)("p",null,"Compiles to either a table literal or a ",(0,l.kt)("inlineCode",{parentName:"p"},"table.create()")," call in Luau."),(0,l.kt)("h3",{id:"new-mapk-ventries-arrayk-v"},(0,l.kt)("inlineCode",{parentName:"h3"},"new Map<K, V>(entries?: Array<[K, V]>)")),(0,l.kt)("p",null,"Creates a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Map<K, V>")," type pre-filled with the entries given as the argument if provided."),(0,l.kt)("p",null,"Compiles to a table literal."),(0,l.kt)("h3",{id:"new-readonlymapk-ventries-arrayk-v"},(0,l.kt)("inlineCode",{parentName:"h3"},"new ReadonlyMap<K, V>(entries?: Array<[K, V]>)")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"new Map<K, V>"),", but creates a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReadonlyMap<K, V>")," type instead."),(0,l.kt)("h3",{id:"new-weakmapk-ventries-arrayk-v"},(0,l.kt)("inlineCode",{parentName:"h3"},"new WeakMap<K, V>(entries?: Array<[K, V]>)")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"new Map<K, V>"),", but creates a ",(0,l.kt)("inlineCode",{parentName:"p"},"WeakMap<K, V>")," type instead."),(0,l.kt)("p",null,"Compiles using ",(0,l.kt)("inlineCode",{parentName:"p"},'setmetatable({}, { __mode = "k" })'),"."),(0,l.kt)("h3",{id:"new-setvvalues-arrayt"},(0,l.kt)("inlineCode",{parentName:"h3"},"new Set<V>(values?: Array<T>)")),(0,l.kt)("p",null,"Creates a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Set<V>")," type pre-filled with the values given as the argument if provided."),(0,l.kt)("p",null,"Compiles to a table literal."),(0,l.kt)("h3",{id:"new-readonlysetvvalues-arrayt"},(0,l.kt)("inlineCode",{parentName:"h3"},"new ReadonlySet<V>(values?: Array<T>)")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"new Set<V>"),", but creates a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReadonlySet<V>")," type instead."),(0,l.kt)("h3",{id:"new-weaksetvvalues-arrayt"},(0,l.kt)("inlineCode",{parentName:"h3"},"new WeakSet<V>(values?: Array<T>)")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"new Set<V>"),", but creates a ",(0,l.kt)("inlineCode",{parentName:"p"},"WeakSet<V>")," type instead."),(0,l.kt)("p",null,"Compiles using ",(0,l.kt)("inlineCode",{parentName:"p"},'setmetatable({}, { __mode = "k" })'),"."),(0,l.kt)("h3",{id:"new-promiset"},(0,l.kt)("inlineCode",{parentName:"h3"},"new Promise<T>()")),(0,l.kt)("p",null,"Creates a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise<T>")," type. You can find documentation for the promise library that comes bundled with roblox-ts ",(0,l.kt)("a",{parentName:"p",href:"https://eryn.io/roblox-lua-promise/"},"here"),"."))}d.isMDXComponent=!0}}]);