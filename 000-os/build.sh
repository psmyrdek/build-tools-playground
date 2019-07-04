#!/usr/bin/env bash

declare -a deps=(
    "https://github.com/jquery/jquery/archive/3.4.1.zip"
    "https://github.com/lodash/lodash/archive/4.17.11.zip"
)

declare -a scripts=(
    "sr_modules/jquery-3.4.1/dist/jquery.js"
    "sr_modules/lodash-4.17.11/lodash.js"
)

# Fetch deps

echo "Cleaning it up!"

rm -rf build sr_modules
mkdir build sr_modules

echo "Fetching deps..."

cd sr_modules

for i in "${deps[@]}"
do
   echo "Fetching $i..."
   curl -LJOs $i
done

unzip \*.zip
rm *.zip

cd ..

echo "Fetching done!"

# Build app bundle

touch build/app.js

for i in "${scripts[@]}"
do
   cat "$i" >> build/app.js
done

echo "Building done!"
