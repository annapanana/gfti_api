'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/gfti'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
