// JS JAVA SCROPTS

console.log('ciao')
// inserimento su prompt dei dati del passeggero


// --------------------------------------------------------------------------

// stiamo creando una struct 
let Passeggero = {
	percorsoKm: "",
	eta: "" 
};

// CHAPT 1 inizializziamo i dati in cui abbiamo passeggero come struct
console.log("------------------------------------------------------------");
console.log('Chapt 1 del programma inizializziamo i dati e Passeggero struct');
console.log("------------------------------------------------------------");
// stampiamo per debuggare un po 
console.log(Passeggero.percorsoKm);
console.log(Passeggero.eta);
// tipologia di informazione
console.log(typeof(Passeggero.percorsoKm));
console.log(typeof(Passeggero.eta));



// -----------------------------------------------------------------------

// CHAPT 2 chiediamo Input da parte dell'utente
console.log("------------------------------------------------------------");
console.log('Chapt 2 del programma richiesta input da parte di utente swag');
console.log("------------------------------------------------------------");
// stampiamo per debuggare un po
// inserimento prompt
Passeggero.percorsoKm = prompt('Inserisci quanti km vuoi fare');
Passeggero.percorsoKm = parseFloat(Passeggero.percorsoKm);
console.log("si vorranno fare circa:" + " " + Passeggero.percorsoKm + 'km');
// controllo se e' un numero
if (isNaN(Passeggero.percorsoKm)) {
	console.log("non e' un numero");
} else {
	console.log("e' un numero");
}
Passeggero.eta = prompt('Inserisci eta');
Passeggero.eta = parseFloat(Passeggero.eta);
console.log("Il passeggero ha:" + " " + Passeggero.eta + " " + "anni");
// controllo se e' un numero
if (isNaN(Passeggero.eta)) {
	console.log("non e' un numero");
} else {
	console.log("e' un numero");
}

//----------------------------------------------------------------------------
console.log("------------------------------------------------------------");
console.log("----------chapt 3 del programma CALCOLO PREZZI ------------");
console.log("-----------------------------------------------------------");
// calcolo del prezzo normale

const euroPerKm = 0.21;
let costoTotale;
costoTotale = Passeggero.percorsoKm * euroPerKm;
console.log("il risultato di percorso per kilometro sara: " + Passeggero.percorsoKm + " x " + euroPerKm + " e " + costoTotale.toFixed(2) + "$");

// ----------------------------------------------------------------------------
console.log("------------------------------------------------------------");
console.log("-------chapt 4 del programma SCONTISTICHE EVENTUALI---------");
console.log("------------------------------------------------------------");

if (Passeggero.eta < 65) {
	if (Passeggero.eta < 18) {
		console.log("il passeggero e' minorenne quindi avra uno sconto di 20%");
		let sconto20 = 0.20;
		let totaleSconto = costoTotale * sconto20;
		console.log("Verra applicato un 20% di sconto e sul percorso sara:" + " " + totaleSconto.toFixed(2));

		let costoTotaleSconto20 = costoTotale - totaleSconto;
		console.log("il costo totale per gli under18 sara' costo normale:" + costoTotale.toFixed(2) + " - " + totaleSconto.toFixed(2) + " e' di " + costoTotaleSconto20.toFixed(2) + "$");


	} else {
		console.log("il passeggero ha un eta tra 18 e 65 quindi non ricevera lo sconto");
		console.log("Pacman paghera il prezzo normale di: " + costoTotale.toFixed(2) + "$");

	}
} else {
	console.log("il passeggero e' vecchio quindi avra uno sconto di 40%");
	let sconto40 = 0.40;
	let totaleSconto = costoTotale * sconto40;
	console.log("Verra applicato un 40% di sconto e sul percorso sara:" + " " + totaleSconto.toFixed(2));

	let costoTotaleSconto40 = costoTotale - totaleSconto;
	console.log("il costo totale per gli over65 sara' costo normale:" + costoTotale.toFixed(2) + " - " + totaleSconto.toFixed(2) + " e' di " + costoTotaleSconto40.toFixed(2) + "$");


}



// -----------------------------------------------------------------------------
