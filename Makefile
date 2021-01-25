ALL_TESTS = $(wildcard test/*.js)

install:
	npm install

server:
	node server.js

.PHONY: run-test
run-test: $(ALL_TESTS)

.PHONY: test/*.js
test/*.js:
	k6 run $@