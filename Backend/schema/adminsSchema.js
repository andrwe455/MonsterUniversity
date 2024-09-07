// Initialize express rout
const mongoose = require('mongoose');

const adminsSchema = new mongoose.Schema({
    jobTitle:{
        type: String,
        required: true
    },
    Status:{
        type: String,
        required: true
    }
});


module.exports = adminsSchema;