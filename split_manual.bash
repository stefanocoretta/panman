# This script uses the mdsplit python command line tool

wget -O MANUAL.txt https://raw.githubusercontent.com/jgm/pandoc/main/MANUAL.txt
pandoc -t commonmark MANUAL.txt -o MANUAL.md
mdsplit MANUAL.md -o docs