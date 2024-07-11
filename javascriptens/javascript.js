// JS JAVA SCROPTS

console.log('ciao')
// inserimento su prompt dei dati del passeggero

// stiamo creando una struct 
let Passeggero = {
	percorsoKm: "",
	eta: "" 
};

// CHAPT 1
console.log('Chapt 1 del programma');
// stampiamo per debuggare un po 
console.log(Passeggero.percorsoKm);
console.log(Passeggero.eta);
// tipologia di informazione
console.log(typeof(Passeggero.percorsoKm));
console.log(typeof(Passeggero.eta));


// CHAPT 2
console.log('Chapt 2 del programma');
// stampiamo per debuggare un po
// inserimento prompt
Passeggero.percorsoKm = prompt('inserisci quanti km vuoi fare');
Passeggero.percorsoKm = parseFloat(Passeggero.percorsoKm);
console.log(Passeggero.percorsoKm);
console.log(typeof(Passeggero.percorsoKm));



if (isNaN(Passeggero.percorsoKm)) {
	console.log("non e' un numeor");
} else {
	console.log("e' un numero");
}
	



Passeggero.eta = prompt('inserisci eta');

console.log(Passeggero.percorsoKm);
console.log(Passeggero.eta);
// tipologia di informazione
console.log(typeof(Passeggero.percorsoKm));
console.log(typeof(Passeggero.eta));




