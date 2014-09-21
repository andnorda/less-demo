less demo
=====

install: npm install -g less
compile: lessc main.less main.css
source-map: lessc --source-map=main.map main.less main.css
