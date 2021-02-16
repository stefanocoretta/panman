---
title: "Reader options"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "options"
weight: 140
toc: true
---

`--shift-heading-level-by=`*NUMBER*

:   Shift heading levels by a positive or negative integer.
    For example, with `--shift-heading-level-by=-1`, level 2
    headings become level 1 headings, and level 3 headings
    become level 2 headings.  Headings cannot have a level
    less than 1, so a heading that would be shifted below level 1
    becomes a regular paragraph.  Exception: with a shift of -N,
    a level-N heading at the beginning of the document
    replaces the metadata title. `--shift-heading-level-by=-1`
    is a good choice when converting HTML or Markdown documents that
    use an initial level-1 heading for the document title and
    level-2+ headings for sections. `--shift-heading-level-by=1`
    may be a good choice for converting Markdown documents that
    use level-1 headings for sections to HTML, since pandoc uses
    a level-1 heading to render the document title.

`--base-header-level=`*NUMBER*

:   *Deprecated.  Use `--shift-heading-level-by`=X instead,
    where X = NUMBER - 1.* Specify the base level for headings
    (defaults to 1).

`--strip-empty-paragraphs`

:   *Deprecated.  Use the `+empty_paragraphs` extension instead.*
    Ignore paragraphs with no content.  This option is useful
    for converting word processing documents where users have
    used empty paragraphs to create inter-paragraph space.

`--indented-code-classes=`*CLASSES*

:   Specify classes to use for indented code blocks--for example,
    `perl,numberLines` or `haskell`. Multiple classes may be separated
    by spaces or commas.

`--default-image-extension=`*EXTENSION*

:   Specify a default extension to use when image paths/URLs have no
    extension.  This allows you to use the same source for formats that
    require different kinds of images.  Currently this option only affects
    the Markdown and LaTeX readers.

`--file-scope`

:   Parse each file individually before combining for multifile
    documents. This will allow footnotes in different files with the
    same identifiers to work as expected. If this option is set,
    footnotes and links will not work across files. Reading binary
    files (docx, odt, epub) implies `--file-scope`.

`-F` *PROGRAM*, `--filter=`*PROGRAM*

:   Specify an executable to be used as a filter transforming the
    pandoc AST after the input is parsed and before the output is
    written.  The executable should read JSON from stdin and write
    JSON to stdout.  The JSON must be formatted like  pandoc's own
    JSON input and output.  The name of the output format will be
    passed to the filter as the first argument.  Hence,

        pandoc --filter ./caps.py -t latex

    is equivalent to

        pandoc -t json | ./caps.py latex | pandoc -f json -t latex

    The latter form may be useful for debugging filters.

    Filters may be written in any language.  `Text.Pandoc.JSON`
    exports `toJSONFilter` to facilitate writing filters in Haskell.
    Those who would prefer to write filters in python can use the
    module [`pandocfilters`], installable from PyPI. There are also
    pandoc filter libraries in [PHP], [perl], and
    [JavaScript/node.js].

    In order of preference, pandoc will look for filters in

     1. a specified full or relative path (executable or
     non-executable)

     2. `$DATADIR/filters` (executable or non-executable)
     where `$DATADIR` is the user data directory (see
     `--data-dir`, above).

     3. `$PATH` (executable only)

    Filters, Lua-filters, and citeproc processing are applied in
    the order specified on the command line.

`-L` *SCRIPT*, `--lua-filter=`*SCRIPT*

:   Transform the document in a similar fashion as JSON filters (see
    `--filter`), but use pandoc's built-in Lua filtering system.  The given
    Lua script is expected to return a list of Lua filters which will be
    applied in order.  Each Lua filter must contain element-transforming
    functions indexed by the name of the AST element on which the filter
    function should be applied.

    The `pandoc` Lua module provides helper functions for element
    creation.  It is always loaded into the script's Lua environment.

    See the [Lua filters documentation] for further details.

    In order of preference, pandoc will look for Lua filters in

     1. a specified full or relative path

     2. `$DATADIR/filters` where `$DATADIR` is the user data
     directory (see `--data-dir`, above).

    Filters, Lua filters, and citeproc processing are applied in
    the order specified on the command line.

