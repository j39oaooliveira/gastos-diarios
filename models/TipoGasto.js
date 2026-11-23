const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const TipoGasto = sequelize.define('TipoGasto', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'tipos_gastos',
  timestamps: false
});

module.exports = TipoGasto;