
// Mail
// Chiedi all’utente la sua email,
/*
let userMail = prompt('Tell me your mail');
console.log(userMail);

// controlla che sia nella lista di chi può accedere,
let listMail = ['harryPotter@gmail.com','hermioneGranger@gmail.com', 'ronaldWeasley@gmail.com'];
console.log(listMail);
let present = document.getElementById('title');


for (var i = 0; i < listMail.length; i++) {
    console.log(i, listMail[i]);

    if (listMail.includes(userMail)) {

        present.innerHTML = 'sei nella lista puoi entrare';
        console.log(present);
        break;

    } else {
        present.innerHTML  = 'ridammi la tua email?';
        console.log(present);
    }
}
*/


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

function randomNumber(min, max) {

    var valoreMin = min;
    var valoreMax = max - valoreMin + 1;

    var bombe = Math.floor(Math.random()* valoreMax) + valoreMin;

return bombe;
}
let randomPc = randomNumber(1, 6);
console.log('questo è il numero generato dal Pc ' + randomPc);

let randomPlayer = randomNumber(1, 6);
console.log('questo è il numero generato dal Player ' + randomPlayer);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let result = document.getElementById('title');

if (randomPc > randomPlayer) {
    result.innerHTML = 'Il Pc ha fatto il numero più alto, quindi vince con il numero ' + randomPc + '<br>' + 'il numero del giocatore era ' + randomPlayer
    console.log('Il Pc ha fatto il numero più alto, quindi vince con il numero ', randomPc + '\n' + 'il numero del giocatore era ' + randomPlayer);

} else if (randomPc < randomPlayer) {
    result.innerHTML = 'Il Player ha fatto il numero più alto, quindi vince con il numero ' + randomPlayer + '<br>' + 'il numero del computer era ' + randomPc
    console.log('Il Player ha fatto il numero più alto, quindi vince con il numero ', randomPlayer + '\n' + 'il numero del computer era ' + randomPc);

}else {
    result.innerHTML = 'Il dado del Pc è = ' + randomPc + '<br>' + 'il dado del Player è = ' + randomPlayer + '<br>' + 'Hanno pareggiato'
    console.log('Il dado del Pc è = ' + randomPc + '\n' + 'il dado del Player è = ' + randomPlayer + '\n' + 'Hanno pareggiato');
}


// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
//
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al
// nostro programma così come lo faremmo "a mano"
