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


//api routes
router.post('/login', controller.login);
router.post('/setTeacher', controller.setTeacher);
router.post('/scoreTeacher/:id', controller.teacherScore);

module.exports = router;