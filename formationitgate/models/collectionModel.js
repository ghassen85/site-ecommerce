var mongoose = require('mongoose')
const Schema = mongoose.Schema
var collectionSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },souscollection:[
        {
            type:Schema.Types.ObjectId,
            ref:'sc'
        }
    ]
})
module.exports = mongoose.model('c',collectionSchema);//User esm lcollection fel base des donneés
