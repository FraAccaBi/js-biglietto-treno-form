//estrarre da input il valore inserito dall'utente

//dichiaro le variabili
let nameValue;
let kmValue;
let ageValue; 
let prezzo;
let elementOfferta = document.getElementById('offerta');
let elementCostoBiglietto = document.getElementById('costo_biglietto');

const bottoneGenera = document.getElementById('bottone')

const nomePasseggero = document.getElementById('nome_passeggero')

const elementSconto = document.getElementById('offerta')

//aggiungo l'elementListener che si attiva al click del bottone Genera
bottoneGenera.addEventListener ('click', function() {
    nameValue = document.getElementById("user_name").value;
    kmValue = Number(document.getElementById("km").value); //converto in nr il dato ottenuto come input
    prezzo = kmValue * (0.21) //formula per il costo a km
    ageValue = document.getElementById("user_age").value; //ottengo le lezioni per il cilo che segue
    console.log(nameValue);
    console.log(kmValue);
    console.log(ageValue);

    //attribuisco gli sconti alla fascia d'età selezionata
    if ( ageValue = '2') {
        var sconto = kmValue * (0.21) * (0.2)
        console.log('Sconto di euro ' + sconto );
        prezzo = prezzo - sconto 
        console.log('Il prezzo del biglietto è di euro ' + prezzo);
    } else if (ageValue = '3') {
        var sconto = kmValue * (0.21) * (0.4)
        console.log('Sconto di euro ' + sconto);
        prezzo = prezzo - sconto 
        console.log('Il prezzo del biglietto è di euro ' + prezzo);
    } else {
        console.log('nessuno sconto applicabile');
        console.log('Il prezzo del biglietto è di euro ' + prezzo);
    }
    
    
    
    
  /*   Sezione "il tuo biglietto" */
    
    elementCostoBiglietto.innerHTML += prezzo.toFixed(2) + '€'

    nomePasseggero.innerHTML += nameValue

    if (ageValue = '2'){
        elementSconto.innerHTML += 'Sconto Minorenne'
    } else if (ageValue = '3'){
        elementSconto.innerHTML += 'Sconto Over 65'
    } else {
        elementSconto.innerHTML += 'Nessuno sconto disponibile'
    }
    


})






