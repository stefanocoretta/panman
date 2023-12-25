# Running pandoc as a Lua interpreter

Calling the pandoc executable under the name `pandoc-lua` or with `lua`
as the first argument will make it function as a standalone Lua
interpreter. The behavior is mostly identical to that of the [standalone
`lua` executable](https://www.lua.org/manual/5.4/manual.html#7), version
5.4. However, there is no REPL yet, and the `-i` option has no effect.
For full documentation, see the
[pandoc-lua](https://github.com/jgm/pandoc/blob/master/doc/pandoc-lua.md)
man page.

