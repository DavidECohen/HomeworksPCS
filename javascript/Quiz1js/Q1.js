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

function doubler(x) {
    return x * 2;
}


function divideby3(x) {
    if (x % 3 === 0) {
        return x;
    } else {
        return 'not divisible by 3';
    }
}


const results = myMap(array1, doubler);
const results2 = myMap(array1, divideby3);
console.log(array1);
console.log(results);
console.log(results2);