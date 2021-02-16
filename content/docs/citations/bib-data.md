---
title: "Introduction"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "citations"
weight: 550
toc: true
---

You can specify an external bibliography using the
`bibliography` metadata field in a YAML metadata section or the
`--bibliography` command line argument. If you want to use
multiple bibliography files, you can supply multiple
`--bibliography` arguments or set `bibliography` metadata field
to YAML array.  A bibliography may have any of these formats:

  Format            File extension
  ------------      --------------
  BibLaTeX          .bib
  BibTeX            .bibtex
  CSL JSON          .json
  CSL YAML          .yaml

Note that `.bib` can be used with both BibTeX and BibLaTeX files;
use the extension `.bibtex` to force interpretation as BibTeX.

In BibTeX and BibLaTeX databases, pandoc parses LaTeX markup
inside fields such as `title`; in CSL YAML databases, pandoc
Markdown; and in CSL JSON databases, an [HTML-like markup][CSL
markup specs]:

`<i>...</i>`
:   italics

`<b>...</b>`
:   bold

`<span style="font-variant:small-caps;">...</span>` or `<sc>...</sc>`
:   small capitals

`<sub>...</sub>`
:   subscript

`<sup>...</sup>`
:   superscript

`<span class="nocase">...</span>`
:   prevent a phrase from being capitalized as title case

As an alternative to specifying a bibliography file using
`--bibliography` or the YAML metadata field `bibliography`, you
can include the citation data directly in the `references` field
of the document's YAML metadata. The field should contain an
array of YAML-encoded references, for example:

    ---
    references:
    - type: article-journal
      id: WatsonCrick1953
      author:
      - family: Watson
        given: J. D.
      - family: Crick
        given: F. H. C.
      issued:
        date-parts:
        - - 1953
          - 4
          - 25
      title: 'Molecular structure of nucleic acids: a structure for
        deoxyribose nucleic acid'
      title-short: Molecular structure of nucleic acids
      container-title: Nature
      volume: 171
      issue: 4356
      page: 737-738
      DOI: 10.1038/171737a0
      URL: https://www.nature.com/articles/171737a0
      language: en-GB
    ...

If both an external bibliography and inline (YAML metadata)
references are provided, both will be used. In case of
conflicting `id`s, the inline references will take precedence.

Note that `pandoc` can be used to produce such a YAML metadata
section from a BibTeX, BibLaTeX, or CSL JSON bibliography:

    pandoc chem.bib -s -f biblatex -t markdown
    pandoc chem.json -s -f csljson -t markdown

`pandoc` can also be used to produce CSL JSON bibliography
from BibTeX, BibLaTeX, or markdown YAML:

    pandoc chem.bib -s -f biblatex -t csljson
    pandoc chem.yaml -s -f markdown -t csljson

Running pandoc on a bibliography file with the `--citeproc`
option will create a formatted bibliography in the format
of your choice:

    pandoc chem.bib -s --citeproc -o chem.html
    pandoc chem.bib -s --citeproc -o chem.pdf

### Capitalization in titles

If you are using a bibtex or biblatex bibliography, then observe
the following rules:

  - English titles should be in title case.  Non-English titles should
    be in sentence case, and the `langid` field in biblatex should be
    set to the relevant language.  (The following values are treated
    as English:  `american`, `british`, `canadian`, `english`,
    `australian`, `newzealand`, `USenglish`, or `UKenglish`.)

  - As is standard with bibtex/biblatex, proper names should be
    protected with curly braces so that they won't be lowercased
    in styles that call for sentence case.  For example:

        title = {My Dinner with {Andre}}

  - In addition, words that should remain lowercase (or camelCase)
    should be protected:

        title = {Spin Wave Dispersion on the {nm} Scale}

    Though this is not necessary in bibtex/biblatex, it is necessary
    with citeproc, which stores titles internally in sentence case,
    and converts to title case in styles that require it.  Here we
    protect "nm" so that it doesn't get converted to "Nm" at this stage.

If you are using a CSL bibliography (either JSON or YAML), then observe
the following rules:

  - All titles should be in sentence case.

  - Use the `language` field for non-English titles to prevent their
    conversion to title case in styles that call for this. (Conversion
    happens only if `language` begins with `en` or is left empty.)

  - Protect words that should not be converted to title case using
    this syntax:

        Spin wave dispersion on the <span class="nocase">nm</span> scale

### Conference Papers, Published vs. Unpublished

For a formally published conference paper, use the biblatex entry type
`inproceedings` (which will be mapped to CSL `paper-conference`).

For an unpublished manuscript, use the biblatex entry type
`unpublished` without an `eventtitle` field (this entry type
will be mapped to CSL `manuscript`).

For a talk, an unpublished conference paper, or a poster
presentation, use the biblatex entry type `unpublished` with an
`eventtitle` field (this entry type will be mapped to CSL
`speech`). Use the biblatex `type` field to indicate the type,
e.g. "Paper", or "Poster". `venue` and `eventdate` may be useful
too, though `eventdate` will not be rendered by most CSL styles.
Note that `venue` is for the event's venue, unlike `location`
which describes the publisher's location; do not use the latter
for an unpublished conference paper.
