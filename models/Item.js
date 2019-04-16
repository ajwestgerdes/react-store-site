//creates the schema for the values and data we will be passing around

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a schema
const ItemSchema = new Schema({

});

module.exports = Item = mongoose.model('item', ItemSchema);