#!/usr/bin/env bash
git subtree split --prefix docs -b gh-pages && \
git push -f website gh-pages:master && \
git branch -D gh-pages

git subtree split --prefix subschema.wiki/src -b wiki && \
git push -f wiki wiki:master && \
git branch -d wiki