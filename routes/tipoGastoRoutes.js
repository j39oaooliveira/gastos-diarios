const express = require('express');
const router = express.Router();
const tipoGastoController = require('../controllers/tipoGastoController');

router.post('/', tipoGastoController.criar);
router.get('/', tipoGastoController.listar);
router.put('/:id', tipoGastoController.atualizar);
router.delete('/:id', tipoGastoController.deletar);

module.exports = router;