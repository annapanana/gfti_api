'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/gfti'
  },
  production: {
    client: 'pg',
    connection: process.env.HEROKU_POSTGRESQL_YELLOW_URL
  }
};
