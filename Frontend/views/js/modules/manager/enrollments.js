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




/**
 * Function to generate a random number between a set minimum and maximum number, including them
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns A random number between the 'min' and 'max' values, rounded to 0 decimals and parsed as an integer
 */
function generateRandomNumber(min, max) {
  return parseInt((Math.random() * (max - min) + min).toFixed(0));
}





