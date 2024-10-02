document.getElementById("showInputBtn").addEventListener("click", function() {
  document.getElementById("inputModal").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("inputModal").style.display = "none";
});

function generateUniqueID() {
  return 'todo-' + Math.random().toString(36).substr(2, 9);
}

function deleteElement(element) {
  var listItem = element.closest("li");
  var list = listItem.parentElement; 
    
  if (listItem) {
    listItem.remove(); 
  }

  saveListToLocal(); 

  var remainingItems = list.getElementsByTagName("li").length;

  if (remainingItems === 0) {
    document.getElementById("toDoPlaceholder").style.display = "flex";
  } 
}

function addItem() {
  var inputValue = document.getElementById("inputField").value;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    var li = document.createElement("li");
    var uniqueID = generateUniqueID();
    
    document.getElementById("toDoPlaceholder").style.display = "none";

    li.innerHTML = `
      <span class="handle">
        <i class="fas fa-ellipsis-v"></i>
        <i class="fas fa-ellipsis-v"></i>
      </span>

      <div class="icheck-primary d-inline ml-2">
        <input type="checkbox" value="" name="${uniqueID}" id="${uniqueID}">
        <label for="${uniqueID}"></label>
      </div>
      
      <span class="text">${inputValue}</span>
      <div class="tools">
        <i class="fas fa-trash delete-icon"></i>
      </div>
    `;

    document.getElementById("listUL").appendChild(li);
    document.getElementById("inputModal").style.display = "none";
    
    saveListToLocal();
  }

  document.getElementById("inputField").value = "";
  const trashIcon = li.querySelector('.delete-icon');

  trashIcon.addEventListener('click', function() {
    deleteElement(this);
  });
}

document.getElementById("confirmBtn").addEventListener("click", function() {
  addItem();
});

document.getElementById("inputField").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {  
    addItem(); 
  }
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("inputModal")) {
    document.getElementById("inputModal").style.display = "none";
  }
});

function saveListToLocal() {
  const listItems = document.querySelectorAll("#listUL li");
  const itemsArray = [];

  listItems.forEach(item => {
    const text = item.querySelector('.text').textContent;
    const isChecked = item.querySelector('input[type="checkbox"]').checked;
    const uniqueID = item.querySelector('input[type="checkbox"]').id; // Get the unique ID
    itemsArray.push({ id: uniqueID, text: text, checked: isChecked });
  });

  localStorage.setItem('todoList', JSON.stringify(itemsArray));
}

function loadListFromLocal() {
  const savedList = localStorage.getItem('todoList');
  
  if (savedList) {
    const itemsArray = JSON.parse(savedList);

    itemsArray.forEach(item => {
      var li = document.createElement("li");
      document.getElementById("toDoPlaceholder").style.display = "none";

      li.innerHTML = `
        <span class="handle ui-sortable-handle">
          <i class="fas fa-ellipsis-v"></i>
          <i class="fas fa-ellipsis-v"></i>
        </span>

        <div class="icheck-primary d-inline ml-2">
          <input type="checkbox" value="" name="${item.id}" id="${item.id}" ${item.checked ? 'checked' : ''}>
          <label for="${item.id}"></label>
        </div>
        
        <span class="text">${item.text}</span>
        <div class="tools">
          <i class="fas fa-trash delete-icon"></i>
        </div>
      `;

      document.getElementById("listUL").appendChild(li);

      const trashIcon = li.querySelector('.delete-icon');
      trashIcon.addEventListener('click', function() {
        deleteElement(this);
      });
    });
  }
}

window.addEventListener("load", function() {
  loadListFromLocal();
});

$(function () {
  $('.todo-list').sortable({
    placeholder: 'sort-highlight',
    handle: '.handle',
    forcePlaceholderSize: true,
    zIndex: 999999,
    update: function() {
      saveListToLocal();
    }
  });
});
