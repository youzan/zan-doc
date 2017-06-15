#!/usr/bin/env bash

rm -rf /tmp/phpdoc-cache-*
rm -rf ./build
phpdoc --target ./build --directory ./src/ --cache-folder /tmp

cp -f ./helper/favicon.ico  build/images/favicon.ico

file1="./helper/clear.js"
file2="./build/js/bootstrap.min.js"
file3="./build/js/temp"
(cat "$file1" | cat - "$file2" > "$file3") && mv "$file3" "$file2"

