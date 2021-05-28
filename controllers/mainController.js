const path = require('path');
const viewsPath = path.join(__dirname, '../')

const mainController = {
    home: function(req, res){
        //res.sendFile(path.join(viewsPath + './views/home.html'))
        return res.render('home')
    },
    login: function(req, res) {
        //res.sendFile(path.join(viewsPath + './views/login.html'))
        return res.render('login')
    },
    register: function(req, res) {
        //res.sendFile(path.join(viewsPath + './views/register.html'))
        return res.render('register')
    }
    
}

module.exports = mainController;