const usersSchema = require('../schema/usersSchema');
const subjectSchema = require('../schema/subjectSchema');
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
            res.json(error);
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

async function getSubjects(req,res){
    try {
        const subjects = await subjectSchema.find();
        res.json(subjects);
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
    getSubjects
};