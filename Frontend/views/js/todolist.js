 // Show the input modal when the button is clicked
 document.getElementById("showInputBtn").addEventListener("click", function() {
    document.getElementById("inputModal").style.display = "flex";
});

// Close the modal when the close button (X) is clicked
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("inputModal").style.display = "none";
});

// Close the modal when confirm button is clicked (you can add logic to handle the input value)
document.getElementById("confirmBtn").addEventListener("click", function() {
    var inputValue = document.getElementById("inputField").value;
    alert("Item added: " + inputValue);  // Handle the input value as needed
    document.getElementById("inputModal").style.display = "none"; // Hide the modal
});

// Optional: close modal by clicking outside of the input box
window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("inputModal")) {
        document.getElementById("inputModal").style.display = "none";
    }
});