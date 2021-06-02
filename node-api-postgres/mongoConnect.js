const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017/'

const client = new MongoClient(url)

const readLot = async (request, response) => {
  try {
    await client.connect()
    const db = client.db('proyecto3')
    const usuarios = db.collection('usuarios')
    const cursor = usuarios.find({})
    response.status(201).json(cursor)
  } finally {
    await client.close()
  }
}

const insertLot = () => {}

const updateLot = () => {}

module.exports = {
  insertLot,
  updateLot,
  readLot
}
