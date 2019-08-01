@echo off
echo Auto process Running
echo Starting Angular Build
echo ================================================================
call ng build --prod --base-href "https://graja22.github.io/library/"
echo ================================================================
echo Angular Built Exiting Now......
echo Changing to dist/{workingdir} (here {workingdir} = bookshop)
cd dist/bookshop
echo Git Init, Add, Commit, Push
git init
git add .
git commit -m "Auto Once"
git remote add origin "http://github.com/graja22/library.git"
git push -uf origin master
echo Quick Custom Automated Process
echo "/- D>J -/"
PAUSE
@echo on