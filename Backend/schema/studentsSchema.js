const mongose = require('mongoose');

const studentSchema = new mongose.Schema({
    id: Number,
    Name:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
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
        required: true
    }
});

module.exports = mongose.model('student', studentSchema, 'student');