var parolaUtente;
var arrayParola;
parolaUtente = prompt("Inserisci parola palindroma da verificare");
parolaUtente.toString;
if(isPalindroma(parolaUtente)){
 console.log("la parola è palindroma");
}else{
console.log("la parola non è palindroma");
}




// FUNZIONI
function isPalindroma(parola) {
    var stringaInvertita = "";
    for (var i = parola.length-1; i >= 0; i--){
         stringaInvertita += parola[i];           
    }
    console.log(stringaInvertita)
    return stringaInvertita === parola;
}
