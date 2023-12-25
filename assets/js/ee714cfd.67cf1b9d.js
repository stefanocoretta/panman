"use strict";(self.webpackChunkpanman=self.webpackChunkpanman||[]).push([[348],{955:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>r});var s=i(5893),t=i(1151);const l={},a="Slide shows",d={id:"Slide shows",title:"Slide shows",description:"You can use pandoc to produce an HTML + JavaScript slide presentation",source:"@site/docs/Slide shows.md",sourceDirName:".",slug:"/Slide shows",permalink:"/panman/Slide shows",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Citations",permalink:"/panman/Citations"},next:{title:"EPUBs",permalink:"/panman/EPUBs"}},o={},r=[{value:"Structuring the slide show",id:"structuring-the-slide-show",level:2},{value:"PowerPoint layout choice",id:"powerpoint-layout-choice",level:3},{value:"Incremental lists",id:"incremental-lists",level:2},{value:"Inserting pauses",id:"inserting-pauses",level:2},{value:"Styling the slides",id:"styling-the-slides",level:2},{value:"Speaker notes",id:"speaker-notes",level:2},{value:"Columns",id:"columns",level:2},{value:"Additional columns attributes in beamer",id:"additional-columns-attributes-in-beamer",level:3},{value:"Frame attributes in beamer",id:"frame-attributes-in-beamer",level:2},{value:"Background in reveal.js, beamer, and pptx",id:"background-in-revealjs-beamer-and-pptx",level:2},{value:"On all slides (beamer, reveal.js, pptx)",id:"on-all-slides-beamer-revealjs-pptx",level:3},{value:"<code>parallaxBackgroundImage</code> (reveal.js)",id:"parallaxbackgroundimage-revealjs",level:4},{value:"On individual slides (reveal.js, pptx)",id:"on-individual-slides-revealjs-pptx",level:3},{value:"On the title slide (reveal.js, pptx)",id:"on-the-title-slide-revealjs-pptx",level:3},{value:"Example (reveal.js)",id:"example-revealjs",level:3}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"slide-shows",children:"Slide shows"}),"\n",(0,s.jsxs)(n.p,{children:["You can use pandoc to produce an HTML + JavaScript slide presentation\nthat can be viewed via a web browser. There are five ways to do this,\nusing ",(0,s.jsx)(n.a,{href:"https://meyerweb.com/eric/tools/s5/",children:"S5"}),",\n",(0,s.jsx)(n.a,{href:"https://paulrouget.com/dzslides/",children:"DZSlides"}),",\n",(0,s.jsx)(n.a,{href:"https://www.w3.org/Talks/Tools/Slidy2/",children:"Slidy"}),",\n",(0,s.jsx)(n.a,{href:"https://goessner.net/articles/slideous/",children:"Slideous"}),", or\n",(0,s.jsx)(n.a,{href:"https://revealjs.com/",children:"reveal.js"}),". You can also produce a PDF slide\nshow using LaTeX ",(0,s.jsx)(n.a,{href:"https://ctan.org/pkg/beamer",children:(0,s.jsx)(n.code,{children:"beamer"})}),", or slide shows\nin Microsoft\n",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Microsoft_PowerPoint",children:"PowerPoint"})," format."]}),"\n",(0,s.jsxs)(n.p,{children:["Here\u2019s the Markdown source for a simple slide show, ",(0,s.jsx)(n.code,{children:"habits.txt"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"% Habits\n% John Doe\n% March 22, 2005\n\n# In the morning\n\n## Getting up\n\n- Turn off alarm\n- Get out of bed\n\n## Breakfast\n\n- Eat eggs\n- Drink coffee\n\n# In the evening\n\n## Dinner\n\n- Eat spaghetti\n- Drink wine\n\n------------------\n\n![picture of spaghetti](images/spaghetti.jpg)\n\n## Going to sleep\n\n- Get in bed\n- Count sheep\n"})}),"\n",(0,s.jsx)(n.p,{children:"To produce an HTML/JavaScript slide show, simply type"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pandoc -t FORMAT -s habits.txt -o habits.html\n"})}),"\n",(0,s.jsxs)(n.p,{children:["where ",(0,s.jsx)(n.code,{children:"FORMAT"})," is either ",(0,s.jsx)(n.code,{children:"s5"}),", ",(0,s.jsx)(n.code,{children:"slidy"}),", ",(0,s.jsx)(n.code,{children:"slideous"}),", ",(0,s.jsx)(n.code,{children:"dzslides"}),", or\n",(0,s.jsx)(n.code,{children:"revealjs"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For Slidy, Slideous, reveal.js, and S5, the file produced by pandoc with\nthe ",(0,s.jsx)(n.code,{children:"-s/--standalone"})," option embeds a link to JavaScript and CSS files,\nwhich are assumed to be available at the relative path ",(0,s.jsx)(n.code,{children:"s5/default"})," (for\nS5), ",(0,s.jsx)(n.code,{children:"slideous"})," (for Slideous), ",(0,s.jsx)(n.code,{children:"reveal.js"})," (for reveal.js), or at the\nSlidy website at ",(0,s.jsx)(n.code,{children:"w3.org"})," (for Slidy). (These paths can be changed by\nsetting the ",(0,s.jsx)(n.code,{children:"slidy-url"}),", ",(0,s.jsx)(n.code,{children:"slideous-url"}),", ",(0,s.jsx)(n.code,{children:"revealjs-url"}),", or ",(0,s.jsx)(n.code,{children:"s5-url"}),"\nvariables; see ",(0,s.jsx)(n.a,{href:"#variables-for-html-slides",children:"Variables for HTML slides"}),",\nabove.) For DZSlides, the (relatively short) JavaScript and CSS are\nincluded in the file by default."]}),"\n",(0,s.jsxs)(n.p,{children:["With all HTML slide formats, the ",(0,s.jsx)(n.code,{children:"--self-contained"})," option can be used\nto produce a single file that contains all of the data necessary to\ndisplay the slide show, including linked scripts, stylesheets, images,\nand videos."]}),"\n",(0,s.jsx)(n.p,{children:"To produce a PDF slide show using beamer, type"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pandoc -t beamer habits.txt -o habits.pdf\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that a reveal.js slide show can also be converted to a PDF by\nprinting it to a file from the browser."}),"\n",(0,s.jsx)(n.p,{children:"To produce a PowerPoint slide show, type"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pandoc habits.txt -o habits.pptx\n"})}),"\n",(0,s.jsx)(n.h2,{id:"structuring-the-slide-show",children:"Structuring the slide show"}),"\n",(0,s.jsxs)(n.p,{children:["By default, the ",(0,s.jsx)(n.em,{children:"slide level"})," is the highest heading level in the\nhierarchy that is followed immediately by content, and not another\nheading, somewhere in the document. In the example above, level-1\nheadings are always followed by level-2 headings, which are followed by\ncontent, so the slide level is 2. This default can be overridden using\nthe ",(0,s.jsx)(n.code,{children:"--slide-level"})," option."]}),"\n",(0,s.jsx)(n.p,{children:"The document is carved up into slides according to the following rules:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A horizontal rule always starts a new slide."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A heading at the slide level always starts a new slide."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Headings ",(0,s.jsx)(n.em,{children:"below"})," the slide level in the hierarchy create headings\n",(0,s.jsx)(n.em,{children:"within"})," a slide. (In beamer, a \u201cblock\u201d will be created. If the\nheading has the class ",(0,s.jsx)(n.code,{children:"example"}),", an ",(0,s.jsx)(n.code,{children:"exampleblock"})," environment will be\nused; if it has the class ",(0,s.jsx)(n.code,{children:"alert"}),", an ",(0,s.jsx)(n.code,{children:"alertblock"})," will be used;\notherwise a regular ",(0,s.jsx)(n.code,{children:"block"})," will be used.)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Headings ",(0,s.jsx)(n.em,{children:"above"})," the slide level in the hierarchy create \u201ctitle\nslides,\u201d which just contain the section title and help to break the\nslide show into sections. Non-slide content under these headings will\nbe included on the title slide (for HTML slide shows) or in a\nsubsequent slide with the same title (for beamer)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A title page is constructed automatically from the document\u2019s title\nblock, if present. (In the case of beamer, this can be disabled by\ncommenting out some lines in the default template.)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These rules are designed to support many different styles of slide show.\nIf you don\u2019t care about structuring your slides into sections and\nsubsections, you can either just use level-1 headings for all slides (in\nthat case, level 1 will be the slide level) or you can set\n",(0,s.jsx)(n.code,{children:"--slide-level=0"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note: in reveal.js slide shows, if slide level is 2, a two-dimensional\nlayout will be produced, with level-1 headings building horizontally and\nlevel-2 headings building vertically. It is not recommended that you use\ndeeper nesting of section levels with reveal.js unless you set\n",(0,s.jsx)(n.code,{children:"--slide-level=0"})," (which lets reveal.js produce a one-dimensional layout\nand only interprets horizontal rules as slide boundaries)."]}),"\n",(0,s.jsx)(n.h3,{id:"powerpoint-layout-choice",children:"PowerPoint layout choice"}),"\n",(0,s.jsx)(n.p,{children:"When creating slides, the pptx writer chooses from a number of\npre-defined layouts, based on the content of the slide:"}),"\n",(0,s.jsxs)(n.p,{children:["Title Slide",(0,s.jsx)(n.br,{}),"\nThis layout is used for the initial slide, which is generated and filled\nfrom the metadata fields ",(0,s.jsx)(n.code,{children:"date"}),", ",(0,s.jsx)(n.code,{children:"author"}),", and ",(0,s.jsx)(n.code,{children:"title"}),", if they are\npresent."]}),"\n",(0,s.jsxs)(n.p,{children:["Section Header",(0,s.jsx)(n.br,{}),"\nThis layout is used for what pandoc calls \u201ctitle slides\u201d, i.e. slides\nwhich start with a header which is above the slide level in the\nhierarchy."]}),"\n",(0,s.jsxs)(n.p,{children:["Two Content",(0,s.jsx)(n.br,{}),"\nThis layout is used for two-column slides, i.e.\xa0slides containing a div\nwith class ",(0,s.jsx)(n.code,{children:"columns"})," which contains at least two divs with class\n",(0,s.jsx)(n.code,{children:"column"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Comparison",(0,s.jsx)(n.br,{}),"\nThis layout is used instead of \u201cTwo Content\u201d for any two-column slides\nin which at least one column contains text followed by non-text (e.g.\xa0an\nimage or a table)."]}),"\n",(0,s.jsxs)(n.p,{children:["Content with Caption",(0,s.jsx)(n.br,{}),"\nThis layout is used for any non-two-column slides which contain text\nfollowed by non-text (e.g.\xa0an image or a table)."]}),"\n",(0,s.jsxs)(n.p,{children:["Blank",(0,s.jsx)(n.br,{}),"\nThis layout is used for any slides which only contain blank content,\ne.g.\xa0a slide containing only speaker notes, or a slide containing only a\nnon-breaking space."]}),"\n",(0,s.jsxs)(n.p,{children:["Title and Content",(0,s.jsx)(n.br,{}),"\nThis layout is used for all slides which do not match the criteria for\nanother layout."]}),"\n",(0,s.jsxs)(n.p,{children:["These layouts are chosen from the default pptx reference doc included\nwith pandoc, unless an alternative reference doc is specified using\n",(0,s.jsx)(n.code,{children:"--reference-doc"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"incremental-lists",children:"Incremental lists"}),"\n",(0,s.jsxs)(n.p,{children:["By default, these writers produce lists that display \u201call at once.\u201d If\nyou want your lists to display incrementally (one item at a time), use\nthe ",(0,s.jsx)(n.code,{children:"-i"})," option. If you want a particular list to depart from the\ndefault, put it in a ",(0,s.jsx)(n.code,{children:"div"})," block with class ",(0,s.jsx)(n.code,{children:"incremental"})," or\n",(0,s.jsx)(n.code,{children:"nonincremental"}),". So, for example, using the ",(0,s.jsx)(n.code,{children:"fenced div"})," syntax, the\nfollowing would be incremental regardless of the document default:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"::: incremental\n\n- Eat spaghetti\n- Drink wine\n\n:::\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"::: nonincremental\n\n- Eat spaghetti\n- Drink wine\n\n:::\n"})}),"\n",(0,s.jsxs)(n.p,{children:["While using ",(0,s.jsx)(n.code,{children:"incremental"})," and ",(0,s.jsx)(n.code,{children:"nonincremental"})," divs is the recommended\nmethod of setting incremental lists on a per-case basis, an older method\nis also supported: putting lists inside a blockquote will depart from\nthe document default (that is, it will display incrementally without the\n",(0,s.jsx)(n.code,{children:"-i"})," option and all at once with the ",(0,s.jsx)(n.code,{children:"-i"})," option):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"> - Eat spaghetti\n> - Drink wine\n"})}),"\n",(0,s.jsx)(n.p,{children:"Both methods allow incremental and nonincremental lists to be mixed in a\nsingle document."}),"\n",(0,s.jsx)(n.p,{children:"If you want to include a block-quoted list, you can work around this\nbehavior by putting the list inside a fenced div, so that it is not the\ndirect child of the block quote:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"> ::: wrapper\n> - a\n> - list in a quote\n> :::\n"})}),"\n",(0,s.jsx)(n.h2,{id:"inserting-pauses",children:"Inserting pauses"}),"\n",(0,s.jsx)(n.p,{children:"You can add \u201cpauses\u201d within a slide by including a paragraph containing\nthree dots, separated by spaces:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Slide with a pause\n\ncontent before the pause\n\n. . .\n\ncontent after the pause\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note: this feature is not yet implemented for PowerPoint output."}),"\n",(0,s.jsx)(n.h2,{id:"styling-the-slides",children:"Styling the slides"}),"\n",(0,s.jsxs)(n.p,{children:["You can change the style of HTML slides by putting customized CSS files\nin ",(0,s.jsx)(n.code,{children:"$DATADIR/s5/default"})," (for S5), ",(0,s.jsx)(n.code,{children:"$DATADIR/slidy"})," (for Slidy), or\n",(0,s.jsx)(n.code,{children:"$DATADIR/slideous"})," (for Slideous), where ",(0,s.jsx)(n.code,{children:"$DATADIR"})," is the user data\ndirectory (see ",(0,s.jsx)(n.code,{children:"--data-dir"}),", above). The originals may be found in\npandoc\u2019s system data directory (generally\n",(0,s.jsx)(n.code,{children:"$CABALDIR/pandoc-VERSION/s5/default"}),"). Pandoc will look there for any\nfiles it does not find in the user data directory."]}),"\n",(0,s.jsx)(n.p,{children:"For dzslides, the CSS is included in the HTML file itself, and may be\nmodified there."}),"\n",(0,s.jsxs)(n.p,{children:["All ",(0,s.jsx)(n.a,{href:"https://revealjs.com/config/",children:"reveal.js configuration options"})," can\nbe set through variables. For example, themes can be used by setting the\n",(0,s.jsx)(n.code,{children:"theme"})," variable:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"-V theme=moon\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Or you can specify a custom stylesheet using the ",(0,s.jsx)(n.code,{children:"--css"})," option."]}),"\n",(0,s.jsxs)(n.p,{children:["To style beamer slides, you can specify a ",(0,s.jsx)(n.code,{children:"theme"}),", ",(0,s.jsx)(n.code,{children:"colortheme"}),",\n",(0,s.jsx)(n.code,{children:"fonttheme"}),", ",(0,s.jsx)(n.code,{children:"innertheme"}),", and ",(0,s.jsx)(n.code,{children:"outertheme"}),", using the ",(0,s.jsx)(n.code,{children:"-V"})," option:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pandoc -t beamer habits.txt -V theme:Warsaw -o habits.pdf\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that heading attributes will turn into slide attributes (on a\n",(0,s.jsx)(n.code,{children:"<div>"})," or ",(0,s.jsx)(n.code,{children:"<section>"}),") in HTML slide formats, allowing you to style\nindividual slides. In beamer, a number of heading classes and attributes\nare recognized as frame options and will be passed through as options to\nthe frame: see ",(0,s.jsx)(n.a,{href:"#frame-attributes-in-beamer",children:"Frame attributes in\nbeamer"}),", below."]}),"\n",(0,s.jsx)(n.h2,{id:"speaker-notes",children:"Speaker notes"}),"\n",(0,s.jsx)(n.p,{children:"Speaker notes are supported in reveal.js, PowerPoint (pptx), and beamer\noutput. You can add notes to your Markdown document thus:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"::: notes\n\nThis is my note.\n\n- It can contain Markdown\n- like this list\n\n:::\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To show the notes window in reveal.js, press ",(0,s.jsx)(n.code,{children:"s"})," while viewing the\npresentation. Speaker notes in PowerPoint will be available, as usual,\nin handouts and presenter view."]}),"\n",(0,s.jsx)(n.p,{children:"Notes are not yet supported for other slide formats, but the notes will\nnot appear on the slides themselves."}),"\n",(0,s.jsx)(n.h2,{id:"columns",children:"Columns"}),"\n",(0,s.jsxs)(n.p,{children:["To put material in side by side columns, you can use a native div\ncontainer with class ",(0,s.jsx)(n.code,{children:"columns"}),", containing two or more div containers\nwith class ",(0,s.jsx)(n.code,{children:"column"})," and a ",(0,s.jsx)(n.code,{children:"width"})," attribute:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:':::::::::::::: {.columns}\n::: {.column width="40%"}\ncontents...\n:::\n::: {.column width="60%"}\ncontents...\n:::\n::::::::::::::\n'})}),"\n",(0,s.jsx)(n.h3,{id:"additional-columns-attributes-in-beamer",children:"Additional columns attributes in beamer"}),"\n",(0,s.jsxs)(n.p,{children:["The div containers with classes ",(0,s.jsx)(n.code,{children:"columns"})," and ",(0,s.jsx)(n.code,{children:"column"})," can optionally\nhave an ",(0,s.jsx)(n.code,{children:"align"})," attribute. The class ",(0,s.jsx)(n.code,{children:"columns"})," can optionally have a\n",(0,s.jsx)(n.code,{children:"totalwidth"})," attribute or an ",(0,s.jsx)(n.code,{children:"onlytextwidth"})," class."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:':::::::::::::: {.columns align=center totalwidth=8em}\n::: {.column width="40%"}\ncontents...\n:::\n::: {.column width="60%" align=bottom}\ncontents...\n:::\n::::::::::::::\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"align"})," attributes on ",(0,s.jsx)(n.code,{children:"columns"})," and ",(0,s.jsx)(n.code,{children:"column"})," can be used with the\nvalues ",(0,s.jsx)(n.code,{children:"top"}),", ",(0,s.jsx)(n.code,{children:"top-baseline"}),", ",(0,s.jsx)(n.code,{children:"center"})," and ",(0,s.jsx)(n.code,{children:"bottom"})," to vertically align\nthe columns. It defaults to ",(0,s.jsx)(n.code,{children:"top"})," in ",(0,s.jsx)(n.code,{children:"columns"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"totalwidth"})," attribute limits the width of the columns to the given\nvalue."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:':::::::::::::: {.columns align=top .onlytextwidth}\n::: {.column width="40%" align=center}\ncontents...\n:::\n::: {.column width="60%"}\ncontents...\n:::\n::::::::::::::\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The class ",(0,s.jsx)(n.code,{children:"onlytextwidth"})," sets the ",(0,s.jsx)(n.code,{children:"totalwidth"})," to ",(0,s.jsx)(n.code,{children:"\\textwidth"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["See Section 12.7 of the ",(0,s.jsx)(n.a,{href:"http://mirrors.ctan.org/macros/latex/contrib/beamer/doc/beameruserguide.pdf",children:"Beamer User\u2019s\nGuide"}),"\nfor more details."]}),"\n",(0,s.jsx)(n.h2,{id:"frame-attributes-in-beamer",children:"Frame attributes in beamer"}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes it is necessary to add the LaTeX ",(0,s.jsx)(n.code,{children:"[fragile]"})," option to a frame\nin beamer (for example, when using the ",(0,s.jsx)(n.code,{children:"minted"})," environment). This can\nbe forced by adding the ",(0,s.jsx)(n.code,{children:"fragile"})," class to the heading introducing the\nslide:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Fragile slide {.fragile}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["All of the other frame attributes described in Section 8.1 of the\n",(0,s.jsx)(n.a,{href:"http://mirrors.ctan.org/macros/latex/contrib/beamer/doc/beameruserguide.pdf",children:"Beamer User\u2019s\nGuide"}),"\nmay also be used: ",(0,s.jsx)(n.code,{children:"allowdisplaybreaks"}),", ",(0,s.jsx)(n.code,{children:"allowframebreaks"}),", ",(0,s.jsx)(n.code,{children:"b"}),", ",(0,s.jsx)(n.code,{children:"c"}),",\n",(0,s.jsx)(n.code,{children:"s"}),", ",(0,s.jsx)(n.code,{children:"t"}),", ",(0,s.jsx)(n.code,{children:"environment"}),", ",(0,s.jsx)(n.code,{children:"label"}),", ",(0,s.jsx)(n.code,{children:"plain"}),", ",(0,s.jsx)(n.code,{children:"shrink"}),", ",(0,s.jsx)(n.code,{children:"standout"}),",\n",(0,s.jsx)(n.code,{children:"noframenumbering"}),", ",(0,s.jsx)(n.code,{children:"squeeze"}),". ",(0,s.jsx)(n.code,{children:"allowframebreaks"})," is recommended\nespecially for bibliographies, as it allows multiple slides to be\ncreated if the content overfills the frame:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# References {.allowframebreaks}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In addition, the ",(0,s.jsx)(n.code,{children:"frameoptions"})," attribute may be used to pass arbitrary\nframe options to a beamer slide:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'# Heading {frameoptions="squeeze,shrink,customoption=foobar"}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"background-in-revealjs-beamer-and-pptx",children:"Background in reveal.js, beamer, and pptx"}),"\n",(0,s.jsx)(n.p,{children:"Background images can be added to self-contained reveal.js slide shows,\nbeamer slide shows, and pptx slide shows."}),"\n",(0,s.jsx)(n.h3,{id:"on-all-slides-beamer-revealjs-pptx",children:"On all slides (beamer, reveal.js, pptx)"}),"\n",(0,s.jsxs)(n.p,{children:["With beamer and reveal.js, the configuration option ",(0,s.jsx)(n.code,{children:"background-image"}),"\ncan be used either in the YAML metadata block or as a command-line\nvariable to get the same image on every slide."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that for reveal.js, the ",(0,s.jsx)(n.code,{children:"background-image"})," will be used as a\n",(0,s.jsx)(n.code,{children:"parallaxBackgroundImage"})," (see below)."]}),"\n",(0,s.jsxs)(n.p,{children:["For pptx, you can use a ",(0,s.jsx)(n.a,{href:"#option--reference-doc",children:"reference doc"})," in which\nbackground images have been set on the ",(0,s.jsx)(n.a,{href:"#powerpoint-layout-choice",children:"relevant\nlayouts"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"parallaxbackgroundimage-revealjs",children:[(0,s.jsx)(n.code,{children:"parallaxBackgroundImage"})," (reveal.js)"]}),"\n",(0,s.jsxs)(n.p,{children:["For reveal.js, there is also the reveal.js-native option\n",(0,s.jsx)(n.code,{children:"parallaxBackgroundImage"}),", which produces a parallax scrolling\nbackground. You must also set ",(0,s.jsx)(n.code,{children:"parallaxBackgroundSize"}),", and can\noptionally set ",(0,s.jsx)(n.code,{children:"parallaxBackgroundHorizontal"})," and\n",(0,s.jsx)(n.code,{children:"parallaxBackgroundVertical"})," to configure the scrolling behaviour. See\nthe ",(0,s.jsx)(n.a,{href:"https://revealjs.com/backgrounds/#parallax-background",children:"reveal.js\ndocumentation"}),"\nfor more details about the meaning of these options."]}),"\n",(0,s.jsx)(n.p,{children:"In reveal.js\u2019s overview mode, the parallaxBackgroundImage will show up\nonly on the first slide."}),"\n",(0,s.jsx)(n.h3,{id:"on-individual-slides-revealjs-pptx",children:"On individual slides (reveal.js, pptx)"}),"\n",(0,s.jsxs)(n.p,{children:["To set an image for a particular reveal.js or pptx slide, add\n",(0,s.jsx)(n.code,{children:'{background-image="/path/to/image"}'})," to the first slide-level heading\non the slide (which may even be empty)."]}),"\n",(0,s.jsxs)(n.p,{children:["As the ",(0,s.jsx)(n.a,{href:"#extension-link_attributes",children:"HTML writers pass unknown attributes\nthrough"}),", other reveal.js background\nsettings also work on individual slides, including ",(0,s.jsx)(n.code,{children:"background-size"}),",\n",(0,s.jsx)(n.code,{children:"background-repeat"}),", ",(0,s.jsx)(n.code,{children:"background-color"}),", ",(0,s.jsx)(n.code,{children:"transition"}),", and\n",(0,s.jsx)(n.code,{children:"transition-speed"}),". (The ",(0,s.jsx)(n.code,{children:"data-"})," prefix will automatically be added.)"]}),"\n",(0,s.jsxs)(n.p,{children:["Note: ",(0,s.jsx)(n.code,{children:"data-background-image"})," is also supported in pptx for consistency\nwith reveal.js \u2013 if ",(0,s.jsx)(n.code,{children:"background-image"})," isn\u2019t found,\n",(0,s.jsx)(n.code,{children:"data-background-image"})," will be checked."]}),"\n",(0,s.jsx)(n.h3,{id:"on-the-title-slide-revealjs-pptx",children:"On the title slide (reveal.js, pptx)"}),"\n",(0,s.jsxs)(n.p,{children:["To add a background image to the automatically generated title slide for\nreveal.js, use the ",(0,s.jsx)(n.code,{children:"title-slide-attributes"})," variable in the YAML\nmetadata block. It must contain a map of attribute names and values.\n(Note that the ",(0,s.jsx)(n.code,{children:"data-"})," prefix is required here, as it isn\u2019t added\nautomatically.)"]}),"\n",(0,s.jsxs)(n.p,{children:["For pptx, pass a ",(0,s.jsx)(n.a,{href:"#option--reference-doc",children:"reference doc"})," with the\nbackground image set on the \u201cTitle Slide\u201d layout."]}),"\n",(0,s.jsx)(n.h3,{id:"example-revealjs",children:"Example (reveal.js)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'---\ntitle: My Slide Show\nparallaxBackgroundImage: /path/to/my/background_image.png\ntitle-slide-attributes:\n    data-background-image: /path/to/title_image.png\n    data-background-size: contain\n---\n\n## Slide One\n\nSlide 1 has background_image.png as its background.\n\n## {background-image="/path/to/special_image.jpg"}\n\nSlide 2 has a special image for its background, even though the heading has no content.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>a});var s=i(7294);const t={},l=s.createContext(t);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);