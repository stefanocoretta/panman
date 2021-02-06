---
title: "Template syntax"
description: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "temps"
weight: 240
toc: true
---

### Comments

Anything between the sequence `$--` and the end of the
line will be treated as a comment and omitted from the output.

### Delimiters

To mark variables and control structures in the template,
either `$`...`$` or `${`...`}` may be used as delimiters.
The styles may also be mixed in the same template, but the
opening and closing delimiter must match in each case.  The
opening delimiter may be followed by one or more spaces
or tabs, which will be ignored. The closing delimiter may
be followed by one or more spaces or tabs, which will be
ignored.

To include a literal `$` in the document, use `$$`.

### Interpolated variables

A slot for an interpolated variable is a variable name surrounded
by matched delimiters.  Variable names must begin with a letter
and can contain letters, numbers, `_`, `-`, and `.`.  The
keywords `it`, `if`, `else`, `endif`, `for`, `sep`, and `endfor` may
not be used as variable names. Examples:

```
$foo$
$foo.bar.baz$
$foo_bar.baz-bim$
$ foo $
${foo}
${foo.bar.baz}
${foo_bar.baz-bim}
${ foo }
```

Variable names with periods are used to get at structured
variable values.  So, for example, `employee.salary` will return the
value of the `salary` field of the object that is the value of
the `employee` field.

- If the value of the variable is simple value, it will be
  rendered verbatim.  (Note that no escaping is done;
  the assumption is that the calling program will escape
  the strings appropriately for the output format.)
- If the value is a list, the values will be concatenated.
- If the value is a map, the string `true` will be rendered.
- Every other value will be rendered as the empty string.

### Conditionals

A conditional begins with `if(variable)` (enclosed in
matched delimiters) and ends with `endif` (enclosed in matched
delimiters).  It may optionally contain an `else` (enclosed in
matched delimiters).  The `if` section is used if
`variable` has a non-empty value, otherwise the `else`
section is used (if present).  Examples:

```
$if(foo)$bar$endif$

$if(foo)$
  $foo$
$endif$

$if(foo)$
part one
$else$
part two
$endif$

${if(foo)}bar${endif}

${if(foo)}
  ${foo}
${endif}

${if(foo)}
${ foo.bar }
${else}
no foo!
${endif}
```

The keyword `elseif` may be used to simplify complex nested
conditionals:

```
$if(foo)$
XXX
$elseif(bar)$
YYY
$else$
ZZZ
$endif$
```

### For loops

