const path = require('path');
const viewsPath = path.join(__dirname, '../')

const productosController = {
    crear: (req, res)=> {
        res.sendFile(path.join(viewsPath + './views/product.html'))
    },
    detalle: function(req,res){
        res.send("Bienvenidos al detalle del producto "+ req.params.idProducto)
    },
    detalleComentario: function(req,res){
        if (req.params.idComentario == undefined) {
            res.send("Bienvenidos al detalle del producto "+ req.params.idProducto)
        } else {
            res.send("Bienvenidos al detalle del producto "+ req.params.idProducto + "ubicado en el detalla "+ req.params.idcComentario)
        }
        
    }
};

module.exports = productosController;