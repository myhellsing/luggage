var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;
  
var billSchema = new Schema({
    title: String,
    date: Date
});

module.exports = mongoose.model('Bill', billSchema);
