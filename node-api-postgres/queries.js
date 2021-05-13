const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Proyecto1',
  password: 'dbpass',
  port: 5432,
})


//Usuarios
const getUsers = (request, response) => {
  pool.query('SELECT * FROM usuario ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM usuario WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { usuario, contrasenia, suscripcion } = request.body

  pool.query('INSERT INTO usuario (usuario, contrasenia, perfil) values ($1, $2, $3)',[usuario, contrasenia, suscripcion], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { usuario, contrasenia, perfil, fechasuscripcion } = request.body

  pool.query(
    'UPDATE usuario SET usuario = $1, contrasenia = $2, perfil = $3, fechasuscripcion = $4 WHERE id = $5',
    [usuario, contrasenia, perfil, fechasuscripcion, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM usuario WHERE id = $1',[id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

//Artistas (usuario_id, nombre)
const getArtists = (request, response) => {
  pool.query('SELECT * FROM artista ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getArtistById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM artista WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createArtist = (request, response) => {
  const { usuario_id, nombre } = request.body

  pool.query('INSERT INTO artista (usuario_id, nombre) values ($1, $2)',[usuario_id, nombre], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Artist added with ID: ${results.insertId}`)
  })
}

const updateArtist = (request, response) => {
  const id = parseInt(request.params.id)
  const { usuario_id, nombre } = request.body

  pool.query(
    'UPDATE artista SET usuario_id = $1, nombre = $2 WHERE id = $3',
    [usuario_id, nombre, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Artist modified with ID: ${id}`)
    }
  )
}

const deleteArtist = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM artista WHERE id = $1',[id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Artist deleted with ID: ${id}`)
  })
}

//playlists (usuario_id, nombre)
const getPlaylists = (request, response) => {
  pool.query('SELECT * FROM playlist ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getPlaylistById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM playlist WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createPlaylist = (request, response) => {
  const { usuario_id, nombre } = request.body

  pool.query('INSERT INTO playlist (usuario_id, nombre) values ($1, $2)',[usuario_id, nombre], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Playlist added with ID: ${results.insertId}`)
  })
}

const updatePlaylist = (request, response) => {
  const id = parseInt(request.params.id)
  const { usuario_id, nombre } = request.body

  pool.query(
    'UPDATE playlist SET usuario_id = $1, nombre = $2 WHERE id = $3',
    [usuario_id, nombre, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Playlist modified with ID: ${id}`)
    }
  )
}

const deletePlaylist = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM playlist WHERE id = $1',[id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Playlist deleted with ID: ${id}`)
  })
}

//album (usuario_id, nombre)
const getAlbums = (request, response) => {
  pool.query('SELECT * FROM album ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getAlbumById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM album WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createAlbum = (request, response) => {
  const { artista_id, lanzamiento, nombre } = request.body

  pool.query('INSERT INTO album (artista_id, lanzamiento, nombre) values ($1, $2, $3)',[artista_id, lanzamiento, nombre], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Album added with ID: ${results.insertId}`)
  })
}

const updateAlbum = (request, response) => {
  const id = parseInt(request.params.id)
  const { artista_id, lanzamiento, nombre } = request.body

  pool.query(
    'UPDATE album SET artista_id = $1, lanzamiento = $2, nombre = $3 WHERE id = $4',
    [artista_id, lanzamiento, nombre, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Album modified with ID: ${id}`)
    }
  )
}

const deleteAlbum = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM album WHERE id = $1',[id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Album deleted with ID: ${id}`)
  })
}

//cancion (artista_id, nombre, genero, link)
const getSongs = (request, response) => {
  pool.query('SELECT * FROM cancion ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getSongById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM cancion WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createSong = (request, response) => {
  const { artista_id, nombre, genero, link } = request.body

  pool.query('INSERT INTO cancion (artista_id, nombre, genero, link) values ($1, $2, $3, $4)',[artista_id, nombre, genero, link], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Song added with ID: ${results.insertId}`)
  })
}

const updateSong = (request, response) => {
  const id = parseInt(request.params.id)
  const { artista_id, nombre, genero, link } = request.body

  pool.query(
    'UPDATE cancion SET artista_id = $1, nombre = $2, genero = $3, link = $4 WHERE id = $5',
    [artista_id, nombre, genero, link, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Song modified with ID: ${id}`)
    }
  )
}

