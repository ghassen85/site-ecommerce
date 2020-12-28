const acheteurcontroller = require('../controllers/acheteurcontroller');


const route=require('express').Router()// module express responsable pour les URLs

route.post('/addacheteur',acheteurcontroller.createA)


module.exports=route;