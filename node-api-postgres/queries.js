const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Proyecto1',
  password: 'dbpass',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM usuario ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

module.exports = {
    getUsers
}