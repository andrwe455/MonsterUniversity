window.onload = function (){

  fetch('/getInfo').then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById('teachers').innerText = data.length;
  })
}