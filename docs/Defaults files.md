# Defaults files

The `--defaults` option may be used to specify a package of options, in
the form of a YAML file.

Fields that are omitted will just have their regular default values. So
a defaults file can be as simple as one line:

``` yaml
verbosity: INFO
```

In fields that expect a file path (or list of file paths), the following
syntax may be used to interpolate environment variables:

``` yaml
csl:  ${HOME}/mycsldir/special.csl
```

`${USERDATA}` may also be used; this will always resolve to the user
data directory that is current when the defaults file is parsed,
regardless of the setting of the environment variable `USERDATA`.

`${.}` will resolve to the directory containing the defaults file
itself. This allows you to refer to resources contained in that
directory:

``` yaml
epub-cover-image: ${.}/cover.jpg
epub-metadata: ${.}/meta.xml
resource-path:
- .             # the working directory from which pandoc is run
- ${.}/images   # the images subdirectory of the directory
                # containing this defaults file
```

This environment variable interpolation syntax *only* works in fields
that expect file paths.

Defaults files can be placed in the `defaults` subdirectory of the user
data directory and used from any directory. For example, one could
create a file specifying defaults for writing letters, save it as
`letter.yaml` in the `defaults` subdirectory of the user data directory,
and then invoke these defaults from any directory using
`pandoc --defaults letter` or `pandoc -dletter`.

When multiple defaults are used, their contents will be combined.

Note that, where command-line arguments may be repeated
(`--metadata-file`, `--css`, `--include-in-header`,
`--include-before-body`, `--include-after-body`, `--variable`,
`--metadata`, `--syntax-definition`), the values specified on the
command line will combine with values specified in the defaults file,
rather than replacing them.

The following tables show the mapping between the command line and
defaults file entries.

<table style="width:99%;">
<colgroup>
<col style="width: 48%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">command line</th>
<th style="text-align: left;">defaults file</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><pre><code>foo.md</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb2"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">input-file</span><span class="kw">:</span><span class="at"> foo.md</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>foo.md bar.md
&#10;</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb4"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">input-files</span><span class="kw">:</span></span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> foo.md</span></span>
<span id="cb4-3"><a href="#cb4-3" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> bar.md</span></span></code></pre></div></td>
</tr>
</tbody>
</table>

The value of `input-files` may be left empty to indicate input from
stdin, and it can be an empty sequence `[]` for no input.

## General options

<table style="width:99%;">
<colgroup>
<col style="width: 48%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">command line</th>
<th style="text-align: left;">defaults file</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><pre><code>--from markdown+emoji</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb2"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">from</span><span class="kw">:</span><span class="at"> markdown+emoji</span></span></code></pre></div>
<div class="sourceCode" id="cb3"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="fu">reader</span><span class="kw">:</span><span class="at"> markdown+emoji</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--to markdown+hard_line_breaks</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb5"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="fu">to</span><span class="kw">:</span><span class="at"> markdown+hard_line_breaks</span></span></code></pre></div>
<div class="sourceCode" id="cb6"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">writer</span><span class="kw">:</span><span class="at"> markdown+hard_line_breaks</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--output foo.pdf</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb8"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="fu">output-file</span><span class="kw">:</span><span class="at"> foo.pdf</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--output -</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb10"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="fu">output-file</span><span class="kw">:</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--data-dir dir</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb12"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="fu">data-dir</span><span class="kw">:</span><span class="at"> dir</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--defaults file</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb14"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="fu">defaults</span><span class="kw">:</span></span>
<span id="cb14-2"><a href="#cb14-2" aria-hidden="true" tabindex="-1"></a><span class="kw">-</span><span class="at"> file</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--verbose</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb16"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a><span class="fu">verbosity</span><span class="kw">:</span><span class="at"> INFO</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--quiet</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb18"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb18-1"><a href="#cb18-1" aria-hidden="true" tabindex="-1"></a><span class="fu">verbosity</span><span class="kw">:</span><span class="at"> ERROR</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--fail-if-warnings</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb20"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb20-1"><a href="#cb20-1" aria-hidden="true" tabindex="-1"></a><span class="fu">fail-if-warnings</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--sandbox</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb22"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb22-1"><a href="#cb22-1" aria-hidden="true" tabindex="-1"></a><span class="fu">sandbox</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--log=FILE</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb24"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb24-1"><a href="#cb24-1" aria-hidden="true" tabindex="-1"></a><span class="fu">log-file</span><span class="kw">:</span><span class="at"> FILE</span></span></code></pre></div></td>
</tr>
</tbody>
</table>

