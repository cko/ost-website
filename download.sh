wget --convert-links --restrict-file-names=windows -p -r -l 0 -e robots=off http://www.opensourcetreffen.de
cd www.opensourcetreffen.de
rename 's/index.html\@file=(.*)/$1.html/' index.html@file=*
perl -i -pe 's/index\.html\@file=([^"]*)/$1\.html/g' *.html



