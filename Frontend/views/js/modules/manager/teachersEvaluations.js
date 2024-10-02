

var buttons = document.getElementsByClassName("btn-sm");
var rowToDelete = null;
let actionType = '';


window.onload = function() {
  fetch('/getTeachers').then(res => res.json()).then(data => {
    if (data.teachers.length > 0) {
      data.teachers.forEach(teacher => {
        const tableBody = document.getElementById("teacherTableBody");
        if(teacher.status === 'Activo'){
          if(teacher.test.length > 0){
            teacher.test.forEach(semester => {
              semester.Subject.forEach(subject => {
                const newRow = document.createElement("tr");
                const td = document.createElement("td");
                const td2 = document.createElement("td");
                const td3 = document.createElement("td");
                const td4 = document.createElement("td");
                const td5 = document.createElement("td");

                td.innerText = teacher.Name;
                td2.innerHTML = `<img alt="Avatar" class="table-avatar" src="${teacher.profilePicUrl}">`;
                td3.innerText = subject.Name;
                td4.innerHTML = `<span class="alert alert-secondary grade-table-text">${subject.Average}</span>`;
                td5.innerHTML = `
                  <button type="button" class="btn btn-warning btn-sm" onclick="confirmWarningRow('${teacher._id}')">
                    <i class="fas fa-warning"></i>
                    Send warning
                  </button>

                  <button type="button" class="btn btn-danger btn-sm" onclick="confirmDeleteRow('${teacher._id}','${subject.Name}')">
                    <i class="fas fa-user-times"></i>
                    Remove
                  </button>
                `;

                newRow.appendChild(td);
                newRow.appendChild(td2);
                newRow.appendChild(td3);
                newRow.appendChild(td4);
                newRow.appendChild(td5);
                tableBody.appendChild(newRow);
              });
            });
          };
        };
      });
      $(document).ready(function () {
        var table = $("#example1").DataTable({
          responsive: true,
          lengthChange: false,
          autoWidth: false,
          language: {
            emptyTable: "No students enrolled :(",
            zeroRecords: "No enrollments found."
          },
          "initComplete": function (settings, json) {
            $('.row .col-md-6:eq(0)').remove();
          }
        });
      });
    }
  });
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    document.getElementById("inputModal").style.display = "flex";
  });
}

document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("inputModal").style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("inputModal") || event.target == document.getElementById("cancelBtn")) {
    document.getElementById("inputModal").style.display = "none";
  }
});

function confirmDeleteRow(id,subject) {

  console.log('ID:', id);      // Verificar id
  console.log('Subject:', subject); 
  Swal.fire({
    title: "Warning!",
    text: "Are you sure you want to remove this teacher?",
    icon: "warning",
    buttons: true,
    dangerMode: true,

  }).then((willDelete) => {
    if (willDelete.isConfirmed) {
      
      const data = {}
      data.id = id;
      data.subject = subject;

      fetch('/deleteTeacher', {
        method: 'delete',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).then(data => {
        if(data.status === 'success'){
          Swal.fire({
            title: 'Success',
            text: 'Teacher removed successfully',
            icon: 'success'
          }).then(() => {
            location.reload();
          });
        }
      });
    }
  });
}

function confirmWarningRow(id) {
  Swal.fire({
    title: "Warning!",
    text: "This teacher will receive a warning, are you sure?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willSend) => {
    console.log(willSend);
    
    if(willSend.isConfirmed){
     fetch('/sendWarning',{
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
     }).then(res => res.json()).then(data => {
       console.log(data);
       if(data.status === 'success'){
         Swal.fire({
           title: 'Success',
           text: 'Warning sent successfully',
           icon: 'success'
         }).then(() => {
           location.reload();
         });
       }
     });
    }
    
  });
}