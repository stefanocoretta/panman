"use strict";(self.webpackChunkpanman=self.webpackChunkpanman||[]).push([[980],{266:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var i=s(5893),t=s(1151);const d={},r="Extensions",o={id:"Extensions",title:"Extensions",description:"The behavior of some of the readers and writers can be adjusted by",source:"@site/docs/Extensions.md",sourceDirName:".",slug:"/Extensions",permalink:"/panman/Extensions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Templates",permalink:"/panman/Templates"},next:{title:"Pandoc\u2019s Markdown",permalink:"/panman/Pandocs Markdown"}},l={},a=[{value:"Typography",id:"typography",level:2},{value:"Extension: <code>smart</code>",id:"extension-smart",level:4},{value:"Headings and sections",id:"headings-and-sections",level:2},{value:"Extension: <code>auto_identifiers</code>",id:"extension-auto_identifiers",level:4},{value:"Extension: <code>ascii_identifiers</code>",id:"extension-ascii_identifiers",level:4},{value:"Extension: <code>gfm_auto_identifiers</code>",id:"extension-gfm_auto_identifiers",level:4},{value:"Math Input",id:"math-input",level:2},{value:"Raw HTML/TeX",id:"raw-htmltex",level:2},{value:"Literate Haskell support",id:"literate-haskell-support",level:2},{value:"Extension: <code>literate_haskell</code>",id:"extension-literate_haskell",level:4},{value:"Other extensions",id:"other-extensions",level:2},{value:"Extension: <code>empty_paragraphs</code>",id:"extension-empty_paragraphs",level:4},{value:"Extension: <code>native_numbering</code>",id:"extension-native_numbering",level:4},{value:"Extension: <code>xrefs_name</code>",id:"extension-xrefs_name",level:4},{value:"Extension: <code>xrefs_number</code>",id:"extension-xrefs_number",level:4},{value:"Extension: <code>styles</code>",id:"extension-styles",level:4},{value:"Extension: <code>amuse</code>",id:"extension-amuse",level:4},{value:"Extension: <code>raw_markdown</code>",id:"extension-raw_markdown",level:4},{value:"Extension: <code>citations</code>",id:"extension-citations",level:4},{value:"Extension: <code>fancy_lists</code>",id:"extension-fancy_lists",level:4},{value:"Extension: <code>element_citations</code>",id:"extension-element_citations",level:4},{value:"Extension: <code>ntb</code>",id:"extension-ntb",level:4},{value:"Extension: <code>tagging</code>",id:"extension-tagging",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"extensions",children:"Extensions"}),"\n",(0,i.jsx)(n.p,{children:"The behavior of some of the readers and writers can be adjusted by\nenabling or disabling various extensions."}),"\n",(0,i.jsxs)(n.p,{children:["An extension can be enabled by adding ",(0,i.jsx)(n.code,{children:"+EXTENSION"})," to the format name\nand disabled by adding ",(0,i.jsx)(n.code,{children:"-EXTENSION"}),". For example,\n",(0,i.jsx)(n.code,{children:"--from markdown_strict+footnotes"})," is strict Markdown with footnotes\nenabled, while ",(0,i.jsx)(n.code,{children:"--from markdown-footnotes-pipe_tables"})," is pandoc\u2019s\nMarkdown without footnotes or pipe tables."]}),"\n",(0,i.jsxs)(n.p,{children:["The markdown reader and writer make by far the most use of extensions.\nExtensions only used by them are therefore covered in the section\n",(0,i.jsx)(n.a,{href:"#pandocs-markdown",children:"Pandoc\u2019s Markdown"})," below (see ",(0,i.jsx)(n.a,{href:"#markdown-variants",children:"Markdown\nvariants"})," for ",(0,i.jsx)(n.code,{children:"commonmark"})," and ",(0,i.jsx)(n.code,{children:"gfm"}),"). In the\nfollowing, extensions that also work for other formats are covered."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that markdown extensions added to the ",(0,i.jsx)(n.code,{children:"ipynb"})," format affect\nMarkdown cells in Jupyter notebooks (as do command-line options like\n",(0,i.jsx)(n.code,{children:"--markdown-headings"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"typography",children:"Typography"}),"\n",(0,i.jsxs)(n.h4,{id:"extension-smart",children:["Extension: ",(0,i.jsx)(n.code,{children:"smart"})]}),"\n",(0,i.jsxs)(n.p,{children:["Interpret straight quotes as curly quotes, ",(0,i.jsx)(n.code,{children:"---"})," as em-dashes, ",(0,i.jsx)(n.code,{children:"--"})," as\nen-dashes, and ",(0,i.jsx)(n.code,{children:"..."})," as ellipses. Nonbreaking spaces are inserted after\ncertain abbreviations, such as \u201cMr.\u201d"]}),"\n",(0,i.jsx)(n.p,{children:"This extension can be enabled/disabled for the following formats:"}),"\n",(0,i.jsxs)(n.p,{children:["input formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"markdown"}),", ",(0,i.jsx)(n.code,{children:"commonmark"}),", ",(0,i.jsx)(n.code,{children:"latex"}),", ",(0,i.jsx)(n.code,{children:"mediawiki"}),", ",(0,i.jsx)(n.code,{children:"org"}),", ",(0,i.jsx)(n.code,{children:"rst"}),", ",(0,i.jsx)(n.code,{children:"twiki"}),",\n",(0,i.jsx)(n.code,{children:"html"})]}),"\n",(0,i.jsxs)(n.p,{children:["output formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"markdown"}),", ",(0,i.jsx)(n.code,{children:"latex"}),", ",(0,i.jsx)(n.code,{children:"context"}),", ",(0,i.jsx)(n.code,{children:"rst"})]}),"\n",(0,i.jsxs)(n.p,{children:["enabled by default in",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"markdown"}),", ",(0,i.jsx)(n.code,{children:"latex"}),", ",(0,i.jsx)(n.code,{children:"context"})," (both input and output)"]}),"\n",(0,i.jsxs)(n.p,{children:["Note: If you are ",(0,i.jsx)(n.em,{children:"writing"})," Markdown, then the ",(0,i.jsx)(n.code,{children:"smart"})," extension has the\nreverse effect: what would have been curly quotes comes out straight."]}),"\n",(0,i.jsxs)(n.p,{children:["In LaTeX, ",(0,i.jsx)(n.code,{children:"smart"})," means to use the standard TeX ligatures for quotation\nmarks (",(0,i.jsx)(n.code,{children:"``"})," and ",(0,i.jsx)(n.code,{children:"''"})," for double quotes, ",(0,i.jsx)(n.code,{children:"`"})," and ",(0,i.jsx)(n.code,{children:"'"})," for single\nquotes) and dashes (",(0,i.jsx)(n.code,{children:"--"})," for en-dash and ",(0,i.jsx)(n.code,{children:"---"})," for em-dash). If ",(0,i.jsx)(n.code,{children:"smart"}),"\nis disabled, then in reading LaTeX pandoc will parse these characters\nliterally. In writing LaTeX, enabling ",(0,i.jsx)(n.code,{children:"smart"})," tells pandoc to use the\nligatures when possible; if ",(0,i.jsx)(n.code,{children:"smart"})," is disabled pandoc will use unicode\nquotation mark and dash characters."]}),"\n",(0,i.jsx)(n.h2,{id:"headings-and-sections",children:"Headings and sections"}),"\n",(0,i.jsxs)(n.h4,{id:"extension-auto_identifiers",children:["Extension: ",(0,i.jsx)(n.code,{children:"auto_identifiers"})]}),"\n",(0,i.jsx)(n.p,{children:"A heading without an explicitly specified identifier will be\nautomatically assigned a unique identifier based on the heading text."}),"\n",(0,i.jsx)(n.p,{children:"This extension can be enabled/disabled for the following formats:"}),"\n",(0,i.jsxs)(n.p,{children:["input formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"markdown"}),", ",(0,i.jsx)(n.code,{children:"latex"}),", ",(0,i.jsx)(n.code,{children:"rst"}),", ",(0,i.jsx)(n.code,{children:"mediawiki"}),", ",(0,i.jsx)(n.code,{children:"textile"})]}),"\n",(0,i.jsxs)(n.p,{children:["output formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"markdown"}),", ",(0,i.jsx)(n.code,{children:"muse"})]}),"\n",(0,i.jsxs)(n.p,{children:["enabled by default in",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"markdown"}),", ",(0,i.jsx)(n.code,{children:"muse"})]}),"\n",(0,i.jsx)(n.p,{children:"The default algorithm used to derive the identifier from the heading\ntext is:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Remove all formatting, links, etc."}),"\n",(0,i.jsx)(n.li,{children:"Remove all footnotes."}),"\n",(0,i.jsx)(n.li,{children:"Remove all non-alphanumeric characters, except underscores, hyphens,\nand periods."}),"\n",(0,i.jsx)(n.li,{children:"Replace all spaces and newlines with hyphens."}),"\n",(0,i.jsx)(n.li,{children:"Convert all alphabetic characters to lowercase."}),"\n",(0,i.jsx)(n.li,{children:"Remove everything up to the first letter (identifiers may not begin\nwith a number or punctuation mark)."}),"\n",(0,i.jsxs)(n.li,{children:["If nothing is left after this, use the identifier ",(0,i.jsx)(n.code,{children:"section"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Thus, for example,"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{className:"header",children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Heading"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Identifier"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{className:"odd",children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Heading identifiers in HTML"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"heading-identifiers-in-html"})})]}),(0,i.jsxs)(n.tr,{className:"even",children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Ma\xeetre d'h\xf4tel"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"ma\xeetre-dh\xf4tel"})})]}),(0,i.jsxs)(n.tr,{className:"odd",children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"*Dogs*?--in *my* house?"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"dogs--in-my-house"})})]}),(0,i.jsxs)(n.tr,{className:"even",children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"[HTML], [S5], or [RTF]?"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"html-s5-or-rtf"})})]}),(0,i.jsxs)(n.tr,{className:"odd",children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"3. Applications"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"applications"})})]}),(0,i.jsxs)(n.tr,{className:"even",children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"33"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"section"})})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["These rules should, in most cases, allow one to determine the identifier\nfrom the heading text. The exception is when several headings have the\nsame text; in this case, the first will get an identifier as described\nabove; the second will get the same identifier with ",(0,i.jsx)(n.code,{children:"-1"})," appended; the\nthird with ",(0,i.jsx)(n.code,{children:"-2"}),"; and so on."]}),"\n",(0,i.jsxs)(n.p,{children:["(However, a different algorithm is used if ",(0,i.jsx)(n.code,{children:"gfm_auto_identifiers"})," is\nenabled; see below.)"]}),"\n",(0,i.jsxs)(n.p,{children:["These identifiers are used to provide link targets in the table of\ncontents generated by the ",(0,i.jsx)(n.code,{children:"--toc|--table-of-contents"})," option. They also\nmake it easy to provide links from one section of a document to another.\nA link to this section, for example, might look like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"See the section on\n[heading identifiers](#heading-identifiers-in-html-latex-and-context).\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note, however, that this method of providing links to sections works\nonly in HTML, LaTeX, and ConTeXt formats."}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"--section-divs"})," option is specified, then each section will be\nwrapped in a ",(0,i.jsx)(n.code,{children:"section"})," (or a ",(0,i.jsx)(n.code,{children:"div"}),", if ",(0,i.jsx)(n.code,{children:"html4"})," was specified), and the\nidentifier will be attached to the enclosing ",(0,i.jsx)(n.code,{children:"<section>"})," (or ",(0,i.jsx)(n.code,{children:"<div>"}),")\ntag rather than the heading itself. This allows entire sections to be\nmanipulated using JavaScript or treated differently in CSS."]}),"\n",(0,i.jsxs)(n.h4,{id:"extension-ascii_identifiers",children:["Extension: ",(0,i.jsx)(n.code,{children:"ascii_identifiers"})]}),"\n",(0,i.jsxs)(n.p,{children:["Causes the identifiers produced by ",(0,i.jsx)(n.code,{children:"auto_identifiers"})," to be pure ASCII.\nAccents are stripped off of accented Latin letters, and non-Latin\nletters are omitted."]}),"\n",(0,i.jsxs)(n.h4,{id:"extension-gfm_auto_identifiers",children:["Extension: ",(0,i.jsx)(n.code,{children:"gfm_auto_identifiers"})]}),"\n",(0,i.jsxs)(n.p,{children:["Changes the algorithm used by ",(0,i.jsx)(n.code,{children:"auto_identifiers"})," to conform to GitHub\u2019s\nmethod. Spaces are converted to dashes (",(0,i.jsx)(n.code,{children:"-"}),"), uppercase characters to\nlowercase characters, and punctuation characters other than ",(0,i.jsx)(n.code,{children:"-"})," and ",(0,i.jsx)(n.code,{children:"_"}),"\nare removed. Emojis are replaced by their names."]}),"\n",(0,i.jsx)(n.h2,{id:"math-input",children:"Math Input"}),"\n",(0,i.jsxs)(n.p,{children:["The extensions ",(0,i.jsx)(n.a,{href:"#extension-tex_math_dollars",children:(0,i.jsx)(n.code,{children:"tex_math_dollars"})}),",\n",(0,i.jsx)(n.a,{href:"#extension-tex_math_gfm",children:(0,i.jsx)(n.code,{children:"tex_math_gfm"})}),",\n",(0,i.jsx)(n.a,{href:"#extension-tex_math_single_backslash",children:(0,i.jsx)(n.code,{children:"tex_math_single_backslash"})}),", and\n",(0,i.jsx)(n.a,{href:"#extension-tex_math_double_backslash",children:(0,i.jsx)(n.code,{children:"tex_math_double_backslash"})})," are\ndescribed in the section about Pandoc\u2019s Markdown."]}),"\n",(0,i.jsx)(n.p,{children:"However, they can also be used with HTML input. This is handy for\nreading web pages formatted using MathJax, for example."}),"\n",(0,i.jsx)(n.h2,{id:"raw-htmltex",children:"Raw HTML/TeX"}),"\n",(0,i.jsxs)(n.p,{children:["The following extensions are described in more detail in their\nrespective sections of ",(0,i.jsx)(n.a,{href:"#pandocs-markdown",children:"Pandoc\u2019s Markdown"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#extension-raw_html",children:(0,i.jsx)(n.code,{children:"raw_html"})})," allows HTML elements which are not\nrepresentable in pandoc\u2019s AST to be parsed as raw HTML. By default,\nthis is disabled for HTML input."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#extension-raw_tex",children:(0,i.jsx)(n.code,{children:"raw_tex"})})," allows raw LaTeX, TeX, and ConTeXt to\nbe included in a document. This extension can be enabled/disabled for\nthe following formats (in addition to ",(0,i.jsx)(n.code,{children:"markdown"}),"):"]}),"\n",(0,i.jsxs)(n.p,{children:["input formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"latex"}),", ",(0,i.jsx)(n.code,{children:"textile"}),", ",(0,i.jsx)(n.code,{children:"html"})," (environments, ",(0,i.jsx)(n.code,{children:"\\ref"}),", and ",(0,i.jsx)(n.code,{children:"\\eqref"})," only),\n",(0,i.jsx)(n.code,{children:"ipynb"})]}),"\n",(0,i.jsxs)(n.p,{children:["output formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"textile"}),", ",(0,i.jsx)(n.code,{children:"commonmark"})]}),"\n",(0,i.jsxs)(n.p,{children:["Note: as applied to ",(0,i.jsx)(n.code,{children:"ipynb"}),", ",(0,i.jsx)(n.code,{children:"raw_html"})," and ",(0,i.jsx)(n.code,{children:"raw_tex"})," affect not only\nraw TeX in markdown cells, but data with mime type ",(0,i.jsx)(n.code,{children:"text/html"})," in\noutput cells. Since the ",(0,i.jsx)(n.code,{children:"ipynb"})," reader attempts to preserve the\nrichest possible outputs when several options are given, you will get\nbest results if you disable ",(0,i.jsx)(n.code,{children:"raw_html"})," and ",(0,i.jsx)(n.code,{children:"raw_tex"})," when converting\nto formats like ",(0,i.jsx)(n.code,{children:"docx"})," which don\u2019t allow raw ",(0,i.jsx)(n.code,{children:"html"})," or ",(0,i.jsx)(n.code,{children:"tex"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#extension-native_divs",children:(0,i.jsx)(n.code,{children:"native_divs"})})," causes HTML ",(0,i.jsx)(n.code,{children:"div"})," elements to\nbe parsed as native pandoc Div blocks. If you want them to be parsed\nas raw HTML, use ",(0,i.jsx)(n.code,{children:"-f html-native_divs+raw_html"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#extension-native_spans",children:(0,i.jsx)(n.code,{children:"native_spans"})})," causes HTML ",(0,i.jsx)(n.code,{children:"span"})," elements\nto be parsed as native pandoc Span inlines. If you want them to be\nparsed as raw HTML, use ",(0,i.jsx)(n.code,{children:"-f html-native_spans+raw_html"}),". If you want\nto drop all ",(0,i.jsx)(n.code,{children:"div"}),"s and ",(0,i.jsx)(n.code,{children:"span"}),"s when converting HTML to Markdown, you\ncan use ",(0,i.jsx)(n.code,{children:"pandoc -f html-native_divs-native_spans -t markdown"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"literate-haskell-support",children:"Literate Haskell support"}),"\n",(0,i.jsxs)(n.h4,{id:"extension-literate_haskell",children:["Extension: ",(0,i.jsx)(n.code,{children:"literate_haskell"})]}),"\n",(0,i.jsx)(n.p,{children:"Treat the document as literate Haskell source."}),"\n",(0,i.jsx)(n.p,{children:"This extension can be enabled/disabled for the following formats:"}),"\n",(0,i.jsxs)(n.p,{children:["input formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"markdown"}),", ",(0,i.jsx)(n.code,{children:"rst"}),", ",(0,i.jsx)(n.code,{children:"latex"})]}),"\n",(0,i.jsxs)(n.p,{children:["output formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"markdown"}),", ",(0,i.jsx)(n.code,{children:"rst"}),", ",(0,i.jsx)(n.code,{children:"latex"}),", ",(0,i.jsx)(n.code,{children:"html"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you append ",(0,i.jsx)(n.code,{children:"+lhs"})," (or ",(0,i.jsx)(n.code,{children:"+literate_haskell"}),") to one of the formats\nabove, pandoc will treat the document as literate Haskell source. This\nmeans that"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In Markdown input, \u201cbird track\u201d sections will be parsed as Haskell\ncode rather than block quotations. Text between ",(0,i.jsx)(n.code,{children:"\\begin{code}"})," and\n",(0,i.jsx)(n.code,{children:"\\end{code}"})," will also be treated as Haskell code. For ATX-style\nheadings the character \u2018=\u2019 will be used instead of \u2018#\u2019."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In Markdown output, code blocks with classes ",(0,i.jsx)(n.code,{children:"haskell"})," and ",(0,i.jsx)(n.code,{children:"literate"}),"\nwill be rendered using bird tracks, and block quotations will be\nindented one space, so they will not be treated as Haskell code. In\naddition, headings will be rendered setext-style (with underlines)\nrather than ATX-style (with \u2018#\u2019 characters). (This is because ghc\ntreats \u2018#\u2019 characters in column 1 as introducing line numbers.)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In restructured text input, \u201cbird track\u201d sections will be parsed as\nHaskell code."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In restructured text output, code blocks with class ",(0,i.jsx)(n.code,{children:"haskell"})," will be\nrendered using bird tracks."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In LaTeX input, text in ",(0,i.jsx)(n.code,{children:"code"})," environments will be parsed as Haskell\ncode."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In LaTeX output, code blocks with class ",(0,i.jsx)(n.code,{children:"haskell"})," will be rendered\ninside ",(0,i.jsx)(n.code,{children:"code"})," environments."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In HTML output, code blocks with class ",(0,i.jsx)(n.code,{children:"haskell"})," will be rendered with\nclass ",(0,i.jsx)(n.code,{children:"literatehaskell"})," and bird tracks."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pandoc -f markdown+lhs -t html\n"})}),"\n",(0,i.jsx)(n.p,{children:"reads literate Haskell source formatted with Markdown conventions and\nwrites ordinary HTML (without bird tracks)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pandoc -f markdown+lhs -t html+lhs\n"})}),"\n",(0,i.jsx)(n.p,{children:"writes HTML with the Haskell code in bird tracks, so it can be copied\nand pasted as literate Haskell source."}),"\n",(0,i.jsx)(n.p,{children:"Note that GHC expects the bird tracks in the first column, so indented\nliterate code blocks (e.g.\xa0inside an itemized environment) will not be\npicked up by the Haskell compiler."}),"\n",(0,i.jsx)(n.h2,{id:"other-extensions",children:"Other extensions"}),"\n",(0,i.jsxs)(n.h4,{id:"extension-empty_paragraphs",children:["Extension: ",(0,i.jsx)(n.code,{children:"empty_paragraphs"})]}),"\n",(0,i.jsx)(n.p,{children:"Allows empty paragraphs. By default empty paragraphs are omitted."}),"\n",(0,i.jsx)(n.p,{children:"This extension can be enabled/disabled for the following formats:"}),"\n",(0,i.jsxs)(n.p,{children:["input formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"docx"}),", ",(0,i.jsx)(n.code,{children:"html"})]}),"\n",(0,i.jsxs)(n.p,{children:["output formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"docx"}),", ",(0,i.jsx)(n.code,{children:"odt"}),", ",(0,i.jsx)(n.code,{children:"opendocument"}),", ",(0,i.jsx)(n.code,{children:"html"})]}),"\n",(0,i.jsxs)(n.h4,{id:"extension-native_numbering",children:["Extension: ",(0,i.jsx)(n.code,{children:"native_numbering"})]}),"\n",(0,i.jsx)(n.p,{children:"Enables native numbering of figures and tables. Enumeration starts at 1."}),"\n",(0,i.jsx)(n.p,{children:"This extension can be enabled/disabled for the following formats:"}),"\n",(0,i.jsxs)(n.p,{children:["output formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"odt"}),", ",(0,i.jsx)(n.code,{children:"opendocument"}),", ",(0,i.jsx)(n.code,{children:"docx"})]}),"\n",(0,i.jsxs)(n.h4,{id:"extension-xrefs_name",children:["Extension: ",(0,i.jsx)(n.code,{children:"xrefs_name"})]}),"\n",(0,i.jsxs)(n.p,{children:["Links to headings, figures and tables inside the document are\nsubstituted with cross-references that will use the name or caption of\nthe referenced item. The original link text is replaced once the\ngenerated document is refreshed. This extension can be combined with\n",(0,i.jsx)(n.code,{children:"xrefs_number"})," in which case numbers will appear before the name."]}),"\n",(0,i.jsx)(n.p,{children:"Text in cross-references is only made consistent with the referenced\nitem once the document has been refreshed."}),"\n",(0,i.jsx)(n.p,{children:"This extension can be enabled/disabled for the following formats:"}),"\n",(0,i.jsxs)(n.p,{children:["output formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"odt"}),", ",(0,i.jsx)(n.code,{children:"opendocument"})]}),"\n",(0,i.jsxs)(n.h4,{id:"extension-xrefs_number",children:["Extension: ",(0,i.jsx)(n.code,{children:"xrefs_number"})]}),"\n",(0,i.jsxs)(n.p,{children:["Links to headings, figures and tables inside the document are\nsubstituted with cross-references that will use the number of the\nreferenced item. The original link text is discarded. This extension can\nbe combined with ",(0,i.jsx)(n.code,{children:"xrefs_name"})," in which case the name or caption numbers\nwill appear after the number."]}),"\n",(0,i.jsxs)(n.p,{children:["For the ",(0,i.jsx)(n.code,{children:"xrefs_number"})," to be useful heading numbers must be enabled in\nthe generated document, also table and figure captions must be enabled\nusing for example the ",(0,i.jsx)(n.code,{children:"native_numbering"})," extension."]}),"\n",(0,i.jsx)(n.p,{children:"Numbers in cross-references are only visible in the final document once\nit has been refreshed."}),"\n",(0,i.jsx)(n.p,{children:"This extension can be enabled/disabled for the following formats:"}),"\n",(0,i.jsxs)(n.p,{children:["output formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"odt"}),", ",(0,i.jsx)(n.code,{children:"opendocument"})]}),"\n",(0,i.jsxs)(n.h4,{id:"extension-styles",children:["Extension: ",(0,i.jsx)(n.code,{children:"styles"})]}),"\n",(0,i.jsxs)(n.p,{children:["When converting from docx, read all docx styles as divs (for paragraph\nstyles) and spans (for character styles) regardless of whether pandoc\nunderstands the meaning of these styles. This can be used with ",(0,i.jsx)(n.a,{href:"#custom-styles",children:"docx\ncustom styles"}),". Disabled by default."]}),"\n",(0,i.jsxs)(n.p,{children:["input formats",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"docx"})]}),"\n",(0,i.jsxs)(n.h4,{id:"extension-amuse",children:["Extension: ",(0,i.jsx)(n.code,{children:"amuse"})]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"muse"})," input format, this enables Text::Amuse extensions to Emacs\nMuse markup."]}),"\n",(0,i.jsxs)(n.h4,{id:"extension-raw_markdown",children:["Extension: ",(0,i.jsx)(n.code,{children:"raw_markdown"})]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"ipynb"})," input format, this causes Markdown cells to be included\nas raw Markdown blocks (allowing lossless round-tripping) rather than\nbeing parsed. Use this only when you are targeting ",(0,i.jsx)(n.code,{children:"ipynb"})," or a\nmarkdown-based output format."]}),"\n",(0,i.jsxs)(n.h4,{id:"extension-citations",children:["Extension: ",(0,i.jsx)(n.code,{children:"citations"})]}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"citations"})," extension is enabled in ",(0,i.jsx)(n.code,{children:"org"}),", org-cite and org-ref\nstyle citations will be parsed as native pandoc citations."]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"citations"})," is enabled in ",(0,i.jsx)(n.code,{children:"docx"}),", citations inserted by Zotero or\nMendeley or EndNote plugins will be parsed as native pandoc citations.\n(Otherwise, the formatted citations generated by the bibliographic\nsoftware will be parsed as regular text.)"]}),"\n",(0,i.jsxs)(n.h4,{id:"extension-fancy_lists",children:["Extension: ",(0,i.jsx)(n.code,{children:"fancy_lists"})]}),"\n",(0,i.jsxs)(n.p,{children:["Some aspects of ",(0,i.jsx)(n.a,{href:"#extension-fancy_lists",children:"Pandoc\u2019s Markdown fancy lists"}),"\nare also accepted in ",(0,i.jsx)(n.code,{children:"org"})," input, mimicking the option\n",(0,i.jsx)(n.code,{children:"org-list-allow-alphabetical"})," in Emacs. As in Org Mode, enabling this\nextension allows lowercase and uppercase alphabetical markers for\nordered lists to be parsed in addition to arabic ones. Note that for\nOrg, this does not include roman numerals or the ",(0,i.jsx)(n.code,{children:"#"})," placeholder that\nare enabled by the extension in Pandoc\u2019s Markdown."]}),"\n",(0,i.jsxs)(n.h4,{id:"extension-element_citations",children:["Extension: ",(0,i.jsx)(n.code,{children:"element_citations"})]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"jats"})," output formats, this causes reference items to be replaced\nwith ",(0,i.jsx)(n.code,{children:"<element-citation>"})," elements. These elements are not influenced by\nCSL styles, but all information on the item is included in tags."]}),"\n",(0,i.jsxs)(n.h4,{id:"extension-ntb",children:["Extension: ",(0,i.jsx)(n.code,{children:"ntb"})]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"context"})," output format this enables the use of ",(0,i.jsx)(n.a,{href:"https://wiki.contextgarden.net/TABLE",children:"Natural Tables\n(TABLE)"})," instead of the default\n",(0,i.jsx)(n.a,{href:"https://wiki.contextgarden.net/xtables",children:"Extreme Tables (xtables)"}),".\nNatural tables allow more fine-grained global customization but come at\na performance penalty compared to extreme tables."]}),"\n",(0,i.jsxs)(n.h4,{id:"extension-tagging",children:["Extension: ",(0,i.jsx)(n.code,{children:"tagging"})]}),"\n",(0,i.jsxs)(n.p,{children:["Enabling this extension with ",(0,i.jsx)(n.code,{children:"context"})," output will produce markup\nsuitable for the production of tagged PDFs. This includes additional\nmarkers for paragraphs and alternative markup for emphasized text. The\n",(0,i.jsx)(n.code,{children:"emphasis-command"})," template variable is set if the extension is enabled."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var i=s(7294);const t={},d=i.createContext(t);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);