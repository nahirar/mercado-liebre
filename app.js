const express = require('express');
const app = express();
const path = require('path');
let rutasProductos = require ('./routes/productos.js')
let rutasMain = require ('./routes/main.js')
const publicPath = path.resolve(__dirname, 'public');
const port = process.env.PORT || 3040

app.listen(port, () => {
    console.log(`Servidor corriendo en https://localhost:${port}`)
});

app.set("view engine", "ejs");
app.use(express.static(publicPath));
app.use('/productos', rutasProductos);
app.use('/', rutasMain);
