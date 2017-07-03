#!/usr/bin/env bash
git subtree split --prefix docs -b gh-pages && \
git push -f website gh-pages:master && \
git branch -D gh-pages
