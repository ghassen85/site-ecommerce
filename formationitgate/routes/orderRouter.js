const odercontroller = require('../controllers/ordercontroller')
const produitController = require('../controllers/ordercontroller')
const route = require('express').Router()
route.post('/addOrder',odercontroller.createOrder)
route.get('/getOrder',odercontroller.getOrder)
route.get('/find/:id',odercontroller.getOneorder)

module.exports=route;