Options specified in a defaults file itself always have priority over
those in another file included with a `defaults:` entry.

`verbosity` can have the values `ERROR`, `WARNING`, or `INFO`.

## Reader options

<table style="width:99%;">
<colgroup>
<col style="width: 48%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">command line</th>
<th style="text-align: left;">defaults file</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><pre><code>--shift-heading-level-by -1</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb2"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">shift-heading-level-by</span><span class="kw">:</span><span class="at"> </span><span class="dv">-1</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--indented-code-classes python
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb4"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">indented-code-classes</span><span class="kw">:</span></span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> python</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--default-image-extension &quot;.jpg&quot;</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb6"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">default-image-extension</span><span class="kw">:</span><span class="at"> </span><span class="st">&#39;.jpg&#39;</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--file-scope</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb8"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="fu">file-scope</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--citeproc \
 --lua-filter count-words.lua \
 --filter special.lua
&#10;</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb10"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="fu">filters</span><span class="kw">:</span></span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> citeproc</span></span>
<span id="cb10-3"><a href="#cb10-3" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> count-words.lua</span></span>
<span id="cb10-4"><a href="#cb10-4" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> </span><span class="fu">type</span><span class="kw">:</span><span class="at"> json</span></span>
<span id="cb10-5"><a href="#cb10-5" aria-hidden="true" tabindex="-1"></a><span class="at">    </span><span class="fu">path</span><span class="kw">:</span><span class="at"> special.lua</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--metadata key=value \
 --metadata key2
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb12"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="fu">metadata</span><span class="kw">:</span></span>
<span id="cb12-2"><a href="#cb12-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">key</span><span class="kw">:</span><span class="at"> value</span></span>
<span id="cb12-3"><a href="#cb12-3" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">key2</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--metadata-file meta.yaml
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb14"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="fu">metadata-files</span><span class="kw">:</span></span>
<span id="cb14-2"><a href="#cb14-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> meta.yaml</span></span></code></pre></div>
<div class="sourceCode" id="cb15"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a><span class="fu">metadata-file</span><span class="kw">:</span><span class="at"> meta.yaml</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--preserve-tabs</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb17"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a><span class="fu">preserve-tabs</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--tab-stop 8</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb19"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb19-1"><a href="#cb19-1" aria-hidden="true" tabindex="-1"></a><span class="fu">tab-stop</span><span class="kw">:</span><span class="at"> </span><span class="dv">8</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--track-changes accept</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb21"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb21-1"><a href="#cb21-1" aria-hidden="true" tabindex="-1"></a><span class="fu">track-changes</span><span class="kw">:</span><span class="at"> accept</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--extract-media dir</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb23"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb23-1"><a href="#cb23-1" aria-hidden="true" tabindex="-1"></a><span class="fu">extract-media</span><span class="kw">:</span><span class="at"> dir</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--abbreviations abbrevs.txt</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb25"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb25-1"><a href="#cb25-1" aria-hidden="true" tabindex="-1"></a><span class="fu">abbreviations</span><span class="kw">:</span><span class="at"> abbrevs.txt</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--trace</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb27"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb27-1"><a href="#cb27-1" aria-hidden="true" tabindex="-1"></a><span class="fu">trace</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
</tbody>
</table>

Metadata values specified in a defaults file are parsed as literal
string text, not Markdown.

Filters will be assumed to be Lua filters if they have the `.lua`
extension, and JSON filters otherwise. But the filter type can also be
specified explicitly, as shown. Filters are run in the order specified.
To include the built-in citeproc filter, use either `citeproc` or
`{type: citeproc}`.

## General writer options

