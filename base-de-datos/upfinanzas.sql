create database upfinanzas;
use upfinanzas;

CREATE TABLE clientes (
    clientes_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    clientes_nombre VARCHAR(100),
    clientes_apellido VARCHAR(100),
    clientes_telefono INT UNSIGNED NOT NULL,
    clientes_correo VARCHAR(100),
	clientes_consulta TEXT,
    PRIMARY KEY(clientes_id)	
   );