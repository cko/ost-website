#!/bin/bash
GIT_REPO=/var/lib/gitolite/repositories/ost-website.git
TMP_GIT_CLONE=/tmp/opensourcetreffen-website
NODE_INSTALLATION=/opt/node-v4.2.4-linux-x64/bin/
DOCROOT=/var/www/html

export PATH=$PATH:$NODE_INSTALLATION
echo
echo cloning git repository
git clone $GIT_REPO $TMP_GIT_CLONE
echo Generating site
cd $TMP_GIT_CLONE
harp compile
echo
echo synchronizing generated site to $DOCROOT
cd www
rsync -av --chmod=go=rX site/ $DOCROOT
echo
echo cleanup
rm -rf $TMP_GIT_CLONE
echo

