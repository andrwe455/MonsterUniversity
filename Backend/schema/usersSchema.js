const mongoose = require('mongoose');
const studentsSchema = require('./studentsSchema');
const docentsSchema = require('./teachersSchema');
const adminsSchema = require('./adminsSchema');
const managerSchema = require('./managerSchema');


const usersSchema = new mongoose.Schema({
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
    role:{
        type: String,
        enum:['student', 'docent', 'admin'],
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },

},{ discriminatorKey: 'role' });

const User = mongoose.model('User', usersSchema, 'users');
const Student = User.discriminator('student', studentsSchema);
const Docent = User.discriminator('docent', docentsSchema);
const Admin = User.discriminator('admin', adminsSchema);
const Manager = User.discriminator('manager', managerSchema);



module.exports =  User;