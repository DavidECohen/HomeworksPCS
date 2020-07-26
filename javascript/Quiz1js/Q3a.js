window.app.utils = (function(utils) {
    'use strict';
    //const savings = createIncrementer;
    // const checking = createIncrementer();
    //let createIncrementer;
    let num = 0;

    utils.adder = creator {

        add: function() {

            return num++;
        }
    }

    return utils;
}(window.app.utils));


const rr = window.app.utils.adder();

console.log(rr);
console.log(rr);
//createIncrementer.add();

console.log(rr);

// window.app.createIncrementer.add();
// window.app.createIncrementer();
// window.app.createIncrementer();
// window.app.createIncrementer();

window.app = function() {

"use strict"
let num = 0;
creator: {

    adder: function() { return num++; }
}
}());