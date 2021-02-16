---
title: "Citation style"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "citations"
weight: 560
toc: true
---

Citations and references can be formatted using any style supported by the
[Citation Style Language], listed in the [Zotero Style Repository].
These files are specified using the `--csl` option or the `csl`
(or `citation-style`) metadata field.  By default, pandoc will
use the [Chicago Manual of Style] author-date format.  (You can
override this default by copying a CSL style of your choice
to `default.csl` in your user data directory.)
The CSL project provides further information on [finding and
editing styles].

The `--citation-abbreviations` option (or the
`citation-abbreviations` metadata field) may be used to specify
a JSON file containing abbreviations of journals that should be
used in formatted bibliographies when `form="short"` is
specified.  The format of the file can be illustrated with an
example:


    { "default": {
        "container-title": {
                "Lloyd's Law Reports": "Lloyd's Rep",
                "Estates Gazette": "EG",
                "Scots Law Times": "SLT"
        }
      }
    }
