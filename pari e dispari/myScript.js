var pariDispari;
pariDispari = prompt("inserisci ' pari ' o ' dispari '");
console.log(generaNumeroRandom());

function generaNumeroRandom(){
    var numero;
    numero = Math.floor(Math.random()*6);
    return numero;
}
