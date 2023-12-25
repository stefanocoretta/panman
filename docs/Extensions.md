# Extensions

The behavior of some of the readers and writers can be adjusted by
enabling or disabling various extensions.

An extension can be enabled by adding `+EXTENSION` to the format name
and disabled by adding `-EXTENSION`. For example,
`--from markdown_strict+footnotes` is strict Markdown with footnotes
enabled, while `--from markdown-footnotes-pipe_tables` is pandoc’s
Markdown without footnotes or pipe tables.

The markdown reader and writer make by far the most use of extensions.
Extensions only used by them are therefore covered in the section
[Pandoc’s Markdown](#pandocs-markdown) below (see [Markdown
variants](#markdown-variants) for `commonmark` and `gfm`). In the
following, extensions that also work for other formats are covered.

Note that markdown extensions added to the `ipynb` format affect
Markdown cells in Jupyter notebooks (as do command-line options like
`--markdown-headings`).

## Typography

#### Extension: `smart`

Interpret straight quotes as curly quotes, `---` as em-dashes, `--` as
en-dashes, and `...` as ellipses. Nonbreaking spaces are inserted after
certain abbreviations, such as “Mr.”

This extension can be enabled/disabled for the following formats:

input formats  
`markdown`, `commonmark`, `latex`, `mediawiki`, `org`, `rst`, `twiki`,
`html`

output formats  
`markdown`, `latex`, `context`, `rst`

enabled by default in  
`markdown`, `latex`, `context` (both input and output)

Note: If you are *writing* Markdown, then the `smart` extension has the
reverse effect: what would have been curly quotes comes out straight.

In LaTeX, `smart` means to use the standard TeX ligatures for quotation
marks (``` `` ``` and `''` for double quotes, `` ` `` and `'` for single
quotes) and dashes (`--` for en-dash and `---` for em-dash). If `smart`
is disabled, then in reading LaTeX pandoc will parse these characters
literally. In writing LaTeX, enabling `smart` tells pandoc to use the
ligatures when possible; if `smart` is disabled pandoc will use unicode
quotation mark and dash characters.

## Headings and sections

#### Extension: `auto_identifiers`

A heading without an explicitly specified identifier will be
automatically assigned a unique identifier based on the heading text.

This extension can be enabled/disabled for the following formats:

input formats  
`markdown`, `latex`, `rst`, `mediawiki`, `textile`

output formats  
`markdown`, `muse`

enabled by default in  
`markdown`, `muse`

The default algorithm used to derive the identifier from the heading
text is:

- Remove all formatting, links, etc.
- Remove all footnotes.
- Remove all non-alphanumeric characters, except underscores, hyphens,
  and periods.
- Replace all spaces and newlines with hyphens.
- Convert all alphabetic characters to lowercase.
- Remove everything up to the first letter (identifiers may not begin
  with a number or punctuation mark).
- If nothing is left after this, use the identifier `section`.

Thus, for example,

<table>
<thead>
<tr class="header">
<th style="text-align: left;">Heading</th>
<th style="text-align: left;">Identifier</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td
style="text-align: left;"><code>Heading identifiers in HTML</code></td>
<td
style="text-align: left;"><code>heading-identifiers-in-html</code></td>
</tr>
<tr class="even">
<td style="text-align: left;"><code>Maître d'hôtel</code></td>
<td style="text-align: left;"><code>maître-dhôtel</code></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><code>*Dogs*?--in *my* house?</code></td>
<td style="text-align: left;"><code>dogs--in-my-house</code></td>
</tr>
<tr class="even">
<td style="text-align: left;"><code>[HTML], [S5], or [RTF]?</code></td>
<td style="text-align: left;"><code>html-s5-or-rtf</code></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><code>3. Applications</code></td>
<td style="text-align: left;"><code>applications</code></td>
</tr>
<tr class="even">
<td style="text-align: left;"><code>33</code></td>
<td style="text-align: left;"><code>section</code></td>
</tr>
</tbody>
</table>

These rules should, in most cases, allow one to determine the identifier
from the heading text. The exception is when several headings have the
same text; in this case, the first will get an identifier as described
above; the second will get the same identifier with `-1` appended; the
third with `-2`; and so on.

(However, a different algorithm is used if `gfm_auto_identifiers` is
enabled; see below.)

These identifiers are used to provide link targets in the table of
contents generated by the `--toc|--table-of-contents` option. They also
make it easy to provide links from one section of a document to another.
A link to this section, for example, might look like this:

    See the section on
    [heading identifiers](#heading-identifiers-in-html-latex-and-context).

Note, however, that this method of providing links to sections works
only in HTML, LaTeX, and ConTeXt formats.

If the `--section-divs` option is specified, then each section will be
wrapped in a `section` (or a `div`, if `html4` was specified), and the
identifier will be attached to the enclosing `<section>` (or `<div>`)
tag rather than the heading itself. This allows entire sections to be
manipulated using JavaScript or treated differently in CSS.

#### Extension: `ascii_identifiers`

Causes the identifiers produced by `auto_identifiers` to be pure ASCII.
Accents are stripped off of accented Latin letters, and non-Latin
letters are omitted.

#### Extension: `gfm_auto_identifiers`

Changes the algorithm used by `auto_identifiers` to conform to GitHub’s
method. Spaces are converted to dashes (`-`), uppercase characters to
lowercase characters, and punctuation characters other than `-` and `_`
are removed. Emojis are replaced by their names.

## Math Input

The extensions [`tex_math_dollars`](#extension-tex_math_dollars),
[`tex_math_gfm`](#extension-tex_math_gfm),
[`tex_math_single_backslash`](#extension-tex_math_single_backslash), and
[`tex_math_double_backslash`](#extension-tex_math_double_backslash) are
described in the section about Pandoc’s Markdown.

However, they can also be used with HTML input. This is handy for
reading web pages formatted using MathJax, for example.

## Raw HTML/TeX

The following extensions are described in more detail in their
respective sections of [Pandoc’s Markdown](#pandocs-markdown):

- [`raw_html`](#extension-raw_html) allows HTML elements which are not
  representable in pandoc’s AST to be parsed as raw HTML. By default,
  this is disabled for HTML input.

- [`raw_tex`](#extension-raw_tex) allows raw LaTeX, TeX, and ConTeXt to
  be included in a document. This extension can be enabled/disabled for
  the following formats (in addition to `markdown`):

  input formats  
  `latex`, `textile`, `html` (environments, `\ref`, and `\eqref` only),
  `ipynb`

  output formats  
  `textile`, `commonmark`

  Note: as applied to `ipynb`, `raw_html` and `raw_tex` affect not only
  raw TeX in markdown cells, but data with mime type `text/html` in
  output cells. Since the `ipynb` reader attempts to preserve the
  richest possible outputs when several options are given, you will get
  best results if you disable `raw_html` and `raw_tex` when converting
  to formats like `docx` which don’t allow raw `html` or `tex`.

- [`native_divs`](#extension-native_divs) causes HTML `div` elements to
  be parsed as native pandoc Div blocks. If you want them to be parsed
  as raw HTML, use `-f html-native_divs+raw_html`.

- [`native_spans`](#extension-native_spans) causes HTML `span` elements
  to be parsed as native pandoc Span inlines. If you want them to be
  parsed as raw HTML, use `-f html-native_spans+raw_html`. If you want
  to drop all `div`s and `span`s when converting HTML to Markdown, you
  can use `pandoc -f html-native_divs-native_spans -t markdown`.

## Literate Haskell support

#### Extension: `literate_haskell`

Treat the document as literate Haskell source.

This extension can be enabled/disabled for the following formats:

input formats  
`markdown`, `rst`, `latex`

output formats  
`markdown`, `rst`, `latex`, `html`

If you append `+lhs` (or `+literate_haskell`) to one of the formats
above, pandoc will treat the document as literate Haskell source. This
means that

- In Markdown input, “bird track” sections will be parsed as Haskell
  code rather than block quotations. Text between `\begin{code}` and
  `\end{code}` will also be treated as Haskell code. For ATX-style
  headings the character ‘=’ will be used instead of ‘\#’.

- In Markdown output, code blocks with classes `haskell` and `literate`
  will be rendered using bird tracks, and block quotations will be
  indented one space, so they will not be treated as Haskell code. In
  addition, headings will be rendered setext-style (with underlines)
  rather than ATX-style (with ‘\#’ characters). (This is because ghc
  treats ‘\#’ characters in column 1 as introducing line numbers.)

- In restructured text input, “bird track” sections will be parsed as
  Haskell code.

- In restructured text output, code blocks with class `haskell` will be
  rendered using bird tracks.

- In LaTeX input, text in `code` environments will be parsed as Haskell
  code.

- In LaTeX output, code blocks with class `haskell` will be rendered
  inside `code` environments.

- In HTML output, code blocks with class `haskell` will be rendered with
  class `literatehaskell` and bird tracks.

Examples:

    pandoc -f markdown+lhs -t html

reads literate Haskell source formatted with Markdown conventions and
writes ordinary HTML (without bird tracks).

    pandoc -f markdown+lhs -t html+lhs

writes HTML with the Haskell code in bird tracks, so it can be copied
and pasted as literate Haskell source.

Note that GHC expects the bird tracks in the first column, so indented
literate code blocks (e.g. inside an itemized environment) will not be
picked up by the Haskell compiler.

## Other extensions

#### Extension: `empty_paragraphs`

Allows empty paragraphs. By default empty paragraphs are omitted.

This extension can be enabled/disabled for the following formats:

input formats  
`docx`, `html`

output formats  
`docx`, `odt`, `opendocument`, `html`

#### Extension: `native_numbering`

Enables native numbering of figures and tables. Enumeration starts at 1.

This extension can be enabled/disabled for the following formats:

output formats  
`odt`, `opendocument`, `docx`

#### Extension: `xrefs_name`

Links to headings, figures and tables inside the document are
substituted with cross-references that will use the name or caption of
the referenced item. The original link text is replaced once the
generated document is refreshed. This extension can be combined with
`xrefs_number` in which case numbers will appear before the name.

Text in cross-references is only made consistent with the referenced
item once the document has been refreshed.

This extension can be enabled/disabled for the following formats:

output formats  
`odt`, `opendocument`

#### Extension: `xrefs_number`

Links to headings, figures and tables inside the document are
substituted with cross-references that will use the number of the
referenced item. The original link text is discarded. This extension can
be combined with `xrefs_name` in which case the name or caption numbers
will appear after the number.

For the `xrefs_number` to be useful heading numbers must be enabled in
the generated document, also table and figure captions must be enabled
using for example the `native_numbering` extension.

Numbers in cross-references are only visible in the final document once
it has been refreshed.

This extension can be enabled/disabled for the following formats:

output formats  
`odt`, `opendocument`

#### Extension: `styles`

When converting from docx, read all docx styles as divs (for paragraph
styles) and spans (for character styles) regardless of whether pandoc
understands the meaning of these styles. This can be used with [docx
custom styles](#custom-styles). Disabled by default.

input formats  
`docx`

#### Extension: `amuse`

In the `muse` input format, this enables Text::Amuse extensions to Emacs
Muse markup.

#### Extension: `raw_markdown`

In the `ipynb` input format, this causes Markdown cells to be included
as raw Markdown blocks (allowing lossless round-tripping) rather than
being parsed. Use this only when you are targeting `ipynb` or a
markdown-based output format.

#### Extension: `citations`

When the `citations` extension is enabled in `org`, org-cite and org-ref
style citations will be parsed as native pandoc citations.

When `citations` is enabled in `docx`, citations inserted by Zotero or
Mendeley or EndNote plugins will be parsed as native pandoc citations.
(Otherwise, the formatted citations generated by the bibliographic
software will be parsed as regular text.)

#### Extension: `fancy_lists`

Some aspects of [Pandoc’s Markdown fancy lists](#extension-fancy_lists)
are also accepted in `org` input, mimicking the option
`org-list-allow-alphabetical` in Emacs. As in Org Mode, enabling this
extension allows lowercase and uppercase alphabetical markers for
ordered lists to be parsed in addition to arabic ones. Note that for
Org, this does not include roman numerals or the `#` placeholder that
are enabled by the extension in Pandoc’s Markdown.

#### Extension: `element_citations`

In the `jats` output formats, this causes reference items to be replaced
with `<element-citation>` elements. These elements are not influenced by
CSL styles, but all information on the item is included in tags.

#### Extension: `ntb`

In the `context` output format this enables the use of [Natural Tables
(TABLE)](https://wiki.contextgarden.net/TABLE) instead of the default
[Extreme Tables (xtables)](https://wiki.contextgarden.net/xtables).
Natural tables allow more fine-grained global customization but come at
a performance penalty compared to extreme tables.

#### Extension: `tagging`

Enabling this extension with `context` output will produce markup
suitable for the production of tagged PDFs. This includes additional
markers for paragraphs and alternative markup for emphasized text. The
`emphasis-command` template variable is set if the extension is enabled.
