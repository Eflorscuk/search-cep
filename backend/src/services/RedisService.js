// Importando o módulo Redis
const redis = require("redis");

// Criando o cliente Redis
const client = redis.createClient();

// Conectando-se ao servidor Redis
client.on("connect", function() {
    console.log("Conectado ao servidor Redis");
});

// Definindo um valor no Redis
client.set("chave", "valor", function(err, reply) {
    if (err) {
        console.error(err);
    } else {
        console.log("Valor definido no Redis");
    }
});

// Obtendo um valor do Redis
client.get("chave", function(err, reply) {
    if (err) {
        console.error(err);
    } else {
        console.log("Valor do Redis:", reply);
    }
});

// Encerrando a conexão com o Redis
client.quit(function() {
    console.log("Conexão com o Redis encerrada");
});
