CREATE DATABASE IF NOT EXISTS searchcep;

CREATE USER 'admin'@'localhost' IDENTIFIED BY '1234';

GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;

FLUSH PRIVILEGES;

/**
CREATE TABLE IF NOT EXISTS endereco (
    id INT NOT NULL AUTO_INCREMENT,
    cep VARCHAR(10) NOT NULL,
    logradouro VARCHAR(100) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO endereco (cep, logradouro, bairro, cidade, estado)
VALUES ('82100-240', 'Rua Gardênio Scorzato', 'Pilarzinho', 'Curitiba', 'PR');*/
