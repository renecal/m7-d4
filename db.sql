create table usuarios(
    id serial primary key,
    nombre varchar(50) not null,
    email varchar(50) not null unique,
    password varchar(50) not null
);


insert into usuarios (nombre, email, password) values
('pedro', 'pedro@gmail.com', '123456'),
('carlos', 'carlos@gmail.com', 'qwerty'),
('juan', 'juan@gmail.com', '123456');