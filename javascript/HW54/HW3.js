'use strict';

function getmultiplier(number1) {
    return function(number2) {
        return (number1 * number2);
    };
}


let multiplyByFive = getmultiplier(5);
console.log(multiplyByFive(2));

let multiplyBySix = getmultiplier(6);
console.log(multiplyBySix(2));