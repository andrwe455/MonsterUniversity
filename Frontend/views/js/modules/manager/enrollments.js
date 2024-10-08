window.onload = function () {
  fetch('/enrollments').then(res => res.json()).then(data => {
    if(data.message){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No students enrolled for this semester!',
      });
    } else{
      if (data.length > 0) {

        data.forEach(student => {
          
          const table = document.getElementById("enrollmentsTableBody");
          
          const newRow = document.createElement("tr");
     
          let subjects = "";

          student.schedules.Schedule.Subject.forEach(subject => {
            subjects += `${subject.Name}, `;
          });

          newRow.innerHTML = `
            <td>${student.student.id}</td>
            <td>${student.student.Name}</td>
            <td>${student.schedules.semester}</td>
            <td>${subjects}</td>
            <td>${student.schedules.TotalCredits}</td>
          `;

          table.appendChild(newRow);

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
    }
  });
}





