const vendeurcontroller = require('../controllers/vendeurcontroller');
const userController=require('../controllers/vendeurcontroller');

const route=require('express').Router()// module express responsable pour les URLs

route.post('/addvendeur',vendeurcontroller.createV)


module.exports=route;