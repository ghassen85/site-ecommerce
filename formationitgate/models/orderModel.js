var mongoose = require('mongoose');
const { schema } = require('./souscolllectionModel');
const Schema = mongoose.Schema
var OrderSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },produit:{
        type:Schema.Types.ObjectId,
        ref:'Produit'
    }
})
module.exports = mongoose.model('Order',OrderSchema);//User esm lcollection fel base des donneés
