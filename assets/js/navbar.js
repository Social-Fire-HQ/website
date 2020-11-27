function toggleDM() {

  if (document.getElementById("toggleDarkmode").checked == true) {
    document.getElementById("cssDarkmode").disabled=false;
  }
  else {
    document.getElementById("cssDarkmode").disabled=true;
  }
}
