const express = require('express');
const router = express.Router();
const productosController = require ('../controllers/productosController')

router.get('/crear-Producto', productosController.crear);
router.get('/:idProducto', productosController.detalle );
router.get('/:idProducto/comentarios/:idcComentario?', productosController.detalleComentario);



module.exports = router;