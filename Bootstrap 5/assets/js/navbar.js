function toggleDM() {

  if (document.getElementById("toggleDarkmode").checked == true) {
    document.getElementById("cssDarkmode").disabled=false;
    document.getElementById("navbar").className="navbar navbar-expand-lg navbar-dark bg-dark";

  }
  else {
    document.getElementById("cssDarkmode").disabled=true;
    document.getElementById("navbar").className="navbar navbar-expand-lg navbar-light bg-light";
  }
}
