#!/usr/bin/env bash

declare -a deps=(
    "https://github.com/jquery/jquery/archive/3.4.1.zip"
    "https://github.com/lodash/lodash/archive/4.17.11.zip"
)

declare -a scripts=(
    "my_modules/jquery-3.4.1/dist/jquery.js"
    "my_modules/lodash-4.17.11/lodash.js"
)

# Fetch deps

echo "Cleaning it up!"

rm -rf build my_modules
mkdir build my_modules

echo "Fetching deps..."

cd my_modules

for i in "${deps[@]}"
do
   echo "Fetching $i..."
   curl -LJOs $i
done

echo "Fetching done!"

unzip \*.zip
rm *.zip

cd ..

# Build app bundle

touch build/app.js

for i in "${scripts[@]}"
do
   cat "$i" >> build/app.js
done

echo "Building done!"
