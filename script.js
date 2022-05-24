const numeriScelti = []
let sumNumeri = 0

for (let i = 0; i <= 10; i++) {
    let numeriInseriti = prompt("Inserisci un numero")
    numeriRisultanti = parseInt(numeriInseriti)
    console.log(numeriRisultanti)
    numeriScelti.push(numeriRisultanti)
    sumNumeri += numeriRisultanti
}

console.log(sumNumeri)