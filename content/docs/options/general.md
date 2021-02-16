---
title: "General options"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "options"
weight: 130
toc: true
---

`-f` *FORMAT*, `-r` *FORMAT*, `--from=`*FORMAT*, `--read=`*FORMAT*

:   Specify input format.  *FORMAT* can be:

    ::: {#input-formats}
    - `bibtex` ([BibTeX] bibliography)
    - `biblatex` ([BibLaTeX] bibliography)
    - `commonmark` ([CommonMark] Markdown)
    - `commonmark_x` ([CommonMark] Markdown with extensions)
    - `creole` ([Creole 1.0])
    - `csljson` ([CSL JSON] bibliography)
    - `csv` ([CSV] table)
    - `docbook` ([DocBook])
    - `docx` ([Word docx])
    - `dokuwiki` ([DokuWiki markup])
    - `epub` ([EPUB])
    - `fb2` ([FictionBook2] e-book)
    - `gfm` ([GitHub-Flavored Markdown]),
      or the deprecated and less accurate `markdown_github`;
      use [`markdown_github`](#markdown-variants) only
      if you need extensions not supported in [`gfm`](#markdown-variants).
    - `haddock` ([Haddock markup])
    - `html` ([HTML])
    - `ipynb` ([Jupyter notebook])
    - `jats` ([JATS] XML)
    - `jira` ([Jira]/Confluence wiki markup)
    - `json` (JSON version of native AST)
    - `latex` ([LaTeX])
    - `markdown` ([Pandoc's Markdown])
    - `markdown_mmd` ([MultiMarkdown])
    - `markdown_phpextra` ([PHP Markdown Extra])
    - `markdown_strict` (original unextended [Markdown])
    - `mediawiki` ([MediaWiki markup])
    - `man` ([roff man])
    - `muse` ([Muse])
    - `native` (native Haskell)
    - `odt` ([ODT])
    - `opml` ([OPML])
    - `org` ([Emacs Org mode])
    - `rst` ([reStructuredText])
    - `t2t` ([txt2tags])
    - `textile` ([Textile])
    - `tikiwiki` ([TikiWiki markup])
    - `twiki` ([TWiki markup])
    - `vimwiki` ([Vimwiki])
    :::

    Extensions can be individually enabled or disabled by
    appending `+EXTENSION` or `-EXTENSION` to the format name.
    See [Extensions] below, for a list of extensions and
    their names.  See `--list-input-formats` and `--list-extensions`,
    below.

`-t` *FORMAT*, `-w` *FORMAT*, `--to=`*FORMAT*, `--write=`*FORMAT*

:   Specify output format.  *FORMAT* can be:

    ::: {#output-formats}
    - `asciidoc` ([AsciiDoc]) or `asciidoctor` ([AsciiDoctor])
    - `beamer` ([LaTeX beamer][`beamer`] slide show)
    - `commonmark` ([CommonMark] Markdown)
    - `commonmark_x` ([CommonMark] Markdown with extensions)
    - `context` ([ConTeXt])
    - `csljson` ([CSL JSON] bibliography)
    - `docbook` or `docbook4` ([DocBook] 4)
    - `docbook5` (DocBook 5)
    - `docx` ([Word docx])
    - `dokuwiki` ([DokuWiki markup])
    - `epub` or `epub3` ([EPUB] v3 book)
    - `epub2` (EPUB v2)
    - `fb2` ([FictionBook2] e-book)
    - `gfm` ([GitHub-Flavored Markdown]),
      or the deprecated and less accurate `markdown_github`;
      use [`markdown_github`](#markdown-variants) only
      if you need extensions not supported in [`gfm`](#markdown-variants).
    - `haddock` ([Haddock markup])
    - `html` or `html5` ([HTML], i.e. [HTML5]/XHTML [polyglot markup])
    - `html4` ([XHTML] 1.0 Transitional)
    - `icml` ([InDesign ICML])
    - `ipynb` ([Jupyter notebook])
    - `jats_archiving` ([JATS] XML, Archiving and Interchange Tag Set)
    - `jats_articleauthoring` ([JATS] XML, Article Authoring Tag Set)
    - `jats_publishing` ([JATS] XML, Journal Publishing Tag Set)
    - `jats` (alias for `jats_archiving`)
    - `jira` ([Jira]/Confluence wiki markup)
    - `json` (JSON version of native AST)
    - `latex` ([LaTeX])
    - `man` ([roff man])
    - `markdown` ([Pandoc's Markdown])
    - `markdown_mmd` ([MultiMarkdown])
    - `markdown_phpextra` ([PHP Markdown Extra])
    - `markdown_strict` (original unextended [Markdown])
    - `mediawiki` ([MediaWiki markup])
    - `ms` ([roff ms])
    - `muse` ([Muse]),
    - `native` (native Haskell),
    - `odt` ([OpenOffice text document][ODT])
    - `opml` ([OPML])
    - `opendocument` ([OpenDocument])
    - `org` ([Emacs Org mode])
    - `pdf` ([PDF])
    - `plain` (plain text),
    - `pptx` ([PowerPoint] slide show)
    - `rst` ([reStructuredText])
    - `rtf` ([Rich Text Format])
    - `texinfo` ([GNU Texinfo])
    - `textile` ([Textile])
    - `slideous` ([Slideous] HTML and JavaScript slide show)
    - `slidy` ([Slidy] HTML and JavaScript slide show)
    - `dzslides` ([DZSlides] HTML5 + JavaScript slide show),
    - `revealjs` ([reveal.js] HTML5 + JavaScript slide show)
    - `s5` ([S5] HTML and JavaScript slide show)
    - `tei` ([TEI Simple])
    - `xwiki` ([XWiki markup])
    - `zimwiki` ([ZimWiki markup])
    - the path of a custom Lua writer, see [Custom writers] below
    :::

    Note that `odt`, `docx`, `epub`, and `pdf` output will not be directed
    to *stdout* unless forced with `-o -`.

    Extensions can be individually enabled or
    disabled by appending `+EXTENSION` or `-EXTENSION` to the format
    name.  See [Extensions] below, for a list of extensions and their
    names.  See `--list-output-formats` and `--list-extensions`, below.

`-o` *FILE*, `--output=`*FILE*

:   Write output to *FILE* instead of *stdout*.  If *FILE* is
    `-`, output will go to *stdout*, even if a non-textual format
    (`docx`, `odt`, `epub2`, `epub3`) is specified.

`--data-dir=`*DIRECTORY*

:   Specify the user data directory to search for pandoc data files.
    If this option is not specified, the default user data directory
    will be used.  On \*nix and macOS systems this will be the `pandoc`
    subdirectory of the XDG data directory (by default,
    `$HOME/.local/share`, overridable by setting the `XDG_DATA_HOME`
    environment variable).  If that directory does not exist,
    `$HOME/.pandoc` will be used (for backwards compatibility).
    In Windows the default user data directory is
    `C:\Users\USERNAME\AppData\Roaming\pandoc`.
    You can find the default user data directory on your system by
    looking at the output of `pandoc --version`.
    A `reference.odt`, `reference.docx`, `epub.css`, `templates`,
    `slidy`, `slideous`, or `s5` directory
    placed in this directory will override pandoc's normal defaults.

`-d` *FILE*, `--defaults=`*FILE*

:   Specify a set of default option settings.  *FILE* is a YAML
    file whose fields correspond to command-line option
    settings.  All options for document conversion, including input
    and output files, can be set using a defaults file.  The file will
    be searched for first in the working directory, and then in
    the `defaults` subdirectory of the user data directory
    (see `--data-dir`).  The `.yaml` extension may be omitted.
    See the section [Default files] for more information on the
    file format.  Settings from the defaults file may be
    overridden or extended by subsequent options on the command
    line.

`--bash-completion`

:   Generate a bash completion script.  To enable bash completion
    with pandoc, add this to your `.bashrc`:

        eval "$(pandoc --bash-completion)"

`--verbose`

:   Give verbose debugging output.

`--quiet`

:   Suppress warning messages.

`--fail-if-warnings`

:   Exit with error status if there are any warnings.

`--log=`*FILE*

:   Write log messages in machine-readable JSON format to
    *FILE*.  All messages above DEBUG level will be written,
    regardless of verbosity settings (`--verbose`, `--quiet`).

`--list-input-formats`

:   List supported input formats, one per line.

`--list-output-formats`

:   List supported output formats, one per line.

`--list-extensions`[`=`*FORMAT*]

:   List supported extensions for *FORMAT*, one per line, preceded
    by a `+` or `-` indicating whether it is enabled by default
    in *FORMAT*. If *FORMAT* is not specified, defaults for
    pandoc's Markdown are given.

`--list-highlight-languages`

:   List supported languages for syntax highlighting, one per
    line.

`--list-highlight-styles`

:   List supported styles for syntax highlighting, one per line.
    See `--highlight-style`.

`-v`, `--version`

:   Print version.

`-h`, `--help`

:   Show usage message.

[Markdown]: https://daringfireball.net/projects/markdown/
[CommonMark]: https://commonmark.org
[PHP Markdown Extra]: https://michelf.ca/projects/php-markdown/extra/
[GitHub-Flavored Markdown]: https://help.github.com/articles/github-flavored-markdown/
[MultiMarkdown]: https://fletcherpenney.net/multimarkdown/
[reStructuredText]: https://docutils.sourceforge.io/docs/ref/rst/introduction.html
[S5]: https://meyerweb.com/eric/tools/s5/
[Slidy]: https://www.w3.org/Talks/Tools/Slidy2/
[Slideous]: https://goessner.net/articles/slideous/
[HTML]: https://www.w3.org/html/
[HTML5]: https://html.spec.whatwg.org/
[polyglot markup]: https://www.w3.org/TR/html-polyglot/
[XHTML]: https://www.w3.org/TR/xhtml1/
[LaTeX]: https://www.latex-project.org/
[`beamer`]: https://ctan.org/pkg/beamer
[Beamer User's Guide]: http://mirrors.ctan.org/macros/latex/contrib/beamer/doc/beameruserguide.pdf
[ConTeXt]: https://www.contextgarden.net/
[Rich Text Format]: https://en.wikipedia.org/wiki/Rich_Text_Format
[DocBook]: https://docbook.org
[JATS]: https://jats.nlm.nih.gov
[Jira]: https://jira.atlassian.com/secure/WikiRendererHelpAction.jspa?section=all
[txt2tags]: https://txt2tags.org
[EPUB]: http://idpf.org/epub
[OPML]: http://dev.opml.org/spec2.html
[OpenDocument]: http://opendocument.xml.org
[ODT]: https://en.wikipedia.org/wiki/OpenDocument
[Textile]: https://www.promptworks.com/textile
[MediaWiki markup]: https://www.mediawiki.org/wiki/Help:Formatting
[DokuWiki markup]: https://www.dokuwiki.org/dokuwiki
[ZimWiki markup]: https://zim-wiki.org/manual/Help/Wiki_Syntax.html
[XWiki markup]: https://www.xwiki.org/xwiki/bin/view/Documentation/UserGuide/Features/XWikiSyntax/
[TWiki markup]: https://twiki.org/cgi-bin/view/TWiki/TextFormattingRules
[TikiWiki markup]: https://doc.tiki.org/Wiki-Syntax-Text#The_Markup_Language_Wiki-Syntax
[Haddock markup]: https://www.haskell.org/haddock/doc/html/ch03s08.html
[Creole 1.0]: http://www.wikicreole.org/wiki/Creole1.0
[CSV]: https://tools.ietf.org/html/rfc4180
[roff man]: https://man.cx/groff_man(7)
[roff ms]: https://man.cx/groff_ms(7)
[Haskell]: https://www.haskell.org
[GNU Texinfo]: https://www.gnu.org/software/texinfo/
[Emacs Org mode]: https://orgmode.org
[AsciiDoc]: https://www.methods.co.nz/asciidoc/
[AsciiDoctor]: https://asciidoctor.org/
[DZSlides]: http://paulrouget.com/dzslides/
[Word docx]: https://en.wikipedia.org/wiki/Office_Open_XML
[PDF]: https://www.adobe.com/pdf/
[reveal.js]: https://revealjs.com/
[FictionBook2]: http://www.fictionbook.org/index.php/Eng:XML_Schema_Fictionbook_2.1
[Jupyter notebook]: https://nbformat.readthedocs.io/en/latest/
[InDesign ICML]: https://wwwimages.adobe.com/www.adobe.com/content/dam/acom/en/devnet/indesign/sdk/cs6/idml/idml-cookbook.pdf
[TEI Simple]: https://github.com/TEIC/TEI-Simple
[Muse]: https://amusewiki.org/library/manual
[PowerPoint]: https://en.wikipedia.org/wiki/Microsoft_PowerPoint
[Vimwiki]: https://vimwiki.github.io
[CSL JSON]: https://citeproc-js.readthedocs.io/en/latest/csl-json/markup.html
[BibTeX]: https://ctan.org/pkg/bibtex
[BibLaTeX]: https://ctan.org/pkg/biblatex
