const {Router} = require('express');
const router = Router();
const controller = require('../controller/controller.js');
const viwes = require('../controller/views.js');

router.get('/login', viwes.login);
router.get('/secondFactor', viwes.secondFactor);
router.get('/home/:role', viwes.home);

router.get('/home/teacher',viwes.teacherHome);
router.get('/home/teacher/schedule',viwes.teacherSchedule);
router.get('/home/teacher/attendance',viwes.teacherAttendance);
router.get('/home/teacher/viewAttendance',viwes.teacherViewAttendance);
router.get('/home/teacher/subjects',viwes.teacherSubject);
router.get('/home/teacher/grades',viwes.teacherGrades);

router.get('/home/admin/createSubject', viwes.createSubject);
router.get('/home/admin/showSubject', viwes.showSubject);
router.get('/home/admin/createTeacher', viwes.createTeacher);
router.get('/home/admin/crtGroup', viwes.createGroup);
router.get('/home/admin/showGroup', viwes.showGroup);
router.get('/home/admin/crtAcademicProgram', viwes.createAcademicProgram);
router.get('/home/admin/showAcademicProgram', viwes.showAcademicProgram);
router.get('/home/admin/assign', viwes.assign);
router.get('/home/admin/createUser',viwes.createUser)


router.get('/home/student/AcedmicHistory', viwes.createStudentAcademicHistory);
router.get('/home/student/TeachersEvaluation', viwes.createStudentTeachersEvaluation);
router.get('/home/student/AttendancePerSubject', viwes.createStudentAttendancePerSubject);
router.get('/home/student/Inscripcions', viwes.createStudentInscripcions);
router.get('/home/student/Cancel', viwes.createCancelsubjects);
router.get('/academicHistory', controller.academicHistory);

router.get('/logout', controller.Logout);


router.get('/home/manager/enrollments', viwes.checkEnrollments);
router.get('/home/manager/teachersEvaluationsReview', viwes.teachersEvaluationsReview);
router.get('/home/manager/profile', viwes.managerProfile);
router.get('/home/manager/createTeacher', viwes.createTeacher);

router.get('/logout', controller.Logout);
router.get('/getSubjects', controller.getSubjects);
router.get('/getTeachers', controller.getTeachers);
router.get('/getInfo',controller.getInfo,controller.getSubjectsMiddelware,controller.getAcademicProgramsMiddleWare,controller.getStudents);
router.get('/getStudents', controller.getStudents);
router.get('/enrollments', controller.getEnrollments);
router.get('/getAcademicPrograms', controller.getAcademicPrograms);
router.get('/getGroupsInfo', controller.getSubjectsMiddelware,controller.getAcademicPrograms);
router.get('/getAssigments', controller.getGroupsMiddleWare,controller.getTeachers);
router.get('/getGroups', controller.getGroups);

router.post('/login', controller.login);
router.post('/setUser', controller.setUser);
router.post('/scoreTeacher/:id', controller.teacherScore);
router.post('/crtSubject',controller.createSubject)
router.post('/crtProgram',controller.createProgram)
router.post('/crtGroup',controller.createGroup)
router.post('/assignTeacher',controller.assignTeacher)


router.post('/updateSubject', controller.updateSubject);
router.put('/sendWarning', controller.sendWarning);

router.delete('/deleteTeacher', controller.deleteTeacher);
router.get('/deleteSubject/:id',controller.deleteSubject)




module.exports = router;