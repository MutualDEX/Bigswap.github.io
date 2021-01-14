#!/bin/bash

expo build:web
web_build_return_code="$?"

echo "mutualdex.github.io/Bigswap.github.io" > web-build/CNAME

exit "${web_build_return_code}"
