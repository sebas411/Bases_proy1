create table usuario(id serial primary key, usuario varchar(16), contrasenia varchar(16), suscripcion varchar(10));
create table artista(id serial primary key, usuario_id int, nombre varchar(30), foreign key(usuario_id) references usuario(id));
create table playlist(id serial primary key, usuario_id int, nombre varchar(30), foreign key(usuario_id) references usuario(id));
create table cancion(id serial primary key, artista_id int, nombre varchar(30), genero varchar(30), link varchar(50), foreign key(artista_id) references artista(id));
create table album(id serial primary key, artista_id int, lanzamiento date, nombre varchar(30), foreign key(artista_id) references artista(id));
create table cancion_playlist(cancion_id int, playlist_id int, foreign key(cancion_id) references cancion(id), foreign key(playlist_id) references playlist(id));
create table cancion_album(cancion_id int, album_id int, foreign key(cancion_id) references cancion(id), foreign key(album_id) references album(id));