const Gasto = require('../models/gasto');
const TipoGasto = require('../models/TipoGasto');

const gastoController = {
  criar: async (req, res) => {
    try {  
      const { tipoGastoId, data, valor, formaPagamento } = req.body;
      const novoGasto = await Gasto.create({ tipoGastoId, data, valor, formaPagamento });
      res.status(201).json(novoGasto);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  },
  listar: async (req, res) => {
    try {
      const gastos = await Gasto.findAll({
        include: [{ model: TipoGasto, as: 'tipo' }] // Faz o JOIN automático das tabelas
      });
      res.json(gastos);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  },
  deletar: async (req, res) => {
    try {
      const { id } = req.params;
      const gasto = await Gasto.findByPk(id);
      if (!gasto) return res.status(404).json({ erro: "Gasto não encontrado." });
      
      await gasto.destroy();
      res.json({ mensagem: "Gasto removido com sucesso." });
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
};

module.exports = gastoController;