document.getElementById("backgroundcheckbox").addEventListener("change", changeBackground);

function changeBackground(event){
  var checkbox = event.target;
  if (checkbox.checked) {
    document.body.style.backgroundColor = "red";
  }
  else {
    document.body.style.backgroundColor = "white";
  }
}
