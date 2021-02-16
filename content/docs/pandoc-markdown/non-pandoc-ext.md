---
title: "Non-pandoc extensions"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "pandoc-markdown"
weight: 520
toc: true
---

The following Markdown syntax extensions are not enabled by default
in pandoc, but may be enabled by adding `+EXTENSION` to the format
name, where `EXTENSION` is the name of the extension.  Thus, for
example, `markdown+hard_line_breaks` is Markdown with hard line breaks.

#### Extension: `attributes` ####

Allows attributes to be attached to any inline or block-level
element.  The syntax for the attributes is the same as that
used in [`header_attributes`][Extension: `header_attributes`].

- Attributes that occur immediately after an inline
  element affect that element.  If they follow a space, then they
  belong to the space.  (Hence, this option subsumes
  `inline_code_attributes` and `link_attributes`.)
- Attributes that occur immediately before a block
  element, on a line by themselves, affect that
  element.
- Consecutive attribute specifiers may be used,
  either for blocks or for inlines.  Their attributes
  will be combined.
- Attributes that occur at the end of the text of
  a Setext or ATX heading (separated by whitespace
  from the text) affect the heading element. (Hence, this
  option subsumes `header_attributes`.)
- Attributes that occur after the opening fence
  in a fenced code block affect the code block element. (Hence,
  this option subsumes `fenced_code_attributes`.)
- Attributes that occur at the end of a reference
  link definition affect links that refer to that
  definition.

Note that pandoc's AST does not currently allow attributes
to be attached to arbitrary elements.  Hence a Span or Div
container will be added if needed.

#### Extension: `old_dashes` ####

Selects the pandoc <= 1.8.2.1 behavior for parsing smart dashes:
`-` before a numeral is an en-dash, and `--` is an em-dash.
This option only has an effect if `smart` is enabled. It is
selected automatically for `textile` input.

#### Extension: `angle_brackets_escapable` ####

Allow `<` and `>` to be backslash-escaped, as they can be in
GitHub flavored Markdown but not original Markdown.  This is
implied by pandoc's default `all_symbols_escapable`.

#### Extension: `lists_without_preceding_blankline` ####

Allow a list to occur right after a paragraph, with no intervening
blank space.

#### Extension: `four_space_rule` ####

Selects the pandoc <= 2.0 behavior for parsing lists, so that
four spaces indent are needed for list item continuation
paragraphs.

#### Extension: `spaced_reference_links` ####

Allow whitespace between the two components of a reference link,
for example,

    [foo] [bar].

#### Extension: `hard_line_breaks` ####

Causes all newlines within a paragraph to be interpreted as hard line
breaks instead of spaces.

#### Extension: `ignore_line_breaks` ####

Causes newlines within a paragraph to be ignored, rather than being
treated as spaces or as hard line breaks.  This option is intended for
use with East Asian languages where spaces are not used between words,
but text is divided into lines for readability.

#### Extension: `east_asian_line_breaks` ####

Causes newlines within a paragraph to be ignored, rather than
being treated as spaces or as hard line breaks, when they occur
between two East Asian wide characters.  This is a better choice
than `ignore_line_breaks` for texts that include a mix of East
Asian wide characters and other characters.

#### Extension: `emoji` ####

Parses textual emojis like `:smile:` as Unicode emoticons.

#### Extension: `tex_math_single_backslash` ####

Causes anything between `\(` and `\)` to be interpreted as inline
TeX math, and anything between `\[` and `\]` to be interpreted
as display TeX math.  Note: a drawback of this extension is that
it precludes escaping `(` and `[`.

#### Extension: `tex_math_double_backslash` ####

Causes anything between `\\(` and `\\)` to be interpreted as inline
TeX math, and anything between `\\[` and `\\]` to be interpreted
as display TeX math.

#### Extension: `markdown_attribute` ####

By default, pandoc interprets material inside block-level tags as Markdown.
This extension changes the behavior so that Markdown is only parsed
inside block-level tags if the tags have the attribute `markdown=1`.

#### Extension: `mmd_title_block` ####

Enables a [MultiMarkdown] style title block at the top of
the document, for example:

    Title:   My title
    Author:  John Doe
    Date:    September 1, 2008
    Comment: This is a sample mmd title block, with
             a field spanning multiple lines.

See the MultiMarkdown documentation for details.  If `pandoc_title_block` or
`yaml_metadata_block` is enabled, it will take precedence over
`mmd_title_block`.

#### Extension: `abbreviations` ####

Parses PHP Markdown Extra abbreviation keys, like

    *[HTML]: Hypertext Markup Language

Note that the pandoc document model does not support
abbreviations, so if this extension is enabled, abbreviation keys are
simply skipped (as opposed to being parsed as paragraphs).

#### Extension: `autolink_bare_uris` ####

Makes all absolute URIs into links, even when not surrounded by
pointy braces `<...>`.

#### Extension: `mmd_link_attributes` ####

Parses multimarkdown style key-value attributes on link
and image references. This extension should not be confused with the
[`link_attributes`](#extension-link_attributes) extension.

    This is a reference ![image][ref] with multimarkdown attributes.

    [ref]: https://path.to/image "Image title" width=20px height=30px
           id=myId class="myClass1 myClass2"

#### Extension: `mmd_header_identifiers` ####

Parses multimarkdown style heading identifiers (in square brackets,
after the heading but before any trailing `#`s in an ATX heading).

#### Extension: `compact_definition_lists` ####

Activates the definition list syntax of pandoc 1.12.x and earlier.
This syntax differs from the one described above under [Definition lists]
in several respects:

  - No blank line is required between consecutive items of the
    definition list.
  - To get a "tight" or "compact" list, omit space between consecutive
    items; the space between a term and its definition does not affect
    anything.
  - Lazy wrapping of paragraphs is not allowed:  the entire definition must
    be indented four spaces.[^6]

[^6]:  To see why laziness is incompatible with relaxing the requirement
    of a blank line between items, consider the following example:

        bar
        :    definition
        foo
        :    definition

    Is this a single list item with two definitions of "bar," the first of
    which is lazily wrapped, or two list items?  To remove the ambiguity
    we must either disallow lazy wrapping or require a blank line between
    list items.

#### Extension: `gutenberg` ####

Use [Project Gutenberg] conventions for `plain` output:
all-caps for strong emphasis, surround by underscores
for regular emphasis, add extra blank space around headings.

  [Project Gutenberg]: https://www.gutenberg.org

#### Extension: `sourcepos` ####

Include source position attributes when parsing `commonmark`.
For elements that accept attributes, a `data-pos` attribute
is added; other elements are placed in a surrounding
Div or Span elemnet with a `data-pos` attribute.