A for loop begins with `for(variable)` (enclosed in
matched delimiters) and ends with `endfor` (enclosed in matched
delimiters.

- If `variable` is an array, the material inside the loop will
  be evaluated repeatedly, with `variable` being set to each
  value of the array in turn, and concatenated.
- If `variable` is a map, the material inside will be set to
  the map.
- If the value of the associated variable is not an array or
  a map, a single iteration will be performed on its value.

Examples:

```
$for(foo)$$foo$$sep$, $endfor$

$for(foo)$
  - $foo.last$, $foo.first$
$endfor$

${ for(foo.bar) }
  - ${ foo.bar.last }, ${ foo.bar.first }
${ endfor }

$for(mymap)$
$it.name$: $it.office$
$endfor$
```

You may optionally specify a separator between consecutive
values using `sep` (enclosed in matched delimiters).  The
material between `sep` and the `endfor` is the separator.

```
${ for(foo) }${ foo }${ sep }, ${ endfor }
```

Instead of using `variable` inside the loop, the special
anaphoric keyword `it` may be used.

```
${ for(foo.bar) }
  - ${ it.last }, ${ it.first }
${ endfor }
```

### Partials

Partials (subtemplates stored in different files) may be
included by using the name of the partial, followed
by `()`, for example:

```
${ styles() }
```

Partials will be sought in the directory containing
the main template. The file name will be assumed to
have the same extension as the main template if it
lacks an extension. When calling the partial, the
full name including file extension can also be used:

```
${ styles.html() }
```

(If a partial is not found in the directory of the
template, it will also be sought in the `templates`
subdirectory of the user data directory.)

Partials may optionally be applied to variables using
a colon:

```
${ date:fancy() }

${ articles:bibentry() }
```

If `articles` is an array, this will iterate over its
values, applying the partial `bibentry()` to each one.  So the
second example above is equivalent to

```
${ for(articles) }
${ it:bibentry() }
${ endfor }
```

Note that the anaphoric keyword `it` must be used when
iterating over partials.  In the above examples,
the `bibentry` partial should contain `it.title`
(and so on) instead of `articles.title`.

Final newlines are omitted from included partials.

Partials may include other partials.

A separator between values of an array may be specified
in square brackets, immediately after the variable name
or partial:

```
${months[, ]}$

${articles:bibentry()[; ]$
```

The separator in this case is literal and (unlike with `sep`
in an explicit `for` loop) cannot contain interpolated
variables or other template directives.

### Nesting

To ensure that content is "nested," that is, subsequent lines
indented, use the `^` directive:

```
$item.number$  $^$$item.description$ ($item.price$)
```

In this example, if `item.description` has multiple lines,
they will all be indented to line up with the first line:

```
00123  A fine bottle of 18-year old
       Oban whiskey. ($148)
```

To nest multiple lines to the same level, align them
with the `^` directive in the template. For example:

```
$item.number$  $^$$item.description$ ($item.price$)
               (Available til $item.sellby$.)
```

will produce

```
00123  A fine bottle of 18-year old
       Oban whiskey. ($148)
       (Available til March 30, 2020.)
```

If a variable occurs by itself on a line, preceded by whitespace
and not followed by further text or directives on the same line,
and the variable's value contains multiple lines, it will be
nested automatically.

### Breakable spaces

Normally, spaces in the template itself (as opposed to values of
the interpolated variables) are not breakable, but they can be
made breakable in part of the template by using the `~` keyword
(ended with another `~`).

```
$~$This long line may break if the document is rendered
with a short line length.$~$
```

### Pipes

A pipe transforms the value of a variable or partial. Pipes are
specified using a slash (`/`) between the variable name (or partial)
and the pipe name. Example:

```
$for(name)$
$name/uppercase$
$endfor$

$for(metadata/pairs)$
- $it.key$: $it.value$
$endfor$

$employee:name()/uppercase$
```

Pipes may be chained:

```
$for(employees/pairs)$
$it.key/alpha/uppercase$. $it.name$
$endfor$
```

Some pipes take parameters:

```
|----------------------|------------|
$for(employee)$
$it.name.first/uppercase/left 20 "| "$$it.name.salary/right 10 " | " " |"$
$endfor$
|----------------------|------------|
```

Currently the following pipes are predefined:

- `pairs`:  Converts a map or array to an array of maps,
  each with `key` and `value` fields.  If the original
  value was an array, the `key` will be the array index,
  starting with 1.

- `uppercase`:  Converts text to uppercase.

- `lowercase`:  Converts text to lowercase.

- `length`:  Returns the length of the value:  number
  of characters for a textual value, number of elements
  for a map or array.

- `reverse`:  Reverses a textual value or array,
  and has no effect on other values.

- `first`: Returns the first value of an array, if
  applied to a non-empty array; otherwise returns
  the original value.

- `last`: Returns the last value of an array, if
  applied to a non-empty array; otherwise returns
  the original value.

- `rest`: Returns all but the first value of an array, if
  applied to a non-empty array; otherwise returns
  the original value.

- `allbutlast`: Returns all but the last value of an array, if
  applied to a non-empty array; otherwise returns
  the original value.

- `chomp`:  Removes trailing newlines (and breakable space).

- `nowrap`:  Disables line wrapping on breakable spaces.

- `alpha`:  Converts textual values that can be
  read as an integer into lowercase alphabetic
  characters `a..z` (mod 26). This can be used to get lettered
  enumeration from array indices.  To get uppercase
  letters, chain with `uppercase`.

- `roman`:  Converts textual values that can be
  read as an integer into lowercase roman numerials.
  This can be used to get lettered enumeration from array indices.
  To get uppercase roman, chain with `uppercase`.

- `left n "leftborder" "rightborder"`:  Renders a textual value
  in a block of width `n`, aligned to the left, with an optional
  left and right border.  Has no effect on other values. This
  can be used to align material in tables.  Widths are positive
  integers indicating the number of characters.  Borders
  are strings inside double quotes; literal `"` and `\` characters
  must be backslash-escaped.

- `right n "leftborder" "rightborder"`:  Renders a textual value
  in a block of width `n`, aligned to the right, and has no
  effect on other values.

- `center n "leftborder" "rightborder"`:  Renders a textual
  value in a block of width `n`, aligned to the center, and has
  no effect on other values.
