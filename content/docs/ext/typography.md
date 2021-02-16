---
title: "Typography"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "ext"
weight: 270
toc: true
---

#### Extension: `smart` ####

Interpret straight quotes as curly quotes, `---` as em-dashes,
`--` as en-dashes, and `...` as ellipses. Nonbreaking spaces are
inserted after certain abbreviations, such as "Mr."

This extension can be enabled/disabled for the following formats:

input formats
:  `markdown`, `commonmark`, `latex`, `mediawiki`, `org`, `rst`, `twiki`

output formats
:  `markdown`, `latex`, `context`, `rst`

enabled by default in
:  `markdown`, `latex`, `context` (both input and output)

Note: If you are *writing* Markdown, then the `smart` extension
has the reverse effect: what would have been curly quotes comes
out straight.

In LaTeX, `smart` means to use the standard TeX ligatures
for quotation marks (` `` ` and ` '' ` for double quotes,
`` ` `` and `` ' `` for single quotes) and dashes (`--` for
en-dash and `---` for em-dash).  If `smart` is disabled,
then in reading LaTeX pandoc will parse these characters
literally.  In writing LaTeX, enabling `smart` tells pandoc
to use the ligatures when possible; if `smart` is disabled
pandoc will use unicode quotation mark and dash characters.
