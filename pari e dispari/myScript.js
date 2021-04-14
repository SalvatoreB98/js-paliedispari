var pariDispari;
var isPariUtente;
var numeroUtente;
var numeroRandomPC;
var somma;

pariDispari = prompt("inserisci ' pari ' o ' dispari '");
numeroUtente = parseInt(prompt("inserire un numero da 1 a 5"));
// CONVERSIONE INPUT IN BOOLEANO
if (pariDispari == "pari") {
    isPariUtente = true;
    console.log("l'utente ha scelto pari")
}
else if (pariDispari == "dispari") {
    isPariUtente = false;
    console.log("l'utente ha scelto dispari")
}
else {
    console.log("ATTENZIONE! Inserire correttamente la parola ' pari ' o ' dispari");
}

// CONTROLLA INPUT
if (Number.isNaN(numeroUtente)) {
    console.log("ATTENZIONE! Verificare di aver inserito un numero")
}
else {
    console.log("il numero del giocatore è " + numeroUtente);
    // GENERA NUMERO RANDOM TRAMITE FUNZIONE
    numeroRandomPC = generaNumeroRandom();
    console.log("il numero del pc è " + numeroRandomPC);

    //SOMMA IL NUMERO DELL'UTENTE E DEL PC
    somma = numeroUtente + numeroRandomPC;
    console.log("la somma è " + somma);

    // VERIFICA TRAMITE LA NOSTRA FUNZIONE SE LA SOMMA E' PARI O DISPARI
    if (isPari(somma) == isPariUtente) {
        console.log("l'utente ha vinto");
    }
    else {
        console.log("l'utente ha perso");
    }
}

// FUNZIONI
function generaNumeroRandom() {
    var numero;
    numero = Math.floor(Math.random() * 5 + 1);
    parseInt(numero);
    return numero;
}


function isPari(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
