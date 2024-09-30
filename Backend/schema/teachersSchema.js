const mongose = require('mongoose');

const subjectTestSchema = new mongose.Schema({
    Name: String,
    Grade: [Number],
    Average: {
        type: Number
    },
    status: {
        type: String,
        default: false
    }
});

const semesterSchema = new mongose.Schema({
    Semester: String,
    Subject: [subjectTestSchema],
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