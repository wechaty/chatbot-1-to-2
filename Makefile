.PHONY: start
start:
	yarn start

.PHONY: deploy
deploy:
	GIT_USER=wj-Mcat USE_SSH=true yarn deploy