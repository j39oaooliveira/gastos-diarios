const express = require('express');
const sequelize = require('./database/db');
const tipoGastoRoutes = require('./routes/tipoGastoRoutes');
const gastoRoutes = require('./routes/gastoRoutes');

const app = express();
app.use(express.json());

app.use('/tipos', tipoGastoRoutes);
app.use('/gastos', gastoRoutes);

// Sincroniza o Sequelize com o banco e sobe o servidor
sequelize.sync().then(() => {
    console.log("Banco de dados SQLite sincronizado via Sequelize.");
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
}).catch(erro => {
    console.error("Erro ao sincronizar banco de dados:", erro);
});