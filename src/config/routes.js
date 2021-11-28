const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/home_controller');
const EventosController = require('../controllers/eventos_controller');

router.get('/', HomeController.index);
router.get('/eventos.json', EventosController.index);

module.exports = router;
