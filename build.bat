@echo off

echo Installing dependencies for typescript-compiler...
cd typescript-compiler
call npm install
call npm run antlr
call npm run build

echo Installing dependencies for typescript-loader...
cd ../typescript-loader
call npm install
call npm run build

echo Installing dependencies for XanDOM...
cd ../XanDOM
call npm install
call npm run build

echo Installing dependencies for web-app...
cd ../web-app
call npm install
call npm start

echo Build process completed.