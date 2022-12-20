module.exports = {
  dev: {
    connectionString: "postgresql://postgres:docker@127.0.0.1:5432/airbnb",
    port: "3000",
  },
  production: {
    connectionString: process.env.POSTGRES_CONNECTION_STRING + "?ssl=true",
    port: process.env.PORT,
  },
};
