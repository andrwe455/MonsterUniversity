const teacher = require('../schema/teachersSchema.js');

async function setTeacher(req,res) {
    
    const newTeacher = new teacher(req.body);
    await newTeacher.save();
    res.json(newTeacher);
}

async function teacherScore(req,res) {

    const {id} = req.params;
    const teacherScore = await teacher.findOne({id: id});
    
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
    setTeacher,
    teacherScore
};