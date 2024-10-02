$(document).ready(function () {
    getSubjects().then(subjects => {
        let tbody = $('#tabla-subjects tbody');
        subjects.forEach(subject => {
            let row = $('<tr></tr>');
            row.append($('<td></td>').text(subject.subject));
            row.append($('<td></td>').text(subject.group));
            row.append($('<td></td>').text(subject.classroom));
            tbody.append(row);
        });
    });
});