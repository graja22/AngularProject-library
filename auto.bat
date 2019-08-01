    
git add .
git commit -m "Auto"
git push -f
call ng build --prod --base-href "https://graja22.github.io/library/"
call ngh --dir dist/bookT --no-silent