---
title: "General writer options"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "options"
weight: 150
toc: true
---

`-s`, `--standalone`

:   Produce output with an appropriate header and footer (e.g. a
    standalone HTML, LaTeX, TEI, or RTF file, not a fragment).  This option
    is set automatically for `pdf`, `epub`, `epub3`, `fb2`, `docx`, and `odt`
    output.  For `native` output, this option causes metadata to
    be included; otherwise, metadata is suppressed.

`--template=`*FILE*|*URL*

:   Use the specified file as a custom template for the generated document.
    Implies `--standalone`. See [Templates], below, for a description
    of template syntax. If no extension is specified, an extension
    corresponding to the writer will be added, so that `--template=special`
    looks for `special.html` for HTML output.  If the template is not
    found, pandoc will search for it in the `templates` subdirectory of
    the user data directory (see `--data-dir`). If this option is not used,
    a default template appropriate for the output format will be used (see
    `-D/--print-default-template`).

`-V` *KEY*[`=`*VAL*], `--variable=`*KEY*[`:`*VAL*]

:   Set the template variable *KEY* to the value *VAL* when rendering the
    document in standalone mode. If no *VAL* is specified, the
    key will be given the value `true`.

`-D` *FORMAT*, `--print-default-template=`*FORMAT*

:   Print the system default template for an output *FORMAT*. (See `-t`
    for a list of possible *FORMAT*s.)  Templates in the user data
    directory are ignored.  This option may be used with
    `-o`/`--output` to redirect output to a file, but
    `-o`/`--output` must come before `--print-default-template`
    on the command line.

    Note that some of the default templates use partials, for
    example `styles.html`.  To print the partials, use
    `--print-default-data-file`: for example,
    `--print-default-data-file=templates/styles.html`.

`--print-default-data-file=`*FILE*

:   Print a system default data file.  Files in the user data directory
    are ignored.  This option may be used with `-o`/`--output` to
    redirect output to a file, but `-o`/`--output` must come before
    `--print-default-data-file` on the command line.

`--eol=crlf`|`lf`|`native`

:   Manually specify line endings: `crlf` (Windows), `lf`
    (macOS/Linux/UNIX), or `native` (line endings appropriate
    to the OS on which pandoc is being run).  The default is
    `native`.

`--dpi`=*NUMBER*

:   Specify the default dpi (dots per inch) value for conversion
    from pixels to inch/centimeters and vice versa. (Technically,
    the correct term would be ppi: pixels per inch.) The default
    is 96dpi.   When images contain information about dpi
    internally, the encoded value is used instead of the default
    specified by this option.

`--wrap=auto`|`none`|`preserve`

:   Determine how text is wrapped in the output (the source
    code, not the rendered version).  With `auto` (the default),
    pandoc will attempt to wrap lines to the column width specified by
    `--columns` (default 72).  With `none`, pandoc will not wrap
    lines at all.  With `preserve`, pandoc will attempt to
    preserve the wrapping from the source document (that is,
    where there are nonsemantic newlines in the source, there
    will be nonsemantic newlines in the output as well).
    Automatic wrapping does not currently work in HTML output.
    In `ipynb` output, this option affects wrapping of the
    contents of markdown cells.

`--columns=`*NUMBER*

:   Specify length of lines in characters.  This affects text wrapping
    in the generated source code (see `--wrap`).  It also affects
    calculation of column widths for plain text tables (see [Tables] below).

`--toc`, `--table-of-contents`

:   Include an automatically generated table of contents (or, in
    the case of `latex`, `context`, `docx`, `odt`,
    `opendocument`, `rst`, or `ms`, an instruction to create
    one) in the output document. This option has no effect
    unless `-s/--standalone` is used, and it has no effect
    on `man`, `docbook4`, `docbook5`, or `jats` output.

    Note that if you are producing a PDF via `ms`, the table
    of contents will appear at the beginning of the
    document, before the title.  If you would prefer it to
    be at the end of the document, use the option
    `--pdf-engine-opt=--no-toc-relocation`.

