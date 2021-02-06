---
title: "Exit codes"
description: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "exit"
weight: 210
toc: true
---

If pandoc completes successfully, it will return exit code 0.
Nonzero exit codes have the following meanings:

 Code Error
----- ------------------------------------

     3 PandocFailOnWarningError
     4 PandocAppError
     5 PandocTemplateError
     6 PandocOptionError
    21 PandocUnknownReaderError
    22 PandocUnknownWriterError
    23 PandocUnsupportedExtensionError
    24 PandocCiteprocError
    31 PandocEpubSubdirectoryError
    43 PandocPDFError
    47 PandocPDFProgramNotFoundError
    61 PandocHttpError
    62 PandocShouldNeverHappenError
    63 PandocSomeError
    64 PandocParseError
    65 PandocParsecError
    66 PandocMakePDFError
    67 PandocSyntaxMapError
    83 PandocFilterError
    91 PandocMacroLoop
    92 PandocUTF8DecodingError
    93 PandocIpynbDecodingError
    97 PandocCouldNotFindDataFileError
    99 PandocResourceNotFound

----- ------------------------------------