const deleteSong = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM cancion WHERE id = $1',[id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Song deleted with ID: ${id}`)
  })
}

//cancion_playlist (cancion_id, playlist_id)
const getSongsOfPlaylists = (request, response) => {
  pool.query('SELECT * FROM cancion_playlist ORDER BY playlist_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getSongsByPlaylist = (request, response) => {
  const playlist_id = parseInt(request.params.id)

  pool.query('SELECT * FROM cancion_playlist WHERE playlist_id = $1 ORDER BY playlist_id ASC', [playlist_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addSongToPlaylist = (request, response) => {
  const { playlist_id, cancion_id } = request.body

  pool.query('INSERT INTO cancion_playlist values ($1, $2)',[playlist_id,cancion_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Song added to playlist ID ${playlist_id}`)
  })
}

const deleteSongOfPlaylist = (request, response) => {
  const playlist_id = parseInt(request.params.playlist_id)
  const cancion_id = parseInt(request.params.cancion_id)

  pool.query('DELETE FROM cancion_playlist WHERE playlist_id = $1 AND cancion_id = $2',[playlist_id, cancion_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Song deleted from playlist ID ${playlist_id}`)
  })
}

//cancion_album (cancion_id, album_id)
const getSongsOfAlbums = (request, response) => {
  pool.query('SELECT * FROM cancion_album ORDER BY album_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getSongsByAlbum = (request, response) => {
  const album_id = parseInt(request.params.id)

  pool.query('SELECT * FROM cancion_album INNER JOIN cancion ON cancion.id=cancion_id WHERE album_id = $1 ORDER BY album_id ASC', [album_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addSongToAlbum = (request, response) => {
  const { album_id, cancion_id } = request.body

  pool.query('INSERT INTO cancion_album values ($1, $2)',[album_id,cancion_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Song added to album ID ${album_id}`)
  })
}

const deleteSongOfAlbum = (request, response) => {
  const album_id = parseInt(request.params.album_id)
  const cancion_id = parseInt(request.params.cancion_id)

  pool.query('DELETE FROM cancion_album WHERE album_id = $1 AND cancion_id = $2',[album_id, cancion_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Song deleted from album ID ${album_id}`)
  })
}

//reproducciones (usuario_id, cancion_id, fechareproduccion)
const getReproductions = (request, response) => {
  pool.query('SELECT * FROM reproducciones ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getReproductionsToday = (request, response) => {
  pool.query('SELECT * FROM reproducciones WHERE fechareproduccion=CURRENT_DATE ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addReproduction = (request, response) => {
  const { usuario_id, cancion_id } = request.body

  pool.query('INSERT INTO reproducciones (usuario_id, cancion_id) values ($1, $2)',[usuario_id,cancion_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Reproduction created with ID: ${results.insertId}`)
  })
}

//reportes
const reporte1 = (request, response) => {
  pool.query('SELECT id, nombre, lanzamiento FROM album WHERE lanzamiento > (CURRENT_DATE-7) ORDER BY lanzamiento DESC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const reporte2 = (request, response) => {
  pool.query(`
  SELECT artista.nombre as artista, count(reproducciones.id) as reproducciones
  FROM (artista INNER JOIN cancion ON cancion.artista_id=artista.id) INNER JOIN reproducciones ON reproducciones.cancion_id=cancion.id
  WHERE fechareproduccion > (CURRENT_DATE - INTERVAL '6 months')
  GROUP BY artista.nombre
  ORDER BY count(reproducciones.id) DESC
  `, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const reporte3 = (request, response) => {
  pool.query(`
  SELECT EXTRACT(MONTH FROM fechasuscripcion) as mes, count(fechasuscripcion) as suscripciones
  FROM usuario
  WHERE fechasuscripcion > (CURRENT_DATE - INTERVAL '6 months')
  AND fechasuscripcion is not null
  GROUP BY EXTRACT(MONTH FROM fechasuscripcion)
  ORDER BY count(fechasuscripcion) DESC
  `, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const reporte4 = (request, response) => {
  pool.query(`
  SELECT artista.nombre, count(cancion.id) as canciones
  FROM artista INNER JOIN cancion ON cancion.artista_id=artista.id
  GROUP BY artista.nombre
  ORDER BY count(cancion.id) DESC
  `, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const reporte5 = (request, response) => {
  pool.query(`
  SELECT genero, count(id) as num_canciones
  FROM cancion
  GROUP BY genero
  ORDER BY count(id)
  `, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const reporte6 = (request, response) => {
  pool.query(`
  SELECT usuario.usuario, count(reproducciones.id) as reproducciones
  FROM usuario INNER JOIN reproducciones ON usuario.id=reproducciones.usuario_id
  GROUP BY usuario.usuario
  ORDER BY count(reproducciones.id) DESC
  `, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const reporte7 = (request, response) => {
  const time1 = request.params.time1
  const time2 = request.params.time2
  pool.query(`
  SELECT count(*) as total_ventas
  FROM reproducciones
  WHERE fechareproduccion > $1
  AND fechareproduccion < $2
  `,[time1,time2], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const reporte8 = (request, response) => {
  const time1 = request.params.time1
  const time2 = request.params.time2
  const N = parseInt(request.params.time2)
  pool.query(`
  SELECT artista.nombre, count(reproducciones.id)
  FROM (reproducciones INNER JOIN cancion ON cancion.id=reproducciones.cancion_id) INNER JOIN artista ON artista.id=cancion.artista_id
  WHERE fechareproduccion > $1
  AND fechareproduccion < $2
  GROUP BY artista.nombre
  ORDER BY count(reproducciones.id) DESC
  LIMIT $3
  `,[time1,time2,N], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const reporte9 = (request, response) => {
  const time1 = request.params.time1
  const time2 = request.params.time2
  pool.query(`
  SELECT cancion.genero, count(reproducciones.id)
  FROM reproducciones INNER JOIN cancion on cancion.id=reproducciones.cancion_id
  WHERE fechareproduccion > $1
  AND fechareproduccion < $2
  GROUP BY cancion.genero
  ORDER BY count(reproducciones.id)
  `,[time1,time2], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const reporte10 = (request, response) => {
  const artista_id = parseInt(request.params.artista_id)
  const N = parseInt(request.params.N)
  pool.query(`
  SELECT cancion.nombre, count(reproducciones.id)
  FROM (reproducciones INNER JOIN cancion ON cancion.id=reproducciones.cancion_id) INNER JOIN artista ON artista.id=cancion.artista_id
  WHERE artista_id=$1
  GROUP BY cancion.nombre
  ORDER BY count(reproducciones.id) DESC
  LIMIT $2
  `,[artista_id,N], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  //user
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  //artist
  getArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist,
  //playlist
  getPlaylists,
  getPlaylistById,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
  //album
  getAlbums,
  getAlbumById,
  createAlbum,
  updateAlbum,
  deleteAlbum,
  //song
  getSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong,
  //song to playlist
  getSongsOfPlaylists,
  getSongsByPlaylist,
  addSongToPlaylist,
  deleteSongOfPlaylist,
  //song to album
  getSongsOfAlbums,
  getSongsByAlbum,
  addSongToAlbum,
  deleteSongOfAlbum,
  //reproductions
  getReproductions,
  getReproductionsToday,
  addReproduction,
  //reportes
  reporte1,
  reporte2,
  reporte3,
  reporte4,
  reporte5,
  reporte6,
  reporte7,
  reporte8,
  reporte9,
  reporte10
}