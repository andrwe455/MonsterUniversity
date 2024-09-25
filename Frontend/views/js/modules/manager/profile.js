$(document).ready(function () {
  // When the 'Change avatar' button is clicked
  $('#changeAvatarBtn').on('click', function () {
    // Trigger the hidden file input
    $('#avatarInput').click();
  });

  // When a file is selected
  $('#avatarInput').on('change', function (event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // Create a FileReader to read the file content
      const reader = new FileReader();

      // Once the file is read, set it as the src for the preview image
      reader.onload = function (e) {
        $('#avatar').attr('src', e.target.result).show(); // Show the image preview
      };

      // Read the image file as a data URL
      reader.readAsDataURL(file);
    }
  });
});
