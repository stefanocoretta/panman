---
title: "Placement of the bibliography"
description: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "citations"
weight: 590
toc: true
---

If the style calls for a list of works cited, it will be placed
in a div with id `refs`, if one exists:

    ::: {#refs}
    :::

Otherwise, it will be placed at the end of the document.
Generation of the bibliography can be suppressed by setting
`suppress-bibliography: true` in the YAML metadata.

If you wish the bibliography to have a section heading, you can
set `reference-section-title` in the metadata, or put the heading
at the beginning of the div with id `refs` (if you are using it)
or at the end of your document:

    last paragraph...

    # References

The bibliography will be inserted after this heading.  Note that
the `unnumbered` class will be added to this heading, so that the
section will not be numbered.
