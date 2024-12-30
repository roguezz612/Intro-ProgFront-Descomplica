function getvalue() {
  var value = document.getElementById("name").value;
  document.getElementById("result").innerHTML = "bem-vindo, " + value + "!";
}

function removeValue() {
  document.getElementById("name").value = "";
  document.getElementById("result").innerHTML = "";
}