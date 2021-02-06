---
title: "Raw HTML/TeX"
description: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
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

The following extensions are described in more detail in
their respective sections of [Pandoc's Markdown]:

- [`raw_html`](#extension-raw_html) allows HTML elements which
  are not representable in pandoc's AST to be parsed as raw HTML.
  By default, this is disabled for HTML input.

- [`raw_tex`](#extension-raw_tex) allows raw LaTeX, TeX, and ConTeXt
  to be included in a document.  This extension can be enabled/disabled
  for the following formats (in addition to `markdown`):

  input formats
  :  `latex`, `textile`, `html` (environments, `\ref`, and
     `\eqref` only), `ipynb`

  output formats
  :  `textile`, `commonmark`

  Note: as applied to `ipynb`, `raw_html` and `raw_tex` affect not
  only raw TeX in markdown cells, but data with mime type
  `text/html` in output cells.  Since the `ipynb` reader attempts
  to preserve the richest possible outputs when several options
  are given, you will get best results if you disable `raw_html`
  and `raw_tex` when converting to formats like `docx` which don't
  allow raw `html` or `tex`.

- [`native_divs`](#extension-native_divs) causes HTML `div`
  elements to be parsed as native pandoc Div blocks.
  If you want them to be parsed as raw HTML, use
  `-f html-native_divs+raw_html`.

- [`native_spans`](#extension-native_spans) causes HTML `span`
  elements to be parsed as native pandoc Span inlines.
  If you want them to be parsed as raw HTML, use
  `-f html-native_spans+raw_html`.  If you want to drop all
  `div`s and `span`s when converting HTML to Markdown, you
  can use `pandoc -f html-native_divs-native_spans -t markdown`.
