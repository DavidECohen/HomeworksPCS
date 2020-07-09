'use strict';

const array4 = ['A', 'b', 'C'];

function onlyIf(array, test, action) {
    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) {
            action();
        }
    }




}

function isUpper(letter) {
    if (letter === letter.toUpperCase())
        return true;
}

function action() {
    console.log("LIGHTS CAMERA ACTION");
}
onlyIf(array4, isUpper, action);

// const endresult = array4.filter(isUpper);
// endresult.forEach(element => {
//     action();

// });