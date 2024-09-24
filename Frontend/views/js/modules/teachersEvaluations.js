var buttons = document.getElementsByClassName("btn-sm");
var rowToDelete = null;
let actionType = '';

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

function updateText(action) {
  document.getElementById("confirmationText").textContent = "Are you sure you want to " + action;
}

// Function to be later adjusted integrating the database through the backend
function addRow(teacherName, subject, grade, profilePicUrl) {
  const tableBody = document.getElementById("teacherTableBody");
  const newRow = document.createElement("tr");
  document.getElementById("noPending").style.display = "none";

  newRow.innerHTML = `
    <td class="teacher-name-table">
      <p class="table-text">${teacherName}</p>
    </td>
    
    <td class="pfp-table">
      <img alt="Avatar" class="table-avatar" src="${profilePicUrl}">
    </td>

    <td class="subject-table">
      <p class="table-text">${subject}</p>
    </td>
    
    <td class="grade-table">
      <span class="alert alert-secondary grade-table-text">${grade}</span>
    </td>
    
    <td class="options-table">
      <button type="button" class="btn btn-warning btn-sm" onclick="confirmWarningRow(this)">
        <i class="fas fa-warning"></i>
        Send warning
      </button>

      <button type="button" class="btn btn-danger btn-sm" onclick="confirmDeleteRow(this)">
        <i class="fas fa-user-times"></i>
        Remove
      </button>
    </td>
  `;

  tableBody.appendChild(newRow);

  var buttons = document.getElementsByClassName("btn-sm");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      document.getElementById("inputModal").style.display = "flex";
    });
  }
}

function confirmDeleteRow(button) {
  updateText('remove this teacher?');
  document.getElementById("inputModal").style.display = "flex";
  rowToDelete = button.closest('tr'); 
  actionType = 'remove';
}

function confirmWarningRow(button) {
  updateText('send a warning?');
  document.getElementById("inputModal").style.display = "flex";
  rowToDelete = button.closest('tr');
  actionType = 'warning';
}

document.getElementById("confirmBtn").addEventListener("click", function() {

  const existingToast = document.getElementById('notificationToast');

  if (existingToast) {
    existingToast.remove();
  }

  const notification = document.createElement("div");

  if (rowToDelete) {
    if (actionType === 'remove') {

      notification.innerHTML = `
        <div class="toast notification-pop-up-danger" id="notificationToast" data-delay="3000">
          <div class="toast-body">
            Teacher removed
          </div>
        </div>
      `
    } 
    else if (actionType === 'warning') {

      notification.innerHTML = `
        <div class="toast notification-pop-up-warning" id="notificationToast" data-delay="3000">
          <div class="toast-body">
            Warning sent
          </div>
        </div>
      `
    }

    rowToDelete.remove(); 
    rowToDelete = null;  

    document.body.appendChild(notification);

    const toastElement = new bootstrap.Toast(document.getElementById('notificationToast')); 
    toastElement.show();

    document.getElementById('notificationToast').addEventListener('hidden.bs.toast', function () {
      this.remove();
    });

    const tableBody = document.getElementById("teacherTableBody");
    const remainingRows = tableBody.childElementCount; 

    if (remainingRows === 1) {
      document.getElementById("noPending").style.display = "table-cell";
    } 

    document.getElementById("inputModal").style.display = "none";
  }
});

document.getElementById("addRowBtn").addEventListener("click", function() {
  let grade = generateRandomNumber();
  addRow('Professor X', 'Advanced telepathy', grade, '../../img/PfpPlaceholder.png');
});

function generateRandomNumber() {
  return (Math.random() * 2.9).toFixed(1);
}
