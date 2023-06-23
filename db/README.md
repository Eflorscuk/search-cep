# DB projeto Search Cep

## Sobre
O projeto foi desenvolvido utilizando MySQL e Docker para ambiente. Foi criada um arquivo script.sql para a criação da base do banco de dados por parte do Docker.

## Comandos
Para rodar o DB, é necessário ter instalado o Docker em sua máquina na raiz do presente projeto:

Realizar a build da imagem:
```docker build -t <nome-da-imagem> .````

Para executar o contâiner, basta digitar o seguinte comando:
```docker run -d -p 3306:3306 <nome-da-imagem>````

Para verificar os logs de maneira mais direta do contâiner, basta tirar a flag -d do comando anterior.