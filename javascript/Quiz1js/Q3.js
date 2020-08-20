// window.app = (function() {
//     'use strict';
//     let num = 0;

//     increm: {
//         return {
//             add: function() {
//                 return num++;
//             }
//         };
//     }
// }());

// console.log(window.app.increm.add());

// SL - I really dont know what Im looking at here. abc? def? do? what are all these things? How are they suposed to be used? How do I make a counter?
// looks like you hard coded 2 identical counter objects named abd and def with no way to create new ones?
// you also dont assign anything to window.app - and blow away the window.app created in Q1.js...
window.app = (function() {


    'use strict';

    // SL - abc?
    const abc = {

        num: 0,
        // SL - do?
        do: function createInc() {
            let num = 0;
            return {

                add: function() {

                    return num++;
                }
            };
        }
    };
    // SL - def?
    const def = {

        num: 0,
        do: function createInc() {
            let num = 0;
            return {

                add: function() {

                    return num++;
                }
            };
        }
    };

    // SL - calling functions here? Requirements were to do all creation and increments in a third file...
    abc.do();
    def.do();
    def.do();
    def.do();
    // console.log(abc.add());
    // console.log(def.do());
}());

// const abc = createInc.add();
// const def = createInc.add();

// abc.createInc.add();
// abc.add();
// def.add();
// def.add();
// def.add();