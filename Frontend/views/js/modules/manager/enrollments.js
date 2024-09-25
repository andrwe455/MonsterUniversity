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

  function addRow(studentId, studentName, studentSemester, subjectsEnrolledCount, totalCredits) {

    let dropdownOptions = '';
    for (let i = 1; i <= subjectsEnrolledCount; i++) {
      dropdownOptions += `<option value="Subject ${i}" disabled>Subject ${i}</option>`;
    }

    let subjectsDropdown = `<select class="form-control"><option value="" disabled selected>${subjectsEnrolledCount} Subjects</option>${dropdownOptions}</select>`;

    table.row.add([
      studentId,
      studentName,
      studentSemester,
      subjectsDropdown,
      totalCredits
    ]).draw(); 
  }
  
  document.getElementById("addRowBtn").addEventListener("click", function () {
    let semester = generateRandomNumber(1, 10);
    let subjects = generateRandomNumber(1, 15);
    let credits = subjects + generateRandomNumber(1, subjects);
    let id = generateRandomNumber(1, 9999999999)

    addRow(id, "uwuwewewe onyetenyevwe ugwemuhwem osas", semester + "th", subjects, credits);
  });
});

function generateRandomNumber(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(0));
}





