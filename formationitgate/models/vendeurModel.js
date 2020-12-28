var mongoose = require('mongoose')
const Schema = mongoose.Schema
const User=require('./userModel')
var Vendeur = mongoose.Schema({
 cin:{
     type:String,
     require:true
 }
    
})
module.exports = User.discriminator('Vend',Vendeur);//User esm lcollection fel base des donneés

