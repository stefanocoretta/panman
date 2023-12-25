# Syntax highlighting

Pandoc will automatically highlight syntax in [fenced code
blocks](#fenced-code-blocks) that are marked with a language name. The
Haskell library [skylighting](https://github.com/jgm/skylighting) is
used for highlighting. Currently highlighting is supported only for
HTML, EPUB, Docx, Ms, and LaTeX/PDF output. To see a list of language
names that pandoc will recognize, type
`pandoc --list-highlight-languages`.

The color scheme can be selected using the `--highlight-style` option.
The default color scheme is `pygments`, which imitates the default color
scheme used by the Python library pygments (though pygments is not
actually used to do the highlighting). To see a list of highlight
styles, type `pandoc --list-highlight-styles`.

If you are not satisfied with the predefined styles, you can use
`--print-highlight-style` to generate a JSON `.theme` file which can be
modified and used as the argument to `--highlight-style`. To get a JSON
version of the `pygments` style, for example:

    pandoc --print-highlight-style pygments > my.theme

Then edit `my.theme` and use it like this:

    pandoc --highlight-style my.theme

If you are not satisfied with the built-in highlighting, or you want to
highlight a language that isn’t supported, you can use the
`--syntax-definition` option to load a [KDE-style XML syntax definition
file](https://docs.kde.org/stable5/en/kate/katepart/highlight.html).
Before writing your own, have a look at KDE’s [repository of syntax
definitions](https://github.com/KDE/syntax-highlighting/tree/master/data/syntax).

To disable highlighting, use the `--no-highlight` option.

