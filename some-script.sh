#!/bin/bash

rm -rf final-build
mkdir final-build
cp -R profile/build/* final-build/
mkdir final-build/admin
cp -R admin/build/* final-build/admin/
