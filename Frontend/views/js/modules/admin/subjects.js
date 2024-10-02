function addPreRequirement(){

    let newPreRequirement = document.createElement('input')
    newPreRequirement.setAttribute('type', 'text')
    newPreRequirement.setAttribute('name', 'preRequirements[]')
    newPreRequirement.setAttribute('class', 'form-control')
    newPreRequirement.setAttribute('placeholder', 'Pre-requirement')
    newPreRequirement.setAttribute('required', 'required')
    newPreRequirement.classList.add('mt-2')

    document.getElementById('preRequirements').appendChild(newPreRequirement)
}

function removePreRequirement(){

    let preRequirements = document.getElementById('preRequirements')
    let lastPreRequirement = preRequirements.lastChild

    if(lastPreRequirement != null){
        if(preRequirements.childElementCount > 2){
            preRequirements.removeChild(lastPreRequirement)
        }
    }
}

window.onload = function(){
    fetch('/getAcademicPrograms').then(res => res.json()).then(data => {
        let academicPrograms = document.getElementById('academicPrograms')
        data.forEach(academicProgram => {
            let option = document.createElement('option')
            option.value = academicProgram.name
            option.innerHTML = academicProgram.name
            academicPrograms.appendChild(option)
        })
    }).catch(err => console.log(err))
}