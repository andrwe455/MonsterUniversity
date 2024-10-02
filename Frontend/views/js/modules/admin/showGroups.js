

window.onload = function() {
    const table = document.getElementById('example1').getElementsByTagName('tbody')[0];
    fetch('/getGroups').then(res => res.json()).then(data => {
        data.forEach(element => {
            const tr = document.createElement('tr');
            tr.classList.add('odd');

            const td1 = document.createElement('td');
            td1.textContent = element.group;
            tr.appendChild(td1);

            const td2 = document.createElement('td');
            td2.textContent = element.subject;
            tr.appendChild(td2);

            const td = document.createElement('td');
            td.textContent = element.classroom;
            tr.appendChild(td);

            const td3 = document.createElement('td');
            element.schedule.day.forEach(schedule => {
                const p = document.createElement('p');
                p.textContent = schedule;
                td3.appendChild(p);
            });
            tr.appendChild(td3);

            const td4 = document.createElement('td');
            td4.textContent = element.schedule.time;
            tr.appendChild(td4);

            const td5 = document.createElement('td');
            td5.textContent = element.teacher;
            tr.appendChild(td5);

            const td6 = document.createElement('td');
            td6.textContent = element.semester;
            tr.appendChild(td6);

            const td7 = document.createElement('td');
            td7.textContent = element.academicProgram;
            tr.appendChild(td7);

            const td9 = document.createElement('td');
            const editButton = document.createElement('a');
            editButton.classList.add('fas', 'fa-edit', 'mr-2');
            editButton.setAttribute('data-toggle', 'modal');
            editButton.setAttribute('data-target', '#modal-default');

            editButton.onclick = function() {
            };
            td9.appendChild(editButton);

            const deleteButton = document.createElement('a');
            deleteButton.classList.add('fas', 'fa-trash');
            
            td9.appendChild(deleteButton);

            tr.appendChild(td9);

            table.appendChild(tr);
        });
        $(function () {
            $("#example1").DataTable({
              "responsive": true, "lengthChange": false, "autoWidth": false,
            })
        });
    });
}