
window.onload = function(){
    fetch('/getGroupsInfo').then(res => res.json()).then(data => {
        let academicPrograms = document.getElementById('academicPrograms')
        data.programs.forEach(academicProgram => {
            let option = document.createElement('option')
            option.value = academicProgram.name
            option.innerHTML = academicProgram.name
            academicPrograms.appendChild(option)
        })
        let subjects = document.getElementById('Subject')
        data.subjects.forEach(subject => {
            let option = document.createElement('option')
            option.value = subject.name
            option.innerHTML = subject.name
            subjects.appendChild(option)
        })
    }).catch(err => console.log(err))
}