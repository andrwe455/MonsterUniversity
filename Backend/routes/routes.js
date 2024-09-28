const {Router} = require('express');
const router = Router();
const controller = require('../controller/controller.js');
const viwes = require('../controller/views.js');




router.get('/login', viwes.login);
router.get('/secondFactor', viwes.secondFactor);
router.get('/home/:role', viwes.home);


router.get('/home/admin/createSubject', viwes.createSubject);
router.get('/home/admin/showSubject', viwes.showSubject);
router.get('/home/admin/crtGroup', viwes.createGroup);
router.get('/home/manager/createTeacher', viwes.createTeacher);
router.get('/getInfo',controller.getTeachers);


router.get('/logout', controller.Logout);
router.get('/getSubjects', controller.getSubjects);

router.post('/login', controller.login);
router.post('/setTeacher', controller.setTeacher);
router.post('/scoreTeacher/:id', controller.teacherScore);
router.post('/crtSubject',controller.createSubject)


router.put('/updateSubject/:id', controller.updateSubject);

module.exports = router;