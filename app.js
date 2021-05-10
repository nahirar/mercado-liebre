const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, 'public');

app.listen(3050, () => {
    console.log("Esta funcionando!")
});

app.use(express.static(publicPath));
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/views/home.html'))
});

app.get('/crear-Producto', (req, res)=> {
    res.sendFile(path.join(__dirname + '/views/product.html'))
});
