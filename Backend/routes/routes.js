const {Router} = require('express');
const router = Router();
const controller = require('../controller/controller.js');
const viwes = require('../controller/views.js');

router.get('/login', viwes.login);
router.get('/secondFactor', viwes.secondFactor);
router.get('/home/:role', viwes.home);


router.get('/home/admin/createSubject', viwes.createSubject);
router.get('/home/admin/showSubject', viwes.showSubject);
router.get('/home/admin/createTeacher', viwes.createTeacher);
router.get('/home/admin/crtGroup', viwes.createGroup);
//router.get('/home/admin/showGroup', viwes.showGroup);
router.get('/home/admin/crtAcademicProgram', viwes.createAcademicProgram);
router.get('/home/admin/showAcademicProgram', viwes.showAcademicProgram);


router.get('/home/student/AcedmicHistory', viwes.createStudentAcademicHistory);
router.get('/home/student/TeachersEvaluation', viwes.createStudentTeachersEvaluation);
router.get('/home/student/AttendancePerSubject', viwes.createStudentAttendancePerSubject);
router.get('/home/student/Inscripcions', viwes.createStudentInscripcions);
router.get('/home/student/Cancel', viwes.createCancelsubjects);

router.get('/logout', controller.Logout);


router.get('/home/manager/enrollments', viwes.checkEnrollments);
router.get('/home/manager/teachersEvaluationsReview', viwes.teachersEvaluationsReview);
router.get('/home/manager/profile', viwes.managerProfile);
router.get('/home/manager/createTeacher', viwes.createTeacher);

router.get('/logout', controller.Logout);
router.get('/getSubjects', controller.getSubjects);
router.get('/getTeachers', controller.getTeachers);
router.get('/getInfo',controller.getInfo,controller.getSubjectsMiddelware,controller.getStudents);
router.get('/getStudents', controller.getStudents);
router.get('/enrollments', controller.getEnrollments);
router.get('/getAcademicPrograms', controller.getAcademicPrograms);

router.post('/login', controller.login);
router.post('/setTeacher', controller.setTeacher);
router.post('/scoreTeacher/:id', controller.teacherScore);
router.post('/crtSubject',controller.createSubject)
router.post('/crtProgram',controller.createProgram)


router.put('/updateSubject/:id', controller.updateSubject);
router.put('/sendWarning', controller.sendWarning);

router.delete('/deleteTeacher', controller.deleteTeacher);





module.exports = router;