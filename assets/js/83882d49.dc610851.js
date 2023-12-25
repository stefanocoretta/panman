"use strict";(self.webpackChunkpanman=self.webpackChunkpanman||[]).push([[870],{1377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var r=t(5893),s=t(1151);const d={},i="EPUBs",c={id:"EPUBs",title:"EPUBs",description:"EPUB Metadata",source:"@site/docs/EPUBs.md",sourceDirName:".",slug:"/EPUBs",permalink:"/EPUBs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Slide shows",permalink:"/Slide shows"},next:{title:"Chunked HTML",permalink:"/Chunked HTML"}},l={},o=[{value:"EPUB Metadata",id:"epub-metadata",level:2},{value:"The <code>epub:type</code> attribute",id:"the-epubtype-attribute",level:2},{value:"Linked media",id:"linked-media",level:2},{value:"EPUB styling",id:"epub-styling",level:2}];function a(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"epubs",children:"EPUBs"}),"\n",(0,r.jsx)(n.h2,{id:"epub-metadata",children:"EPUB Metadata"}),"\n",(0,r.jsxs)(n.p,{children:["EPUB metadata may be specified using the ",(0,r.jsx)(n.code,{children:"--epub-metadata"})," option, but\nif the source document is Markdown, it is better to use a ",(0,r.jsx)(n.a,{href:"#extension-yaml_metadata_block",children:"YAML metadata\nblock"}),". Here is an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"---\ntitle:\n- type: main\n  text: My Book\n- type: subtitle\n  text: An investigation of metadata\ncreator:\n- role: author\n  text: John Smith\n- role: editor\n  text: Sarah Jones\nidentifier:\n- scheme: DOI\n  text: doi:10.234234.234/33\npublisher:  My Press\nrights: \xa9 2007 John Smith, CC BY-NC\nibooks:\n  version: 1.3.4\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"The following fields are recognized:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"identifier"}),(0,r.jsx)(n.br,{}),"\nEither a string value or an object with fields ",(0,r.jsx)(n.code,{children:"text"})," and ",(0,r.jsx)(n.code,{children:"scheme"}),".\nValid values for ",(0,r.jsx)(n.code,{children:"scheme"})," are ",(0,r.jsx)(n.code,{children:"ISBN-10"}),", ",(0,r.jsx)(n.code,{children:"GTIN-13"}),", ",(0,r.jsx)(n.code,{children:"UPC"}),", ",(0,r.jsx)(n.code,{children:"ISMN-10"}),",\n",(0,r.jsx)(n.code,{children:"DOI"}),", ",(0,r.jsx)(n.code,{children:"LCCN"}),", ",(0,r.jsx)(n.code,{children:"GTIN-14"}),", ",(0,r.jsx)(n.code,{children:"ISBN-13"}),", ",(0,r.jsx)(n.code,{children:"Legal deposit number"}),", ",(0,r.jsx)(n.code,{children:"URN"}),",\n",(0,r.jsx)(n.code,{children:"OCLC"}),", ",(0,r.jsx)(n.code,{children:"ISMN-13"}),", ",(0,r.jsx)(n.code,{children:"ISBN-A"}),", ",(0,r.jsx)(n.code,{children:"JP"}),", ",(0,r.jsx)(n.code,{children:"OLCC"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"title"}),(0,r.jsx)(n.br,{}),"\nEither a string value, or an object with fields ",(0,r.jsx)(n.code,{children:"file-as"})," and ",(0,r.jsx)(n.code,{children:"type"}),", or\na list of such objects. Valid values for ",(0,r.jsx)(n.code,{children:"type"})," are ",(0,r.jsx)(n.code,{children:"main"}),", ",(0,r.jsx)(n.code,{children:"subtitle"}),",\n",(0,r.jsx)(n.code,{children:"short"}),", ",(0,r.jsx)(n.code,{children:"collection"}),", ",(0,r.jsx)(n.code,{children:"edition"}),", ",(0,r.jsx)(n.code,{children:"extended"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"creator"}),(0,r.jsx)(n.br,{}),"\nEither a string value, or an object with fields ",(0,r.jsx)(n.code,{children:"role"}),", ",(0,r.jsx)(n.code,{children:"file-as"}),", and\n",(0,r.jsx)(n.code,{children:"text"}),", or a list of such objects. Valid values for ",(0,r.jsx)(n.code,{children:"role"})," are ",(0,r.jsx)(n.a,{href:"https://loc.gov/marc/relators/relaterm.html",children:"MARC\nrelators"}),", but pandoc will\nattempt to translate the human-readable versions (like \u201cauthor\u201d and\n\u201ceditor\u201d) to the appropriate marc relators."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"contributor"}),(0,r.jsx)(n.br,{}),"\nSame format as ",(0,r.jsx)(n.code,{children:"creator"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"date"}),(0,r.jsx)(n.br,{}),"\nA string value in ",(0,r.jsx)(n.code,{children:"YYYY-MM-DD"})," format. (Only the year is necessary.)\nPandoc will attempt to convert other common date formats."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"lang"})," (or legacy: ",(0,r.jsx)(n.code,{children:"language"}),")",(0,r.jsx)(n.br,{}),"\nA string value in ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/bcp47",children:"BCP 47"})," format.\nPandoc will default to the local language if nothing is specified."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"subject"}),(0,r.jsx)(n.br,{}),"\nEither a string value, or an object with fields ",(0,r.jsx)(n.code,{children:"text"}),", ",(0,r.jsx)(n.code,{children:"authority"}),", and\n",(0,r.jsx)(n.code,{children:"term"}),", or a list of such objects. Valid values for ",(0,r.jsx)(n.code,{children:"authority"})," are\neither a ",(0,r.jsx)(n.a,{href:"https://idpf.github.io/epub-registries/authorities/",children:"reserved authority\nvalue"})," (currently\n",(0,r.jsx)(n.code,{children:"AAT"}),", ",(0,r.jsx)(n.code,{children:"BIC"}),", ",(0,r.jsx)(n.code,{children:"BISAC"}),", ",(0,r.jsx)(n.code,{children:"CLC"}),", ",(0,r.jsx)(n.code,{children:"DDC"}),", ",(0,r.jsx)(n.code,{children:"CLIL"}),", ",(0,r.jsx)(n.code,{children:"EuroVoc"}),", ",(0,r.jsx)(n.code,{children:"MEDTOP"}),",\n",(0,r.jsx)(n.code,{children:"LCSH"}),", ",(0,r.jsx)(n.code,{children:"NDC"}),", ",(0,r.jsx)(n.code,{children:"Thema"}),", ",(0,r.jsx)(n.code,{children:"UDC"}),", and ",(0,r.jsx)(n.code,{children:"WGS"}),") or an absolute IRI identifying\na custom scheme. Valid values for ",(0,r.jsx)(n.code,{children:"term"})," are defined by the scheme."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"description"}),(0,r.jsx)(n.br,{}),"\nA string value."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"type"}),(0,r.jsx)(n.br,{}),"\nA string value."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"format"}),(0,r.jsx)(n.br,{}),"\nA string value."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"relation"}),(0,r.jsx)(n.br,{}),"\nA string value."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"coverage"}),(0,r.jsx)(n.br,{}),"\nA string value."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"rights"}),(0,r.jsx)(n.br,{}),"\nA string value."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"belongs-to-collection"}),(0,r.jsx)(n.br,{}),"\nA string value. Identifies the name of a collection to which the EPUB\nPublication belongs."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"group-position"}),(0,r.jsx)(n.br,{}),"\nThe ",(0,r.jsx)(n.code,{children:"group-position"})," field indicates the numeric position in which the\nEPUB Publication belongs relative to other works belonging to the same\n",(0,r.jsx)(n.code,{children:"belongs-to-collection"})," field."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"cover-image"}),(0,r.jsx)(n.br,{}),"\nA string value (path to cover image)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"css"})," (or legacy: ",(0,r.jsx)(n.code,{children:"stylesheet"}),")",(0,r.jsx)(n.br,{}),"\nA string value (path to CSS stylesheet)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"page-progression-direction"}),(0,r.jsx)(n.br,{}),"\nEither ",(0,r.jsx)(n.code,{children:"ltr"})," or ",(0,r.jsx)(n.code,{children:"rtl"}),". Specifies the ",(0,r.jsx)(n.code,{children:"page-progression-direction"}),"\nattribute for the ",(0,r.jsxs)(n.a,{href:"http://idpf.org/epub/301/spec/epub-publications.html#sec-spine-elem",children:[(0,r.jsx)(n.code,{children:"spine"}),"\nelement"]}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ibooks"}),(0,r.jsx)(n.br,{}),"\niBooks-specific metadata, with the following fields:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"version"}),": (string)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"specified-fonts"}),": ",(0,r.jsx)(n.code,{children:"true"}),"|",(0,r.jsx)(n.code,{children:"false"})," (default ",(0,r.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ipad-orientation-lock"}),": ",(0,r.jsx)(n.code,{children:"portrait-only"}),"|",(0,r.jsx)(n.code,{children:"landscape-only"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"iphone-orientation-lock"}),": ",(0,r.jsx)(n.code,{children:"portrait-only"}),"|",(0,r.jsx)(n.code,{children:"landscape-only"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"binding"}),": ",(0,r.jsx)(n.code,{children:"true"}),"|",(0,r.jsx)(n.code,{children:"false"})," (default ",(0,r.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"scroll-axis"}),": ",(0,r.jsx)(n.code,{children:"vertical"}),"|",(0,r.jsx)(n.code,{children:"horizontal"}),"|",(0,r.jsx)(n.code,{children:"default"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"the-epubtype-attribute",children:["The ",(0,r.jsx)(n.code,{children:"epub:type"})," attribute"]}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"epub3"})," output, you can mark up the heading that corresponds to an\nEPUB chapter using the ",(0,r.jsxs)(n.a,{href:"http://www.idpf.org/epub/31/spec/epub-contentdocs.html#sec-epub-type-attribute",children:[(0,r.jsx)(n.code,{children:"epub:type"}),"\nattribute"]}),".\nFor example, to set the attribute to the value ",(0,r.jsx)(n.code,{children:"prologue"}),", use this\nmarkdown:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# My chapter {epub:type=prologue}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Which will result in:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<body epub:type="frontmatter">\n  <section epub:type="prologue">\n    <h1>My chapter</h1>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Pandoc will output ",(0,r.jsx)(n.code,{children:'<body epub:type="bodymatter">'}),", unless you use one\nof the following values, in which case either ",(0,r.jsx)(n.code,{children:"frontmatter"})," or\n",(0,r.jsx)(n.code,{children:"backmatter"})," will be output."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{className:"header",children:[(0,r.jsxs)(n.th,{children:[(0,r.jsx)(n.code,{children:"epub:type"})," of first section"]}),(0,r.jsxs)(n.th,{children:[(0,r.jsx)(n.code,{children:"epub:type"})," of body"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{className:"odd",children:[(0,r.jsx)(n.td,{children:"prologue"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"even",children:[(0,r.jsx)(n.td,{children:"abstract"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"odd",children:[(0,r.jsx)(n.td,{children:"acknowledgments"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"even",children:[(0,r.jsx)(n.td,{children:"copyright-page"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"odd",children:[(0,r.jsx)(n.td,{children:"dedication"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"even",children:[(0,r.jsx)(n.td,{children:"credits"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"odd",children:[(0,r.jsx)(n.td,{children:"keywords"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"even",children:[(0,r.jsx)(n.td,{children:"imprint"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"odd",children:[(0,r.jsx)(n.td,{children:"contributors"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"even",children:[(0,r.jsx)(n.td,{children:"other-credits"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"odd",children:[(0,r.jsx)(n.td,{children:"errata"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"even",children:[(0,r.jsx)(n.td,{children:"revision-history"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"odd",children:[(0,r.jsx)(n.td,{children:"titlepage"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"even",children:[(0,r.jsx)(n.td,{children:"halftitlepage"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"odd",children:[(0,r.jsx)(n.td,{children:"seriespage"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"even",children:[(0,r.jsx)(n.td,{children:"foreword"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"odd",children:[(0,r.jsx)(n.td,{children:"preface"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"even",children:[(0,r.jsx)(n.td,{children:"frontispiece"}),(0,r.jsx)(n.td,{children:"frontmatter"})]}),(0,r.jsxs)(n.tr,{className:"odd",children:[(0,r.jsx)(n.td,{children:"appendix"}),(0,r.jsx)(n.td,{children:"backmatter"})]}),(0,r.jsxs)(n.tr,{className:"even",children:[(0,r.jsx)(n.td,{children:"colophon"}),(0,r.jsx)(n.td,{children:"backmatter"})]}),(0,r.jsxs)(n.tr,{className:"odd",children:[(0,r.jsx)(n.td,{children:"bibliography"}),(0,r.jsx)(n.td,{children:"backmatter"})]}),(0,r.jsxs)(n.tr,{className:"even",children:[(0,r.jsx)(n.td,{children:"index"}),(0,r.jsx)(n.td,{children:"backmatter"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"linked-media",children:"Linked media"}),"\n",(0,r.jsxs)(n.p,{children:["By default, pandoc will download media referenced from any ",(0,r.jsx)(n.code,{children:"<img>"}),",\n",(0,r.jsx)(n.code,{children:"<audio>"}),", ",(0,r.jsx)(n.code,{children:"<video>"})," or ",(0,r.jsx)(n.code,{children:"<source>"})," element present in the generated\nEPUB, and include it in the EPUB container, yielding a completely\nself-contained EPUB. If you want to link to external media resources\ninstead, use raw HTML in your source and add ",(0,r.jsx)(n.code,{children:'data-external="1"'})," to the\ntag with the ",(0,r.jsx)(n.code,{children:"src"})," attribute. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<audio controls="1">\n  <source src="https://example.com/music/toccata.mp3"\n          data-external="1" type="audio/mpeg">\n  </source>\n</audio>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If the input format already is HTML then ",(0,r.jsx)(n.code,{children:'data-external="1"'})," will work\nas expected for ",(0,r.jsx)(n.code,{children:"<img>"})," elements. Similarly, for Markdown, external\nimages can be declared with ",(0,r.jsx)(n.code,{children:"![img](url){external=1}"}),". Note that this\nonly works for images; the other media elements have no native\nrepresentation in pandoc\u2019s AST and require the use of raw HTML."]}),"\n",(0,r.jsx)(n.h2,{id:"epub-styling",children:"EPUB styling"}),"\n",(0,r.jsxs)(n.p,{children:["By default, pandoc will include some basic styling contained in its\n",(0,r.jsx)(n.code,{children:"epub.css"})," data file. (To see this, use\n",(0,r.jsx)(n.code,{children:"pandoc --print-default-data-file epub.css"}),".) To use a different CSS\nfile, just use the ",(0,r.jsx)(n.code,{children:"--css"})," command line option. A few inline styles are\ndefined in addition; these are essential for correct formatting of\npandoc\u2019s HTML output."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"document-css"})," variable may be set if the more opinionated styling\nof pandoc\u2019s default HTML templates is desired (and in that case the\nvariables defined in ",(0,r.jsx)(n.a,{href:"#variables-for-html",children:"Variables for HTML"})," may be\nused to fine-tune the style)."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(7294);const s={},d=r.createContext(s);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);