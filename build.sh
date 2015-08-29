#!/bin/bash
# to work around different cross site restrictions in the browsers,
# put all the aardvark parts into a single file
cat bookmarkletToSingleFile.js aardvark*.js > singlefileAardvark.js

# TODO better way: create a chrome + firefox extension
