DOCKER_USERNAME ?= rtb
APPLICATION_NAME ?= server
DOCKER_FILE ?= Dockerfile.dev

build-dev: Dockerfile.dev
	docker build -t ${DOCKER_USERNAME}/${APPLICATION_NAME} -f ${DOCKER_FILE} .

