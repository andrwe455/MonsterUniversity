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
    id: Number,
    name: String,
    email: String,
    status: String,
    test:[semesterSchema]
});

module.exports = mongose.model('teacher', teacherSchema, 'teacher');