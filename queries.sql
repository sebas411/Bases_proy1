SELECT id, nombre, lanzamiento FROM album WHERE lanzamiento > (CURRENTDATE-7) ORDER BY lanzamiento DESC

SELECT artista.nombre, count(reproducciones.id) as reproducciones
FROM (artista INNER JOIN cancion ON cancion.artista_id=artista.id) INNER JOIN reproducciones ON reproducciones.cancion_id=cancion.id
WHERE fechareproduccion > (CURRENT_DATE - INTERVAL '3 months')
GROUP BY artista.nombre
ORDER BY count(reproducciones.id) DESC

SELECT EXTRACT(MONTH FROM fechasuscripcion) as mes, count(fechasuscripcion) as suscripciones
FROM usuario
WHERE fechasuscripcion > (CURRENT_DATE - INTERVAL '6 months')
AND fechasuscripcion is not null
GROUP BY EXTRACT(MONTH FROM fechasuscripcion)
ORDER BY count(fechasuscripcion) DESC

SELECT artista.nombre, count(cancion.id) as canciones
FROM artista INNER JOIN cancion ON cancion.artista_id=artista.id
GROUP BY artista.nombre
ORDER BY count(cancion.id) DESC

SELECT genero, count(id) as num_canciones
FROM cancion
GROUP BY genero
ORDER BY count(id) DESC

SELECT usuario.usuario, count(reproducciones.id) as reproducciones
FROM usuario INNER JOIN reproducciones ON usuario.id=reproducciones.usuario_id
GROUP BY usuario.usuario
ORDER BY count(reproducciones.id) DESC

SELECT count(*) as total_ventas
FROM reproducciones
WHERE fechareproduccion > $1
AND fechareproduccion < $2

SELECT artista.nombre, count(reproducciones.id)
FROM (reproducciones INNER JOIN cancion ON cancion.id=reproducciones.cancion_id) INNER JOIN artista ON artista.id=cancion.artista_id
WHERE fechareproduccion > $1
AND fechareproduccion < $2
GROUP BY artista.nombre
ORDER BY count(reproducciones.id) DESC
LIMIT $3

SELECT cancion.genero, count(reproducciones.id)
FROM reproducciones INNER JOIN cancion on cancion.id=reproducciones.cancion_id
WHERE fechareproduccion > $1
AND fechareproduccion < $2
GROUP BY cancion.genero
ORDER BY count(reproducciones.id) DESC

SELECT cancion.nombre, count(reproducciones.id)
FROM (reproducciones INNER JOIN cancion ON cancion.id=reproducciones.cancion_id) INNER JOIN artista ON artista.id=cancion.artista_id
WHERE artista_id=$1
GROUP BY cancion.nombre
ORDER BY count(reproducciones.id) DESC
LIMIT $2
