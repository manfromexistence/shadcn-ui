#!/bin/bash

# cloc from https://github.com/AlDanial/cloc

cloc packages/*/src --exclude-dir=test-utils --exclude-lang=SVG,LESS

# output like:
# -------------------------------------------------------------------------------
# Language                     files          blank        comment           code
# -------------------------------------------------------------------------------
# TypeScript                     434           5726           5798          44103
# GLSL                           112            946            322           4234
# CSS                              9             16              2            826
# JavaScript                       1              0              1             68
# -------------------------------------------------------------------------------
# SUM:                           556           6688           6123          49231
# -------------------------------------------------------------------------------