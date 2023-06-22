FROM mysql:5.6

COPY script.sql /docker-entrypoint-initdb.d/

ENV MYSQL_DATABASE=searchcep
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=1234
ENV MYSQL_ROOT_PASSWORD=root

EXPOSE 3306
