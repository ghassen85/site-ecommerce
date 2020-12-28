const collectioncontroller = require('../controllers/collectioncontroller');

const route=require('express').Router()// module express responsable pour les URLs

route.post('/addC',collectioncontroller.createC)
route.get('/getAllC',collectioncontroller.getAllC)
route.get('/getOneC/:id',collectioncontroller.getOneC)


module.exports=route;