`--toc-depth=`*NUMBER*

:   Specify the number of section levels to include in the table
    of contents.  The default is 3 (which means that level-1, 2, and 3
    headings will be listed in the contents).

`--strip-comments`

:   Strip out HTML comments in the Markdown or Textile source,
    rather than passing them on to Markdown, Textile or HTML
    output as raw HTML.  This does not apply to HTML comments
    inside raw HTML blocks when the `markdown_in_html_blocks`
    extension is not set.

`--no-highlight`

:   Disables syntax highlighting for code blocks and inlines, even when
    a language attribute is given.

`--highlight-style=`*STYLE*|*FILE*

:   Specifies the coloring style to be used in highlighted source code.
    Options are `pygments` (the default), `kate`, `monochrome`,
    `breezeDark`, `espresso`, `zenburn`, `haddock`, and `tango`.
    For more information on syntax highlighting in pandoc, see
    [Syntax highlighting], below.  See also
    `--list-highlight-styles`.

    Instead of a *STYLE* name, a JSON file with extension
    `.theme` may be supplied.  This will be parsed as a KDE
    syntax highlighting theme and (if valid) used as the
    highlighting style.

    To generate the JSON version of an existing style,
    use `--print-highlight-style`.

`--print-highlight-style=`*STYLE*|*FILE*

:   Prints a JSON version of a highlighting style, which can
    be modified, saved with a `.theme` extension, and used
    with `--highlight-style`.  This option may be used with
    `-o`/`--output` to redirect output to a file, but
    `-o`/`--output` must come before `--print-highlight-style`
    on the command line.

`--syntax-definition=`*FILE*

:   Instructs pandoc to load a KDE XML syntax definition file,
    which will be used for syntax highlighting of appropriately
    marked code blocks.  This can be used to add support for
    new languages or to use altered syntax definitions for
    existing languages.  This option may be repeated to add
    multiple syntax definitions.

`-H` *FILE*, `--include-in-header=`*FILE*|*URL*

:   Include contents of *FILE*, verbatim, at the end of the header.
    This can be used, for example, to include special
    CSS or JavaScript in HTML documents.  This option can be used
    repeatedly to include multiple files in the header.  They will be
    included in the order specified.  Implies `--standalone`.

`-B` *FILE*, `--include-before-body=`*FILE*|*URL*

:   Include contents of *FILE*, verbatim, at the beginning of the
    document body (e.g. after the `<body>` tag in HTML, or the
    `\begin{document}` command in LaTeX). This can be used to include
    navigation bars or banners in HTML documents. This option can be
    used repeatedly to include multiple files. They will be included in
    the order specified.  Implies `--standalone`.

`-A` *FILE*, `--include-after-body=`*FILE*|*URL*

:   Include contents of *FILE*, verbatim, at the end of the document
    body (before the `</body>` tag in HTML, or the
    `\end{document}` command in LaTeX). This option can be used
    repeatedly to include multiple files. They will be included in the
    order specified.  Implies `--standalone`.

`--resource-path=`*SEARCHPATH*

:   List of paths to search for images and other resources.
    The paths should be separated by `:` on Linux, UNIX, and
    macOS systems, and by `;` on Windows.  If `--resource-path`
    is not specified, the default resource path is the working
    directory. Note that, if `--resource-path` is specified,
    the working directory must be explicitly listed or it
    will not be searched.  For example:
    `--resource-path=.:test` will search the working directory
    and the `test` subdirectory, in that order.

`--request-header=`*NAME*`:`*VAL*

:   Set the request header *NAME* to the value *VAL* when making
    HTTP requests (for example, when a URL is given on the
    command line, or when resources used in a document must be
    downloaded). If you're behind a proxy, you also need to set
    the environment variable `http_proxy` to `http://...`.

`--no-check-certificate`

:   Disable the certificate verification to allow access to
    unsecure HTTP resources (for example when the certificate
    is no longer valid or self signed).
