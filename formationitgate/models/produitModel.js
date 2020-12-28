var mongoose = require('mongoose')
const Schema = mongoose.Schema
var ProduitSchema = mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String,
        required: true
    },
    prix:{
        type:Number,
        required: true
    },
    description:{
        type:String,
        required: true
    },order:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        }
    ],souscollection:{
        type:Schema.Types.ObjectId,
        ref:'sc'
    }
})
module.exports = mongoose.model('Produit',ProduitSchema);