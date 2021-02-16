---
title: "Introduction to Markdown"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "pandoc-markdown"
weight: 320
toc: true
---

Pandoc understands an extended and slightly revised version of
John Gruber's [Markdown] syntax.  This document explains the syntax,
noting differences from standard Markdown. Except where noted, these
differences can be suppressed by using the `markdown_strict` format instead
of `markdown`. Extensions can be enabled or disabled to specify the
behavior more granularly. They are described in the following. See also
[Extensions] above, for extensions that work also on other formats.

## Philosophy

Markdown is designed to be easy to write, and, even more importantly,
easy to read:

> A Markdown-formatted document should be publishable as-is, as plain
> text, without looking like it's been marked up with tags or formatting
> instructions.
> -- [John Gruber](https://daringfireball.net/projects/markdown/syntax#philosophy)

This principle has guided pandoc's decisions in finding syntax for
tables, footnotes, and other extensions.

There is, however, one respect in which pandoc's aims are different
from the original aims of Markdown.  Whereas Markdown was originally
designed with HTML generation in mind, pandoc is designed for multiple
output formats.  Thus, while pandoc allows the embedding of raw HTML,
it discourages it, and provides other, non-HTMLish ways of representing
important document elements like definition lists, tables, mathematics, and
footnotes.
