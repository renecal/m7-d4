create table usuarios(
    id serial primary key,
    nombre varchar(50) not null,
    email varchar(50) not null unique,
    password varchar(50) not null
);