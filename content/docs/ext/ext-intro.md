---
title: "Extensions"
description: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "ext"
weight: 260
toc: true
---

The behavior of some of the readers and writers can be adjusted by
enabling or disabling various extensions.

An extension can be enabled by adding `+EXTENSION`
to the format name and disabled by adding `-EXTENSION`. For example,
`--from markdown_strict+footnotes` is strict Markdown with footnotes
enabled, while `--from markdown-footnotes-pipe_tables` is pandoc's
Markdown without footnotes or pipe tables.

The markdown reader and writer make by far the most use of extensions.
Extensions only used by them are therefore covered in the
section [Pandoc's Markdown] below (See [Markdown variants] for
`commonmark` and `gfm`.) In the following, extensions that also work
for other formats are covered.

Note that markdown extensions added to the `ipynb` format
affect Markdown cells in Jupyter notebooks (as do command-line
options like `--atx-headers`).
