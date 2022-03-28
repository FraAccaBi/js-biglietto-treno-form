//estrarre da input il valore inserito dall'utente

//dichiaro le variabili
let nameValue;
let kmValue;
let ageValue; 
let prezzo;




let nomePasseggero = document.getElementById('nome_passeggero');
const elementOfferta = document.getElementById('offerta');
const numeroCarrozza = document.getElementById('carrozza');
const codiceBiglietto = document.getElementById('codice');
const elementCostoBiglietto = document.getElementById('costo_biglietto');



const bottoneGenera = document.getElementById('bottone');

const bigliettoNascosto1 = document.querySelector('.biglietto1')

const bigliettoNascosto2 = document.querySelector('.biglietto2')


//aggiungo l'elementListener che si attiva al click del bottone Genera

bottoneGenera.addEventListener ('click', function() {
    nameValue = document.getElementById("user_name").value;
    kmValue = Number(document.getElementById("km").value); //converto in nr il dato ottenuto come input
    prezzo = kmValue * (0.21) //formula per il costo a km
    ageValue = Number(document.getElementById("user_age").value); //ottengo la fascia d'età
    console.log(nameValue);
    console.log(kmValue);
    console.log(ageValue);
    
    //rendo visibile il biglietto  rimuovendo la classe d-none

    bigliettoNascosto1.classList.remove('d-none')
    bigliettoNascosto2.classList.remove('d-none')

    //attribuisco gli sconti alla fascia d'età selezionata
    if ( ageValue == 2) {
        var sconto = kmValue * (0.21) * (0.2)
        console.log('Sconto di euro ' + sconto );
        prezzo = prezzo - sconto 
        console.log('Il prezzo del biglietto è di euro ' + prezzo);
        elementOfferta.innerHTML += 'Sconto Minorenne'
    } else if (ageValue == 3) {
        var sconto = kmValue * (0.21) * (0.4)
        console.log('Sconto di euro ' + sconto);
        prezzo = prezzo - sconto 
        console.log('Il prezzo del biglietto è di euro ' + prezzo);
        elementOfferta.innerHTML += 'Sconto Over 65'
    } else {
        console.log('nessuno sconto applicabile');
        console.log('Il prezzo del biglietto è di euro ' + prezzo);
        elementOfferta.innerHTML += 'Nessuno sconto disponibile'
    }
    
    
    
    
  /*   Sezione "il tuo biglietto" */
    
    elementCostoBiglietto.innerHTML += prezzo.toFixed(2) + '€'

    nomePasseggero.innerHTML += nameValue

    
    let random_biglietto = Math.ceil(Math.random() * 100000)
    let random_carrozza = Math.ceil(Math.random() * 10)

    codiceBiglietto.innerHTML += random_biglietto
    numeroCarrozza.innerHTML += random_carrozza
})





