---
title: "Literate Haskell support"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "ext"
weight: 300
toc: true
---

#### Extension: `literate_haskell` ####

Treat the document as literate Haskell source.

This extension can be enabled/disabled for the following formats:

input formats
:  `markdown`, `rst`, `latex`

output formats
:  `markdown`, `rst`, `latex`, `html`

If you append `+lhs` (or `+literate_haskell`) to one of the formats
above, pandoc will treat the document as literate Haskell source.
This means that

  - In Markdown input, "bird track" sections will be parsed as Haskell
    code rather than block quotations.  Text between `\begin{code}`
    and `\end{code}` will also be treated as Haskell code.  For
    ATX-style headings the character '=' will be used instead of '#'.

  - In Markdown output, code blocks with classes `haskell` and `literate`
    will be rendered using bird tracks, and block quotations will be
    indented one space, so they will not be treated as Haskell code.
    In addition, headings will be rendered setext-style (with underlines)
    rather than ATX-style (with '#' characters). (This is because ghc
    treats '#' characters in column 1 as introducing line numbers.)

  - In restructured text input, "bird track" sections will be parsed
    as Haskell code.

  - In restructured text output, code blocks with class `haskell` will
    be rendered using bird tracks.

  - In LaTeX input, text in `code` environments will be parsed as
    Haskell code.

  - In LaTeX output, code blocks with class `haskell` will be rendered
    inside `code` environments.

  - In HTML output, code blocks with class `haskell` will be rendered
    with class `literatehaskell` and bird tracks.

Examples:

    pandoc -f markdown+lhs -t html

reads literate Haskell source formatted with Markdown conventions and writes
ordinary HTML (without bird tracks).

    pandoc -f markdown+lhs -t html+lhs

writes HTML with the Haskell code in bird tracks, so it can be copied
and pasted as literate Haskell source.

Note that GHC expects the bird tracks in the first column, so indented
literate code blocks (e.g. inside an itemized environment) will not be
picked up by the Haskell compiler.
