const {Router} = require('express');
const router = Router();
const controller = require('../controller/controller.js');
const viwes = require('../controller/views.js');


//pages routes

/**
 * 
 */
router.get('/login', viwes.login);
router.get('/secondFactor', viwes.secondFactor);
router.get('/home/:role', viwes.home);

//admin routes
router.get('/home/admin/createSubject', viwes.createSubject);


//Student routes
router.get('/home/student/AcedmicHistory', viwes.createStudentAcademicHistory);
router.get('/home/student/TeachersEvaluation', viwes.createStudentTeachersEvaluation);
router.get('/home/student/AttendancePerSubject', viwes.createStudentAttendancePerSubject);
router.get('/home/student/Inscripcions', viwes.createStudentInscripcions);

//api routes

router.get('/logout', controller.Logout);

router.post('/login', controller.login);
router.post('/setTeacher', controller.setTeacher);
router.post('/scoreTeacher/:id', controller.teacherScore);

module.exports = router;