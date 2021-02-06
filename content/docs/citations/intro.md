---
title: "Introduction to citations"
description: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "citations"
weight: 540
toc: true
---

When the `--citeproc` option is used, pandoc can automatically generate
citations and a bibliography in a number of styles.  Basic usage is

    pandoc --citeproc myinput.txt

To use this feature, you will need to have

- a document containing citations (see [Extension: `citations`]);
- a source of bibliographic data: either an external bibliography
  file or a list of `references` in the document's YAML metadata
- optionally, a [CSL] citation style.
