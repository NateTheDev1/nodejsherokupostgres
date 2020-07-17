// create a db connection variable so that Heroku Postges can set your Database URL dynamically
const pgConnection = process.env.DATABASE_URL; // DATABASE_URL is the automatic environment variable that heroku postgres will create.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "exampledb",
      user: "postgres",
      password: "Noble15!!",
    },
    migrations: {
      directory: "./data/migrations", // you do not need to create this directory, when you run the knex migrate command it will initialize this directory for you
    },
    seeds: {
      directory: "./data/seeds", // you do not need to create this directory, when you run the knex migrate command it will initialize this directory for you
    },
  },

  testing: {
    client: "pg",
    connection: pgConnection,
    migrations: {
      directory: "./data/migrations", // you do not need to create this directory, when you run the knex migrate command it will initialize this directory for you
    },
    seeds: {
      directory: "./data/seeds", // you do not need to create this directory, when you run the knex migrate command it will initialize this directory for you
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    migrations: {
      directory: "./data/migrations", // you do not need to create this directory, when you run the knex migrate command it will initialize this directory for you
    },
    seeds: {
      directory: "./data/seeds", // you do not need to create this directory, when you run the knex migrate command it will initialize this directory for you
    },
  },
};
