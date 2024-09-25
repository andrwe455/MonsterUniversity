const {Router} = require('express');
const router = Router();
const controller = require('../controller/controller.js');
const viwes = require('../controller/views.js');




router.get('/login', viwes.login);
router.get('/secondFactor', viwes.secondFactor);
router.get('/home/:role', viwes.home);


router.get('/home/admin/createSubject', viwes.createSubject);
router.get('/home/manager/createTeacher', viwes.createTeacher);



router.get('/logout', controller.Logout);

router.post('/login', controller.login);
router.post('/setTeacher', controller.setTeacher);
router.post('/scoreTeacher/:id', controller.teacherScore);
router.post('/crtSubject',controller.createSubject)

module.exports = router;