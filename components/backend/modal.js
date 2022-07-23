
var modal = document.getElementById('myModal');

var img = document.getElementById('myImg');
var captionText = document.getElementById("demo");
img.onclick = function(){
  modal.style.display = "block";
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}