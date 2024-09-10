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

    console.log(req);
    if(req.params.role === 'admin'){
        console.log('admin');
        res.sendFile(path.join(proyectPath,'Frontend','views','modules','adminDashboard','adminDashboardHome.html'));
        
    }else if( req.body.role === 'teacher'){
        res.sendFile(path.join(proyectPath,'frontend','modules','teachersDashboard','teacher.html'));
    }else if( req.body.role === 'student'){
        res.sendFile(path.join(proyectPath,'frontend','modules','studentsDashboard','student.html'));
    }else{
        res.json({message: 'rol not found'});
    }
}

module.exports = {
    login,
    secondFactor,
    home
}