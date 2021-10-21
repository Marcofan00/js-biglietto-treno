// età del passeggero
const age = parseInt(prompt(`Quanti anni ha il passeggero?`))
console.log(age);

document.getElementById(`age`).innerHTML = (`Il passeggero ha ` + age + ` anni.`);

// chiedere all’utente il numero di chilometri che vuole percorrere
const distanza = parseInt(prompt(`Quanti chilometri vuole percorrere?`));
console.log(distanza);

document.getElementById(`distanza`).innerHTML = (`Il passeggero vuole percorrere ` + distanza + ` Km.`);

// prezzo normale senza sconti
let prezzo = distanza * 0.21;
console.log(prezzo);

document.getElementById(`prezzo1`).innerHTML = (`Il prezzo normale senza sconti è ` + prezzo + ` €.`);
// prezzo <17
if ((age >= 0) && (age <= 17)) {
    const sconto20 = ((prezzo * 20) / 100);
    console.log(sconto20);
    document.getElementById(`sconto-minorenni`).innerHTML = (`Essendo minorenne lo sconto è di ` + sconto20.toFixed(2) + ` €.`);
    prezzo = prezzo - sconto20;
    console.log(prezzo);
    document.getElementById(`prezzo2`).innerHTML = (`Il prezzo totale da pagare è di ` + prezzo.toFixed(2) + ` €.`);
}
// prezzo >65
else if (age >= 65) {
    const sconto40 = ((prezzo * 40) / 100);
    console.log(sconto40);
    document.getElementById(`sconto-over`).innerHTML = (`Essendo over 65 lo sconto è di ` + sconto40.toFixed(2) + ` €.`);
    prezzo = prezzo - sconto40;
    console.log(prezzo);
    document.getElementById(`prezzo3`).innerHTML = (`Il prezzo totale da pagare è di ` + prezzo.toFixed(2) + ` €.`);
}

else {
    document.getElementById(`prezzo4`).innerHTML = (`Il prezzo totale da pagare è di ` + prezzo.toFixed(2) + ` €.`);
}