// Initialize express rout
const mongoose = require('mongoose');

const adminsSchema = new mongoose.Schema({
    jobTitle:{
        type: String,
        required: true,
        default: 'hola'
    },
    Status:{
        type: String,
        required: true,
        default: 'active'
    }
});


module.exports = adminsSchema;