---
title: "Citation in note styles"
description: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "citations"
weight: 570
toc: true
---

Pandoc's citation processing is designed to allow you to
move between author-date, numerical, and note styles without
modifying the markdown source.  When you're using a note
style, avoid inserting footnotes manually. Instead, insert
citations just as you would in an author-date style---for
example,

    Blah blah [@foo, p. 33].

The footnote will be created automatically. Pandoc will take
care of removing the space and moving the note before or
after the period, depending on the setting of
`notes-after-punctuation`, as described below in [Other relevant
metadata fields].

In some cases you may need to put a citation inside a regular
footnote.  Normal citations in footnotes (such as `[@foo, p.
33]`) will be rendered in parentheses.  In-text citations (such
as `@foo [p. 33]`) will be rendered without parentheses. (A
comma will be added if appropriate.)  Thus:

    [^1]:  Some studies [@foo; @bar, p. 33] show that
    frubulicious zoosnaps are quantical.  For a survey
    of the literature, see @baz [chap. 1].
