# RTB-SERVER

## requirements

node.js - 18.18
make
docker

## Setup

To be used as git submodule to [rtb-house](https://github.com/zakrzaq/rtb-house) in `./server` directory.

Or for standalone use:

1. .env

- setup `.env` file. [example](#environment-variables)

**`ENVIRONMENT`** can be set to:

- **`docker`** will setup Sequelize host for communication within docker compose
- **`dev`** will setup Sequelize host for local development

2. local setup:

- run `npm install`
- to run as a local instance run `npm run dev`

3. docker setup:

- to build the Docker image execute `make build:dev`
- to run the Docker image execute 'docker run -it -p 3030:3030 rtb/server'

### ENVIRONMENT VARIABLES

```
ENVIRONMENT=docker
PORT=3030
HOSTNAME=0.0.0.0
PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=admin
PGADMIN_LISTEN_PORT=5050
POSTGRES_DB=rtb_house_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_HOST_DEV=localhost
POSTGRES_HOST_DOCKER=postgres
```
