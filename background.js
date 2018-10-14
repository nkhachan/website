document.getElementById("backgroundcheckbox").addEventListener("change", changeBackground);

function changeBackground(event){
  var checkbox = event.target;
  if (checkbox.checked) {
    document.body.style.backgroundImage =  "url('img/sad.png')";
    //document.body.style.backgroundColor =  "red";
    document.body.style.backgroundSize = "cover";
  }
  else {
    document.body.style.backgroundImage =  "url('img/happy.png')";
    //document.body.style.backgroundColor =  "blue";
    document.body.style.backgroundSize = "cover";
  }
}
