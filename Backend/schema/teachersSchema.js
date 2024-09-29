const mongose = require('mongoose');

const semesterSchema = new mongose.Schema({
    Semester: String,
    Subject: String,
    Grade: [Number],
    Average: {
        type: Number
    },
    status: {
        type: Boolean,
        default: false
    },
    _id : false
});

const teacherSchema = new mongose.Schema({

    status: {
        type: String,
        required: true,
        default: 'Activo'
    },
    test:[semesterSchema],
    warningTracker: {
        type: Number,
        default: 0
    }
});

module.exports =teacherSchema;