---
title: "Raw content in a style"
description: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "citations"
weight: 580
toc: true
---

To include raw content in a prefix, suffix, delimiter, or term,
surround it with these tags indicating the format:

    {{jats}}&lt;ref&gt;{{/jats}}

Without the tags, the string will be interpreted as a string
and escaped in the output, rather than being passed through raw.

This feature allows stylesheets to be customized to give
different output for different output formats.  However,
stylesheets customized in this way will not be usable
by other CSL implementations.
