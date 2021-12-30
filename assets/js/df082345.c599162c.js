"use strict";(self.webpackChunkroblox_ts_com=self.webpackChunkroblox_ts_com||[]).push([[158],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5115:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return k},default:function(){return x},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return N}});var a=n(7462),r=n(3366),o=n(7294),l=n(3905),i=n(2389),s=n(9443);var u=function(){var e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3810),p=n(6010),m="tabItem_vU9c";function d(e){var t,n,r,l=e.lazy,i=e.block,s=e.defaultValue,d=e.values,f=e.groupId,h=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,c.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===s?s:null!=(t=null!=s?s:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=u(),y=N.tabGroupChoices,x=N.setTabGroupChoices,C=(0,o.useState)(v),w=C[0],T=C[1],R=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=y[f];null!=S&&S!==w&&b.some((function(e){return e.value===S}))&&T(S)}var j=function(e){var t=e.currentTarget,n=R.indexOf(t),a=b[n].value;a!==w&&(E(t),T(a),null!=f&&x(f,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=R.indexOf(e.currentTarget)+1;n=R[a]||R[0];break;case"ArrowLeft":var r=R.indexOf(e.currentTarget)-1;n=R[r]||R[R.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},h)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return R.push(e)},onKeyDown:O,onFocus:j,onClick:j},r,{className:(0,p.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function f(e){var t=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}var h=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},g=["components"],b={title:"Roact JSX"},k=void 0,v={unversionedId:"guides/roact-jsx",id:"guides/roact-jsx",title:"Roact JSX",description:"The following guide assumes that you are already familiar with Roact.",source:"@site/docs/guides/roact-jsx.mdx",sourceDirName:"guides",slug:"/guides/roact-jsx",permalink:"/docs/guides/roact-jsx",editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/guides/roact-jsx.mdx",tags:[],version:"current",frontMatter:{title:"Roact JSX"},sidebar:"docs",previous:{title:"LuaTuple<T>",permalink:"/docs/guides/lua-tuple"},next:{title:"Using Existing Luau",permalink:"/docs/guides/using-existing-luau"}},N=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Tag Names",id:"tag-names",children:[],level:2},{value:"Special Attributes",id:"special-attributes",children:[{value:"<code>Key</code> Attribute",id:"key-attribute",children:[],level:3},{value:"<code>Ref</code> Attribute",id:"ref-attribute",children:[],level:3},{value:"<code>Change</code> Attribute",id:"change-attribute",children:[],level:3},{value:"<code>Event</code> Attribute",id:"event-attribute",children:[],level:3}],level:2},{value:"Spreading into Attributes",id:"spreading-into-attributes",children:[],level:2},{value:"Spreading into Children",id:"spreading-into-children",children:[],level:2},{value:"Using Values as Children",id:"using-values-as-children",children:[],level:2},{value:"Fragments",id:"fragments",children:[],level:2},{value:"Extending the default JSX elements",id:"extending-the-default-jsx-elements",children:[],level:2}],y={toc:N};function x(e){var t=e.components,n=(0,r.Z)(e,g);return(0,l.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The following guide assumes that you are already familiar with Roact. ",(0,l.kt)("br",null),"\nPlease refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://roblox.github.io/roact/"},"Roact documentation")," for more information."))),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,'While roblox-ts allows you to use Roact just like you would in Luau, it also supports a "JSX" shorthand form.'),(0,l.kt)(f,{defaultValue:"tsx",values:[{label:"JSX",value:"tsx"},{label:"Normal",value:"ts"}],mdxType:"Tabs"},(0,l.kt)(h,{value:"tsx",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst element = (\n    <frame Size={new UDim2(1, 0, 1, 0)}>\n        <frame Key="Child" Size={new UDim2(1, 0, 1, 0)} />\n    </frame>\n);\n'))),(0,l.kt)(h,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import Roact from "@rbxts/roact";\n\nconst element = Roact.createElement(\n    "Frame",\n    {\n        Size: new UDim2(1, 0, 1, 0),\n    },\n    {\n        Child: Roact.createElement("Frame", {\n            Size: new UDim2(1, 0, 1, 0),\n        }),\n    }\n);\n')))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/introducing-jsx.html"},"You can learn more about JSX here.")),(0,l.kt)("h2",{id:"tag-names"},"Tag Names"),(0,l.kt)("p",null,'The "tag name" in JSX is the expression after the initial ',(0,l.kt)("inlineCode",{parentName:"p"},"<")," character. ",(0,l.kt)("br",null),"\nFor example, ",(0,l.kt)("inlineCode",{parentName:"p"},"frame")," is the tag name of ",(0,l.kt)("inlineCode",{parentName:"p"},"<frame />"),"."),(0,l.kt)("p",null,"You can use any Roblox UI class (host components) as a built-in JSX tag name by converting the name to lowercase."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Frame")," \u2192 ",(0,l.kt)("inlineCode",{parentName:"li"},"frame")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UIListLayout")," \u2192 ",(0,l.kt)("inlineCode",{parentName:"li"},"uilistlayout")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ViewportFrame")," \u2192 ",(0,l.kt)("inlineCode",{parentName:"li"},"viewportframe")),(0,l.kt)("li",{parentName:"ul"},"etc.")),(0,l.kt)("p",null,"Tag names can also be custom class components or functional components."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Custom components must use PascalCase.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\ninterface MyComponentProps {\n    value: string;\n}\n\nfunction MyComponent(props: MyComponentProps) {\n    return <textlabel Text={props.value} />;\n}\n\nconst element = <MyComponent value="foobar" />;\n')),(0,l.kt)("p",null,"Tag names can also be a property access expression to use components which are nested inside of objects or namespaces."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\ninterface MyComponentProps {\n    value: string;\n}\n\nfunction MyComponent(props: MyComponentProps) {\n    return <textlabel Text={props.value} />;\n}\n\nconst Components = {\n    MyComponent: MyComponent,\n};\n\nconst element = <Components.MyComponent value="foobar" />;\n')),(0,l.kt)("h2",{id:"special-attributes"},"Special Attributes"),(0,l.kt)("h3",{id:"key-attribute"},(0,l.kt)("inlineCode",{parentName:"h3"},"Key")," Attribute"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Key")," attribute controls what your UI Instance will be named in the DataModel. This is the same as the ",(0,l.kt)("inlineCode",{parentName:"p"},'"Child"')," key in this Luau example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'Roact.createElement("Frame", {\n    Child = Roact.createElement("Frame", {}),\n})\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst element = (\n    <frame>\n        <frame Key="Child" />\n    </frame>\n);\n')),(0,l.kt)("p",null,"If an element is given the ",(0,l.kt)("inlineCode",{parentName:"p"},"Key")," attribute and it ",(0,l.kt)("strong",{parentName:"p"},"not")," a child of another element, it will be wrapped in a ",(0,l.kt)("inlineCode",{parentName:"p"},"Roact.Fragment"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst element = <frame Key="Child" />;\n')),(0,l.kt)("h3",{id:"ref-attribute"},(0,l.kt)("inlineCode",{parentName:"h3"},"Ref")," Attribute"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Ref")," attribute directly maps to the ",(0,l.kt)("inlineCode",{parentName:"p"},"[Roact.Ref]")," key in Luau."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst ref = Roact.createRef<Frame>();\nconst element = <frame Ref={ref} />;\n')),(0,l.kt)("h3",{id:"change-attribute"},(0,l.kt)("inlineCode",{parentName:"h3"},"Change")," Attribute"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Change")," attribute takes an object which maps property name -> changed function. The changed function value will be given a reference ",(0,l.kt)("inlineCode",{parentName:"p"},"rbx")," to the rendered UI instance."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note the double curly braces ",(0,l.kt)("inlineCode",{parentName:"strong"},"{{")," and ",(0,l.kt)("inlineCode",{parentName:"strong"},"}}"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst element = (\n    <frame\n        Change={{\n            Position: (rbx) => print(`${rbx.GetFullName()} changed Position!`),\n        }}\n    />\n);\n')),(0,l.kt)("h3",{id:"event-attribute"},(0,l.kt)("inlineCode",{parentName:"h3"},"Event")," Attribute"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Event")," attribute takes an object which maps property name -> event connection function. The event connection function value will be given a reference ",(0,l.kt)("inlineCode",{parentName:"p"},"rbx")," to the rendered UI instance followed by the rest of the event arguments."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note the double curly braces ",(0,l.kt)("inlineCode",{parentName:"strong"},"{{")," and ",(0,l.kt)("inlineCode",{parentName:"strong"},"}}"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst element = (\n    <textbutton\n        Event={{\n            MouseButton1Down: (rbx, x, y) =>\n                print(`${rbx.GetFullName()} was clicked at (${x}, ${y})`),\n        }}\n    />\n);\n')),(0,l.kt)("h2",{id:"spreading-into-attributes"},"Spreading into Attributes"),(0,l.kt)("p",null,"You can spread objects into attributes using the form ",(0,l.kt)("inlineCode",{parentName:"p"},"{...exp}")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"exp")," is an object. ",(0,l.kt)("br",null),"\nThis is useful for creating reusable preset lists of properties."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst MyStyle: Partial<WritableInstanceProperties<Frame>> = {\n    BackgroundColor3: new Color3(0, 0, 0),\n    BackgroundTransparency: 0.5,\n};\n\nconst element = <frame {...MyStyle} />;\n')),(0,l.kt)("h2",{id:"spreading-into-children"},"Spreading into Children"),(0,l.kt)("p",null,"You can spread arrays into children using the form ",(0,l.kt)("inlineCode",{parentName:"p"},"{...exp}")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"exp")," is a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReadonlyArray<T>"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst listItems = new Array<Roact.Element>();\nfor (let i = 0; i < 10; i++) {\n    listItems.push(<textbutton Text={`Button ${i}`} />);\n}\n\nconst element = <frame>{...listItems}</frame>;\n')),(0,l.kt)("h2",{id:"using-values-as-children"},"Using Values as Children"),(0,l.kt)("p",null,"You can use values for children using the form ",(0,l.kt)("inlineCode",{parentName:"p"},"{exp}"),". This is useful for programmatically creating children. The allowed values are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Roact.Element")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ReadonlyArray<T>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ReadonlyMap<K, V>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," values do not actually get put into the children props, but allowing the values here is useful for creating conditional children values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nlet condition = false;\n\nconst element = (\n    <frame>\n        {condition && <frame />}\n        {condition ? <frame /> : undefined}\n    </frame>\n);\n')),(0,l.kt)("h2",{id:"fragments"},"Fragments"),(0,l.kt)("p",null,"To create a Fragment with JSX you can either use the tag name ",(0,l.kt)("inlineCode",{parentName:"p"},"Roact.Fragment")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst fragment = <Roact.Fragment></Roact.Fragment>;\n')),(0,l.kt)("p",null,"Or, you can use the shorthand form:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Roact from "@rbxts/roact";\n\nconst fragment = <></>;\n')),(0,l.kt)("h2",{id:"extending-the-default-jsx-elements"},"Extending the default JSX elements"),(0,l.kt)("p",null,"By default the JSX supports all gui objects, however this may be limiting in cases where you want to manage other instances using Roact.\nWhich elements are supported by JSX is determined by a global ",(0,l.kt)("inlineCode",{parentName:"p"},"JSX")," namespace, to allow for more instances to be created this way you need to extend this global namespace.\nIt is recommended to define this extension of the namespace in one central place for all instances."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note the ",(0,l.kt)("inlineCode",{parentName:"strong"},"JSX.IntrinsicElement<T extends Instance>")," expects the type for an instance to be passed into it to allow for the properties & events to be typed correctly."),"\n",(0,l.kt)("strong",{parentName:"p"},"Also note that, by convention, all Roblox instances should be lowercased.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"declare global {\n    namespace JSX {\n        interface IntrinsicElements {\n            // Your instances into here\n            proximityprompt: JSX.IntrinsicElement<ProximityPrompt>;\n            folder: JSX.IntrinsicElement<Folder>;\n        }\n    }\n}\n")))}x.isMDXComponent=!0}}]);