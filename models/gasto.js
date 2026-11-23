const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const TipoGasto = require('./TipoGasto');

const Gasto = sequelize.define('Gasto', {
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  formaPagamento: {
    type: DataTypes.ENUM('dinheiro', 'cheque', 'cartao', 'chequePre'),
    allowNull: false
  }
}, {
  tableName: 'gastos',
  timestamps: false
});

// Criando o relacionamento: Um TipoGasto tem muitos Gastos
TipoGasto.hasMany(Gasto, { foreignKey: 'tipoGastoId', as: 'gastos' });
Gasto.belongsTo(TipoGasto, { foreignKey: 'tipoGastoId', as: 'tipo' });

module.exports = Gasto;