var mongoose = require('mongoose')
const Schema = mongoose.Schema
var SouscollectionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, produit: [
        {
            type: Schema.Types.ObjectId,
            ref: "Produit"
        }
    ],
    cat:
    {
        type: Schema.Types.ObjectId,
        ref: "c"
    }

})
module.exports = mongoose.model('sc', SouscollectionSchema);//User esm lcollection fel base des donneés
