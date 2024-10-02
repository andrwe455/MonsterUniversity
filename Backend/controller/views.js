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

    if(req.params.role === 'admin'){
        res.sendFile(path.join(proyectPath,'Frontend','views','modules','adminDashboard','adminDashboardHome.html'));  
    }else if( req.body.role === 'teacher'){
        res.sendFile(path.join(proyectPath,'frontend','modules','teachersDashboard','teacher.html'));
    }else if( req.body.role === 'student'){
        res.sendFile(path.join(proyectPath,'frontend','modules','studentsDashboard','home.html'));
    }
    else if( req.body.role === 'manager'){
        res.sendFile(path.join(proyectPath,'frontend','modules','managerDashboard','manager.html'));
    }
    else{
        res.json({message: 'rol not found'});
    }
}

function teacherHome (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','teacherDashboard','teacherDashboardHome.html'));
}
function teacherGrades (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','teacherDashboard','grades','teacherDashboardGrades.html'));
}
function teacherSchedule (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','teacherDashboard','schedule','teacherDashboardSchedule.html'));
}
function teacherAttendance (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','teacherDashboard','attendance','teacherDashboardAttendance.html'));
}
function teacherViewAttendance (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','teacherDashboard','attendance','teacherDashboardViewAttendance.html'));
}
function teacherSubject (req, res) {
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile (path.join(proyectPath,'Frontend','views','modules','teacherDashboard','subjects','teacherDashboardSubjects.html'));
}


module.exports = {
    login,
    secondFactor,
    home,
    teacherSchedule,
    teacherAttendance,
    teacherSubject,
    teacherHome,
    teacherViewAttendance,
    teacherGrades
}