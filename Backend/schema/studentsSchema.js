const mongose = require('mongoose');

const studentSchema = new mongose.Schema({
    
    AcademicDegree:{
        type: String,
        required: true
    },
    AcademicProgram:{
        type: String,
        required: true
    },
    Semester:{
        type: Number,
        required: true
    },
    Status:{
        type: String,
        required: true,
        default: 'Activo'
    }
});

module.exports = studentSchema;