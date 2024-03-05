const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

//Cargue y limpieza de información
const info = require('./infoMang.js');

//Consulta de información
const cuenta = require('../crud/cuenta.js');
const tercero = require('../crud/tercero.js');
const movCuenta = require('../crud/movCuenta.js');
const movTercero = require('../crud/movTercero.js');

//Exporta el modulo
module.exports = router;

/************************ Metodos *******************************/
//Cargue de información
router.post('/cargar/terceros', info.cargarTerceros);
router.post('/cargar/balance', info.cargarBalance);
router.post('/cargar/mov', info.cargarMov);
//Eliminar DB
router.delete('/eliminarDB', info.eliminarDB);