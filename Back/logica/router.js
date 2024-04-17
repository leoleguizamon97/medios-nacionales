const express = require('express')
const router = express.Router()

//Cargue y limpieza de información
const info = require('./infoMang.js')

/*//Consulta de información
const cuenta = require('../crud/cuenta.js')
const tercero = require('../crud/tercero.js')
const movCuenta = require('../crud/movCuenta.js')
const movTercero = require('../crud/movTercero.js')
*/
//Exporta el modulo
module.exports = router;
/************************ Metodos *******************************/
//Procesamiento de información
router.post('/proc/terceros', info.procTerceros)
router.post('/proc/balance', info.procBalance)
router.post('/proc/mov', info.procMov)
//Eliminar DB
router.delete('/eliminarDB', info.eliminarDB)
//Correcion de errores
router.put('/corregir/:tipo', info.corregirErrores)
//Envio de elementos
router.get('/elementos/terceros', info.sendTerceros)
router.get('/elementos/cuentas', info.sendCuentas)
router.get('/elementos/balance', info.sendBalance)
router.get('/elementos/mov', info.sendMov)
//Envio de articulos
router.get('/nacionales/',info.informeNacional)
