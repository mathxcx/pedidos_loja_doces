CREATE DATABASE pedidos_loja_doces;

USE pedidos_loja_doces;

CREATE TABLE clientes (
id_cliente INT PRIMARY KEY AUTO_INCREMENT,
nome_cliente VARCHAR(60) NOT NULL,
endereco VARCHAR(150) NOT NULL
);

INSERT INTO clientes(nome_cliente,endereco) VALUES
("Maria das Graças", "Avenida Xavier, n 16"),("Francisco de Souza", "Avenida Moraes, n 18 "),("Josivaldo Pereira", "Rua Americo Buaiz, n 85"), ("Marta Guilhermina Soares", "Rua Soares, n 74");

CREATE TABLE pedidos(
id_pedido INT PRIMARY KEY AUTO_INCREMENT,
desc_ped VARCHAR(45) NOT NULL,
valor_total FLOAT NOT NULL,
id_cliente INT NOT NULL,
FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

INSERT INTO pedidos(id_cliente,desc_ped,valor_total) VALUES
(2, "Bolo de Leite Ninho", 45 ),
(3, "Pavê de Paçoca", 32.50 ),
(4, "Torta de Morango", 25.40 );

SELECT * FROM clientes;

SELECT * FROM pedidos;

drop table pedidos;

drop table clientes;

