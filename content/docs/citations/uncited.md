---
title: "Including uncited items in the bibliography"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "citations"
weight: 600
toc: true
---

If you want to include items in the bibliography without actually
citing them in the body text, you can define a dummy `nocite` metadata
field and put the citations there:

    ---
    nocite: |
      @item1, @item2
    ...

    @item3

In this example, the document will contain a citation for `item3`
only, but the bibliography will contain entries for `item1`, `item2`, and
`item3`.

It is possible to create a bibliography with all the citations,
whether or not they appear in the document, by using a wildcard:

    ---
    nocite: |
      @*
    ...

For LaTeX output, you can also use [`natbib`] or [`biblatex`] to
render the bibliography. In order to do so, specify bibliography
files as outlined above, and add `--natbib` or `--biblatex`
argument to `pandoc` invocation. Bear in mind that bibliography
files have to be in either BibTeX (for `--natbib`)
or BibLaTeX (for `--biblatex`) format.
