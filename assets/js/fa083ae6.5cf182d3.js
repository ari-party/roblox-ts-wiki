"use strict";(self.webpackChunkroblox_ts=self.webpackChunkroblox_ts||[]).push([[336],{1260:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=s(7624),n=s(2172);const o={title:"TypeScript Packages"},r=void 0,c={id:"guides/typescript-packages",title:"TypeScript Packages",description:'To publish roblox-ts packages, you\'ll need to join the "@rbxts" npm organization. You can do that here.',source:"@site/docs/guides/typescript-packages.mdx",sourceDirName:"guides",slug:"/guides/typescript-packages",permalink:"/docs/guides/typescript-packages",draft:!1,unlisted:!1,editUrl:"https://github.com/roblox-ts/roblox-ts.com/blob/master/docs/guides/typescript-packages.mdx",tags:[],version:"current",frontMatter:{title:"TypeScript Packages"},sidebar:"docs",previous:{title:"Luau Packages",permalink:"/docs/guides/luau-packages"},next:{title:"TypeScript Transformers",permalink:"/docs/guides/typescript-transformers"}},a={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Testing Your Package",id:"testing-your-package",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:['To publish roblox-ts packages, you\'ll need to join the "@rbxts" npm organization. ',(0,t.jsx)(i.a,{href:"../../join-org",children:"You can do that here."})]})}),"\n",(0,t.jsx)(i.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(i.p,{children:"Creating packages with roblox-ts is super easy!"}),"\n",(0,t.jsxs)(i.p,{children:["To start, just create an empty folder and run ",(0,t.jsx)(i.code,{children:"npm init roblox-ts package"})," inside of it. This will generate a project scaffolding for your package. You can author your ",(0,t.jsx)(i.code,{children:".ts"})," files inside of the ",(0,t.jsx)(i.code,{children:"src"})," folder."]}),"\n",(0,t.jsxs)(i.p,{children:["In ",(0,t.jsx)(i.code,{children:"package.json"}),", you can edit a few different fields to configure your package:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:['"name" - This ',(0,t.jsx)(i.em,{children:"must"})," begin with ",(0,t.jsx)(i.code,{children:"@rbxts/"})," to be considered a valid roblox-ts package."]}),"\n",(0,t.jsx)(i.li,{children:'"description"'}),"\n",(0,t.jsxs)(i.li,{children:['"main" - This should point to a ',(0,t.jsx)(i.code,{children:".lua"})," file in ",(0,t.jsx)(i.code,{children:"out"})," which represents your package's entrypoint."]}),"\n",(0,t.jsxs)(i.li,{children:['"typings" - This should point to a ',(0,t.jsx)(i.code,{children:".d.ts"})," file in ",(0,t.jsx)(i.code,{children:"out"})," which represents your package's entrypoint."]}),"\n",(0,t.jsxs)(i.li,{children:['"files" - An array of globs for what should be published to npm. Defaults to ',(0,t.jsx)(i.code,{children:'["out"]'}),". You don't explicitly have to specify special files like ",(0,t.jsx)(i.code,{children:"package.json"}),", ",(0,t.jsx)(i.code,{children:"LICENSE"})," or ",(0,t.jsx)(i.code,{children:"readme.md"})," here, as npm includes those by default."]}),"\n",(0,t.jsx)(i.li,{children:'"repository" - If your package\'s source is public on something like GitHub, you should include a link to it in this field.'}),"\n",(0,t.jsx)(i.li,{children:'"homepage" - If your package has online documentation, you should include a link to it in this field.'}),"\n",(0,t.jsx)(i.li,{children:'"author" - Your own name or username.'}),"\n",(0,t.jsxs)(i.li,{children:['"license" - The license of your package\'s code. This should be the ',(0,t.jsx)(i.a,{href:"https://spdx.org/licenses/",children:"SPDX license identifier"})," that corresponds to your ",(0,t.jsx)(i.code,{children:"LICENSE"})," file."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"testing-your-package",children:"Testing Your Package"}),"\n",(0,t.jsxs)(i.p,{children:["The simplest way to test your package is with ",(0,t.jsx)(i.code,{children:"npm pack"}),". This command will generate a ",(0,t.jsx)(i.code,{children:".tgz"})," file which can then be used from another project via ",(0,t.jsx)(i.code,{children:"npm install ../../path/to/package.tgz"}),"."]}),"\n",(0,t.jsxs)(i.admonition,{type:"warning",children:[(0,t.jsx)(i.p,{children:"When publishing a package for the first time, you might run into this issue:"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"../faq/publish-as-public",children:'npm publish errors with "npm error 402 Payment Required"'})})]})]})}function h(e={}){const{wrapper:i}={...(0,n.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2172:(e,i,s)=>{s.d(i,{I:()=>c,M:()=>r});var t=s(1504);const n={},o=t.createContext(n);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);