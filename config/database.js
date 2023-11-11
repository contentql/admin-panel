module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "127.0.0.1"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "postgres"),
      user: env("PGUSER", "strapi"),
      password: env("PGPASSWORD", "password"),
      ssl: env.bool(true),
    },
    pool: {
      min: env.int("PGPOOL_MIN", 2),
      max: env.int("PGPOOL_MAX", 10),
    },
  },
});
