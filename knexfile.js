// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/betterReads.db3'
    },
    useNullAsDefault: true,
    pool:
    {
      afterCreate: (conn, done) =>
      {
        conn.run('PRAGMA foreign_keys = ON', done)
      },
    },
    migrations: {directory: './database/migrations'},
    seeds: {directory: './database/seeds'},
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    useNullAsDefault: true,
    pool:
    {
      afterCreate: (conn, done) =>
      {
        conn.run('PRAGMA foreign_keys = ON', done)
      },
    },
    migrations: {directory: './database/migrations'},
    seeds: {directory: './database/seeds'},
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
    },
    migrations: {directory: './database/migrations'},
    seeds: {directory: './database/seeds'},
  }

};
