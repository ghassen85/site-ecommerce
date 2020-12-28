const mongoose = require('mongoose')
const mongoDB = 'mongodb://127.0.0.1:27017/formation'
mongoose.connect("mongodb://localhost:27017/formation", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise; module.exports = mongoose;