# Use uma imagem base do MySQL
FROM mysql:latest

# Define as variáveis de ambiente para o MySQL
ENV MYSQL_DATABASE=searchcep
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=1234
ENV MYSQL_ROOT_PASSWORD=root

# Copia o arquivo SQL para a pasta de inicialização do MySQL no contêiner
COPY script.sql /docker-entrypoint-initdb.d/

# Expõe a porta padrão do MySQL
EXPOSE 3310

# Comando que será executado ao iniciar o contêiner
CMD ["mysqld"]
