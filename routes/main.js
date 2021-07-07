const express = require('express');
const router = express.Router();
const path = require('path');
const mainController = require ('../controllers/mainController.js')
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, './public/images/avatars');
	},
	filename: function (req,file,cb){
        console.log(file)
		cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
	}
})
const uploadFile = multer ({storage});



router.get('/', mainController.home);
router.get('/user/:id/edit', mainController.edit);
router.get('/user', mainController.list);
router.get('/register', mainController.register);
router.post('/register', uploadFile.single('photo'), mainController.store);
router.get('/login', mainController.login);
module.exports = router;