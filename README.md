# RTB-SERVER

## ENVIRONMENT VARIABLES

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

`ENVIRONMENT` can be set to:
 - `docker` will setup Sequelize host for communication within docker compose
 - `dev` will setup Sequelize host for local development
