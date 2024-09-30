const mongoose = require('mongoose');

const teacherSecheduleSchema = new mongoose.Schema({

    officeHours: String,
    conditions: String,
    courseLoad: Number,
    Subjects: {
        type: Array,
        required: true
    },
});

const studentSecheduleSchema = new mongoose.Schema({
    Subjects: {
        type: Array,
        required: true
    },
    Schedule:{
        Subject:[
            {
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
                },
                credits: {
                    type: Number,
                    required: true
                },
                Name: {
                    type: String,
                    required: true
                }
            }
        ]
    },
    TotalCredits: {
        type: Number,
        required: true
    },
    Semester: {
        type: String,
        required: true
    }
});

const schedulesSchema = new mongoose.Schema({
    id: String,
    role: {
        type: String,
        enum: ['Teacher', 'student'],
        required: true
    } 
},{ discriminatorKey: 'role' });

schedulesSchema.discriminator('Teacher', teacherSecheduleSchema);
schedulesSchema.discriminator('Student', studentSecheduleSchema);

const Schedule = mongoose.model('Schedule', schedulesSchema, 'Schedules');

module.exports = Schedule;
