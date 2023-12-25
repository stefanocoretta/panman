"use strict";(self.webpackChunkpanman=self.webpackChunkpanman||[]).push([[28],{224:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(5893),s=i(1151);const a={},l="Citations",o={id:"Citations",title:"Citations",description:"When the --citeproc option is used, pandoc can automatically generate",source:"@site/docs/Citations.md",sourceDirName:".",slug:"/Citations",permalink:"/panman/Citations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pandoc\u2019s Markdown",permalink:"/panman/Pandocs Markdown"},next:{title:"Slide shows",permalink:"/panman/Slide shows"}},r={},c=[{value:"Specifying bibliographic data",id:"specifying-bibliographic-data",level:2},{value:"Capitalization in titles",id:"capitalization-in-titles",level:3},{value:"Conference Papers, Published vs.\xa0Unpublished",id:"conference-papers-published-vsunpublished",level:3},{value:"Specifying a citation style",id:"specifying-a-citation-style",level:2},{value:"Citations in note styles",id:"citations-in-note-styles",level:2},{value:"Placement of the bibliography",id:"placement-of-the-bibliography",level:2},{value:"Including uncited items in the bibliography",id:"including-uncited-items-in-the-bibliography",level:2},{value:"Other relevant metadata fields",id:"other-relevant-metadata-fields",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"citations",children:"Citations"}),"\n",(0,t.jsxs)(n.p,{children:["When the ",(0,t.jsx)(n.code,{children:"--citeproc"})," option is used, pandoc can automatically generate\ncitations and a bibliography in a number of styles. Basic usage is"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pandoc --citeproc myinput.txt\n"})}),"\n",(0,t.jsx)(n.p,{children:"To use this feature, you will need to have"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["a document containing citations (see ",(0,t.jsx)(n.a,{href:"#citation-syntax",children:"Citation\nsyntax"}),");"]}),"\n",(0,t.jsxs)(n.li,{children:["a source of bibliographic data: either an external bibliography file\nor a list of ",(0,t.jsx)(n.code,{children:"references"})," in the document\u2019s YAML metadata;"]}),"\n",(0,t.jsxs)(n.li,{children:["optionally, a\n",(0,t.jsx)(n.a,{href:"https://docs.citationstyles.org/en/stable/specification.html",children:"CSL"}),"\ncitation style."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"specifying-bibliographic-data",children:"Specifying bibliographic data"}),"\n",(0,t.jsxs)(n.p,{children:["You can specify an external bibliography using the ",(0,t.jsx)(n.code,{children:"bibliography"}),"\nmetadata field in a YAML metadata section or the ",(0,t.jsx)(n.code,{children:"--bibliography"}),"\ncommand line argument. If you want to use multiple bibliography files,\nyou can supply multiple ",(0,t.jsx)(n.code,{children:"--bibliography"})," arguments or set ",(0,t.jsx)(n.code,{children:"bibliography"}),"\nmetadata field to YAML array. A bibliography may have any of these\nformats:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{className:"header",children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Format"}),(0,t.jsx)(n.th,{children:"File extension"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{className:"odd",children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"BibLaTeX"}),(0,t.jsx)(n.td,{children:".bib"})]}),(0,t.jsxs)(n.tr,{className:"even",children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"BibTeX"}),(0,t.jsx)(n.td,{children:".bibtex"})]}),(0,t.jsxs)(n.tr,{className:"odd",children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"CSL JSON"}),(0,t.jsx)(n.td,{children:".json"})]}),(0,t.jsxs)(n.tr,{className:"even",children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"CSL YAML"}),(0,t.jsx)(n.td,{children:".yaml"})]}),(0,t.jsxs)(n.tr,{className:"odd",children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"RIS"}),(0,t.jsx)(n.td,{children:".ris"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Note that ",(0,t.jsx)(n.code,{children:".bib"})," can be used with both BibTeX and BibLaTeX files; use\nthe extension ",(0,t.jsx)(n.code,{children:".bibtex"})," to force interpretation as BibTeX."]}),"\n",(0,t.jsxs)(n.p,{children:["In BibTeX and BibLaTeX databases, pandoc parses LaTeX markup inside\nfields such as ",(0,t.jsx)(n.code,{children:"title"}),"; in CSL YAML databases, pandoc Markdown; and in\nCSL JSON databases, an ",(0,t.jsx)(n.a,{href:"https://docs.citationstyles.org/en/1.0/release-notes.html#rich-text-markup-within-fields",children:"HTML-like\nmarkup"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<i>...</i>"}),(0,t.jsx)(n.br,{}),"\nitalics"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<b>...</b>"}),(0,t.jsx)(n.br,{}),"\nbold"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'<span style="font-variant:small-caps;">...</span>'})," or ",(0,t.jsx)(n.code,{children:"<sc>...</sc>"}),(0,t.jsx)(n.br,{}),"\nsmall capitals"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<sub>...</sub>"}),(0,t.jsx)(n.br,{}),"\nsubscript"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<sup>...</sup>"}),(0,t.jsx)(n.br,{}),"\nsuperscript"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'<span class="nocase">...</span>'}),(0,t.jsx)(n.br,{}),"\nprevent a phrase from being capitalized as title case"]}),"\n",(0,t.jsxs)(n.p,{children:["As an alternative to specifying a bibliography file using\n",(0,t.jsx)(n.code,{children:"--bibliography"})," or the YAML metadata field ",(0,t.jsx)(n.code,{children:"bibliography"}),", you can\ninclude the citation data directly in the ",(0,t.jsx)(n.code,{children:"references"})," field of the\ndocument\u2019s YAML metadata. The field should contain an array of\nYAML-encoded references, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"---\nreferences:\n- type: article-journal\n  id: WatsonCrick1953\n  author:\n  - family: Watson\n    given: J. D.\n  - family: Crick\n    given: F. H. C.\n  issued:\n    date-parts:\n    - - 1953\n      - 4\n      - 25\n  title: 'Molecular structure of nucleic acids: a structure for\n    deoxyribose nucleic acid'\n  title-short: Molecular structure of nucleic acids\n  container-title: Nature\n  volume: 171\n  issue: 4356\n  page: 737-738\n  DOI: 10.1038/171737a0\n  URL: https://www.nature.com/articles/171737a0\n  language: en-GB\n...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If both an external bibliography and inline (YAML metadata) references\nare provided, both will be used. In case of conflicting ",(0,t.jsx)(n.code,{children:"id"}),"s, the\ninline references will take precedence."]}),"\n",(0,t.jsx)(n.p,{children:"Note that pandoc can be used to produce such a YAML metadata section\nfrom a BibTeX, BibLaTeX, or CSL JSON bibliography:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pandoc chem.bib -s -f biblatex -t markdown\npandoc chem.json -s -f csljson -t markdown\n"})}),"\n",(0,t.jsx)(n.p,{children:"Indeed, pandoc can convert between any of these citation formats:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pandoc chem.bib -s -f biblatex -t csljson\npandoc chem.yaml -s -f markdown -t biblatex\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Running pandoc on a bibliography file with the ",(0,t.jsx)(n.code,{children:"--citeproc"})," option will\ncreate a formatted bibliography in the format of your choice:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pandoc chem.bib -s --citeproc -o chem.html\npandoc chem.bib -s --citeproc -o chem.pdf\n"})}),"\n",(0,t.jsx)(n.h3,{id:"capitalization-in-titles",children:"Capitalization in titles"}),"\n",(0,t.jsx)(n.p,{children:"If you are using a bibtex or biblatex bibliography, then observe the\nfollowing rules:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["English titles should be in title case. Non-English titles should be\nin sentence case, and the ",(0,t.jsx)(n.code,{children:"langid"})," field in biblatex should be set to\nthe relevant language. (The following values are treated as English:\n",(0,t.jsx)(n.code,{children:"american"}),", ",(0,t.jsx)(n.code,{children:"british"}),", ",(0,t.jsx)(n.code,{children:"canadian"}),", ",(0,t.jsx)(n.code,{children:"english"}),", ",(0,t.jsx)(n.code,{children:"australian"}),",\n",(0,t.jsx)(n.code,{children:"newzealand"}),", ",(0,t.jsx)(n.code,{children:"USenglish"}),", or ",(0,t.jsx)(n.code,{children:"UKenglish"}),".)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"As is standard with bibtex/biblatex, proper names should be protected\nwith curly braces so that they won\u2019t be lowercased in styles that call\nfor sentence case. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"title = {My Dinner with {Andre}}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In addition, words that should remain lowercase (or camelCase) should\nbe protected:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"title = {Spin Wave Dispersion on the {nm} Scale}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Though this is not necessary in bibtex/biblatex, it is necessary with\nciteproc, which stores titles internally in sentence case, and\nconverts to title case in styles that require it. Here we protect \u201cnm\u201d\nso that it doesn\u2019t get converted to \u201cNm\u201d at this stage."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you are using a CSL bibliography (either JSON or YAML), then observe\nthe following rules:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"All titles should be in sentence case."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"language"})," field for non-English titles to prevent their\nconversion to title case in styles that call for this. (Conversion\nhappens only if ",(0,t.jsx)(n.code,{children:"language"})," begins with ",(0,t.jsx)(n.code,{children:"en"})," or is left empty.)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Protect words that should not be converted to title case using this\nsyntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Spin wave dispersion on the <span class="nocase">nm</span> scale\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"conference-papers-published-vsunpublished",children:"Conference Papers, Published vs.\xa0Unpublished"}),"\n",(0,t.jsxs)(n.p,{children:["For a formally published conference paper, use the biblatex entry type\n",(0,t.jsx)(n.code,{children:"inproceedings"})," (which will be mapped to CSL ",(0,t.jsx)(n.code,{children:"paper-conference"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["For an unpublished manuscript, use the biblatex entry type ",(0,t.jsx)(n.code,{children:"unpublished"}),"\nwithout an ",(0,t.jsx)(n.code,{children:"eventtitle"})," field (this entry type will be mapped to CSL\n",(0,t.jsx)(n.code,{children:"manuscript"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["For a talk, an unpublished conference paper, or a poster presentation,\nuse the biblatex entry type ",(0,t.jsx)(n.code,{children:"unpublished"})," with an ",(0,t.jsx)(n.code,{children:"eventtitle"})," field\n(this entry type will be mapped to CSL ",(0,t.jsx)(n.code,{children:"speech"}),"). Use the biblatex\n",(0,t.jsx)(n.code,{children:"type"})," field to indicate the type, e.g.\xa0\u201cPaper\u201d, or \u201cPoster\u201d. ",(0,t.jsx)(n.code,{children:"venue"}),"\nand ",(0,t.jsx)(n.code,{children:"eventdate"})," may be useful too, though ",(0,t.jsx)(n.code,{children:"eventdate"})," will not be\nrendered by most CSL styles. Note that ",(0,t.jsx)(n.code,{children:"venue"})," is for the event\u2019s venue,\nunlike ",(0,t.jsx)(n.code,{children:"location"})," which describes the publisher\u2019s location; do not use\nthe latter for an unpublished conference paper."]}),"\n",(0,t.jsx)(n.h2,{id:"specifying-a-citation-style",children:"Specifying a citation style"}),"\n",(0,t.jsxs)(n.p,{children:["Citations and references can be formatted using any style supported by\nthe ",(0,t.jsx)(n.a,{href:"https://citationstyles.org",children:"Citation Style Language"}),", listed in the\n",(0,t.jsx)(n.a,{href:"https://www.zotero.org/styles",children:"Zotero Style Repository"}),". These files\nare specified using the ",(0,t.jsx)(n.code,{children:"--csl"})," option or the ",(0,t.jsx)(n.code,{children:"csl"})," (or\n",(0,t.jsx)(n.code,{children:"citation-style"}),") metadata field. By default, pandoc will use the\n",(0,t.jsx)(n.a,{href:"https://chicagomanualofstyle.org",children:"Chicago Manual of Style"})," author-date\nformat. (You can override this default by copying a CSL style of your\nchoice to ",(0,t.jsx)(n.code,{children:"default.csl"})," in your user data directory.) The CSL project\nprovides further information on ",(0,t.jsx)(n.a,{href:"https://citationstyles.org/authors/",children:"finding and editing\nstyles"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"--citation-abbreviations"})," option (or the ",(0,t.jsx)(n.code,{children:"citation-abbreviations"}),"\nmetadata field) may be used to specify a JSON file containing\nabbreviations of journals that should be used in formatted\nbibliographies when ",(0,t.jsx)(n.code,{children:'form="short"'})," is specified. The format of the file\ncan be illustrated with an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{ "default": {\n    "container-title": {\n            "Lloyd\'s Law Reports": "Lloyd\'s Rep",\n            "Estates Gazette": "EG",\n            "Scots Law Times": "SLT"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"citations-in-note-styles",children:"Citations in note styles"}),"\n",(0,t.jsx)(n.p,{children:"Pandoc\u2019s citation processing is designed to allow you to move between\nauthor-date, numerical, and note styles without modifying the markdown\nsource. When you\u2019re using a note style, avoid inserting footnotes\nmanually. Instead, insert citations just as you would in an author-date\nstyle\u2014for example,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Blah blah [@foo, p. 33].\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The footnote will be created automatically. Pandoc will take care of\nremoving the space and moving the note before or after the period,\ndepending on the setting of ",(0,t.jsx)(n.code,{children:"notes-after-punctuation"}),", as described\nbelow in ",(0,t.jsx)(n.a,{href:"#other-relevant-metadata-fields",children:"Other relevant metadata\nfields"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In some cases you may need to put a citation inside a regular footnote.\nNormal citations in footnotes (such as ",(0,t.jsx)(n.code,{children:"[@foo, p. 33]"}),") will be rendered\nin parentheses. In-text citations (such as ",(0,t.jsx)(n.code,{children:"@foo [p. 33]"}),") will be\nrendered without parentheses. (A comma will be added if appropriate.)\nThus:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[^1]:  Some studies [@foo; @bar, p. 33] show that\nfrubulicious zoosnaps are quantical.  For a survey\nof the literature, see @baz [chap. 1].\n"})}),"\n",(0,t.jsx)(n.h2,{id:"placement-of-the-bibliography",children:"Placement of the bibliography"}),"\n",(0,t.jsxs)(n.p,{children:["If the style calls for a list of works cited, it will be placed in a div\nwith id ",(0,t.jsx)(n.code,{children:"refs"}),", if one exists:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"::: {#refs}\n:::\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Otherwise, it will be placed at the end of the document. Generation of\nthe bibliography can be suppressed by setting\n",(0,t.jsx)(n.code,{children:"suppress-bibliography: true"})," in the YAML metadata."]}),"\n",(0,t.jsxs)(n.p,{children:["If you wish the bibliography to have a section heading, you can set\n",(0,t.jsx)(n.code,{children:"reference-section-title"})," in the metadata, or put the heading at the\nbeginning of the div with id ",(0,t.jsx)(n.code,{children:"refs"})," (if you are using it) or at the end\nof your document:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"last paragraph...\n\n# References\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The bibliography will be inserted after this heading. Note that the\n",(0,t.jsx)(n.code,{children:"unnumbered"})," class will be added to this heading, so that the section\nwill not be numbered."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to put the bibliography into a variable in your template,\none way to do that is to put the div with id ",(0,t.jsx)(n.code,{children:"refs"})," into a metadata\nfield, e.g."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"---\nrefs: |\n   ::: {#refs}\n   :::\n...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can then put the variable ",(0,t.jsx)(n.code,{children:"$refs$"})," into your template where you want\nthe bibliography to be placed."]}),"\n",(0,t.jsx)(n.h2,{id:"including-uncited-items-in-the-bibliography",children:"Including uncited items in the bibliography"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to include items in the bibliography without actually citing\nthem in the body text, you can define a dummy ",(0,t.jsx)(n.code,{children:"nocite"})," metadata field\nand put the citations there:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"---\nnocite: |\n  @item1, @item2\n...\n\n@item3\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the document will contain a citation for ",(0,t.jsx)(n.code,{children:"item3"})," only,\nbut the bibliography will contain entries for ",(0,t.jsx)(n.code,{children:"item1"}),", ",(0,t.jsx)(n.code,{children:"item2"}),", and\n",(0,t.jsx)(n.code,{children:"item3"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"It is possible to create a bibliography with all the citations, whether\nor not they appear in the document, by using a wildcard:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"---\nnocite: |\n  @*\n...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For LaTeX output, you can also use\n",(0,t.jsx)(n.a,{href:"https://ctan.org/pkg/natbib",children:(0,t.jsx)(n.code,{children:"natbib"})})," or\n",(0,t.jsx)(n.a,{href:"https://ctan.org/pkg/biblatex",children:(0,t.jsx)(n.code,{children:"biblatex"})})," to render the bibliography.\nIn order to do so, specify bibliography files as outlined above, and add\n",(0,t.jsx)(n.code,{children:"--natbib"})," or ",(0,t.jsx)(n.code,{children:"--biblatex"})," argument to pandoc invocation. Bear in mind\nthat bibliography files have to be in either BibTeX (for ",(0,t.jsx)(n.code,{children:"--natbib"}),") or\nBibLaTeX (for ",(0,t.jsx)(n.code,{children:"--biblatex"}),") format."]}),"\n",(0,t.jsx)(n.h2,{id:"other-relevant-metadata-fields",children:"Other relevant metadata fields"}),"\n",(0,t.jsx)(n.p,{children:"A few other metadata fields affect bibliography formatting:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"link-citations"}),(0,t.jsx)(n.br,{}),"\nIf true, citations will be hyperlinked to the corresponding bibliography\nentries (for author-date and numerical styles only). Defaults to false."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"link-bibliography"}),(0,t.jsx)(n.br,{}),"\nIf true, DOIs, PMCIDs, PMID, and URLs in bibliographies will be rendered\nas hyperlinks. (If an entry contains a DOI, PMCID, PMID, or URL, but\nnone of these fields are rendered by the style, then the title, or in\nthe absence of a title the whole entry, will be hyperlinked.) Defaults\nto true."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"lang"}),(0,t.jsx)(n.br,{}),"\nThe ",(0,t.jsx)(n.code,{children:"lang"})," field will affect how the style is localized, for example in\nthe translation of labels, the use of quotation marks, and the way items\nare sorted. (For backwards compatibility, ",(0,t.jsx)(n.code,{children:"locale"})," may be used instead\nof ",(0,t.jsx)(n.code,{children:"lang"}),", but this use is deprecated.)"]}),"\n",(0,t.jsxs)(n.p,{children:["A BCP 47 language tag is expected: for example, ",(0,t.jsx)(n.code,{children:"en"}),", ",(0,t.jsx)(n.code,{children:"de"}),", ",(0,t.jsx)(n.code,{children:"en-US"}),",\n",(0,t.jsx)(n.code,{children:"fr-CA"}),", ",(0,t.jsx)(n.code,{children:"ug-Cyrl"}),". The unicode extension syntax (after ",(0,t.jsx)(n.code,{children:"-u-"}),") may be\nused to specify options for collation (sorting) more precisely. Here are\nsome examples:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"zh-u-co-pinyin"})," \u2013 Chinese with the Pinyin collation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"es-u-co-trad"})," \u2013 Spanish with the traditional collation (with ",(0,t.jsx)(n.code,{children:"Ch"}),"\nsorting after ",(0,t.jsx)(n.code,{children:"C"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fr-u-kb"})," \u2013 French with \u201cbackwards\u201d accent sorting (with ",(0,t.jsx)(n.code,{children:"cot\xe9"}),"\nsorting after ",(0,t.jsx)(n.code,{children:"c\xf4te"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"en-US-u-kf-upper"})," \u2013 English with uppercase letters sorting before\nlower (default is lower before upper)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"notes-after-punctuation"}),(0,t.jsx)(n.br,{}),"\nIf true (the default for note styles), pandoc will put footnote\nreferences or superscripted numerical citations after following\npunctuation. For example, if the source contains\n",(0,t.jsx)(n.code,{children:"blah blah [@jones99]."}),", the result will look like ",(0,t.jsx)(n.code,{children:"blah blah.[^1]"}),",\nwith the note moved after the period and the space collapsed. If false,\nthe space will still be collapsed, but the footnote will not be moved\nafter the punctuation. The option may also be used in numerical styles\nthat use superscripts for citation numbers (but for these styles the\ndefault is not to move the citation)."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var t=i(7294);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);