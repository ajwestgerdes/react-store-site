//creates the schema for the values and data we will be passing around

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a schema
const SignupSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = Signup = mongoose.model('signup', SignupSchema);