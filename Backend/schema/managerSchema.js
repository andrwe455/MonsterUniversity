const mongose = require('mongoose');

const managerSchema = new mongose.Schema({
    jobTitle:{
        type: String,
        required: true,
        default: 'hola'
    },
    Status:{
        type: String,
        required: true,
        default: 'active'
    },
    faculty:{
        type: String,
        required: true
    },
});


module.exports = managerSchema;