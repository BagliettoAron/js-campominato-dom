// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// 1 --- ottengo array dei numeri da 1 a 100

const maxLength = 100;

const randomNumbersArray = generateIncrementalIntegerNumbers (maxLength)


// 2 --- inserisco i numeri ricavati ognuno all'interno di una casella (.inner-square)

// prelevo la classe della griglia
const mainGrid = document.querySelector (".game-main-grid")

// scansiono con un ciclo for tutti gli elementi dell'array in modo da assegnare a ognuno gli elementi che andranno a formare .inner-square
for (let i = 0; i < randomNumbersArray.length; i++) {
    const thisNumber = randomNumbersArray [i];

    // creo un div
    const newCreatedElement = document.createElement("div")

    // assegno al div appena creato la classe .inner-square
    newCreatedElement.classList.add("inner-square") 

    // aggiungo lo span con il numero
    newCreatedElement.innerHTML = `<span> ${thisNumber} </span>`
    console.log(newCreatedElement);
    
    // faccio in modo che il nuovo elemento creato sia triggerabile al click e uso this per triggerare solo l'elemento cliccato
    newCreatedElement.addEventListener ("click", function() {
        this.classList.add("active");
        const clickedCellNumber = parseInt(this.querySelector("span").textContent)
        // confronto gli array
        if (minedCellsArray.includes(clickedCellNumber)) {
            this.classList.add("exploded")
            alert("BOOM")
        } else {
            this.style.pointerEvents = "none"
            safeCells.push(clickedCellNumber)
            console.log("array safe Cells", safeCells);
        }
        
        // 5 --- confronto il numero di celle cliccate rispetto al numero massimo di celle !esplodenti per determinare la vincita
        const winNumber = maxLength - quantityMinedCells
        console.log("win", winNumber);
        
        if (safeCells.length >= winNumber) {
            alert("hai vinto")
        }
        
        
    });
    
    
    // appendo l'elemento alla griglia che ho prelevato subito prima del ciclo for
    mainGrid.append(newCreatedElement);
}

const safeCells = [];

// 3 --- genero 16 caselle minate random

// imposto value quantità massima celle minate
const quantityMinedCells = 16;

// call della funzione che mi darà come risultato 16 numeri random, diversi tra loro, compresi tra 1 e maxLength
var minedCellsArray = generateUniqueRandomNumber(quantityMinedCells, maxLength);
// console.log("mines poition", minedCellsArray);

// 4 --- aggiungo proprietà ad addEventListener precedentemente utilizzato con un vietatissimo var




// ----------------------------------------------------------------------


// FUNCTIONS :

// genero array numeri da 1 a 100 
/**
 * Description
 * @param {any} maxLimit -> numero massimo entro il quale generare l'array
 * @returns {any} -> array di numeri consecutivi compresi tra 1 e 100 (estremi compresi)
 */
function generateIncrementalIntegerNumbers (maxLimit) {
    const array = [];

    for (let i = 1; i <= maxLimit; i++) {
        thisNumber = [i];
        array.push(parseInt(thisNumber));
    }
    return array;
}



/**
 * Description : genero la funzione che mi darà come risultato 16 numeri random, diversi tra loro, compresi tra 1 e maxLength
 * @param {any} maxQuantityLength -> limite massimo della quantità di numeri random da generare
 * @param {any} maxNumberLimit -> numero massimo entro il quale generare i numeri random
 * @returns {any} -> array di numeri random con le proprietà specificate sopra
 */
function generateUniqueRandomNumber(maxQuantityLength, maxNumberLimit){
    const numbersForPlaceMineArray = [];
    
    while (numbersForPlaceMineArray.length < maxQuantityLength) {
        const randomNumber = getRndInteger(1, maxNumberLimit)
        if (!numbersForPlaceMineArray.includes(randomNumber) ) {
            numbersForPlaceMineArray.push(randomNumber);
        }
    }
    return numbersForPlaceMineArray;
}



// genero numero casuale
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}















