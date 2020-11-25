        function auswahl(){
            if (document.getElementById("tÜbung").checked == true) {
            document.getElementById("rowÜbungen").style.display = 'block';
            document.getElementById("rowVereinArt").style.display = 'none';
            document.getElementById("rowJugendArt").style.display = 'none';
            document.getElementById("rowAktiveArt").style.display = 'none';
            }

            else if (document.getElementById("tAktive").checked == true) {
            document.getElementById("rowÜbungen").style.display = 'none';
            document.getElementById("rowVereinArt").style.display = 'none';
            document.getElementById("rowJugendArt").style.display = 'none';
            document.getElementById("rowAktiveArt").style.display = 'block';
            }

            else if (document.getElementById("tVerein").checked == true) {
            document.getElementById("rowÜbungen").style.display = 'none';
            document.getElementById("rowVereinArt").style.display = 'block';
            document.getElementById("rowJugendArt").style.display = 'none';
            document.getElementById("rowAktiveArt").style.display = 'none';
            }

            else if (document.getElementById("tJugend").checked == true) {
            document.getElementById("rowÜbungen").style.display = 'none';
            document.getElementById("rowVereinArt").style.display = 'none';
            document.getElementById("rowJugendArt").style.display = 'block';
            document.getElementById("rowAktiveArt").style.display = 'none';
            }

            else {
            document.getElementById("rowÜbungen").style.display = 'none';
            document.getElementById("rowVereinArt").style.display = 'none';
            document.getElementById("rowJugendArt").style.display = 'none';
            document.getElementById("rowAktiveArt").style.display = 'none';
            }

        }
