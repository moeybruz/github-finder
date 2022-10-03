COMPOSE_GITFINDER = docker-compose up

prepare:
	docker build -t github-finder-image:latest .

_prepare:
	npm install

deploy:
	npm run deploy

start:
	docker-compose up

clean:
	make _clean

_clean:
	rm -rf build/*
