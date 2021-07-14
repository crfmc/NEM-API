const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 5
});

// Connect and check for errors
pool.getConnection((err, connection) =>
{
  if (err.code === 'PROTOCOL_CONNECTION_LOST')
  {
    console.log('Database connection lost.')
  }
  if (err.code === 'ER_CON_COUNT_ERROR')
  {
    console.log('Database has too many connections.')
  }
  if (err.code === 'ECCONREFUSED')
  {
    console.log('Database connection was refused.')
  }
  if (connection) connection.release();

  return;
})

module.exports = pool;