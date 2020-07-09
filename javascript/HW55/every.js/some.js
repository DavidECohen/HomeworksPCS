'use strict';

const array3 = ['a', 'B', 'c'];

function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }

    return false;
}

function isUpper(letter) {
    if (letter === letter.toUpperCase())
        return true;
}
// isUpper => letter {
//     if (letter === letter.toUpperCase())

// }

const result = mySome(array3, letter => letter === letter.toUpperCase())
console.log(result);

const result2 = array3.some(isUpper);
console.log(result2);