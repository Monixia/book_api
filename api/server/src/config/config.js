require('dotenv').config();

module.exports = {
  development: {
    database: 'collector',
    username: 'postgres',
    password: 'postgres',
    host: '172.16.2.51',
    port: '5432',
    dialect: 'postgres'
  },

  test: {
    database: 'book_test',
    username: 'root',
    password: null,
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: '5433',
    dialect: 'postgres'
  }
}
