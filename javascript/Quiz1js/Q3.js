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
window.app = (function() {


    'use strict';

    const abc = {

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