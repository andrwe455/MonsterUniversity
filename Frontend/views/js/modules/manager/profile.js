/**
 * Function to change the avatar on the profile
 */
$(document).ready(function () {
  $('#changeAvatarBtn').on('click', function () {
    $('#avatarInput').click();
  });

  $('#avatarInput').on('change', function (event) {

    const file = event.target.files[0]; 
    
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $('#avatar').attr('src', e.target.result).show(); 
      };

      reader.readAsDataURL(file);
    }
  });
});
