 /* Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/

//chiedere numero di km 

/* let km = parseFloat((prompt('Quanti km percorrerai?')));
console.log(km);
 */
//chiedere l'età dell'utente

/* let età = parseFloat((prompt('Quanti anni hai?')));
console.log(età);
 */
//calcolo prezzo del biglietto in base ai km (0.21 € al km)

/* var prezzo = km * (0.21)
 */
//sconto del 20% per i minorenni
//sconto del 40% per gli over 65.

/* if (età < 18) {
    var sconto = km * (0.21) * (0.2)
    console.log('Sconto di euro ' + sconto );
    var prezzo = prezzo - sconto 
    console.log('Il prezzo del biglietto è di euro ' + prezzo);
} else if (età > 65) {
    var sconto = km * (0.21) * (0.4)
    console.log('Sconto di euro ' + sconto);
    var prezzo = prezzo - sconto 
    console.log('Il prezzo del biglietto è di euro ' + prezzo);
} else {
    console.log('nessuno sconto applicabile');
    console.log('Il prezzo del biglietto è di euro ' + prezzo);
}
 */
//output con due decimali 
/* 
prezzo = prezzo.toFixed(2)
alert('Il prezzo del biglietto è di euro ' + prezzo);
 */






/*
CONSIGLI:
La matematica é praticamente la stessa dell'esericizio che avete fatto ieri, in piú stavolta c'é il fatto che dovrete creare un form per far inserire all'utente i dati.
Per estrarre da un input il valure inserito dall'utente potete usare element.value dove element é l'input selezionato tramite il getElementById o il querySelector. Leggete la documentazione qui per capirne l'utilizzo.
Per inserire in modo dimanico del markup in un elemento potete usare l'approccio che trovate nelle slide tramite e nella repo di stamattina element.innerHTML += 'il markup o testo  che vuoi aggiungere'
Se volote solo appendere del testo potreste usare anche element.append()
Un altro modo per inserire in modo dinamico del markup é element.insertAdjacentHTML()  Combinato con il template literals é molto potente (i love it!) Qui la documentazione.
In allegato trovate uno screenshot per darvi un idea su come strutturare il layout. Se volete potete usare bootstrap o anche no. A voi la scelta.
Date la precedenza alla logica e al funzionamento, non perdete tempo a fare il layout se prima non siete riusciti a far funzionare il programma.
per generare il codice della carrozza e il codice CP potreste usare Math.random() */

//estrarre da input il valore inserito dall'utente
let nameValue;
let kmValue;
let ageValue; 
let prezzo;
let elementOfferta = document.getElementById('offerta');
let elementCostoBiglietto = document.getElementById('costo_biglietto');

const bottoneGenera = document.getElementById('bottone')

bottoneGenera.addEventListener ('click', function() {
    nameValue = document.getElementById("user_name").value;
    kmValue = Number(document.getElementById("km").value);
    prezzo = kmValue * (0.21)
    ageValue = document.getElementById("user_age").value;
    console.log(nameValue);
    console.log(kmValue);
    console.log(ageValue);

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
    
    
    
    elementOfferta.innerHTML += 'sconto di euro' + sconto.toFixed(2)
    
    
    elementCostoBiglietto.innerHTML += 'costo biglietto' + prezzo.toFixed(2)

})





//inserire in modo dinamico le variabili di output per il "biglietto" 


/*
if ( Number(ageValue) < 18) {
    var sconto = km * (0.21) * (0.2)
    console.log('Sconto di euro ' + sconto );
    prezzo = prezzo - sconto 
    console.log('Il prezzo del biglietto è di euro ' + prezzo);
} else if (Number(ageValue) > 65) {
    var sconto = km * (0.21) * (0.4)
    console.log('Sconto di euro ' + sconto);
    prezzo = prezzo - sconto 
    console.log('Il prezzo del biglietto è di euro ' + prezzo);
} else {
    console.log('nessuno sconto applicabile');
    console.log('Il prezzo del biglietto è di euro ' + prezzo);
}


const elementOfferta = document.getElementById('offerta')
elementOfferta.innerHTML += 'sconto di euro' + sconto

const elementCostoBiglietto = document.getElementById('costo_biglietto')
elementCostoBiglietto.innerHTML += 'costo biglietto' + prezzo
*/