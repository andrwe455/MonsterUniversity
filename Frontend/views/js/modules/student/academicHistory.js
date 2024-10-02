window.onload = function() {
  fetch('/academicHistory').then(res => res.json()).then(data => {
    const table = document.getElementById('example1').getElementsByTagName('tbody')[0];

    data.forEach(element => {
      const tr = document.createElement('tr');
      tr.classList.add('odd');

      const td1 = document.createElement('td');
      td1.textContent = element.SubjectId;
      tr.appendChild(td1);

      const td2 = document.createElement('td');
      td2.textContent = element.Subject;
      tr.appendChild(td2);

      const td3 = document.createElement('td');
      td3.textContent = element.Credits;
      tr.appendChild(td3);

      const td4 = document.createElement('td');
      td4.textContent = element.Status;
      tr.appendChild(td4);

      const td5 = document.createElement('td');
      td5.textContent = element.Grade;
      tr.appendChild(td5);

      const td6 = document.createElement('td');
      td6.textContent = element.Semester;
      tr.appendChild(td6);
      table.appendChild(tr);

    });
    $(function () {
        $("#example1").DataTable({
          "responsive": true, "lengthChange": false, "autoWidth": false,
          language: {
            emptyTable: data.message,
            zeroRecords: "No enrollments found."
          }
        })
    });
  });
}