var parolautente;
var arrayParola;
parolautente = prompt("Inserisci parola palindroma da verificare")
parolautente.toString();
arrayParola = parolautente.split("");


console.log(arrayParola);


    var corrispondenza;
    var i;
    while (corrispondenza = true || i ) {
        for (var j = arrayParola.length; j > 0; i--){
            if(arrayParola[i]===arrayParola[j]){
                corrispondenza = true;
            }
            else{
                corrispondenza = false
            }
        }
    }

    function isPalindroma(array){

    }