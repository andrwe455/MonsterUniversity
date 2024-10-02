document.getElementById("showInputBtn").addEventListener("click", function() {
    document.getElementById("inputModal").style.display = "flex";
  });
  
  document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("inputModal").style.display = "none";
  });
  
  function deleteElement(element) {
    var listItem = element.closest("li");
    var list = listItem.parentElement; 
      
    if (listItem) {
      listItem.remove(); 
    }
  
    var remainingItems = list.getElementsByTagName("li").length;
  
    if (remainingItems === 0) {
      document.getElementById("toDoPlaceholder").style.display = "flex";
    } 
  }
  
  function addItem() {
    var inputValue = document.getElementById("inputField").value;
  
    if (inputValue === '') {
      alert("You must write something!");
    }
    else {
  
      var li = document.createElement("li");
      document.getElementById("toDoPlaceholder").style.display = "none";
  
      li.innerHTML = `
        <span class="handle">
          <i class="fas fa-ellipsis-v"></i>
          <i class="fas fa-ellipsis-v"></i>
        </span>
  
        <div class="icheck-primary d-inline ml-2">
          <input type="checkbox" value="" name="todo${Date.now()}" id="todoCheck${Date.now()}">
          <label for="todoCheck${Date.now()}"></label>
        </div>
        
        <span class="text">${inputValue}</span>
        <div class="tools">
          <i class="fas fa-trash delete-icon"></i>
        </div>
      `;
  
      document.getElementById("listUL").appendChild(li);
      document.getElementById("inputModal").style.display = "none";
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
  