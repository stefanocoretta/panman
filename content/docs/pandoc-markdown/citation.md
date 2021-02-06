---
title: "Citation syntax"
description: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "pandoc-markdown"
weight: 510
toc: true
---

#### Extension: `footnotes` ####

Pandoc's Markdown allows footnotes, using the following syntax:

    Here is a footnote reference,[^1] and another.[^longnote]

    [^1]: Here is the footnote.

    [^longnote]: Here's one with multiple blocks.

        Subsequent paragraphs are indented to show that they
    belong to the previous footnote.

            { some.code }

        The whole paragraph can be indented, or just the first
        line.  In this way, multi-paragraph footnotes work like
        multi-paragraph list items.

    This paragraph won't be part of the note, because it
    isn't indented.

The identifiers in footnote references may not contain spaces, tabs,
or newlines.  These identifiers are used only to correlate the
footnote reference with the note itself; in the output, footnotes
will be numbered sequentially.

The footnotes themselves need not be placed at the end of the
document.  They may appear anywhere except inside other block elements
(lists, block quotes, tables, etc.).  Each footnote should be
separated from surrounding content (including other footnotes)
by blank lines.

#### Extension: `inline_notes` ####

Inline footnotes are also allowed (though, unlike regular notes,
they cannot contain multiple paragraphs).  The syntax is as follows:

    Here is an inline note.^[Inlines notes are easier to write, since
    you don't have to pick an identifier and move down to type the
    note.]

Inline and regular footnotes may be mixed freely.#### Extension: `citations` ####

Markdown citations go inside square brackets and are separated
by semicolons.  Each citation must have a key, composed of '@' +
the citation identifier from the database, and may optionally
have a prefix, a locator, and a suffix.  The citation key must
begin with a letter, digit, or `_`, and may contain
alphanumerics, `_`, and internal punctuation characters
(`:.#$%&-+?<>~/`).  Here are some examples:

    Blah blah [see @doe99, pp. 33-35; also @smith04, chap. 1].

    Blah blah [@doe99, pp. 33-35, 38-39 and *passim*].

    Blah blah [@smith04; @doe99].

`pandoc` detects locator terms in the [CSL locale files].
Either abbreviated or unabbreviated forms are accepted. In the `en-US`
locale, locator terms can be written in either singular or plural forms,
as `book`, `bk.`/`bks.`; `chapter`, `chap.`/`chaps.`; `column`,
`col.`/`cols.`; `figure`, `fig.`/`figs.`; `folio`, `fol.`/`fols.`;
`number`, `no.`/`nos.`; `line`, `l.`/`ll.`; `note`, `n.`/`nn.`; `opus`,
`op.`/`opp.`; `page`, `p.`/`pp.`; `paragraph`, `para.`/`paras.`; `part`,
`pt.`/`pts.`; `section`, `sec.`/`secs.`; `sub verbo`, `s.v.`/`s.vv.`;
`verse`, `v.`/`vv.`; `volume`, `vol.`/`vols.`; `¶`/`¶¶`; `§`/`§§`. If no
locator term is used, "page" is assumed.

`pandoc` will use heuristics to distinguish the locator
from the suffix. In complex cases, the locator can be enclosed
in curly braces:

    [@smith{ii, A, D-Z}, with a suffix]
    [@smith, {pp. iv, vi-xi, (xv)-(xvii)} with suffix here]

A minus sign (`-`) before the `@` will suppress mention of
the author in the citation.  This can be useful when the
author is already mentioned in the text:

    Smith says blah [-@smith04].

You can also write an in-text citation, as follows:

    @smith04 says blah.

    @smith04 [p. 33] says blah.


[CSL]: https://docs.citationstyles.org/en/stable/specification.html
[CSL markup specs]: https://docs.citationstyles.org/en/1.0/release-notes.html#rich-text-markup-within-fields
[Chicago Manual of Style]: https://chicagomanualofstyle.org
[Citation Style Language]: https://citationstyles.org
[Zotero Style Repository]: https://www.zotero.org/styles
[finding and editing styles]: https://citationstyles.org/authors/
[CSL locale files]: https://github.com/citation-style-language/locales
