const userController=require('../controllers/userController');

const route=require('express').Router()
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');// module express responsable pour les URLs



route.post('/addUser',userController.createUser)
route.get('/getAll',userController.getAllUsers)
route.get('/getOneUser/:id',userController.getOneUser)
route.put('/updateUserbyid/:id',userController.updateUserbyid)
route.delete('/deleteUser/:id',userController.deleteUserbyId)
route.post('/addUserimage',multer.single('image'),userController.createUserimage)
route.post('/login2',userController.authentificate)
route.post('/sendmail',userController.sendMail)
route.post('/addUpload',multer.single('image'),userController.createUserimage)
//route.put('/updateUpload/:id', multer.single('image') ,userController.updateUser)
route.put('/push/:id',multer.single('image'),userController.pushUser)
route.put('/delete/:id',multer.single('image'),userController.deleteUser)

module.exports=route;