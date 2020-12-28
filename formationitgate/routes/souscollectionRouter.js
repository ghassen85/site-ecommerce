const souscollectioncontroller = require('../controllers/souscollectioncontroller');
const userController=require('../controllers/souscollectioncontroller');

const route=require('express').Router()// module express responsable pour les URLs

route.post('/addSc',souscollectioncontroller.createSC)
route.get('/getAll',souscollectioncontroller.getAllSc)
route.get('/getOneUser/:id',souscollectioncontroller.getOneSc)


module.exports=route;