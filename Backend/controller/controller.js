const usersSchema = require('../schema/usersSchema');
const  {auth, signIn} = require('../database/firebase');



async function login(req,res) {

    const {email, password} = req.body;
    
    try {
        
        signIn(auth,email,password).then((user) => {
            res.json("User logged in");
        }).catch((error) => {
            res.json(error);
        });
        
    }catch(error){
        console.log(error);
    }

}

async function setTeacher(req,res) {
    
    const newTeacher = new usersSchema({
        id: req.body.id,
        Name: req.body.Name,
        LastName: req.body.LastName,
        Email: req.body.Email,
        role: req.body.role
    });
    
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

module.exports = {
    login,
    setTeacher,
    teacherScore
};