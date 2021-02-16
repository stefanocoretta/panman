---
title: "Default files"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "default"
weight: 220
toc: true
---

The `--defaults` option may be used to specify a package
of options.  Here is a sample defaults file demonstrating all of
the fields that may be used:

``` yaml
from: markdown+emoji
# reader: may be used instead of from:
to: html5
# writer: may be used instead of to:

# leave blank for output to stdout:
output-file:
# leave blank for input from stdin, use [] for no input:
input-files:
- preface.md
- content.md
# or you may use input-file: with a single value

# Include options from the specified defaults files.
# The files will be searched for first in the working directory
# and then in the defaults subdirectory of the user data directory.
# The files are included in the same order in which they appear in
# the list. Options specified in this defaults file always have
# priority over the included ones.
defaults:
- defsA
- defsB

template: letter
standalone: true
self-contained: false

# note that structured variables may be specified:
variables:
  documentclass: book
  classoption:
    - twosides
    - draft

# metadata values specified here are parsed as literal
# string text, not markdown:
metadata:
  author:
  - Sam Smith
  - Julie Liu
metadata-files:
- boilerplate.yaml
# or you may use metadata-file: with a single value

# Note that these take files, not their contents:
include-before-body: []
include-after-body: []
include-in-header: []
resource-path: ["."]

# turn on built-in citation processing.  Note that if you need
# control over when the citeproc processing is done relative
# to other filters, you should instead use `citeproc` in the
# list of `filters` (see below).
citeproc: true
csl: ieee
bibliography:
- foobar.bib
- barbaz.json
citation-abbreviations: abbrevs.json

# Filters will be assumed to be Lua filters if they have
# the .lua extension, and json filters otherwise.  But
# the filter type can also be specified explicitly, as shown.
# Filters are run in the order specified.
# To include the built-in citeproc filter, use either `citeproc`
# or `{type: citeproc}`.
filters:
- wordcount.lua
- type: json
  path: foo.lua

file-scope: false

data-dir:

# ERROR, WARNING, or INFO
verbosity: INFO
log-file: log.json

# citeproc, natbib, or biblatex
cite-method: citeproc
# part, chapter, section, or default:
top-level-division: chapter
abbreviations:

pdf-engine: pdflatex
pdf-engine-opts:
- "-shell-escape"
# you may also use pdf-engine-opt: with a single option
# pdf-engine-opt: "-shell-escape"

# auto, preserve, or none
wrap: auto
columns: 78
dpi: 72

extract-media: mediadir

table-of-contents: true
toc-depth: 2
number-sections: false
# a list of offsets at each heading level
number-offset: [0,0,0,0,0,0]
# toc: may also be used instead of table-of-contents:
shift-heading-level-by: 1
section-divs: true
identifier-prefix: foo
title-prefix: ""
strip-empty-paragraphs: true
# lf, crlf, or native
eol: lf
strip-comments: false
indented-code-classes: []
ascii: true
default-image-extension: ".jpg"

# either a style name of a style definition file:
highlight-style: pygments
syntax-definitions:
- c.xml
# or you may use syntax-definition: with a single value
listings: false

reference-doc: myref.docx

# method is plain, webtex, gladtex, mathml, mathjax, katex
# you may specify a url with webtex, mathjax, katex
html-math-method:
  method: mathjax
  url: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
# none, references, or javascript
email-obfuscation: javascript

tab-stop: 8
preserve-tabs: true

incremental: false
slide-level: 2

epub-subdirectory: EPUB
epub-metadata: meta.xml
epub-fonts:
- foobar.otf
epub-chapter-level: 1
epub-cover-image: cover.jpg

reference-links: true
# block, section, or document
reference-location: block
markdown-headings: setext

# accept, reject, or all
track-changes: accept

html-q-tags: false
css:
- site.css

# none, all, or best
ipynb-output: best

# A list of two-element lists
request-headers:
- ["User-Agent", "Mozilla/5.0"]

fail-if-warnings: false
dump-args: false
ignore-args: false
trace: false
```

Fields that are omitted will just have their regular
default values.  So a defaults file can be as simple as
one line:

``` yaml
verbosity: INFO
```

Default files can be placed in the `defaults` subdirectory of
the user data directory and used from any directory.  For
example, one could create a file specifying defaults for writing
letters, save it as `letter.yaml` in the `defaults` subdirectory
of the user data directory, and then invoke these defaults
from any directory using `pandoc --defaults letter`
or `pandoc -dletter`.

When multiple defaults are used, their contents will be combined.

Note that, where command-line arguments may be repeated
(`--metadata-file`, `--css`, `--include-in-header`,
`--include-before-body`, `--include-after-body`, `--variable`,
`--metadata`, `--syntax-definition`), the values specified on
the command line will combine with values specified in the
defaults file, rather than replacing them.
