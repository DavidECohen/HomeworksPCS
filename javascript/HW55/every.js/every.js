'use strict';

const array1 = ['a', 'b', 'C'];
const array2 = ['a', 'b', 'c'];

function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }

    return true;
}

function isUpper(letter) {
    if (letter === letter.toUpperCase())
        return true;
}

function isNotUpper(letter) {
    if (!isUpper(letter))
        return true;
}

const answer = myEvery(array1, isUpper);
console.log(answer);

const answer2 = myEvery(array2, isNotUpper);
console.log(answer2);

const answer3 = array1.every(isUpper);
console.log(answer3);