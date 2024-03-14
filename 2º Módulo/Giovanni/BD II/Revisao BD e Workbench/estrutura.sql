-- Criar base de dados
CREATE DATABASE mercadinhoDoCirilo;

-- listar base de dados
-- SHOW DATABASES;	

-- Apagar base de dados
-- DROP DATABASE mercadinhodocirilo;

-- Selecionar base de dado
USE mercadinhoDoCirilo;

CREATE TABLE cliente(
	idclient INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    datanascimento DATE NULL
);

CREATE TABLE clienteDaMalhacao(
	idclient INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    datanascimento DATE NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    endereco VARCHAR(300) NOT NULL,
    casaAntiBombas BOOLEAN NOT NULL,
    camerasDeSeguranca BOOLEAN NOT NULL,
    animalNaCasa BOOLEAN NOT NULL
);

CREATE TABLE produto(

	idproduto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    preco DECIMAL(10, 2),
    codbarras VARCHAR(10)

);

-- Adicionando coluna
ALTER TABLE cliente ADD estadocivil CHAR(1) NULL;
-- Removendo coluna
ALTER TABLE cliente DROP estadocivil;
-- Alterando nome da coluna
ALTER TABLE cliente RENAME COLUMN estadocivil TO civil;
-- Alterando o tipo da coluna
ALTER TABLE cliente MODIFY COLUMN civil INT;