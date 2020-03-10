// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:console@localhost/community',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
