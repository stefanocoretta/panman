---
title: "LaTeX macros"
description: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "pandoc-markdown"
weight: 460
toc: true
---

#### Extension: `latex_macros` ####

When this extension is enabled, pandoc will parse LaTeX
macro definitions and apply the resulting macros to all LaTeX
math and raw LaTeX.  So, for example, the following will work in
all output formats, not just LaTeX:

    \newcommand{\tuple}[1]{\langle #1 \rangle}

    $\tuple{a, b, c}$

Note that LaTeX macros will not be applied if they occur
inside a raw span or block marked with the
[`raw_attribute` extension](#extension-raw_attribute).

When `latex_macros` is disabled, the raw LaTeX and math will
not have macros applied. This is usually a better approach when
you are targeting LaTeX or PDF.

Macro definitions in LaTeX will be passed through as raw LaTeX
only if `latex_macros` is not enabled.  Macro definitions in
Markdown source (or other formats allowing `raw_tex`) will
be passed through regardless of whether `latex_macros` is
enabled.
