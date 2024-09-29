window.onload = function () {
  fetch('/getStudents').then(res => res.json()).then(data => {
    if (data.students.length > 0) {
      data.students.forEach(student => {
        
        const table = document.getElementById("enrollmentsTableBody");
        
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.Semester}</td>
          <td>${student.subjectsEnrolled}</td>
          <td>${student.totalCredits}</td>
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





