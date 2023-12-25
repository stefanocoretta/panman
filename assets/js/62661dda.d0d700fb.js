"use strict";(self.webpackChunkpanman=self.webpackChunkpanman||[]).push([[719],{6190:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=r(5893),a=r(1151);const t={},o="Running pandoc as a web server",c={id:"Running pandoc as a web server",title:"Running pandoc as a web server",description:"If you rename (or symlink) the pandoc executable to pandoc-server, or",source:"@site/docs/Running pandoc as a web server.md",sourceDirName:".",slug:"/Running pandoc as a web server",permalink:"/Running pandoc as a web server",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Accessible PDFs and PDF archiving standards",permalink:"/Accessible PDFs and PDF archiving standards"},next:{title:"Running pandoc as a Lua interpreter",permalink:"/Running pandoc as a Lua interpreter"}},i={},d=[];function p(e){const n={a:"a",code:"code",h1:"h1",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"running-pandoc-as-a-web-server",children:"Running pandoc as a web server"}),"\n",(0,s.jsxs)(n.p,{children:["If you rename (or symlink) the pandoc executable to ",(0,s.jsx)(n.code,{children:"pandoc-server"}),", or\nif you call pandoc with ",(0,s.jsx)(n.code,{children:"server"})," as the first argument, it will start up\na web server with a JSON API. This server exposes most of the conversion\nfunctionality of pandoc. For full documentation, see the\n",(0,s.jsx)(n.a,{href:"https://github.com/jgm/pandoc/blob/master/doc/pandoc-server.md",children:"pandoc-server"}),"\nman page."]}),"\n",(0,s.jsxs)(n.p,{children:["If you rename (or symlink) the pandoc executable to ",(0,s.jsx)(n.code,{children:"pandoc-server.cgi"}),",\nit will function as a CGI program exposing the same API as\n",(0,s.jsx)(n.code,{children:"pandoc-server"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pandoc-server"})," is designed to be maximally secure; it uses Haskell\u2019s\ntype system to provide strong guarantees that no I/O will be performed\non the server during pandoc conversions."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var s=r(7294);const a={},t=s.createContext(a);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);