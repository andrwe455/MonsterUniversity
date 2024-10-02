const path = require('path');

function login (req, res) {
    res.redirect('/');
}

function secondFactor (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile(path.join(proyectPath,'frontend','secondFactor.html'));
}

function home (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    console.log(req.params.role);
    if(req.params.role === 'admin'){
        res.sendFile(path.join(proyectPath,'Frontend','views','modules','adminDashboard','adminDashboardHome.html'));  
    }else if( req.params.role === 'teacher'){
        res.sendFile(path.join(proyectPath,'Frontend','views','modules','teacherDashboard','teacherDashboardHome.html'));
    }else if( req.params.role=== 'student'){
        res.sendFile(path.join(proyectPath,'Frontend','views','modules','dashboard_student','Home.html'));
    }
    else if( req.params.role=== 'manager'){
        res.sendFile(path.join(proyectPath,'Frontend','views','modules','managerDashboard','managerDashboardHome.html'));
    }
    else{
        res.json({message: 'rol not found'});
    }
}

function createSubject (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','adminDashboard','subjects','adminDashboarCreateSubject.html'));
}

function showSubject (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','adminDashboard','subjects','adminDashboardShowSubjects.html'));
}

function createTeacher (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','managerDashboard','managerDashboardCreateTeacher.html')); 
}

function createStudentAcademicHistory(req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile(path.join(proyectPath, 'Frontend', 'views', 'modules', 'dashboard_student','studentAcademicHistory' ,'studentAcademicHistory.html'));
}

function createStudentTeachersEvaluation(req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile(path.join(proyectPath, 'Frontend', 'views', 'modules', 'dashboard_student', 'StudentTeachersEvaluation', 'StudentTeachersEvaluation.html'));
}

function createStudentAttendancePerSubject(req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile(path.join(proyectPath, 'Frontend', 'views', 'modules', 'dashboard_student','StudentAttendancePerSubject' ,'StudentAttendancePerSubject.html'));
}

function createStudentInscripcions(req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile(path.join(proyectPath, 'Frontend', 'views', 'modules', 'dashboard_student','Studentinscripcions' ,'StudentInscripcions.html'));
}

function createCancelsubjects(req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile(path.join(proyectPath, 'Frontend', 'views', 'modules', 'dashboard_student','CancelSubjects' ,'CancelSubjects.html'));
}

function checkEnrollments (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','managerDashboard','managerEnrollments','managerEnrollments.html'));
}

function teachersEvaluationsReview (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','managerDashboard','managerTeachersEvaluationsReview','managerTeachersEvaluationReview.html'));
}

function managerProfile(req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','managerDashboard','managerProfile','managerProfile.html'));
}

function createGroup (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','adminDashboard','groups','adminDashboardCreateGroup.html'));
}

function createAcademicProgram (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','adminDashboard','academicPrograms','adminDashboardCreateAcademicProgram.html'));
}

function showAcademicProgram (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','adminDashboard','academicPrograms','adminDashboardShowAcademicPrograms.html'));
}

function showGroup (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','adminDashboard','groups','adminDashboardShowGroups.html'));
}

module.exports = {
    login,
    secondFactor,
    home,
    createSubject,
    createStudentAcademicHistory,
    createStudentTeachersEvaluation,
    createStudentAttendancePerSubject,
    createStudentInscripcions,
    createCancelsubjects,
    showSubject,
    createTeacher,
    checkEnrollments,
    teachersEvaluationsReview,
    managerProfile,
    createGroup,
    createAcademicProgram,
    showAcademicProgram,
    showGroup
}