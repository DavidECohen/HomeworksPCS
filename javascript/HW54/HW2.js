'use strict';

function getmultiplier() {
    return function(number1, number2) {
        return (number1 * number2);
    };
}


let total = getmultiplier();
console.log(total(10, 10));