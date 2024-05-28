/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum (a, b) {
    return a === b ? (a + b) * 3 : a + b;
}

console.log(crazySum(3, 2))


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary (number) {
    return number > 20 && number <= 100 || number === 400;
};

console.log(boundary(23))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString (string) {
    return string.split("").reverse().join("");
};

console.log(reverseString("EPICODE"))


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst (string) {
    array = string.split(" ")

    for (i = 0; i < array.length; i ++) {
        array[i] = array[i][0].toUpperCase() + array[i].slice(1) 
    };

    return array.join(" ");
};

console.log(upperFirst("così dovrebbe funzionare"))


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom (n) {
    let numbers = [];
    for (i = 1; i <= n; i++) {
        numbers.push(Math.floor(Math.random() * 11))
    };
    return numbers;
};

console.log(giveMeRandom(12))


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area (l1, l2) {
    return l1 * l2
}

console.log(area(12, 8))


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff (a) {
    let result = Math.abs(a - 19);

    return result > 19 ? result * 3 : result;
}

console.log(crazyDiff(39))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify (string) {
    let array = string.split(" ");
    console.log(array)

    if (array[0] === "code") {
        return string;
    } else {
        array.splice(0, 0, "code");
        return array.join(" ");
    };
}

console.log(codify("non era nè basso nè alto, era Balto"))


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7 (x) {
    if (x > 0 && Number.isInteger(x)) {
        return x % 3 === 0 || x % 7 === 0;
    } else {
        return "Il numero non è un intero positivo."
    }
}

console.log(check3and7(-9))


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(string) {
    return string.slice(1, string.length - 1);
}

console.log(cutString("anaconda"))
