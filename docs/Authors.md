# Authors

Copyright 2006–2022 John MacFarlane (jgm@berkeley.edu). Released under
the
[GPL](https://www.gnu.org/copyleft/gpl.html "GNU General Public License"),
version 2 or greater. This software carries no warranty of any kind.
(See COPYRIGHT for full copyright and warranty notices.) For a full list
of contributors, see the file AUTHORS.md in the pandoc source code.

[1] The point of this rule is to ensure that normal paragraphs starting
with people’s initials, like

    B. Russell won a Nobel Prize (but not for "On Denoting").

do not get treated as list items.

This rule will not prevent

    (C) 2007 Joe Smith

from being interpreted as a list item. In this case, a backslash escape
can be used:

    (C\) 2007 Joe Smith

[2] I have been influenced by the suggestions of [David
Wheeler](https://justatheory.com/2009/02/modest-markdown-proposal/).

[3] This scheme is due to Michel Fortin, who proposed it on the
[Markdown discussion
list](http://six.pairlist.net/pipermail/markdown-discuss/2005-March/001097.html).

[4] To see why laziness is incompatible with relaxing the requirement of
a blank line between items, consider the following example:

    bar
    :    definition
    foo
    :    definition

Is this a single list item with two definitions of “bar,” the first of
which is lazily wrapped, or two list items? To remove the ambiguity we
must either disallow lazy wrapping or require a blank line between list
items.
