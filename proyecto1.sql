create table usuario(id serial primary key, usuario varchar(16), contrasenia varchar(16), perfil varchar(20), activo boolean default true);
create table artista(id serial primary key, usuario_id int, nombre varchar(30), foreign key(usuario_id) references usuario(id));
create table playlist(id serial primary key, usuario_id int, nombre varchar(30), foreign key(usuario_id) references usuario(id), activo boolean default true);
create table cancion(id serial primary key, artista_id int, nombre varchar(30), genero varchar(30), link varchar(50), foreign key(artista_id) references artista(id), activo boolean default true);
create table album(id serial primary key, artista_id int, lanzamiento date, nombre varchar(30), foreign key(artista_id) references artista(id), activo boolean default true);
create table cancion_playlist(cancion_id int, playlist_id int, foreign key(cancion_id) references cancion(id), foreign key(playlist_id) references playlist(id));
create table cancion_album(cancion_id int, album_id int, foreign key(cancion_id) references cancion(id), foreign key(album_id) references album(id));
create table reproducciones (id serial primary key, cancion_id int references cancion(id), usuario_id int references usuario(id), fechareproduccion date default CURRENT_DATE);

--- Partes del proyecto 02

---------------Bitacora--------------
--- Trigger para la tabla de usuario
create function Newusuario ()
return trigger ass $$
declare descripcion text;
begin
	
end;
$$ LANGUAGE plpgsql

--- Funcion trigger para modificar la tabla de canciones
create function Newcancion ()
return trigger as $$
declare descripcion text;
begin
	
end;
$$ LANGUAGE plpgsql

////////////////////////////////////////////////////////////////////////

CREATE TRIGGER Newcancion()
BEFORE UPDATE
ON cancion
FOR EACH ROW
EXECUTE PROCEDURE Newcancion();
************************************************************************

--- Funcion trigger para la tabla de albums
create function Newalbums ()
return trigger as $$
declare descripcion text;
begin
	
end;

$$ LANGUAGE plpgsql

//////////////////////////////////////////////////////////////////////////

CREATE TRIGGER Newalbums()
BEFORE UPDATE
ON album
FOR EACH ROW
EXECUTE PROCEDURE Newalbums();
***************************************************************************

--- Funcion trigger para la tabla de playlists
create function Newalbums ()
return trigger as $$
declare descripcion text;
begin
	
end;
$$ LANGUAGE plpgsql

//////////////////////////////////////////////////////////////////////////

CREATE TRIGGER Newalbums()
BEFORE UPDATE 
ON playlist
FOR EACH ROW
EXECUTE PROCEDURE NEWalbums();
***************************************************************************