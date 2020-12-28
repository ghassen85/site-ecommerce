const produitController = require('../controllers/produitcontroller')
const route = require('express').Router()
const multer = require('../middleware/multer-config');

route.post('/addProduit',produitController.createProduit)
route.get('/getproduit',produitController.getProduit)
route.get('/find/:id',produitController.findProduit)
route.put('/put/:id',produitController.updateProd)
route.post('/addProduitimage',multer.single('image'),produitController.createproduitimage)
route.delete('/deleteOne/:id',produitController.deleteProductById)


module.exports=route;