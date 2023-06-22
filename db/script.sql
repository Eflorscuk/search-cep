CREATE DATABASE IF NOT EXISTS searchcep;

CREATE USER 'admin'@'localhost' IDENTIFIED BY '1234';

GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;

FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS endereco (
    cep VARCHAR(10) PRIMARY KEY,
    logradouro VARCHAR(100) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL
);