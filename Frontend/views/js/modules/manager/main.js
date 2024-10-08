window.onload = function() {
  fetch('/getInfo').then(res => res.json()).then(data => {
    let evaluations = 0;
    let answeredEvaluations = 0;
    if(data.teachers.length > 0){
      let teachers = data.teachers;

      teachers.forEach(teacher => {
        evaluations += teacher.test.length;
        teacher.test.forEach(semester => {
          if(semester.status){
            answeredEvaluations++;
          }
        });
      });
    }
    const pendingEvaluations = evaluations - answeredEvaluations;
    const pendingElements = document.querySelectorAll('.pending'); 

    pendingElements.forEach((pendingElement) => {
      pendingElement.innerHTML = pendingEvaluations; 
    });

    const answered = document.getElementById('answered');
    answered.innerHTML = evaluations;

    const students = document.getElementById('students');
    students.innerHTML = data.students.length;

  });
}