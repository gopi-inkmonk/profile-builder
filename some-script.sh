#!/bin/bash

rm -rf final-build

cd profile; yarn run build; cd ..;
cd admin; yarn run build; cd ..;

mkdir final-build
cp -R profile/build/* final-build/
mkdir final-build/admin
mkdir final-build/admin/build
cp -R admin/build/* final-build/admin/

cp admin/build/static/css/* final-build/static/css
cp admin/build/static/js/* final-build/static/js
cp admin/build/static/media/* final-build/static/media
