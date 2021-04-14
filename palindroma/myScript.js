var parolaUtente;
var arrayParola;
parolaUtente = prompt("Inserisci parola palindroma da verificare");
parolaUtente.toString;
console.log(isPalindroma(parolaUtente));




// FUNZIONI
function isPalindroma(parola) {
    var stringaInvertita = "";
    for (var i = parola.length-1; i >= 0; i--){
         stringaInvertita += parola[i];           
    }
    console.log(stringaInvertita)
    return stringaInvertita === parola;
}
