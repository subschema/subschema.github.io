#!/usr/bin/env bash
#
# These are the used remotes,setup as neccessary.
# ----
# origin  git@github.com:jspears/subschema-devel.git
# upstream        git@github.com:subschema/subschema-devel.git
# website git@github.com:subschema/subschema.github.io.git
# wiki    git@github.com:subschema/subschema.wiki.git

git subtree split --prefix docs -b gh-pages && \
git push -f website gh-pages:master && \
git branch -D gh-pages

git subtree split --prefix subschema.wiki/src -b wiki && \
git push -f wiki wiki:master && \
git branch -d wiki