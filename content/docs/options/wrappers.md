---
title: "Options for wrapper scripts"
description: ""
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "options"
weight: 200
toc: true
---

The default is to render TeX math as far as possible using
Unicode characters.  Formulas are put inside a `span` with
`class="math"`, so that they may be styled differently from the
surrounding text if needed. However, this gives acceptable
results only for basic math, usually you will want to use
`--mathjax` or another of the following options.

`--mathjax`[`=`*URL*]

:   Use [MathJax] to display embedded TeX math in HTML output.
    TeX math will be put between `\(...\)` (for inline math)
    or `\[...\]` (for display math) and wrapped in `<span>` tags
    with class `math`. Then the MathJax JavaScript will render it.
    The *URL* should point to the `MathJax.js` load script.
    If a *URL* is not provided, a link to the Cloudflare CDN will
    be inserted.

`--mathml`

:   Convert TeX math to [MathML] (in `epub3`, `docbook4`,
    `docbook5`, `jats`, `html4` and `html5`).  This is the
    default in `odt` output. Note that currently only Firefox
    and Safari (and select e-book readers) natively support
    MathML.

`--webtex`[`=`*URL*]

:   Convert TeX formulas to `<img>` tags that link to an external script
    that converts formulas to images. The formula will be URL-encoded
    and concatenated with the URL provided. For SVG images you can for
    example use `--webtex https://latex.codecogs.com/svg.latex?`.
    If no URL is specified, the CodeCogs URL generating PNGs
    will be used (`https://latex.codecogs.com/png.latex?`).
    Note:  the `--webtex` option will affect Markdown output
    as well as HTML, which is useful if you're targeting a
    version of Markdown without native math support.

`--katex`[`=`*URL*]

:   Use [KaTeX] to display embedded TeX math in HTML output.
    The *URL* is the base URL for the KaTeX library. That directory
    should contain a `katex.min.js` and a `katex.min.css` file.
    If a *URL* is not provided, a link to the KaTeX CDN will be inserted.

`--gladtex`

:   Enclose TeX math in `<eq>` tags in HTML output.  The resulting HTML
    can then be processed by [GladTeX] to produce images of the typeset
    formulas and an HTML file with links to these images.
    So, the procedure is:

        pandoc -s --gladtex input.md -o myfile.htex
        gladtex -d myfile-images myfile.htex
        # produces myfile.html and images in myfile-images

[MathML]: https://www.w3.org/Math/
[MathJax]: https://www.mathjax.org
[KaTeX]: https://github.com/Khan/KaTeX
[GladTeX]: https://humenda.github.io/GladTeX/
