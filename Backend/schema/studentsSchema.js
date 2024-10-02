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
    },
    AcademicHistory:{
        type: [{
            Subject: String,
            Grade: Number,
            Semester: String,
            Credits: Number
        }],
        required: true
    },
});

module.exports = studentSchema;