<table style="width:99%;">
<colgroup>
<col style="width: 48%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">command line</th>
<th style="text-align: left;">defaults file</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><pre><code>--standalone</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb2"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">standalone</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--template letter</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb4"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">template</span><span class="kw">:</span><span class="at"> letter</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--variable key=val \
  --variable key2
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb6"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">variables</span><span class="kw">:</span></span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">key</span><span class="kw">:</span><span class="at"> val</span></span>
<span id="cb6-3"><a href="#cb6-3" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">key2</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--eol nl</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb8"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="fu">eol</span><span class="kw">:</span><span class="at"> nl</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--dpi 300</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb10"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="fu">dpi</span><span class="kw">:</span><span class="at"> </span><span class="dv">300</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--wrap 60</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb12"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="fu">wrap</span><span class="kw">:</span><span class="at"> </span><span class="dv">60</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--columns 72</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb14"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="fu">columns</span><span class="kw">:</span><span class="at"> </span><span class="dv">72</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--table-of-contents</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb16"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a><span class="fu">table-of-contents</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--toc</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb18"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb18-1"><a href="#cb18-1" aria-hidden="true" tabindex="-1"></a><span class="fu">toc</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--toc-depth 3</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb20"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb20-1"><a href="#cb20-1" aria-hidden="true" tabindex="-1"></a><span class="fu">toc-depth</span><span class="kw">:</span><span class="at"> </span><span class="dv">3</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--strip-comments</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb22"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb22-1"><a href="#cb22-1" aria-hidden="true" tabindex="-1"></a><span class="fu">strip-comments</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--no-highlight</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb24"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb24-1"><a href="#cb24-1" aria-hidden="true" tabindex="-1"></a><span class="fu">highlight-style</span><span class="kw">:</span><span class="at"> </span><span class="ch">null</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--highlight-style kate</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb26"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb26-1"><a href="#cb26-1" aria-hidden="true" tabindex="-1"></a><span class="fu">highlight-style</span><span class="kw">:</span><span class="at"> kate</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--syntax-definition mylang.xml
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb28"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb28-1"><a href="#cb28-1" aria-hidden="true" tabindex="-1"></a><span class="fu">syntax-definitions</span><span class="kw">:</span></span>
<span id="cb28-2"><a href="#cb28-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> mylang.xml</span></span></code></pre></div>
<div class="sourceCode" id="cb29"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb29-1"><a href="#cb29-1" aria-hidden="true" tabindex="-1"></a><span class="fu">syntax-definition</span><span class="kw">:</span><span class="at"> mylang.xml</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--include-in-header inc.tex
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb31"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb31-1"><a href="#cb31-1" aria-hidden="true" tabindex="-1"></a><span class="fu">include-in-header</span><span class="kw">:</span></span>
<span id="cb31-2"><a href="#cb31-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> inc.tex</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--include-before-body inc.tex
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb33"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb33-1"><a href="#cb33-1" aria-hidden="true" tabindex="-1"></a><span class="fu">include-before-body</span><span class="kw">:</span></span>
<span id="cb33-2"><a href="#cb33-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> inc.tex</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--include-after-body inc.tex
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb35"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb35-1"><a href="#cb35-1" aria-hidden="true" tabindex="-1"></a><span class="fu">include-after-body</span><span class="kw">:</span></span>
<span id="cb35-2"><a href="#cb35-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> inc.tex</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--resource-path .:foo</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb37"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb37-1"><a href="#cb37-1" aria-hidden="true" tabindex="-1"></a><span class="fu">resource-path</span><span class="kw">:</span><span class="at"> </span><span class="kw">[</span><span class="st">&#39;.&#39;</span><span class="kw">,</span><span class="st">&#39;foo&#39;</span><span class="kw">]</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--request-header foo:bar
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb39"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb39-1"><a href="#cb39-1" aria-hidden="true" tabindex="-1"></a><span class="fu">request-headers</span><span class="kw">:</span></span>
<span id="cb39-2"><a href="#cb39-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> </span><span class="kw">[</span><span class="st">&quot;User-Agent&quot;</span><span class="kw">,</span><span class="at"> </span><span class="st">&quot;Mozilla/5.0&quot;</span><span class="kw">]</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--no-check-certificate</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb41"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb41-1"><a href="#cb41-1" aria-hidden="true" tabindex="-1"></a><span class="fu">no-check-certificate</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
</tbody>
</table>

## Options affecting specific writers

