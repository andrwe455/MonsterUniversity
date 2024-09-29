const usersSchema = require('../schema/usersSchema');
const subjectSchema = require('../schema/subjectSchema');
const groupsSubjectsSchema = require('../schema/groupsSubjectsSchema');
const  {auth, signIn,logout} = require('../database/firebase');
const views = require('./views');


async function login(req,res,next) {

    const {email, password} = req.body;
    
    try {
        signIn(auth,email,password).then((user) => {
            usersSchema.findOne({Email: email}).then((user) => {
                
                res.redirect('/home/'+user.role);             
            }).catch((error) => {
                res.json(error);
            });
        }).catch((error) => {
            res.redirect('/?error='+error.message);
        });
        
    }catch(error){
        console.log(error);
    }

}

async function setTeacher(req,res) {
    
    const newTeacher = new usersSchema(req.body);
    
    await newTeacher.save();
    res.json(newTeacher);
}

async function teacherScore(req,res) {

    const {id} = req.params;
    const teacherScore = await usersSchema.findOne({id: id});
    
    let existinSemester = teacherScore.test.find(semester => semester.Semester === req.body.idsemester);

    if(existinSemester){
        existinSemester.Grade.push(req.body.grade);
        existinSemester.Average = existinSemester.Grade.reduce((a,b) => a+b) / existinSemester.Grade.length;
    }else{
        teacherScore.test.push({
            Semester: req.body.idsemester,
            Grade: [req.body.grade],
            Average: req.body.grade
        });
    }

    
    await teacherScore.save();    
    
    res.json(teacherScore);
}


async function Logout(req,res) {
    try {
        logout(auth);
        res.redirect('/');
    } catch (error) {
        console.log('error', error);
        res.status(500).json('Error during logout');
    }
    
}

async function createSubject(req,res){
    try{
        const newSubject = new subjectSchema(req.body);
        await newSubject.save();
        res.redirect('/home/admin/createSubject');
    }catch(error){
        console.log(error);
    }
}

async function getSubjects(req,res,next){
    try {
        const subjects = await subjectSchema.find();

        req.body.subjects = subjects;
        next();
    } catch (error) {
        console.log(error);
    }
}

async function updateSubject(req,res){
    try{
      const {id} = req.params;
      const subject = await subjectSchema.findOne({id: id});
        
      subject.name = req.body.name;
      subject.description = req.body.description;
      subject.semester = req.body.semester;
      subject.preRequirements = req.body.preRequirements;
      subject.credits = req.body.credits;
        
      await subject.save();

      res.redirect('/home/admin/showSubject?success=Subject updated successfully');
    }catch(error){
      console.log(error);
      res.redirect('/home/admin/showSubject?error=Error updating subject');
    }

}

async function getInfo(req,res,next){
    try {
        const teachers = await usersSchema.find({role: 'teacher'});
        req.body.teachers = teachers;
        next();
    } catch (error) {
        console.log(error);
    }
}

async function getTeachers(req,res){
    try {
        const teachers = await usersSchema.find({role: 'teacher'});
        res.json(teachers);
    } catch (error) {
        console.log(error);
    }
}

async function getStudents(req,res){
    try {
        const students = await usersSchema.find({role: 'student'});
        req.body.students = students;
        res.json(req.body);
    } catch (error) {
        console.log(error);
    }
}

async function getGroups(req,res){
    try {
        const groups = await groupsSubjectsSchema.find();
        res.json(groups);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    login,
    setTeacher,
    teacherScore,
    Logout,
    createSubject,
    getSubjects,
    updateSubject,
    getTeachers,
    getStudents,
    getGroups,
    getInfo
};