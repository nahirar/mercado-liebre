const path = require('path');
const viewsPath = path.join(__dirname, '../')
const usersModel = require('../models/usersModel')


const mainController = {
    home: function(req, res){
        //res.sendFile(path.join(viewsPath + './views/home.html'))
        return res.render('home')
    },
    list:  function(req, res){
        const usersList = usersModel.findAll();
    
        res.render('usersList', { usersList })
    },
    login: function(req, res) {
        //res.sendFile(path.join(viewsPath + './views/login.html'))
        return res.render('login')
    },
    register: function(req, res) {
        //res.sendFile(path.join(viewsPath + './views/register.html'))
        return res.render('register')
    },
    edit: (req, res) => {
        const user = usersModel.findByPk(req.params.id);

        res.render('userEdit', {
            user
        });
    },
    store: (req, res) => {
        // Crear el objeto planeta
        const { id, name, lastName,birthdate, email, password, profile, image } = req.body;

        const user = {
            id, name, lastName,birthdate, email, password, profile, image
        }

        console.log(user.lastName)
        const userCreated = usersModel.create(user);
        return res.send(req.body)
        //res.redirect('/planets/detail/' + planetCreated.id);
    },
    registerUser: function(req, res) {
        let imageFile = req.file;
        if (imageFile !== undefined) 
        {
	}
    return res.send ('No enviaste ninguna imagen')
    }
    
}

module.exports = mainController;