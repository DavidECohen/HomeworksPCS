// SL - nice!
// SL - you should get in habit of always wrapping code in an IIFE, no globals...
'use strict';
let array1 = [10, 20, 30, 40, 50, 60];
//let Array2 = [1, 11, 1, 11, 1, 1];


function myMap(array, callback) {
    let array2 = [];
    for (let i = 0; i < array.length; i++) {


        array2[i] = callback(array[i]);
    }
    return array2;
}

// SL - not at all a problem, but why not use an arrow function? less code...
// myMap(array1, x => x * 2)

function doubler(x) {
    return x * 2;
}


function divideby3(x) {
    if (x % 3 === 0) {
        return x;
    } else {
        // sl - more usual would be that these numbers just simply wouldnt be returned but not a problem that you did this
        return 'not divisible by 3';
    }
}


const results = myMap(array1, doubler);
const results2 = myMap(array1, divideby3);
console.log(array1);
console.log(results);
console.log(results2);