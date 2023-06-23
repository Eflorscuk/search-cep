# Projeto Search-cep

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)

## Sobre
O presente projeto tem como objetivo em realizar consultas de CEP sendo, a primeira consulta, feita através da API do [ViaCep](https://viacep.com.br/) e as consultas posteriores sendo feitas através de um banco de dados MySQL, comportando-se como cache na aplicaçäo.

O projeto está dividido em três partes:
* Frontend: React
* Backend: Node e Jest para testes
* Banco de Dados: MySQL e Docker

## Como executar o projeto
Para executar o presente projeto basta seguir o README.md contido em cada pasta do serviço. Ressaltando que é necessário rodar os três serviços para o correto funcionamento completo do projeto.

## Funcionalidades
Para consultar o CEP, basta o usuário clicar no botão "Encontre seu CEP pelo número" e, na tela seguinte, basta digitar o CEP desejado na caixa de texto e clicar no botão "Buscar".

## Futuro
Pretento criar um Dockerfile para cada serviço e, por fim, executá-los com Docker-compose. 

Também quero aprimorar o sistema para fazer buscas através do endereço. Assim como, ampliar os testes do sistema.