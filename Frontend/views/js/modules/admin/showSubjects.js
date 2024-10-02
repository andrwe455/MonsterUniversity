

window.onload = function() {
    const table = document.getElementById('example1').getElementsByTagName('tbody')[0];
    fetch('/getSubjects').then(res => res.json()).then(data => {
        data.forEach(element => {
            const tr = document.createElement('tr');
            tr.classList.add('odd');

            const td1 = document.createElement('td');
            td1.textContent = element.id;
            tr.appendChild(td1);

            const td2 = document.createElement('td');
            td2.textContent = element.name;
            tr.appendChild(td2);

            const td3 = document.createElement('td');
            td3.textContent = element.description;
            tr.appendChild(td3);

            const td4 = document.createElement('td');
            td4.textContent = element.semester;
            tr.appendChild(td4);

            const td5 = document.createElement('td');

            if(element.preRequirements.length > 1) {
                const p = document.createElement('p');
                element.preRequirements.forEach(preRequirement => {
                    p.textContent += preRequirement+ ', ';
                });
                td5.appendChild(p);
            }else if(element.preRequirements.length == 1){
                td5.textContent = element.preRequirements;
                tr.appendChild(td5);
            }else{
                td5.textContent = 'None';
            }
            tr.appendChild(td5);

            const td6 = document.createElement('td');
            if(element.academicPrograms.length > 1) {
                const p = document.createElement('p');
                element.academicPrograms.forEach(academicProgram => {
                    p.textContent += academicProgram+ ', ';
                });
                td6.appendChild(p);
            }else{
                td6.textContent = element.academicPrograms;
            }
            tr.appendChild(td6);
            const td7 = document.createElement('td');
            td7.textContent = element.credits;
            tr.appendChild(td7);

            const td8 = document.createElement('td');
            const editButton = document.createElement('a');
            editButton.classList.add('fas', 'fa-edit', 'mr-2');
            editButton.setAttribute('data-toggle', 'modal');
            editButton.setAttribute('data-target', '#modal-lg');
            editButton.setAttribute('data-name',element.name);
            editButton.setAttribute('data-description',element.description);
            editButton.setAttribute('data-semester',element.semester);
            editButton.setAttribute('data-prerequirements',JSON.stringify(element.preRequirements));
            editButton.setAttribute('data-credits',element.credits);
            editButton.setAttribute('data-id',element._id)

            td8.appendChild(editButton);

            const deleteButton = document.createElement('a');
            deleteButton.classList.add('fas', 'fa-trash');
            deleteButton.setAttribute('href',`/deleteSubject/${element._id}`)
            
            td8.appendChild(deleteButton);

            tr.appendChild(td8);

            table.appendChild(tr);
        });
        $(function () {
            $("#example1").DataTable({
              "responsive": true, "lengthChange": false, "autoWidth": false,
            })
        });
    });
}

function addPreRequirement(){

    let childElementCount =document.getElementById('preRequirements').childElementCount

    let newPreRequirement = document.createElement('input')
    newPreRequirement.setAttribute('type', 'text')
    newPreRequirement.setAttribute('id',`Pre-requirement${childElementCount-1}`)
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
