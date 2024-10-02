window.onload = function () {
  fetch('/getSubjects').then(res => res.json()).then(data => {
    if(data.message){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No subjects found!',
      });
    } else{
      if (data.length > 0) {

        const table = document.getElementById("cancelSubjectsTableBody");
        const newRow = document.createElement("tr");

        data.forEach(subject => {

          newRow.innerHTML = `
          <td>${subject.id}</td>
          <td>${subject.name}</td>
          <td><button class="btn btn-danger">Cancel</button></td>
        `;
        });

        table.appendChild(newRow);

        $(document).ready(function () {
          var table = $("#example1").DataTable({
            responsive: true,
            lengthChange: false,
            autoWidth: false,
            language: {
              emptyTable: "All subjects have been canceled",
              zeroRecords: "No subjects found"
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