
window.onload = function() {
  const table = document.getElementById('example1').getElementsByTagName('tbody')[0];
  fetch('/getAcademicPrograms').then(res => res.json()).then(data => {
      data.programs.forEach(element => {
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
          td4.textContent = element.modality;
          tr.appendChild(td4);

          const td5 = document.createElement('td');
          td5.textContent = element.professionalProfile;
          tr.appendChild(td5);

          const td6 = document.createElement('td');
          td6.textContent = element.workField;
          tr.appendChild(td6);

          const td7 = document.createElement('td');
          td7.textContent = element.duration;
          tr.appendChild(td7);

          const td8 = document.createElement('td');
          const editButton = document.createElement('a');
          editButton.classList.add('fas', 'fa-edit', 'mr-2');
          editButton.setAttribute('data-toggle', 'modal');
          editButton.setAttribute('data-target', '#modal-default');

          editButton.onclick = function() {
              // Add your edit functionality here
          };
          td8.appendChild(editButton);

          const deleteButton = document.createElement('a');
          deleteButton.classList.add('fas', 'fa-trash');
          
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