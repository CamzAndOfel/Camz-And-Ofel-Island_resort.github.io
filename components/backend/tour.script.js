function myFunction() {
  let text = "Press ok if you want to book now your reservation, and press cancel if you want to cancel";
  if (confirm(text) == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
  document.getElementById("demo").innerHTML = text;
}