<table style="width:99%;">
<colgroup>
<col style="width: 48%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">command line</th>
<th style="text-align: left;">defaults file</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><pre><code>--self-contained</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb2"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">self-contained</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--html-q-tags</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb4"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">html-q-tags</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--ascii</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb6"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ascii</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--reference-links</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb8"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="fu">reference-links</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--reference-location block</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb10"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="fu">reference-location</span><span class="kw">:</span><span class="at"> block</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--markdown-headings atx</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb12"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="fu">markdown-headings</span><span class="kw">:</span><span class="at"> atx</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--list-tables</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb14"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="fu">list-tables</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--top-level-division chapter</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb16"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a><span class="fu">top-level-division</span><span class="kw">:</span><span class="at"> chapter</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--number-sections</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb18"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb18-1"><a href="#cb18-1" aria-hidden="true" tabindex="-1"></a><span class="fu">number-sections</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--number-offset=1,4</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb20"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb20-1"><a href="#cb20-1" aria-hidden="true" tabindex="-1"></a><span class="fu">number-offset</span><span class="kw">:</span><span class="at"> \[1,4\]</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--listings</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb22"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb22-1"><a href="#cb22-1" aria-hidden="true" tabindex="-1"></a><span class="fu">listings</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--incremental</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb24"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb24-1"><a href="#cb24-1" aria-hidden="true" tabindex="-1"></a><span class="fu">incremental</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--slide-level 2</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb26"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb26-1"><a href="#cb26-1" aria-hidden="true" tabindex="-1"></a><span class="fu">slide-level</span><span class="kw">:</span><span class="at"> </span><span class="dv">2</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--section-divs</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb28"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb28-1"><a href="#cb28-1" aria-hidden="true" tabindex="-1"></a><span class="fu">section-divs</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--email-obfuscation references</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb30"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb30-1"><a href="#cb30-1" aria-hidden="true" tabindex="-1"></a><span class="fu">email-obfuscation</span><span class="kw">:</span><span class="at"> references</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--id-prefix ch1</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb32"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb32-1"><a href="#cb32-1" aria-hidden="true" tabindex="-1"></a><span class="fu">identifier-prefix</span><span class="kw">:</span><span class="at"> ch1</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--title-prefix MySite</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb34"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb34-1"><a href="#cb34-1" aria-hidden="true" tabindex="-1"></a><span class="fu">title-prefix</span><span class="kw">:</span><span class="at"> MySite</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--css styles/screen.css  \
  --css styles/special.css
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb36"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb36-1"><a href="#cb36-1" aria-hidden="true" tabindex="-1"></a><span class="fu">css</span><span class="kw">:</span></span>
<span id="cb36-2"><a href="#cb36-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> styles/screen.css</span></span>
<span id="cb36-3"><a href="#cb36-3" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> styles/special.css</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--reference-doc my.docx</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb38"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb38-1"><a href="#cb38-1" aria-hidden="true" tabindex="-1"></a><span class="fu">reference-doc</span><span class="kw">:</span><span class="at"> my.docx</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--epub-cover-image cover.jpg</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb40"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb40-1"><a href="#cb40-1" aria-hidden="true" tabindex="-1"></a><span class="fu">epub-cover-image</span><span class="kw">:</span><span class="at"> cover.jpg</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--epub-title-page=false</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb42"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb42-1"><a href="#cb42-1" aria-hidden="true" tabindex="-1"></a><span class="fu">epub-title-page</span><span class="kw">:</span><span class="at"> </span><span class="ch">false</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--epub-metadata meta.xml</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb44"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb44-1"><a href="#cb44-1" aria-hidden="true" tabindex="-1"></a><span class="fu">epub-metadata</span><span class="kw">:</span><span class="at"> meta.xml</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--epub-embed-font special.otf \
  --epub-embed-font headline.otf
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb46"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb46-1"><a href="#cb46-1" aria-hidden="true" tabindex="-1"></a><span class="fu">epub-fonts</span><span class="kw">:</span></span>
<span id="cb46-2"><a href="#cb46-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> special.otf</span></span>
<span id="cb46-3"><a href="#cb46-3" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> headline.otf</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--split-level 2</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb48"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb48-1"><a href="#cb48-1" aria-hidden="true" tabindex="-1"></a><span class="fu">split-level</span><span class="kw">:</span><span class="at"> </span><span class="dv">2</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--chunk-template=&quot;%i.html&quot;</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb50"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb50-1"><a href="#cb50-1" aria-hidden="true" tabindex="-1"></a><span class="fu">chunk-template</span><span class="kw">:</span><span class="at"> </span><span class="st">&quot;%i.html&quot;</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--epub-subdirectory=&quot;&quot;</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb52"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb52-1"><a href="#cb52-1" aria-hidden="true" tabindex="-1"></a><span class="fu">epub-subdirectory</span><span class="kw">:</span><span class="at"> </span><span class="st">&#39;&#39;</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--ipynb-output best</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb54"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb54-1"><a href="#cb54-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ipynb-output</span><span class="kw">:</span><span class="at"> best</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--pdf-engine xelatex</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb56"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb56-1"><a href="#cb56-1" aria-hidden="true" tabindex="-1"></a><span class="fu">pdf-engine</span><span class="kw">:</span><span class="at"> xelatex</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--pdf-engine-opt=--shell-escape
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb58"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb58-1"><a href="#cb58-1" aria-hidden="true" tabindex="-1"></a><span class="fu">pdf-engine-opts</span><span class="kw">:</span></span>
<span id="cb58-2"><a href="#cb58-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="kw">-</span><span class="at"> </span><span class="st">&#39;-shell-escape&#39;</span></span></code></pre></div>
<div class="sourceCode" id="cb59"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb59-1"><a href="#cb59-1" aria-hidden="true" tabindex="-1"></a><span class="fu">pdf-engine-opt</span><span class="kw">:</span><span class="at"> </span><span class="st">&#39;-shell-escape&#39;</span></span></code></pre></div></td>
</tr>
</tbody>
</table>

