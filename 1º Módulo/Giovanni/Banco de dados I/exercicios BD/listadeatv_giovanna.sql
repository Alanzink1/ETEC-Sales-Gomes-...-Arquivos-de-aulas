--ex1
create database LojaGasteMais;
    use LojaGasteMais;

--ex2
create table LojaGasteMais(
    codproduto int(4) primary key auto_increment,
    nome varchar(30) not null,
    descricao varchar(100),
    preco decimal(3,2) not null,
    quantidade int(2) not null
);

create table fornecerdor(
cod_fornecedor int(4) primary key auto_increment,
nome varchar(30) not null,
celular varchar(11),
estado varchar(2) not null,
cidade varchar(20) not null
);

--ex3
SHOW DATABASE fornecedor;

--ex4
DESCRIBE fornecedor;

--ex5
SHOW DATABASES;

--ex6
insert into fornecedor (cod_fornecedor, nome, celular, estado, cidade)
values (1256, 'Jorosvaldo', (15)1234-5678, 'SP', 'Sorocaba');
(8910, 'Claudio', (15)91011-1213, 'MG', 'Ouro Preto');
(1112, 'Vanderlei', (15)1415-1617, 'RO', 'Espigão DOeste');
(1314, 'Marcos', (15)1819-2021, 'RJ', 'Duque de Caxias');
(1516, 'Cleide', (15)2223-2425, 'MT', 'Cuiaba');
(1718, 'Pedro', (15)2627-2829, 'AL', 'MAceió');
(1920, 'Junior', (15)3031-3233, 'BA', 'Salvador');
(2122, 'Jose', (15)3435-3637, 'CE', 'Sobral');
(2324, 'Mateus', (15)3839-4041, 'MS', 'Campo Grande');
(2526, 'Kayke', (15)4243-4445, 'RS', 'Porto Alegre')

insert into LojaGasteMais (codproduto, nome, descricao, preco, quantidade)
values (8976, 'Barra de Cereal', 'Barra de ceral de maçã com cobertura de chocolate', 4.50, 54;
(2590, 'Bolacha', 'Bolacha de chocolate com recheiro de morango', 5.00, 32);
(3234, 'Macarrão', 'Macarrão espaguete', 8.00, 65);
(9082, 'Feijão', 'Feijão preto', 9.00, 100);
(9873, 'Arroz', 'Arroz Prato Fino', 13.00, 150);
(9832, 'Pão de forma', 'Pão de forma panco', 8.50, 100);
(3245, 'manteiga', 'Manteiga delicia', 6.98, 95);
(9808, 'iogurte', 'Iogurte Sadia 500ml', 10.87, 54);
(2324, 'Molho de tomate', 'Molho de tomate Elefante', 5.99, 100);
(1235, 'Leite condensado', 'Leite condensado piracanjuba', 7.89, 140);

--ex7
SHOW TABLES;

--ex8
SELECT * FROM fornecedor;

--ex9
SELECT preco FROM LojaGasteMais WHERE quantidade<=5;

--ex10
SELECT nome, quantidade FROM LojaGasteMais WHERE quantidade>5&&<=20;

--ex11
SELECT nome FROM LojaGasteMais WHERE nome LIKE 'F%'

--ex12
SELECT nome, celular FROM fornecedor WHERE estado LIKE 'SP%';

--ex13
