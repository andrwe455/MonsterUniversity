const mongose = require('mongoose');

const semesterSchema = new mongose.Schema({
    Semester: String,
    Grade: [Number],
    Average: {
        type: Number
    },
    _id : false
});

const teacherSchema = new mongose.Schema({

    status: {
        type: String,
        required: true,
        default: 'Activo'
    },
    test:[semesterSchema]
});

module.exports =teacherSchema;