const mongose = require('mongoose');

const subjectSchema = new mongose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        required: true
    },
    preRequirements: {
        type: [String],
        required: true
    },
    academicPrograms: {
        type: [String],
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

module.exports = mongose.model('Subject', subjectSchema);