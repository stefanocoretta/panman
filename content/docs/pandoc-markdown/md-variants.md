---
title: "Markdown variants"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "pandoc-markdown"
weight: 530
toc: true
---

In addition to pandoc's extended Markdown, the following Markdown
variants are supported:

- `markdown_phpextra` (PHP Markdown Extra)
- `markdown_github` (deprecated GitHub-Flavored Markdown)
- `markdown_mmd` (MultiMarkdown)
- `markdown_strict` (Markdown.pl)
- `commonmark` (CommonMark)
- `gfm` (Github-Flavored Markdown)
- `commonmark_x` (CommonMark with many pandoc extensions)

To see which extensions are supported for a given format,
and which are enabled by default, you can use the command

    pandoc --list-extensions=FORMAT

where `FORMAT` is replaced with the name of the format.

Note that the list of extensions for `commonmark`,
`gfm`, and `commonmark_x` are defined relative to default
commonmark.  So, for example, `backtick_code_blocks`
does not appear as an extension, since it is enabled by
default and cannot be disabled.
