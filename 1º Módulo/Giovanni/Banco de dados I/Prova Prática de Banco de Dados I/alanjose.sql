-- 1	Criar banco de dados: DesabafaAi
CREATE DATABASE DesabafaAi;

-- 2	Selecionar banco de dados DesabafaAi
USE DesabafaAi;

-- 3	Criar as entidades abaixo:
CREATE TABLE Desabafo(
    cod_desabafo INT(4) AUTO_INCREMENT PRIMARY KEY,
    mensagem VARCHAR(180) NOT NULL,
    data_horario DATETIME(6) NOT NULL,
    cod_usuario INT(6) NULL
);

CREATE TABLE Usuario(
    cod_usuario INT(6) AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,
    estado CHAR(30) NOT NULL,
    email VARCHAR(75) NOT NULL UNIQUE
);

-- 4	Comando para apagar tabela Usuário;
DROP TABLE usuario;

-- 5	Comando para mostrar estrutura da tabela Desabafo;
DESCRIBE desabafo;

-- 6 	Código para inserir 3 registros em cada entidade;
INSERT INTO Desabafo(mensagem, cod_usuario) VALUES
    ('Escrevendo uma mensagem muito legal aqui', 159625);

INSERT INTO Desabafo(mensagem, cod_usuario) VALUES
    ('Escrevendo uma mensagem muito legal ali', 159654);

INSERT INTO Desabafo(mensagem, cod_usuario) VALUES
    ('Escrevendo uma mensagem muito legal ali encima', 158585);

INSERT INTO Usuario(nome, estado, email) VALUES
    ('Alan José Rodrigues da Silva', 'São Paulo', 'shaolinmatadordeporco@gmail.com');

INSERT INTO Usuario(nome, estado, email) VALUES
    ('Deolane Azevedo Silvestre Santos', 'Ceará', 'viradonojiraya37831@gmail.com');

INSERT INTO Usuario(nome, estado, email) VALUES
    ('Virginia Filipina Silva', 'Bahia', 'wepink@gmail.com');

-- 7    Comando para mostrar todas as entidades da base de dados DesabafaAi;
SELECT * FROM DesabafaAi;

-- 8 	Comando para mostrar todas as bases de dados do SGBD MySql.
SHOW DATABASES;