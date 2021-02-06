---
title: "Divs and Spans"
description: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "pandoc-markdown"
weight: 490
toc: true
---

Using the `native_divs` and `native_spans` extensions
(see [above][Extension: `native_divs`]), HTML syntax can
be used as part of markdown to create native `Div` and `Span`
elements in the pandoc AST (as opposed to raw HTML).
However, there is also nicer syntax available:

#### Extension: `fenced_divs` ####

Allow special fenced syntax for native `Div` blocks.  A Div
starts with a fence containing at least three consecutive
colons plus some attributes. The attributes may optionally
be followed by another string of consecutive colons.
The attribute syntax is exactly as in fenced code blocks (see
[Extension: `fenced_code_attributes`]).  As with fenced
code blocks, one can use either attributes in curly braces
or a single unbraced word, which will be treated as a class
name.  The Div ends with another line containing a string of at
least three consecutive colons.  The fenced Div should be
separated by blank lines from preceding and following blocks.

Example:

    ::::: {#special .sidebar}
    Here is a paragraph.

    And another.
    :::::

Fenced divs can be nested.  Opening fences are distinguished
because they *must* have attributes:

    ::: Warning ::::::
    This is a warning.

    ::: Danger
    This is a warning within a warning.
    :::
    ::::::::::::::::::

Fences without attributes are always closing fences.  Unlike
with fenced code blocks, the number of colons in the closing
fence need not match the number in the opening fence.  However,
it can be helpful for visual clarity to use fences of different
lengths to distinguish nested divs from their parents.


#### Extension: `bracketed_spans` ####

A bracketed sequence of inlines, as one would use to begin
a link, will be treated as a `Span` with attributes if it is
followed immediately by attributes:

    [This is *some text*]{.class key="val"}
