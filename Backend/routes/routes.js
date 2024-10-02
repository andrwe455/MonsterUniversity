const {Router} = require('express');
const router = Router();
const controller = require('../controller/controller.js');
const viwes = require('../controller/views.js');

const mongoose = require('../database/mongo.js');


//pages routes

/**
 * 
 */
router.get('/login', viwes.login);
router.get('/secondFactor', viwes.secondFactor);
router.get('/home/:role', viwes.home);

router.get('/home/teacher',viwes.teacherHome);
router.get('/home/teacher/schedule',viwes.teacherSchedule);
router.get('/home/teacher/attendance',viwes.teacherAttendance);
router.get('/home/teacher/viewAttendance',viwes.teacherViewAttendance);
router.get('/home/teacher/subjects',viwes.teacherSubject);
router.get('/home/teacher/grades',viwes.teacherGrades);

//api routes
router.post('/login', controller.login);
router.post('/setTeacher', controller.setTeacher);
router.post('/scoreTeacher/:id', controller.teacherScore);

module.exports = router;