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