## Citation rendering

<table style="width:99%;">
<colgroup>
<col style="width: 48%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">command line</th>
<th style="text-align: left;">defaults file</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><pre><code>--citeproc</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb2"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">citeproc</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--bibliography logic.bib</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb4"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">bibliography</span><span class="kw">:</span><span class="at"> logic.bib</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--csl ieee.csl</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb6"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">csl</span><span class="kw">:</span><span class="at"> ieee.csl</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--citation-abbreviations ab.json</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb8"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="fu">citation-abbreviations</span><span class="kw">:</span><span class="at"> ab.json</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--natbib</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb10"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="fu">cite-method</span><span class="kw">:</span><span class="at"> natbib</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--biblatex</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb12"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="fu">cite-method</span><span class="kw">:</span><span class="at"> biblatex</span></span></code></pre></div></td>
</tr>
</tbody>
</table>

`cite-method` can be `citeproc`, `natbib`, or `biblatex`. This only
affects LaTeX output. If you want to use citeproc to format citations,
you should also set ‘citeproc: true’.

If you need control over when the citeproc processing is done relative
to other filters, you should instead use `citeproc` in the list of
`filters` (see [Reader options](#reader-options-1)).

## Math rendering in HTML

<table style="width:99%;">
<colgroup>
<col style="width: 48%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">command line</th>
<th style="text-align: left;">defaults file</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><pre><code>--mathjax
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb2"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">html-math-method</span><span class="kw">:</span></span>
<span id="cb2-2"><a href="#cb2-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">method</span><span class="kw">:</span><span class="at"> mathjax</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--mathml
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb4"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">html-math-method</span><span class="kw">:</span></span>
<span id="cb4-2"><a href="#cb4-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">method</span><span class="kw">:</span><span class="at"> mathml</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--webtex
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb6"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="fu">html-math-method</span><span class="kw">:</span></span>
<span id="cb6-2"><a href="#cb6-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">method</span><span class="kw">:</span><span class="at"> webtex</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--katex
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb8"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="fu">html-math-method</span><span class="kw">:</span></span>
<span id="cb8-2"><a href="#cb8-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">method</span><span class="kw">:</span><span class="at"> katex</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><pre><code>--gladtex
</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb10"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="fu">html-math-method</span><span class="kw">:</span></span>
<span id="cb10-2"><a href="#cb10-2" aria-hidden="true" tabindex="-1"></a><span class="at">  </span><span class="fu">method</span><span class="kw">:</span><span class="at"> gladtex</span></span></code></pre></div></td>
</tr>
</tbody>
</table>

In addition to the values listed above, `method` can have the value
`plain`.

If the command line option accepts a URL argument, an `url:` field can
be added to `html-math-method:`.

## Options for wrapper scripts

<table style="width:99%;">
<colgroup>
<col style="width: 48%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">command line</th>
<th style="text-align: left;">defaults file</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><pre><code>--dump-args</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb2"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="fu">dump-args</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td style="text-align: left;"><pre><code>--ignore-args</code></pre></td>
<td style="text-align: left;"><div class="sourceCode" id="cb4"><pre
class="sourceCode yaml"><code class="sourceCode yaml"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="fu">ignore-args</span><span class="kw">:</span><span class="at"> </span><span class="ch">true</span></span></code></pre></div></td>
</tr>
</tbody>
</table>

