const express = require('express');
const router = express.Router();
const gastoController = require('../controllers/gastoController');

router.post('/', gastoController.criar);
router.get('/', gastoController.listar);
router.delete('/:id', gastoController.deletar);

module.exports = router;