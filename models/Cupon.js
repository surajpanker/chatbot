const mongoose = require('mongoose');
const { Schema } = mongoose;
const Cupon = new Schema({
  


    products: String,
    link:     String

});
mongoose.model('cupon',Cupon);