`-M` *KEY*[`=`*VAL*], `--metadata=`*KEY*[`:`*VAL*]

:   Set the metadata field *KEY* to the value *VAL*.  A value specified
    on the command line overrides a value specified in the document
    using [YAML metadata blocks][Extension: `yaml_metadata_block`].
    Values will be parsed as YAML boolean or string values. If no value is
    specified, the value will be treated as Boolean true.  Like
    `--variable`, `--metadata` causes template variables to be set.
    But unlike `--variable`, `--metadata` affects the metadata of the
    underlying document (which is accessible from filters and may be
    printed in some output formats) and metadata values will be escaped
    when inserted into the template.

`--metadata-file=`*FILE*

:   Read metadata from the supplied YAML (or JSON) file. This
    option can be used with every input format, but string scalars
    in the YAML file will always be parsed as Markdown. Generally,
    the input will be handled the same as in [YAML metadata
    blocks][Extension: `yaml_metadata_block`]. This option can be
    used repeatedly to include multiple metadata files; values in
    files specified later on the command line will be preferred
    over those specified in earlier files. Metadata values
    specified inside the document, or by using `-M`, overwrite
    values specified with this option.

`-p`, `--preserve-tabs`

:   Preserve tabs instead of converting them to spaces. (By default, pandoc
    converts tabs to spaces before parsing its input.)  Note that this will
    only affect tabs in literal code spans and code blocks. Tabs in regular
    text are always treated as spaces.

`--tab-stop=`*NUMBER*

:   Specify the number of spaces per tab (default is 4).

`--track-changes=accept`|`reject`|`all`

:   Specifies what to do with insertions, deletions, and comments
    produced by the MS Word "Track Changes" feature.  `accept` (the
    default) processes all the insertions and deletions.
    `reject` ignores them.  Both `accept` and `reject` ignore comments.
    `all` includes all insertions, deletions, and comments, wrapped
    in spans with `insertion`, `deletion`, `comment-start`, and
    `comment-end` classes, respectively. The author and time of
    change is included. `all` is useful for scripting: only
    accepting changes from a certain reviewer, say, or before a
    certain date. If a paragraph is inserted or deleted,
    `track-changes=all` produces a span with the class
    `paragraph-insertion`/`paragraph-deletion` before the
    affected paragraph break. This option only affects the docx
    reader.

`--extract-media=`*DIR*

:   Extract images and other media contained in or linked from
    the source document to the path *DIR*, creating it if
    necessary, and adjust the images references in the document
    so they point to the extracted files.  If the source format is
    a binary container (docx, epub, or odt), the media is
    extracted from the container and the original
    filenames are used. Otherwise the media is read from the
    file system or downloaded, and new filenames are constructed
    based on SHA1 hashes of the contents.

`--abbreviations=`*FILE*

:   Specifies a custom abbreviations file, with abbreviations
    one to a line.  If this option is not specified, pandoc will
    read the data file `abbreviations` from the user data
    directory or fall back on a system default.  To see the
    system default, use
    `pandoc --print-default-data-file=abbreviations`.  The only
    use pandoc makes of this list is in the Markdown reader.
    Strings ending in a period that are found in this list will
    be followed by a nonbreaking space, so that the period will
    not produce sentence-ending space in formats like LaTeX.

[`pandocfilters`]: https://github.com/jgm/pandocfilters
[PHP]: https://github.com/vinai/pandocfilters-php
[perl]: https://metacpan.org/pod/Pandoc::Filter
[JavaScript/node.js]: https://github.com/mvhenderson/pandoc-filter-node
[Lua filters documentation]: https://pandoc.org/lua-filters.html
