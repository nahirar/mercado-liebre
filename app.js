const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, 'public');

app.listen(3040, () => {
    console.log("Esta funcionando en puerto 3040!")
});

app.use(express.static(publicPath));
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/views/home.html'))
});

app.get('/crear-Producto', (req, res)=> {
    res.sendFile(path.join(__dirname + '/views/product.html'))
});
app.get('/register', (req, res)=> {
    res.sendFile(path.join(__dirname + '/views/register.html'))
});

app.get('/login', (req, res)=> {
    res.sendFile(path.join(__dirname + '/views/login.html'))
});
