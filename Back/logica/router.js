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
//Procesamiento de información
router.post('/proc/terceros', info.procTerceros);
router.post('/proc/balance', info.procBalance);
router.post('/proc/mov', info.procMov);
//Eliminar DB
router.delete('/eliminarDB', info.eliminarDB);
//Correcion de errores
router.post('/corregir/:tipo', info.corregirErrores);