const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    'searchcep',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql',
        password: 'root'
    }
)


sequelize.authenticate().then(() => {
   console.log('Sequelize => Conectado com sucesso.');
}).catch((error) => {
   console.error('Sequelize => Problema para conectar com o DB: ', error);
});