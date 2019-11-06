const mongoose = require('mongoose');
const password = require('../../pass.js');
console.log(password);
const url = `mongodb+srv://cc6656:${password}@60decibel-w1vjc.mongodb.net/60Decibel?retryWrites=true&w=majority`
mongoose.connect(url, {
  useNewUrlParser : true,
  useCreateIndex : true,
  useFindAndModify : false,
  useUnifiedTopology: true
}).catch(e => console.log(e))


