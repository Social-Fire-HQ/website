function auswahlEinsatzart(){
  if (document.getElementById("einsatzBrand").checked == true) {
    document.getElementById("artBraende").style.display = 'block';
    document.getElementById("artTHL").style.display = 'none';
    document.getElementById("artVerkersabsicherung").style.display = 'none';
    document.getElementById("artEH").style.display = 'none';
    document.getElementById("artSonstige").style.display = 'none';
    document.getElementById("artSonstige2").style.display = 'none';
  }

  else if (document.getElementById("einsatzTHL").checked == true) {
    document.getElementById("artBraende").style.display = 'none';
    document.getElementById("artTHL").style.display = 'block';
    document.getElementById("artVerkersabsicherung").style.display = 'none';
    document.getElementById("artEH").style.display = 'none';
    document.getElementById("artSonstige").style.display = 'none';
    document.getElementById("artSonstige2").style.display = 'none';
  }

  else if (document.getElementById("einsatzVerkehrsabsicherung").checked == true) {
    document.getElementById("artBraende").style.display = 'none';
    document.getElementById("artTHL").style.display = 'none';
    document.getElementById("artVerkersabsicherung").style.display = 'block';
    document.getElementById("artEH").style.display = 'none';
    document.getElementById("artSonstige").style.display = 'none';
    document.getElementById("artSonstige2").style.display = 'none';
  }

  else if (document.getElementById("einsatzErsteHilfe").checked == true) {
    document.getElementById("artBraende").style.display = 'none';
    document.getElementById("artTHL").style.display = 'none';
    document.getElementById("artVerkersabsicherung").style.display = 'none';
    document.getElementById("artEH").style.display = 'block';
    document.getElementById("artSonstige").style.display = 'none';
    document.getElementById("artSonstige2").style.display = 'none';
  }

  else if (document.getElementById("einsatzSonstiges").checked == true) {
    document.getElementById("artBraende").style.display = 'none';
    document.getElementById("artTHL").style.display = 'none';
    document.getElementById("artVerkersabsicherung").style.display = 'none';
    document.getElementById("artEH").style.display = 'none';
    document.getElementById("artSonstige").style.display = 'block';
    document.getElementById("artSonstige2").style.display = 'block';
  }

  else {
    document.getElementById("artBraende").style.display = 'none';
    document.getElementById("artTHL").style.display = 'none';
    document.getElementById("artVerkersabsicherung").style.display = 'none';
    document.getElementById("artEH").style.display = 'none';
    document.getElementById("artSonstige").style.display = 'none';
    document.getElementById("artSonstige2").style.display = 'none';
  }

}
function dispWassermenge(){
  if (document.getElementById("vmWasser").checked == true) {
    document.getElementById("inWasser").style.display = 'block';
  }

  else{
    document.getElementById("inWasser").style.display = 'none';
  }
}

function dispSchaummenge(){
  if (document.getElementById("vmSchaum").checked == true) {
    document.getElementById("inSchaum").style.display = 'block';
  }

  else{
    document.getElementById("inSchaum").style.display = 'none';
  }
}

function dispÖlbindermenge(){
  if (document.getElementById("vmÖlbinder").checked == true) {
    document.getElementById("inÖlbinder").style.display = 'block';
  }

  else{
    document.getElementById("inÖlbinder").style.display = 'none';
  }
}

function dispMüllmenge(){
  if (document.getElementById("vmMüllsäcke").checked == true) {
    document.getElementById("inMüll").style.display = 'block';
  }

  else{
    document.getElementById("inMüll").style.display = 'none';
  }
}

function dispVerbandmenge(){
  if (document.getElementById("vmVerbandsmaterial").checked == true) {
    document.getElementById("inVerband").style.display = 'block';
  }

  else{
    document.getElementById("inVerband").style.display = 'none';
  }
}



function dispASmenge(){
  if (document.getElementById("emfAtemschutz").checked == true) {
    document.getElementById("inAS").style.display = 'block';
  }

  else{
    document.getElementById("inAS").style.display = 'none';
  }
}
function dispLAmenge(){
  if (document.getElementById("emfLangzeitatmer").checked == true) {
    document.getElementById("inLA").style.display = 'block';
  }

  else{
    document.getElementById("inLA").style.display = 'none';
  }
}
function dispEJmenge(){
  if (document.getElementById("emfEinsatzjacken").checked == true) {
    document.getElementById("inEJ").style.display = 'block';
  }

  else{
    document.getElementById("inEJ").style.display = 'none';
  }
}
function dispÜJmenge(){
  if (document.getElementById("emfÜberjacken").checked == true) {
    document.getElementById("inÜJ").style.display = 'block';
  }

  else{
    document.getElementById("inÜJ").style.display = 'none';
  }
}
function dispEHmenge(){
  if (document.getElementById("emfEinsatzhosen").checked == true) {
    document.getElementById("inEH").style.display = 'block';
  }

  else{
    document.getElementById("inEH").style.display = 'none';
  }
}
function dispFHmenge(){
  if (document.getElementById("emfFlammschutzhauben").checked == true) {
    document.getElementById("inFH").style.display = 'block';
  }

  else{
    document.getElementById("inFH").style.display = 'none';
  }
}
