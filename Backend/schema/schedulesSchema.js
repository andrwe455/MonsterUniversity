const mongoose = require('mongoose');

const docentSchema = new mongoose.Schema({
    // Campos específicos para docentes
    officeHours: String,
    courseLoad: Number
});

const studentSchema = new mongoose.Schema({
    // Campos específicos para estudiantes
    Subjects: {
        type: Array,
        required: true
    },
    Schedule:{
        Subject:{
            start: {
                type: String,
                required: true
            },
            end: {
                type: String,
                required: true
            },
            day: {
                type: Array,
                required: true
            },
            teacher: {
                type: String,
                required: true
            }
        }
    }
});

const schedulesSchema = new mongoose.Schema({
    id: Number,
    role: {
        type: String,
        enum: ['docent', 'student'],
        required: true
    },
    conditions: String // Condiciones específicas para docentes
});

schedulesSchema.discriminator('Docent', docentSchema);
schedulesSchema.discriminator('Student', studentSchema);

const Schedule = mongoose.model('Schedule', schedulesSchema, 'Schedules');

module.exports = Schedule;
