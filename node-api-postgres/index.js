const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017/'

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(cors({origin: 'null'}))

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

//usuarios
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

//artista
app.get('/artists', db.getArtists)
app.get('/artists/:id', db.getArtistById)
app.post('/artists', db.createArtist)
app.put('/artists/:id', db.updateArtist)
app.delete('/artists/:id', db.deleteArtist)

//playlist
app.get('/playlists', db.getPlaylists)
app.get('/playlists/:id', db.getPlaylistById)
app.post('/playlists', db.createPlaylist)
app.put('/playlists/:id', db.updatePlaylist)
app.delete('/playlists/:id', db.deletePlaylist)

//album
app.get('/albums', db.getAlbums)
app.get('/albums/:id', db.getAlbumById)
app.post('/albums', db.createAlbum)
app.put('/albums/:id', db.updateAlbum)
app.delete('/albums/:id', db.deleteAlbum)

//cancion
app.get('/songs', db.getSongs)
app.get('/songs/:id', db.getSongById)
app.post('/songs', db.createSong)
app.put('/songs/:id', db.updateSong)
app.delete('/songs/:id', db.deleteSong)

//cancion_playlist
app.get('/song_playlist', db.getSongsOfPlaylists)
app.get('/song_playlist/:id', db.getSongsByPlaylist)
app.post('/song_playlist', db.addSongToPlaylist)
app.delete('/song_playlist/:playlist_id/:cancion_id', db.deleteSongOfPlaylist)

//cancion_album
app.get('/song_album', db.getSongsOfAlbums)
app.get('/song_album/:id', db.getSongsByAlbum)
app.post('/song_album', db.addSongToAlbum)
app.delete('/song_album/:album_id/:cancion_id', db.deleteSongOfAlbum)

//reproductions
app.get('/reproductions', db.getReproductions)
app.get('/reproductionsToday', db.getReproductionsToday)
app.post('/reproductions', db.addReproduction)
app.post('/reproductionsDate', db.addRepDate)

//generos
app.get('/generes', db.getGeneros)

//reportes
app.get('/reporte/1', db.reporte1)
app.get('/reporte/2', db.reporte2)
app.get('/reporte/3', db.reporte3)
app.get('/reporte/4', db.reporte4)
app.get('/reporte/5', db.reporte5)
app.get('/reporte/6', db.reporte6)
app.get('/reporte/7/:time1/:time2', db.reporte7)
app.get('/reporte/8/:time1/:time2/:N', db.reporte8)
app.get('/reporte/9/:time1/:time2', db.reporte9)
app.get('/reporte/10/:artista_id/:N', db.reporte10)

MongoClient.connect(url, {useUnifiedTopology:true}).then(client => {
    const mongodb = client.db('proyecto3')
    const coleccion = mongodb.collection('usuarios')
    // MONGO
    app.get('/mongo', async (req, res) => {
        const cursor = await coleccion.find().toArray()
        res.status(200).json(cursor)
    })
    app.post('/mongo', (req, res) => {
        coleccion.insertMany(req.body)
        res.status(201)
    })
    app.put('/mongo', (req, res) => {
        const lista = req.body
        lista.forEach(usuario => {
            coleccion.replaceOne({_id: usuario._id}, usuario, {upsert: true})
        });
    })
 
    app.listen(port, () => {
        console.log(`App running on port ${port}.`)
    })
})


