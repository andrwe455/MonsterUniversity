
window.onload = function(){
    fetch('/getAssigments').then(res => res.json()).then(data => {
        let groups = document.getElementById('group')
        data.groups.forEach(academicProgram => {
            let option = document.createElement('option')
            option.value = academicProgram.group
            option.innerHTML = academicProgram.group
            groups.appendChild(option)
        })
        document.cookie = `group=${JSON.stringify(data.groups)}`
        let teachers = document.getElementById('teacher')
        data.teachers.forEach(element => {
            let option = document.createElement('option')
            option.value = element.Name
            option.innerHTML = element.Name
            teachers.appendChild(option)
        })
    }).catch(err => console.log(err))
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setSubject(value) {
    // Obtener la cookie 'group'
    const groupCookie = getCookie('group');
    
    if (!groupCookie) {
        console.error('No se encontró la cookie "group"');
        return;
    }

    // Convertir el valor de la cookie a un objeto (si está almacenado en JSON)
    const group = JSON.parse(decodeURIComponent(groupCookie));

    let subject = document.getElementById('subject');

    // Filtrar el grupo por el valor y obtener los nombres de las materias
    subject.innerText = group.filter(element => element.group === value)[0].subject;
    subject.value = group.filter(element => element.group === value)[0].subject;
}
