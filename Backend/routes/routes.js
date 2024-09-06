const {Router} = require('express');
const router = Router();
const controller = require('../controller/controller.js');

const mongoose = require('../database/mongo.js');


router.post('/setTeacher', controller.setTeacher);
router.post('/scoreTeacher/:id', controller.teacherScore);

module.exports = router;