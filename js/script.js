// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// 1. ottengo array dei numeri da 1 a 100
const maxLength = 100;

const randomNumbersArray = generateIncrementalIntegerNumbers (maxLength)

console.log(randomNumbersArray);

// 2. inserisco i numeri ricavati ognuno all'interno di una casella (.inner-square)
// prelevo la classe della griglia
const mainGrid = document.querySelector (".game-main-grid")
console.log(mainGrid);

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
    newCreatedElement.addEventListener("click", function() {
        this.classList.add("active");
    });

    // appendo l'elemento alla griglia che ho prelevato subito prima del ciclo for
    mainGrid.append(newCreatedElement);
    console.log(mainGrid);
}

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










