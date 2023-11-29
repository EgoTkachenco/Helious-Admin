module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "Helious"),
        username: env("DATABASE_USERNAME", null),
        password: env("DATABASE_PASSWORD", null),
        schema: env("DATABASE_SCHEMA", "public"),
        ssl: false,
      },
      options: {
        autoMigration: true,
      },
    },
  },
});
