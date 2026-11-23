const TipoGasto = require('../models/TipoGasto');

const tipoGastoController = {
  criar: async (req, res) => {
    try {
      const { descricao } = req.body;
      const novoTipo = await TipoGasto.create({ descricao });
      res.status(201).json(novoTipo);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  },
  listar: async (req, res) => {
    try {
      const tipos = await TipoGasto.findAll();
      res.json(tipos);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  },
  atualizar: async (req, res) => {
    try {
      const { id } = req.params;
      const { descricao } = req.body;
      const tipo = await TipoGasto.findByPk(id);
      if (!tipo) return res.status(404).json({ erro: "Tipo de gasto não encontrado." });
      
      await tipo.update({ descricao });
      res.json(tipo);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  },
  deletar: async (req, res) => {
    try {
      const { id } = req.params;
      const tipo = await TipoGasto.findByPk(id);
      if (!tipo) return res.status(404).json({ erro: "Tipo de gasto não encontrado." });
      
      await tipo.destroy();
      res.json({ mensagem: "Tipo de gasto removido." });
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
};

module.exports = tipoGastoController;