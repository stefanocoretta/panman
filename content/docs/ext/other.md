---
title: "Other extensions"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "ext"
weight: 310
toc: true
---

#### Extension: `empty_paragraphs` ####

Allows empty paragraphs.  By default empty paragraphs are
omitted.

This extension can be enabled/disabled for the following formats:

input formats
:  `docx`, `html`

output formats
:  `docx`, `odt`, `opendocument`, `html`

#### Extension: `native_numbering` ####

Enables native numbering of figures and tables. Enumeration
starts at 1.

This extension can be enabled/disabled for the following formats:

output formats
:  `odt`, `opendocument`

#### Extension: `xrefs_name` ####

Links to headings, figures and tables inside the document are
substituted with cross-references that will use the name or caption
of the referenced item. The original link text is replaced once
the generated document is refreshed. This extension can be combined
with `xrefs_number` in which case numbers will appear before the
name.

Text in cross-references is only made consistent with the referenced
item once the document has been refreshed.

This extension can be enabled/disabled for the following formats:

output formats
:  `odt`, `opendocument`

#### Extension: `xrefs_number` ####

Links to headings, figures and tables inside the document are
substituted with cross-references that will use the number
of the referenced item. The original link text is discarded.
This extension can be combined with `xrefs_name` in which case
the name or caption numbers will appear after the number.

For the `xrefs_number` to be useful heading numbers must be enabled
in the generated document, also table and figure captions must be enabled
using for example the `native_numbering` extension.

Numbers in cross-references are only visible in the final document once
it has been refreshed.

This extension can be enabled/disabled for the following formats:

output formats
:  `odt`, `opendocument`

#### Extension: `styles` #### {#ext-styles}

When converting from docx, read all docx styles as divs (for
paragraph styles) and spans (for character styles) regardless
of whether pandoc understands the meaning of these styles.
This can be used with [docx custom styles](#custom-styles).
Disabled by default.

input formats
:  `docx`

#### Extension: `amuse` ####

In the `muse` input format, this enables Text::Amuse
extensions to Emacs Muse markup.

#### Extension: `raw_markdown` ####

In the `ipynb` input format, this causes Markdown cells
to be included as raw Markdown blocks (allowing lossless
round-tripping) rather than being parsed.  Use this only
when you are targeting `ipynb` or a markdown-based
output format.

#### Extension: `citations` {#org-citations}

Some aspects of [Pandoc's Markdown citation syntax](#citations)
are also accepted in `org` input.

#### Extension: `ntb` ####

In the `context` output format this enables the use of [Natural Tables
(TABLE)](https://wiki.contextgarden.net/TABLE) instead of the default
[Extreme Tables (xtables)](https://wiki.contextgarden.net/xtables).
Natural tables allow more fine-grained global customization but come
at a performance penalty compared to extreme tables.
