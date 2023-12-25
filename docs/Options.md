# Options

## General options

`-f` *FORMAT*, `-r` *FORMAT*, `--from=`*FORMAT*, `--read=`*FORMAT*  
Specify input format. *FORMAT* can be:

<div id="input-formats">

- `bibtex` ([BibTeX](https://ctan.org/pkg/bibtex) bibliography)
- `biblatex` ([BibLaTeX](https://ctan.org/pkg/biblatex) bibliography)
- `bits` ([BITS](https://jats.nlm.nih.gov/extensions/bits/) XML, alias
  for `jats`)
- `commonmark` ([CommonMark](https://commonmark.org) Markdown)
- `commonmark_x` ([CommonMark](https://commonmark.org) Markdown with
  extensions)
- `creole` ([Creole 1.0](http://www.wikicreole.org/wiki/Creole1.0))
- `csljson` ([CSL
  JSON](https://citeproc-js.readthedocs.io/en/latest/csl-json/markup.html)
  bibliography)
- `csv` ([CSV](https://tools.ietf.org/html/rfc4180) table)
- `tsv`
  ([TSV](https://www.iana.org/assignments/media-types/text/tab-separated-values)
  table)
- `docbook` ([DocBook](https://docbook.org))
- `docx` ([Word docx](https://en.wikipedia.org/wiki/Office_Open_XML))
- `dokuwiki` ([DokuWiki markup](https://www.dokuwiki.org/dokuwiki))
- `endnotexml` ([EndNote XML
  bibliography](https://support.clarivate.com/Endnote/s/article/EndNote-XML-Document-Type-Definition))
- `epub` ([EPUB](http://idpf.org/epub))
- `fb2`
  ([FictionBook2](http://www.fictionbook.org/index.php/Eng:XML_Schema_Fictionbook_2.1)
  e-book)
- `gfm` ([GitHub-Flavored
  Markdown](https://help.github.com/articles/github-flavored-markdown/)),
  or the deprecated and less accurate `markdown_github`; use
  [`markdown_github`](#markdown-variants) only if you need extensions
  not supported in [`gfm`](#markdown-variants).
- `haddock` ([Haddock
  markup](https://www.haskell.org/haddock/doc/html/ch03s08.html))
- `html` ([HTML](https://www.w3.org/html/))
- `ipynb` ([Jupyter
  notebook](https://nbformat.readthedocs.io/en/latest/))
- `jats` ([JATS](https://jats.nlm.nih.gov) XML)
- `jira`
  ([Jira](https://jira.atlassian.com/secure/WikiRendererHelpAction.jspa?section=all)/Confluence
  wiki markup)
- `json` (JSON version of native AST)
- `latex` ([LaTeX](https://www.latex-project.org/))
- `markdown` ([Pandoc’s Markdown](#pandocs-markdown))
- `markdown_mmd`
  ([MultiMarkdown](https://fletcherpenney.net/multimarkdown/))
- `markdown_phpextra` ([PHP Markdown
  Extra](https://michelf.ca/projects/php-markdown/extra/))
- `markdown_strict` (original unextended
  [Markdown](https://daringfireball.net/projects/markdown/))
- `mediawiki` ([MediaWiki
  markup](https://www.mediawiki.org/wiki/Help:Formatting))
- `man` ([roff man](https://man.cx/groff_man(7)))
- `muse` ([Muse](https://amusewiki.org/library/manual))
- `native` (native Haskell)
- `odt` ([ODT](https://en.wikipedia.org/wiki/OpenDocument))
- `opml` ([OPML](http://dev.opml.org/spec2.html))
- `org` ([Emacs Org mode](https://orgmode.org))
- `ris` ([RIS](https://en.wikipedia.org/wiki/RIS_(file_format))
  bibliography)
- `rtf` ([Rich Text
  Format](https://en.wikipedia.org/wiki/Rich_Text_Format))
- `rst`
  ([reStructuredText](https://docutils.sourceforge.io/docs/ref/rst/introduction.html))
- `t2t` ([txt2tags](https://txt2tags.org))
- `textile` ([Textile](https://textile-lang.com))
- `tikiwiki` ([TikiWiki
  markup](https://doc.tiki.org/Wiki-Syntax-Text#The_Markup_Language_Wiki-Syntax))
- `twiki` ([TWiki
  markup](https://twiki.org/cgi-bin/view/TWiki/TextFormattingRules))
- `typst` ([typst](https://typst.app))
- `vimwiki` ([Vimwiki](https://vimwiki.github.io))
- the path of a custom Lua reader, see [Custom readers and
  writers](#custom-readers-and-writers) below

</div>

Extensions can be individually enabled or disabled by appending
`+EXTENSION` or `-EXTENSION` to the format name. See
[Extensions](#extensions) below, for a list of extensions and their
names. See `--list-input-formats` and `--list-extensions`, below.

`-t` *FORMAT*, `-w` *FORMAT*, `--to=`*FORMAT*, `--write=`*FORMAT*  
Specify output format. *FORMAT* can be:

<div id="output-formats">

- `asciidoc` (modern [AsciiDoc](https://www.methods.co.nz/asciidoc/) as
  interpreted by [AsciiDoctor](https://asciidoctor.org/))
- `asciidoc_legacy` ([AsciiDoc](https://www.methods.co.nz/asciidoc/) as
  interpreted by
  [`asciidoc-py`](https://github.com/asciidoc-py/asciidoc-py)).
- `asciidoctor` (deprecated synonym for `asciidoc`)
- `beamer` ([LaTeX beamer](https://ctan.org/pkg/beamer) slide show)
- `bibtex` ([BibTeX](https://ctan.org/pkg/bibtex) bibliography)
- `biblatex` ([BibLaTeX](https://ctan.org/pkg/biblatex) bibliography)
- `chunkedhtml` (zip archive of multiple linked HTML files)
- `commonmark` ([CommonMark](https://commonmark.org) Markdown)
- `commonmark_x` ([CommonMark](https://commonmark.org) Markdown with
  extensions)
- `context` ([ConTeXt](https://www.contextgarden.net/))
- `csljson` ([CSL
  JSON](https://citeproc-js.readthedocs.io/en/latest/csl-json/markup.html)
  bibliography)
- `docbook` or `docbook4` ([DocBook](https://docbook.org) 4)
- `docbook5` (DocBook 5)
- `docx` ([Word docx](https://en.wikipedia.org/wiki/Office_Open_XML))
- `dokuwiki` ([DokuWiki markup](https://www.dokuwiki.org/dokuwiki))
- `epub` or `epub3` ([EPUB](http://idpf.org/epub) v3 book)
- `epub2` (EPUB v2)
- `fb2`
  ([FictionBook2](http://www.fictionbook.org/index.php/Eng:XML_Schema_Fictionbook_2.1)
  e-book)
- `gfm` ([GitHub-Flavored
  Markdown](https://help.github.com/articles/github-flavored-markdown/)),
  or the deprecated and less accurate `markdown_github`; use
  [`markdown_github`](#markdown-variants) only if you need extensions
  not supported in [`gfm`](#markdown-variants).
- `haddock` ([Haddock
  markup](https://www.haskell.org/haddock/doc/html/ch03s08.html))
- `html` or `html5` ([HTML](https://www.w3.org/html/),
  i.e. [HTML5](https://html.spec.whatwg.org/)/XHTML [polyglot
  markup](https://www.w3.org/TR/html-polyglot/))
- `html4` ([XHTML](https://www.w3.org/TR/xhtml1/) 1.0 Transitional)
- `icml` ([InDesign
  ICML](https://wwwimages.adobe.com/www.adobe.com/content/dam/acom/en/devnet/indesign/sdk/cs6/idml/idml-cookbook.pdf))
- `ipynb` ([Jupyter
  notebook](https://nbformat.readthedocs.io/en/latest/))
- `jats_archiving` ([JATS](https://jats.nlm.nih.gov) XML, Archiving and
  Interchange Tag Set)
- `jats_articleauthoring` ([JATS](https://jats.nlm.nih.gov) XML, Article
  Authoring Tag Set)
- `jats_publishing` ([JATS](https://jats.nlm.nih.gov) XML, Journal
  Publishing Tag Set)
- `jats` (alias for `jats_archiving`)
- `jira`
  ([Jira](https://jira.atlassian.com/secure/WikiRendererHelpAction.jspa?section=all)/Confluence
  wiki markup)
- `json` (JSON version of native AST)
- `latex` ([LaTeX](https://www.latex-project.org/))
- `man` ([roff man](https://man.cx/groff_man(7)))
- `markdown` ([Pandoc’s Markdown](#pandocs-markdown))
- `markdown_mmd`
  ([MultiMarkdown](https://fletcherpenney.net/multimarkdown/))
- `markdown_phpextra` ([PHP Markdown
  Extra](https://michelf.ca/projects/php-markdown/extra/))
- `markdown_strict` (original unextended
  [Markdown](https://daringfireball.net/projects/markdown/))
- `markua` ([Markua](https://leanpub.com/markua/read))
- `mediawiki` ([MediaWiki
  markup](https://www.mediawiki.org/wiki/Help:Formatting))
- `ms` ([roff ms](https://man.cx/groff_ms(7)))
- `muse` ([Muse](https://amusewiki.org/library/manual))
- `native` (native Haskell)
- `odt` ([OpenOffice text
  document](https://en.wikipedia.org/wiki/OpenDocument))
- `opml` ([OPML](http://dev.opml.org/spec2.html))
- `opendocument` ([OpenDocument](http://opendocument.xml.org))
- `org` ([Emacs Org mode](https://orgmode.org))
- `pdf` ([PDF](https://www.adobe.com/pdf/))
- `plain` (plain text)
- `pptx`
  ([PowerPoint](https://en.wikipedia.org/wiki/Microsoft_PowerPoint)
  slide show)
- `rst`
  ([reStructuredText](https://docutils.sourceforge.io/docs/ref/rst/introduction.html))
- `rtf` ([Rich Text
  Format](https://en.wikipedia.org/wiki/Rich_Text_Format))
- `texinfo` ([GNU Texinfo](https://www.gnu.org/software/texinfo/))
- `textile` ([Textile](https://textile-lang.com))
- `slideous` ([Slideous](https://goessner.net/articles/slideous/) HTML
  and JavaScript slide show)
- `slidy` ([Slidy](https://www.w3.org/Talks/Tools/Slidy2/) HTML and
  JavaScript slide show)
- `dzslides` ([DZSlides](https://paulrouget.com/dzslides/) HTML5 +
  JavaScript slide show)
- `revealjs` ([reveal.js](https://revealjs.com/) HTML5 + JavaScript
  slide show)
- `s5` ([S5](https://meyerweb.com/eric/tools/s5/) HTML and JavaScript
  slide show)
- `tei` ([TEI Simple](https://github.com/TEIC/TEI-Simple))
- `typst` ([typst](https://typst.app))
- `xwiki` ([XWiki
  markup](https://www.xwiki.org/xwiki/bin/view/Documentation/UserGuide/Features/XWikiSyntax/))
- `zimwiki` ([ZimWiki
  markup](https://zim-wiki.org/manual/Help/Wiki_Syntax.html))
- the path of a custom Lua writer, see [Custom readers and
  writers](#custom-readers-and-writers) below

</div>

Note that `odt`, `docx`, `epub`, and `pdf` output will not be directed
to *stdout* unless forced with `-o -`.

Extensions can be individually enabled or disabled by appending
`+EXTENSION` or `-EXTENSION` to the format name. See
[Extensions](#extensions) below, for a list of extensions and their
names. See `--list-output-formats` and `--list-extensions`, below.

`-o` *FILE*, `--output=`*FILE*  
Write output to *FILE* instead of *stdout*. If *FILE* is `-`, output
will go to *stdout*, even if a non-textual format (`docx`, `odt`,
`epub2`, `epub3`) is specified. If the output format is `chunkedhtml`
and *FILE* has no extension, then instead of producing a `.zip` file
pandoc will create a directory *FILE* and unpack the zip archive there
(unless *FILE* already exists, in which case an error will be raised).

`--data-dir=`*DIRECTORY*  
Specify the user data directory to search for pandoc data files. If this
option is not specified, the default user data directory will be used.
On \*nix and macOS systems this will be the `pandoc` subdirectory of the
XDG data directory (by default, `$HOME/.local/share`, overridable by
setting the `XDG_DATA_HOME` environment variable). If that directory
does not exist and `$HOME/.pandoc` exists, it will be used (for
backwards compatibility). On Windows the default user data directory is
`%APPDATA%\pandoc`. You can find the default user data directory on your
system by looking at the output of `pandoc --version`. Data files placed
in this directory (for example, `reference.odt`, `reference.docx`,
`epub.css`, `templates`) will override pandoc’s normal defaults. (Note
that the user data directory is not created by pandoc, so you will need
to create it yourself if you want to make use of it.)

`-d` *FILE*, `--defaults=`*FILE*  
Specify a set of default option settings. *FILE* is a YAML file whose
fields correspond to command-line option settings. All options for
document conversion, including input and output files, can be set using
a defaults file. The file will be searched for first in the working
directory, and then in the `defaults` subdirectory of the user data
directory (see `--data-dir`). The `.yaml` extension may be omitted. See
the section [Defaults files](#defaults-files) for more information on
the file format. Settings from the defaults file may be overridden or
extended by subsequent options on the command line.

`--bash-completion`  
Generate a bash completion script. To enable bash completion with
pandoc, add this to your `.bashrc`:

    eval "$(pandoc --bash-completion)"

`--verbose`  
Give verbose debugging output.

`--quiet`  
Suppress warning messages.

`--fail-if-warnings[=true|false]`  
Exit with error status if there are any warnings.

`--log=`*FILE*  
Write log messages in machine-readable JSON format to *FILE*. All
messages above DEBUG level will be written, regardless of verbosity
settings (`--verbose`, `--quiet`).

`--list-input-formats`  
List supported input formats, one per line.

`--list-output-formats`  
List supported output formats, one per line.

`--list-extensions`\[`=`*FORMAT*\]  
List supported extensions for *FORMAT*, one per line, preceded by a `+`
or `-` indicating whether it is enabled by default in *FORMAT*. If
*FORMAT* is not specified, defaults for pandoc’s Markdown are given.

`--list-highlight-languages`  
List supported languages for syntax highlighting, one per line.

`--list-highlight-styles`  
List supported styles for syntax highlighting, one per line. See
`--highlight-style`.

`-v`, `--version`  
Print version.

`-h`, `--help`  
Show usage message.

## Reader options

`--shift-heading-level-by=`*NUMBER*  
Shift heading levels by a positive or negative integer. For example,
with `--shift-heading-level-by=-1`, level 2 headings become level 1
headings, and level 3 headings become level 2 headings. Headings cannot
have a level less than 1, so a heading that would be shifted below level
1 becomes a regular paragraph. Exception: with a shift of -N, a level-N
heading at the beginning of the document replaces the metadata title.
`--shift-heading-level-by=-1` is a good choice when converting HTML or
Markdown documents that use an initial level-1 heading for the document
title and level-2+ headings for sections. `--shift-heading-level-by=1`
may be a good choice for converting Markdown documents that use level-1
headings for sections to HTML, since pandoc uses a level-1 heading to
render the document title.

`--base-header-level=`*NUMBER*  
*Deprecated. Use `--shift-heading-level-by`=X instead, where X =
NUMBER - 1.* Specify the base level for headings (defaults to 1).

`--indented-code-classes=`*CLASSES*  
Specify classes to use for indented code blocks–for example,
`perl,numberLines` or `haskell`. Multiple classes may be separated by
spaces or commas.

`--default-image-extension=`*EXTENSION*  
Specify a default extension to use when image paths/URLs have no
extension. This allows you to use the same source for formats that
require different kinds of images. Currently this option only affects
the Markdown and LaTeX readers.

`--file-scope[=true|false]`  
Parse each file individually before combining for multifile documents.
This will allow footnotes in different files with the same identifiers
to work as expected. If this option is set, footnotes and links will not
work across files. Reading binary files (docx, odt, epub) implies
`--file-scope`.

If two or more files are processed using `--file-scope`, prefixes based
on the filenames will be added to identifiers in order to disambiguate
them, and internal links will be adjusted accordingly. For example, a
header with identifier `foo` in `subdir/file1.txt` will have its
identifier changed to `subdir__file1.txt__foo`.

In addition, a Div with an identifier based on the filename will be
added around the file’s content, so that internal links to the filename
will point to this Div’s identifier.

`-F` *PROGRAM*, `--filter=`*PROGRAM*  
Specify an executable to be used as a filter transforming the pandoc AST
after the input is parsed and before the output is written. The
executable should read JSON from stdin and write JSON to stdout. The
JSON must be formatted like pandoc’s own JSON input and output. The name
of the output format will be passed to the filter as the first argument.
Hence,

    pandoc --filter ./caps.py -t latex

is equivalent to

    pandoc -t json | ./caps.py latex | pandoc -f json -t latex

The latter form may be useful for debugging filters.

Filters may be written in any language. `Text.Pandoc.JSON` exports
`toJSONFilter` to facilitate writing filters in Haskell. Those who would
prefer to write filters in python can use the module
[`pandocfilters`](https://github.com/jgm/pandocfilters), installable
from PyPI. There are also pandoc filter libraries in
[PHP](https://github.com/vinai/pandocfilters-php),
[perl](https://metacpan.org/pod/Pandoc::Filter), and
[JavaScript/node.js](https://github.com/mvhenderson/pandoc-filter-node).

In order of preference, pandoc will look for filters in

1.  a specified full or relative path (executable or non-executable),

2.  `$DATADIR/filters` (executable or non-executable) where `$DATADIR`
    is the user data directory (see `--data-dir`, above),

3.  `$PATH` (executable only).

Filters, Lua-filters, and citeproc processing are applied in the order
specified on the command line.

`-L` *SCRIPT*, `--lua-filter=`*SCRIPT*  
Transform the document in a similar fashion as JSON filters (see
`--filter`), but use pandoc’s built-in Lua filtering system. The given
Lua script is expected to return a list of Lua filters which will be
applied in order. Each Lua filter must contain element-transforming
functions indexed by the name of the AST element on which the filter
function should be applied.

The `pandoc` Lua module provides helper functions for element creation.
It is always loaded into the script’s Lua environment.

See the [Lua filters documentation](https://pandoc.org/lua-filters.html)
for further details.

In order of preference, pandoc will look for Lua filters in

1.  a specified full or relative path,

2.  `$DATADIR/filters` where `$DATADIR` is the user data directory (see
    `--data-dir`, above).

Filters, Lua filters, and citeproc processing are applied in the order
specified on the command line.

`-M` *KEY*\[`=`*VAL*\], `--metadata=`*KEY*\[`:`*VAL*\]  
Set the metadata field *KEY* to the value *VAL*. A value specified on
the command line overrides a value specified in the document using [YAML
metadata blocks](#extension-yaml_metadata_block). Values will be parsed
as YAML boolean or string values. If no value is specified, the value
will be treated as Boolean true. Like `--variable`, `--metadata` causes
template variables to be set. But unlike `--variable`, `--metadata`
affects the metadata of the underlying document (which is accessible
from filters and may be printed in some output formats) and metadata
values will be escaped when inserted into the template.

`--metadata-file=`*FILE*  
Read metadata from the supplied YAML (or JSON) file. This option can be
used with every input format, but string scalars in the metadata file
will always be parsed as Markdown. (If the input format is Markdown or a
Markdown variant, then the same variant will be used to parse the
metadata file; if it is a non-Markdown format, pandoc’s default Markdown
extensions will be used.) This option can be used repeatedly to include
multiple metadata files; values in files specified later on the command
line will be preferred over those specified in earlier files. Metadata
values specified inside the document, or by using `-M`, overwrite values
specified with this option. The file will be searched for first in the
working directory, and then in the `metadata` subdirectory of the user
data directory (see `--data-dir`).

`-p`, `--preserve-tabs[=true|false]`  
Preserve tabs instead of converting them to spaces. (By default, pandoc
converts tabs to spaces before parsing its input.) Note that this will
only affect tabs in literal code spans and code blocks. Tabs in regular
text are always treated as spaces.

`--tab-stop=`*NUMBER*  
Specify the number of spaces per tab (default is 4).

`--track-changes=accept`|`reject`|`all`  
Specifies what to do with insertions, deletions, and comments produced
by the MS Word “Track Changes” feature. `accept` (the default) processes
all the insertions and deletions. `reject` ignores them. Both `accept`
and `reject` ignore comments. `all` includes all insertions, deletions,
and comments, wrapped in spans with `insertion`, `deletion`,
`comment-start`, and `comment-end` classes, respectively. The author and
time of change is included. `all` is useful for scripting: only
accepting changes from a certain reviewer, say, or before a certain
date. If a paragraph is inserted or deleted, `track-changes=all`
produces a span with the class
`paragraph-insertion`/`paragraph-deletion` before the affected paragraph
break. This option only affects the docx reader.

`--extract-media=`*DIR*  
Extract images and other media contained in or linked from the source
document to the path *DIR*, creating it if necessary, and adjust the
images references in the document so they point to the extracted files.
Media are downloaded, read from the file system, or extracted from a
binary container (e.g. docx), as needed. The original file paths are
used if they are relative paths not containing `..`. Otherwise filenames
are constructed from the SHA1 hash of the contents.

`--abbreviations=`*FILE*  
Specifies a custom abbreviations file, with abbreviations one to a line.
If this option is not specified, pandoc will read the data file
`abbreviations` from the user data directory or fall back on a system
default. To see the system default, use
`pandoc --print-default-data-file=abbreviations`. The only use pandoc
makes of this list is in the Markdown reader. Strings found in this list
will be followed by a nonbreaking space, and the period will not produce
sentence-ending space in formats like LaTeX. The strings may not contain
spaces.

`--trace[=true|false]`  
Print diagnostic output tracing parser progress to stderr. This option
is intended for use by developers in diagnosing performance issues.

## General writer options

`-s`, `--standalone`  
Produce output with an appropriate header and footer (e.g. a standalone
HTML, LaTeX, TEI, or RTF file, not a fragment). This option is set
automatically for `pdf`, `epub`, `epub3`, `fb2`, `docx`, and `odt`
output. For `native` output, this option causes metadata to be included;
otherwise, metadata is suppressed.

`--template=`*FILE*|*URL*  
Use the specified file as a custom template for the generated document.
Implies `--standalone`. See [Templates](#templates), below, for a
description of template syntax. If no extension is specified, an
extension corresponding to the writer will be added, so that
`--template=special` looks for `special.html` for HTML output. If the
template is not found, pandoc will search for it in the `templates`
subdirectory of the user data directory (see `--data-dir`). If this
option is not used, a default template appropriate for the output format
will be used (see `-D/--print-default-template`).

`-V` *KEY*\[`=`*VAL*\], `--variable=`*KEY*\[`:`*VAL*\]  
Set the template variable *KEY* to the value *VAL* when rendering the
document in standalone mode. If no *VAL* is specified, the key will be
given the value `true`.

`--sandbox[=true|false]`  
Run pandoc in a sandbox, limiting IO operations in readers and writers
to reading the files specified on the command line. Note that this
option does not limit IO operations by filters or in the production of
PDF documents. But it does offer security against, for example,
disclosure of files through the use of `include` directives. Anyone
using pandoc on untrusted user input should use this option.

Note: some readers and writers (e.g., `docx`) need access to data files.
If these are stored on the file system, then pandoc will not be able to
find them when run in `--sandbox` mode and will raise an error. For
these applications, we recommend using a pandoc binary compiled with the
`embed_data_files` option, which causes the data files to be baked into
the binary instead of being stored on the file system.

`-D` *FORMAT*, `--print-default-template=`*FORMAT*  
Print the system default template for an output *FORMAT*. (See `-t` for
a list of possible *FORMAT*s.) Templates in the user data directory are
ignored. This option may be used with `-o`/`--output` to redirect output
to a file, but `-o`/`--output` must come before
`--print-default-template` on the command line.

Note that some of the default templates use partials, for example
`styles.html`. To print the partials, use `--print-default-data-file`:
for example, `--print-default-data-file=templates/styles.html`.

`--print-default-data-file=`*FILE*  
Print a system default data file. Files in the user data directory are
ignored. This option may be used with `-o`/`--output` to redirect output
to a file, but `-o`/`--output` must come before
`--print-default-data-file` on the command line.

`--eol=crlf`|`lf`|`native`  
Manually specify line endings: `crlf` (Windows), `lf`
(macOS/Linux/UNIX), or `native` (line endings appropriate to the OS on
which pandoc is being run). The default is `native`.

`--dpi`=*NUMBER*  
Specify the default dpi (dots per inch) value for conversion from pixels
to inch/centimeters and vice versa. (Technically, the correct term would
be ppi: pixels per inch.) The default is 96dpi. When images contain
information about dpi internally, the encoded value is used instead of
the default specified by this option.

`--wrap=auto`|`none`|`preserve`  
Determine how text is wrapped in the output (the source code, not the
rendered version). With `auto` (the default), pandoc will attempt to
wrap lines to the column width specified by `--columns` (default 72).
With `none`, pandoc will not wrap lines at all. With `preserve`, pandoc
will attempt to preserve the wrapping from the source document (that is,
where there are nonsemantic newlines in the source, there will be
nonsemantic newlines in the output as well). In `ipynb` output, this
option affects wrapping of the contents of markdown cells.

`--columns=`*NUMBER*  
Specify length of lines in characters. This affects text wrapping in the
generated source code (see `--wrap`). It also affects calculation of
column widths for plain text tables (see [Tables](#tables) below).

`--toc[=true|false]`, `--table-of-contents[=true|false]`  
Include an automatically generated table of contents (or, in the case of
`latex`, `context`, `docx`, `odt`, `opendocument`, `rst`, or `ms`, an
instruction to create one) in the output document. This option has no
effect unless `-s/--standalone` is used, and it has no effect on `man`,
`docbook4`, `docbook5`, or `jats` output.

Note that if you are producing a PDF via `ms`, the table of contents
will appear at the beginning of the document, before the title. If you
would prefer it to be at the end of the document, use the option
`--pdf-engine-opt=--no-toc-relocation`.

`--toc-depth=`*NUMBER*  
Specify the number of section levels to include in the table of
contents. The default is 3 (which means that level-1, 2, and 3 headings
will be listed in the contents).

`--strip-comments[=true|false]`  
Strip out HTML comments in the Markdown or Textile source, rather than
passing them on to Markdown, Textile or HTML output as raw HTML. This
does not apply to HTML comments inside raw HTML blocks when the
`markdown_in_html_blocks` extension is not set.

`--no-highlight`  
Disables syntax highlighting for code blocks and inlines, even when a
language attribute is given.

`--highlight-style=`*STYLE*|*FILE*  
Specifies the coloring style to be used in highlighted source code.
Options are `pygments` (the default), `kate`, `monochrome`,
`breezeDark`, `espresso`, `zenburn`, `haddock`, and `tango`. For more
information on syntax highlighting in pandoc, see [Syntax
highlighting](#syntax-highlighting), below. See also
`--list-highlight-styles`.

Instead of a *STYLE* name, a JSON file with extension `.theme` may be
supplied. This will be parsed as a KDE syntax highlighting theme and (if
valid) used as the highlighting style.

To generate the JSON version of an existing style, use
`--print-highlight-style`.

`--print-highlight-style=`*STYLE*|*FILE*  
Prints a JSON version of a highlighting style, which can be modified,
saved with a `.theme` extension, and used with `--highlight-style`. This
option may be used with `-o`/`--output` to redirect output to a file,
but `-o`/`--output` must come before `--print-highlight-style` on the
command line.

`--syntax-definition=`*FILE*  
Instructs pandoc to load a KDE XML syntax definition file, which will be
used for syntax highlighting of appropriately marked code blocks. This
can be used to add support for new languages or to use altered syntax
definitions for existing languages. This option may be repeated to add
multiple syntax definitions.

`-H` *FILE*, `--include-in-header=`*FILE*|*URL*  
Include contents of *FILE*, verbatim, at the end of the header. This can
be used, for example, to include special CSS or JavaScript in HTML
documents. This option can be used repeatedly to include multiple files
in the header. They will be included in the order specified. Implies
`--standalone`.

`-B` *FILE*, `--include-before-body=`*FILE*|*URL*  
Include contents of *FILE*, verbatim, at the beginning of the document
body (e.g. after the `<body>` tag in HTML, or the `\begin{document}`
command in LaTeX). This can be used to include navigation bars or
banners in HTML documents. This option can be used repeatedly to include
multiple files. They will be included in the order specified. Implies
`--standalone`.

`-A` *FILE*, `--include-after-body=`*FILE*|*URL*  
Include contents of *FILE*, verbatim, at the end of the document body
(before the `</body>` tag in HTML, or the `\end{document}` command in
LaTeX). This option can be used repeatedly to include multiple files.
They will be included in the order specified. Implies `--standalone`.

`--resource-path=`*SEARCHPATH*  
List of paths to search for images and other resources. The paths should
be separated by `:` on Linux, UNIX, and macOS systems, and by `;` on
Windows. If `--resource-path` is not specified, the default resource
path is the working directory. Note that, if `--resource-path` is
specified, the working directory must be explicitly listed or it will
not be searched. For example: `--resource-path=.:test` will search the
working directory and the `test` subdirectory, in that order. This
option can be used repeatedly. Search path components that come later on
the command line will be searched before those that come earlier, so
`--resource-path foo:bar --resource-path baz:bim` is equivalent to
`--resource-path baz:bim:foo:bar`.

`--request-header=`*NAME*`:`*VAL*  
Set the request header *NAME* to the value *VAL* when making HTTP
requests (for example, when a URL is given on the command line, or when
resources used in a document must be downloaded). If you’re behind a
proxy, you also need to set the environment variable `http_proxy` to
`http://...`.

`--no-check-certificate[=true|false]`  
Disable the certificate verification to allow access to unsecure HTTP
resources (for example when the certificate is no longer valid or self
signed).

## Options affecting specific writers

`--self-contained[=true|false]`  
*Deprecated synonym for `--embed-resources --standalone`.*

`--embed-resources[=true|false]`  
Produce a standalone HTML file with no external dependencies, using
`data:` URIs to incorporate the contents of linked scripts, stylesheets,
images, and videos. The resulting file should be “self-contained,” in
the sense that it needs no external files and no net access to be
displayed properly by a browser. This option works only with HTML output
formats, including `html4`, `html5`, `html+lhs`, `html5+lhs`, `s5`,
`slidy`, `slideous`, `dzslides`, and `revealjs`. Scripts, images, and
stylesheets at absolute URLs will be downloaded; those at relative URLs
will be sought relative to the working directory (if the first source
file is local) or relative to the base URL (if the first source file is
remote). Elements with the attribute `data-external="1"` will be left
alone; the documents they link to will not be incorporated in the
document. Limitation: resources that are loaded dynamically through
JavaScript cannot be incorporated; as a result, fonts may be missing
when `--mathjax` is used, and some advanced features (e.g. zoom or
speaker notes) may not work in an offline “self-contained” `reveal.js`
slide show.

`--html-q-tags[=true|false]`  
Use `<q>` tags for quotes in HTML. (This option only has an effect if
the `smart` extension is enabled for the input format used.)

`--ascii[=true|false]`  
Use only ASCII characters in output. Currently supported for XML and
HTML formats (which use entities instead of UTF-8 when this option is
selected), CommonMark, gfm, and Markdown (which use entities), roff man
and ms (which use hexadecimal escapes), and to a limited degree LaTeX
(which uses standard commands for accented characters when possible).

`--reference-links[=true|false]`  
Use reference-style links, rather than inline links, in writing Markdown
or reStructuredText. By default inline links are used. The placement of
link references is affected by the `--reference-location` option.

`--reference-location=block`|`section`|`document`  
Specify whether footnotes (and references, if `reference-links` is set)
are placed at the end of the current (top-level) block, the current
section, or the document. The default is `document`. Currently this
option only affects the `markdown`, `muse`, `html`, `epub`, `slidy`,
`s5`, `slideous`, `dzslides`, and `revealjs` writers. In slide formats,
specifying `--reference-location=section` will cause notes to be
rendered at the bottom of a slide.

`--markdown-headings=setext`|`atx`  
Specify whether to use ATX-style (`#`-prefixed) or Setext-style
(underlined) headings for level 1 and 2 headings in Markdown output.
(The default is `atx`.) ATX-style headings are always used for levels
3+. This option also affects Markdown cells in `ipynb` output.

`--list-tables[=true|false]`  
Render tables as list tables in RST output.

`--top-level-division=default`|`section`|`chapter`|`part`  
Treat top-level headings as the given division type in LaTeX, ConTeXt,
DocBook, and TEI output. The hierarchy order is part, chapter, then
section; all headings are shifted such that the top-level heading
becomes the specified type. The default behavior is to determine the
best division type via heuristics: unless other conditions apply,
`section` is chosen. When the `documentclass` variable is set to
`report`, `book`, or `memoir` (unless the `article` option is
specified), `chapter` is implied as the setting for this option. If
`beamer` is the output format, specifying either `chapter` or `part`
will cause top-level headings to become `\part{..}`, while second-level
headings remain as their default type.

`-N`, `--number-sections`  
Number section headings in LaTeX, ConTeXt, HTML, Docx, ms, or EPUB
output. By default, sections are not numbered. Sections with class
`unnumbered` will never be numbered, even if `--number-sections` is
specified.

`--number-offset=`*NUMBER*\[`,`*NUMBER*`,`*…*\]  
Offset for section headings in HTML output (ignored in other output
formats). The first number is added to the section number for top-level
headings, the second for second-level headings, and so on. So, for
example, if you want the first top-level heading in your document to be
numbered “6”, specify `--number-offset=5`. If your document starts with
a level-2 heading which you want to be numbered “1.5”, specify
`--number-offset=1,4`. Offsets are 0 by default. Implies
`--number-sections`.

`--listings[=true|false]`  
Use the [`listings`](https://ctan.org/pkg/listings) package for LaTeX
code blocks. The package does not support multi-byte encoding for source
code. To handle UTF-8 you would need to use a custom template. This
issue is fully documented here: [Encoding issue with the listings
package](https://en.wikibooks.org/wiki/LaTeX/Source_Code_Listings#Encoding_issue).

`-i`, `--incremental[=true|false]`  
Make list items in slide shows display incrementally (one by one). The
default is for lists to be displayed all at once.

`--slide-level=`*NUMBER*  
Specifies that headings with the specified level create slides (for
`beamer`, `s5`, `slidy`, `slideous`, `dzslides`). Headings above this
level in the hierarchy are used to divide the slide show into sections;
headings below this level create subheads within a slide. Valid values
are 0-6. If a slide level of 0 is specified, slides will not be split
automatically on headings, and horizontal rules must be used to indicate
slide boundaries. If a slide level is not specified explicitly, the
slide level will be set automatically based on the contents of the
document; see [Structuring the slide show](#structuring-the-slide-show).

`--section-divs[=true|false]`  
Wrap sections in `<section>` tags (or `<div>` tags for `html4`), and
attach identifiers to the enclosing `<section>` (or `<div>`) rather than
the heading itself (see [Heading identifiers](#heading-identifiers),
below). This option only affects HTML output (and does not affect HTML
slide formats).

`--email-obfuscation=none`|`javascript`|`references`  
Specify a method for obfuscating `mailto:` links in HTML documents.
`none` leaves `mailto:` links as they are. `javascript` obfuscates them
using JavaScript. `references` obfuscates them by printing their letters
as decimal or hexadecimal character references. The default is `none`.

`--id-prefix=`*STRING*  
Specify a prefix to be added to all identifiers and internal links in
HTML and DocBook output, and to footnote numbers in Markdown and Haddock
output. This is useful for preventing duplicate identifiers when
generating fragments to be included in other pages.

`-T` *STRING*, `--title-prefix=`*STRING*  
Specify *STRING* as a prefix at the beginning of the title that appears
in the HTML header (but not in the title as it appears at the beginning
of the HTML body). Implies `--standalone`.

`-c` *URL*, `--css=`*URL*  
Link to a CSS style sheet. This option can be used repeatedly to include
multiple files. They will be included in the order specified. This
option only affects HTML (including HTML slide shows) and EPUB output.
It should be used together with `-s/--standalone`, because the link to
the stylesheet goes in the document header.

A stylesheet is required for generating EPUB. If none is provided using
this option (or the `css` or `stylesheet` metadata fields), pandoc will
look for a file `epub.css` in the user data directory (see
`--data-dir`). If it is not found there, sensible defaults will be used.

`--reference-doc=`*FILE*|*URL*  
Use the specified file as a style reference in producing a docx or ODT
file.

Docx  
For best results, the reference docx should be a modified version of a
docx file produced using pandoc. The contents of the reference docx are
ignored, but its stylesheets and document properties (including margins,
page size, header, and footer) are used in the new docx. If no reference
docx is specified on the command line, pandoc will look for a file
`reference.docx` in the user data directory (see `--data-dir`). If this
is not found either, sensible defaults will be used.

To produce a custom `reference.docx`, first get a copy of the default
`reference.docx`:
`pandoc -o custom-reference.docx --print-default-data-file reference.docx`.
Then open `custom-reference.docx` in Word, modify the styles as you
wish, and save the file. For best results, do not make changes to this
file other than modifying the styles used by pandoc:

Paragraph styles:

- Normal
- Body Text
- First Paragraph
- Compact
- Title
- Subtitle
- Author
- Date
- Abstract
- AbstractTitle
- Bibliography
- Heading 1
- Heading 2
- Heading 3
- Heading 4
- Heading 5
- Heading 6
- Heading 7
- Heading 8
- Heading 9
- Block Text \[for block quotes\]
- Footnote Block Text \[for block quotes in footnotes\]
- Source Code
- Footnote Text
- Definition Term
- Definition
- Caption
- Table Caption
- Image Caption
- Figure
- Captioned Figure
- TOC Heading

Character styles:

- Default Paragraph Font
- Body Text Char
- Verbatim Char
- Footnote Reference
- Hyperlink
- Section Number

Table style:

- Table

ODT  
For best results, the reference ODT should be a modified version of an
ODT produced using pandoc. The contents of the reference ODT are
ignored, but its stylesheets are used in the new ODT. If no reference
ODT is specified on the command line, pandoc will look for a file
`reference.odt` in the user data directory (see `--data-dir`). If this
is not found either, sensible defaults will be used.

To produce a custom `reference.odt`, first get a copy of the default
`reference.odt`:
`pandoc -o custom-reference.odt --print-default-data-file reference.odt`.
Then open `custom-reference.odt` in LibreOffice, modify the styles as
you wish, and save the file.

PowerPoint  
Templates included with Microsoft PowerPoint 2013 (either with `.pptx`
or `.potx` extension) are known to work, as are most templates derived
from these.

The specific requirement is that the template should contain layouts
with the following names (as seen within PowerPoint):

- Title Slide
- Title and Content
- Section Header
- Two Content
- Comparison
- Content with Caption
- Blank

For each name, the first layout found with that name will be used. If no
layout is found with one of the names, pandoc will output a warning and
use the layout with that name from the default reference doc instead.
(How these layouts are used is described in [PowerPoint layout
choice](#powerpoint-layout-choice).)

All templates included with a recent version of MS PowerPoint will fit
these criteria. (You can click on `Layout` under the `Home` menu to
check.)

You can also modify the default `reference.pptx`: first run
`pandoc -o custom-reference.pptx --print-default-data-file reference.pptx`,
and then modify `custom-reference.pptx` in MS PowerPoint (pandoc will
use the layouts with the names listed above).

`--split-level=`*NUMBER*  
Specify the heading level at which to split an EPUB or chunked HTML
document into separate files. The default is to split into chapters at
level-1 headings. In the case of EPUB, this option only affects the
internal composition of the EPUB, not the way chapters and sections are
displayed to users. Some readers may be slow if the chapter files are
too large, so for large documents with few level-1 headings, one might
want to use a chapter level of 2 or 3. For chunked HTML, this option
determines how much content goes in each “chunk.”

`--chunk-template=`*PATHTEMPLATE*  
Specify a template for the filenames in a `chunkedhtml` document. In the
template, `%n` will be replaced by the chunk number (padded with leading
0s to 3 digits), `%s` with the section number of the chunk, `%h` with
the heading text (with formatting removed), `%i` with the section
identifier. For example, `%section-%s-%i.html` might be resolved to
`section-1.1-introduction.html`. The characters `/` and `\` are not
allowed in chunk templates and will be ignored. The default is
`%s-%i.html`.

`--epub-chapter-level=`*NUMBER*  
*Deprecated synonym for `--split-level`.*

`--epub-cover-image=`*FILE*  
Use the specified image as the EPUB cover. It is recommended that the
image be less than 1000px in width and height. Note that in a Markdown
source document you can also specify `cover-image` in a YAML metadata
block (see [EPUB Metadata](#epub-metadata), below).

`--epub-title-page=true`|`false`  
Determines whether a the title page is included in the EPUB (default is
`true`).

`--epub-metadata=`*FILE*  
Look in the specified XML file for metadata for the EPUB. The file
should contain a series of [Dublin Core
elements](https://www.dublincore.org/specifications/dublin-core/dces/).
For example:

     <dc:rights>Creative Commons</dc:rights>
     <dc:language>es-AR</dc:language>

By default, pandoc will include the following metadata elements:
`<dc:title>` (from the document title), `<dc:creator>` (from the
document authors), `<dc:date>` (from the document date, which should be
in [ISO 8601 format](https://www.w3.org/TR/NOTE-datetime)),
`<dc:language>` (from the `lang` variable, or, if is not set, the
locale), and `<dc:identifier id="BookId">` (a randomly generated UUID).
Any of these may be overridden by elements in the metadata file.

Note: if the source document is Markdown, a YAML metadata block in the
document can be used instead. See below under [EPUB
Metadata](#epub-metadata).

`--epub-embed-font=`*FILE*  
Embed the specified font in the EPUB. This option can be repeated to
embed multiple fonts. Wildcards can also be used: for example,
`DejaVuSans-*.ttf`. However, if you use wildcards on the command line,
be sure to escape them or put the whole filename in single quotes, to
prevent them from being interpreted by the shell. To use the embedded
fonts, you will need to add declarations like the following to your CSS
(see `--css`):

    @font-face {
       font-family: DejaVuSans;
       font-style: normal;
       font-weight: normal;
       src:url("../fonts/DejaVuSans-Regular.ttf");
    }
    @font-face {
       font-family: DejaVuSans;
       font-style: normal;
       font-weight: bold;
       src:url("../fonts/DejaVuSans-Bold.ttf");
    }
    @font-face {
       font-family: DejaVuSans;
       font-style: italic;
       font-weight: normal;
       src:url("../fonts/DejaVuSans-Oblique.ttf");
    }
    @font-face {
       font-family: DejaVuSans;
       font-style: italic;
       font-weight: bold;
       src:url("../fonts/DejaVuSans-BoldOblique.ttf");
    }
    body { font-family: "DejaVuSans"; }

`--epub-subdirectory=`*DIRNAME*  
Specify the subdirectory in the OCF container that is to hold the
EPUB-specific contents. The default is `EPUB`. To put the EPUB contents
in the top level, use an empty string.

`--ipynb-output=all|none|best`  
Determines how ipynb output cells are treated. `all` means that all of
the data formats included in the original are preserved. `none` means
that the contents of data cells are omitted. `best` causes pandoc to try
to pick the richest data block in each output cell that is compatible
with the output format. The default is `best`.

`--pdf-engine=`*PROGRAM*  
Use the specified engine when producing PDF output. Valid values are
`pdflatex`, `lualatex`, `xelatex`, `latexmk`, `tectonic`, `wkhtmltopdf`,
`weasyprint`, `pagedjs-cli`, `prince`, `context`, `pdfroff`, and
`typst`. If the engine is not in your PATH, the full path of the engine
may be specified here. If this option is not specified, pandoc uses the
following defaults depending on the output format specified using
`-t/--to`:

- `-t latex` or none: `pdflatex` (other options: `xelatex`, `lualatex`,
  `tectonic`, `latexmk`)
- `-t context`: `context`
- `-t html`: `wkhtmltopdf` (other options: `prince`, `weasyprint`,
  `pagedjs-cli`; see [print-css.rocks](https://print-css.rocks) for a
  good introduction to PDF generation from HTML/CSS)
- `-t ms`: `pdfroff`
- `-t typst`: `typst`

`--pdf-engine-opt=`*STRING*  
Use the given string as a command-line argument to the `pdf-engine`. For
example, to use a persistent directory `foo` for `latexmk`’s auxiliary
files, use `--pdf-engine-opt=-outdir=foo`. Note that no check for
duplicate options is done.

## Citation rendering

`-C`, `--citeproc`  
Process the citations in the file, replacing them with rendered
citations and adding a bibliography. Citation processing will not take
place unless bibliographic data is supplied, either through an external
file specified using the `--bibliography` option or the `bibliography`
field in metadata, or via a `references` section in metadata containing
a list of citations in CSL YAML format with Markdown formatting. The
style is controlled by a
[CSL](https://docs.citationstyles.org/en/stable/specification.html)
stylesheet specified using the `--csl` option or the `csl` field in
metadata. (If no stylesheet is specified, the `chicago-author-date`
style will be used by default.) The citation processing transformation
may be applied before or after filters or Lua filters (see `--filter`,
`--lua-filter`): these transformations are applied in the order they
appear on the command line. For more information, see the section on
[Citations](#citations).

`--bibliography=`*FILE*  
Set the `bibliography` field in the document’s metadata to *FILE*,
overriding any value set in the metadata. If you supply this argument
multiple times, each *FILE* will be added to bibliography. If *FILE* is
a URL, it will be fetched via HTTP. If *FILE* is not found relative to
the working directory, it will be sought in the resource path (see
`--resource-path`).

`--csl=`*FILE*  
Set the `csl` field in the document’s metadata to *FILE*, overriding any
value set in the metadata. (This is equivalent to
`--metadata csl=FILE`.) If *FILE* is a URL, it will be fetched via HTTP.
If *FILE* is not found relative to the working directory, it will be
sought in the resource path (see `--resource-path`) and finally in the
`csl` subdirectory of the pandoc user data directory.

`--citation-abbreviations=`*FILE*  
Set the `citation-abbreviations` field in the document’s metadata to
*FILE*, overriding any value set in the metadata. (This is equivalent to
`--metadata citation-abbreviations=FILE`.) If *FILE* is a URL, it will
be fetched via HTTP. If *FILE* is not found relative to the working
directory, it will be sought in the resource path (see
`--resource-path`) and finally in the `csl` subdirectory of the pandoc
user data directory.

`--natbib`  
Use [`natbib`](https://ctan.org/pkg/natbib) for citations in LaTeX
output. This option is not for use with the `--citeproc` option or with
PDF output. It is intended for use in producing a LaTeX file that can be
processed with [`bibtex`](https://ctan.org/pkg/bibtex).

`--biblatex`  
Use [`biblatex`](https://ctan.org/pkg/biblatex) for citations in LaTeX
output. This option is not for use with the `--citeproc` option or with
PDF output. It is intended for use in producing a LaTeX file that can be
processed with [`bibtex`](https://ctan.org/pkg/bibtex) or
[`biber`](https://ctan.org/pkg/biber).

## Math rendering in HTML

The default is to render TeX math as far as possible using Unicode
characters. Formulas are put inside a `span` with `class="math"`, so
that they may be styled differently from the surrounding text if needed.
However, this gives acceptable results only for basic math, usually you
will want to use `--mathjax` or another of the following options.

`--mathjax`\[`=`*URL*\]  
Use [MathJax](https://www.mathjax.org) to display embedded TeX math in
HTML output. TeX math will be put between `\(...\)` (for inline math) or
`\[...\]` (for display math) and wrapped in `<span>` tags with class
`math`. Then the MathJax JavaScript will render it. The *URL* should
point to the `MathJax.js` load script. If a *URL* is not provided, a
link to the Cloudflare CDN will be inserted.

`--mathml`  
Convert TeX math to [MathML](https://www.w3.org/Math/) (in `epub3`,
`docbook4`, `docbook5`, `jats`, `html4` and `html5`). This is the
default in `odt` output. MathML is supported natively by the main web
browsers and select e-book readers.

`--webtex`\[`=`*URL*\]  
Convert TeX formulas to `<img>` tags that link to an external script
that converts formulas to images. The formula will be URL-encoded and
concatenated with the URL provided. For SVG images you can for example
use `--webtex https://latex.codecogs.com/svg.latex?`. If no URL is
specified, the CodeCogs URL generating PNGs will be used
(`https://latex.codecogs.com/png.latex?`). Note: the `--webtex` option
will affect Markdown output as well as HTML, which is useful if you’re
targeting a version of Markdown without native math support.

`--katex`\[`=`*URL*\]  
Use [KaTeX](https://github.com/Khan/KaTeX) to display embedded TeX math
in HTML output. The *URL* is the base URL for the KaTeX library. That
directory should contain a `katex.min.js` and a `katex.min.css` file. If
a *URL* is not provided, a link to the KaTeX CDN will be inserted.

`--gladtex`  
Enclose TeX math in `<eq>` tags in HTML output. The resulting HTML can
then be processed by [GladTeX](https://humenda.github.io/GladTeX/) to
produce SVG images of the typeset formulas and an HTML file with these
images embedded.

    pandoc -s --gladtex input.md -o myfile.htex
    gladtex -d image_dir myfile.htex
    # produces myfile.html and images in image_dir

## Options for wrapper scripts

`--dump-args[=true|false]`  
Print information about command-line arguments to *stdout*, then exit.
This option is intended primarily for use in wrapper scripts. The first
line of output contains the name of the output file specified with the
`-o` option, or `-` (for *stdout*) if no output file was specified. The
remaining lines contain the command-line arguments, one per line, in the
order they appear. These do not include regular pandoc options and their
arguments, but do include any options appearing after a `--` separator
at the end of the line.

`--ignore-args[=true|false]`  
Ignore command-line arguments (for use in wrapper scripts). Regular
pandoc options are not ignored. Thus, for example,

    pandoc --ignore-args -o foo.html -s foo.txt -- -e latin1

is equivalent to

    pandoc -o foo.html -s

