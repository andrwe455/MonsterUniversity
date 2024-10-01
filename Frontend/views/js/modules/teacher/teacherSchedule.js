const Schedule = require('#');

function fetchScheduleData() {
    Schedule.find({ role: 'docent' })
        .then((schedules) => {
            const scheduleTableBody = document.getElementById('scheduleTable').querySelector('tbody');
            scheduleTableBody.innerHTML = '';

            schedules.forEach((schedule) => {
                const scheduleRow = document.createElement('tr');
                scheduleRow.innerHTML = `
          <td>${schedule.conditions}</td> // Assuming 'conditions' field represents the day
          <td>${schedule.Schedule.Subject.start}</td>
          <td>${schedule.Schedule.Subject.end}</td>
          <td>${schedule.Schedule.Subject.Subject}</td>
          <td>${schedule.Schedule.Subject.teacher}</td>
        `;
                scheduleTableBody.appendChild(scheduleRow);
            });
        })
        .catch((error) => {
            console.error('Error fetching schedule data:', error);
        });
}

fetchScheduleData();