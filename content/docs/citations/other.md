---
title: "Other relevant metadata fields"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "citations"
weight: 610
toc: true
---

A few other metadata fields affect bibliography formatting:

`link-citations`
:   If true, citations will be
    hyperlinked to the corresponding bibliography entries
    (for author-date and numerical styles only).

`lang`
:   The `lang` field will affect how the style is localized,
    for example in the translation of labels and the use
    of quotation marks.  (For backwards compatibility,
    `locale` may be used instead of `lang`, but this use
    is deprecated.)

`notes-after-punctuation`
:    If true (the default), pandoc will put footnote citations
     after following punctuation.  For example, if the source
     contains `blah blah [@jones99].`, the result will look like
     `blah blah.[^1]`, with the note moved after the period and
     the space collapsed.  If false, the space will still be
     collapsed, but the footnote will not be moved after the
     punctuation.
