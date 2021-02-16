---
title: "Templates"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "temps"
weight: 230
toc: true
---


When the `-s/--standalone` option is used, pandoc uses a template to
add header and footer material that is needed for a self-standing
document.  To see the default template that is used, just type

    pandoc -D *FORMAT*

where *FORMAT* is the name of the output format. A custom template
can be specified using the `--template` option.  You can also override
the system default templates for a given output format *FORMAT*
by putting a file `templates/default.*FORMAT*` in the user data
directory (see `--data-dir`, above). *Exceptions:*

- For `odt` output, customize the `default.opendocument`
  template.
- For `pdf` output, customize the `default.latex` template
  (or the `default.context` template, if you use `-t context`,
  or the `default.ms` template, if you use `-t ms`, or the
  `default.html` template, if you use `-t html`).
- `docx` and `pptx` have no template (however, you can use
  `--reference-doc` to customize the output).

Templates contain *variables*, which allow for the inclusion of
arbitrary information at any point in the file. They may be set at the
command line using the `-V/--variable` option. If a variable is not set,
pandoc will look for the key in the document's metadata, which can be set
using either [YAML metadata blocks][Extension: `yaml_metadata_block`]
or with the `-M/--metadata` option.  In addition, some variables
are given default values by pandoc.  See [Variables] below for
a list of variables used in pandoc's default templates.

If you use custom templates, you may need to revise them as pandoc
changes.  We recommend tracking the changes in the default templates,
and modifying your custom templates accordingly. An easy way to do this
is to fork the [pandoc-templates] repository and merge in
changes after each pandoc release.

  [pandoc-templates]: https://github.com/jgm/pandoc-templates
