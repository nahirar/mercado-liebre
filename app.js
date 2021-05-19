const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, 'public');
const port = process.env.PORT || 3040

app.listen(port, () => {
    console.log(`Servidor corriendo en https://localhost:${port}`)
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
