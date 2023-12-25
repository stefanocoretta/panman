"use strict";(self.webpackChunkpanman=self.webpackChunkpanman||[]).push([[921],{5124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=t(5893),s=t(1151);const i={},r="Accessible PDFs and PDF archiving standards",d={id:"Accessible PDFs and PDF archiving standards",title:"Accessible PDFs and PDF archiving standards",description:"PDF is a flexible format, and using PDF in certain contexts requires",source:"@site/docs/Accessible PDFs and PDF archiving standards.md",sourceDirName:".",slug:"/Accessible PDFs and PDF archiving standards",permalink:"/panman/Accessible PDFs and PDF archiving standards",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reproducible builds",permalink:"/panman/Reproducible builds"},next:{title:"Running pandoc as a web server",permalink:"/panman/Running pandoc as a web server"}},o={},c=[{value:"ConTeXt",id:"context",level:2},{value:"WeasyPrint",id:"weasyprint",level:2},{value:"Prince XML",id:"prince-xml",level:2},{value:"Word Processors",id:"word-processors",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"accessible-pdfs-and-pdf-archiving-standards",children:"Accessible PDFs and PDF archiving standards"}),"\n",(0,a.jsx)(n.p,{children:"PDF is a flexible format, and using PDF in certain contexts requires\nadditional conventions. For example, PDFs are not accessible by default;\nthey define how characters are placed on a page but do not contain\nsemantic information on the content. However, it is possible to generate\naccessible PDFs, which use tagging to add semantic information to the\ndocument."}),"\n",(0,a.jsx)(n.p,{children:"Pandoc defaults to LaTeX to generate PDF. Tagging support in LaTeX is in\ndevelopment and not readily available, so PDFs generated in this way\nwill always be untagged and not accessible. This means that alternative\nengines must be used to generate accessible PDFs."}),"\n",(0,a.jsx)(n.p,{children:"The PDF standards PDF/A and PDF/UA define further restrictions intended\nto optimize PDFs for archiving and accessibility. Tagging is commonly\nused in combination with these standards to ensure best results."}),"\n",(0,a.jsx)(n.p,{children:"Note, however, that standard compliance depends on many things,\nincluding the colorspace of embedded images. Pandoc cannot check this,\nand external programs must be used to ensure that generated PDFs are in\ncompliance."}),"\n",(0,a.jsx)(n.h2,{id:"context",children:"ConTeXt"}),"\n",(0,a.jsxs)(n.p,{children:["ConTeXt always produces tagged PDFs, but the quality depends on the\ninput. The default ConTeXt markup generated by pandoc is optimized for\nreadability and reuse, not tagging. Enable the\n",(0,a.jsx)(n.a,{href:"#extension--tagging",children:(0,a.jsx)(n.code,{children:"tagging"})})," format extension to force markup that\nis optimized for tagging. This can be combined with the ",(0,a.jsx)(n.code,{children:"pdfa"})," variable\nto generate standard-compliant PDFs. E.g.:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pandoc --to=context+tagging -V pdfa=3a\n"})}),"\n",(0,a.jsxs)(n.p,{children:["A recent ",(0,a.jsx)(n.code,{children:"context"})," version should be used, as older versions contained a\nbug that lead to invalid PDF metadata."]}),"\n",(0,a.jsx)(n.h2,{id:"weasyprint",children:"WeasyPrint"}),"\n",(0,a.jsx)(n.p,{children:"The HTML-based engine WeasyPrint includes experimental support for PDF/A\nand PDF/UA since version 57. Tagged PDFs can created with"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pandoc --pdf-engine=weasyprint \\\n       --pdf-engine-opt=--pdf-variant=pdf/ua-1 ...\n"})}),"\n",(0,a.jsx)(n.p,{children:"The feature is experimental and standard compliance should not be\nassumed."}),"\n",(0,a.jsx)(n.h2,{id:"prince-xml",children:"Prince XML"}),"\n",(0,a.jsxs)(n.p,{children:["The non-free HTML-to-PDf converter ",(0,a.jsx)(n.code,{children:"prince"})," has extensive support for\nvarious PDF standards as well as tagging. E.g.:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pandoc --pdf-engine=prince \\\n       --pdf-engine-opt=--tagged-pdf ...\n"})}),"\n",(0,a.jsx)(n.p,{children:"See the prince documentation for more info."}),"\n",(0,a.jsx)(n.h2,{id:"word-processors",children:"Word Processors"}),"\n",(0,a.jsxs)(n.p,{children:["Word processors like LibreOffice and MS Word can also be used to\ngenerate standardized and tagged PDF output. Pandoc does not support\ndirect conversions via these tools. However, pandoc can convert a\ndocument to a ",(0,a.jsx)(n.code,{children:"docx"})," or ",(0,a.jsx)(n.code,{children:"odt"})," file, which can then be opened and\nconverted to PDF with the respective word processor. See the\ndocumentation for\n",(0,a.jsx)(n.a,{href:"https://support.microsoft.com/en-us/office/create-accessible-pdfs-064625e0-56ea-4e16-ad71-3aa33bb4b7ed",children:"Word"}),"\nand\n",(0,a.jsx)(n.a,{href:"https://help.libreoffice.org/7.1/en-US/text/shared/01/ref_pdf_export_general.html",children:"LibreOffice"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var a=t(7294);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);