 /*global $*/
 (function() {

     "use strict";
     /////button creator function
     function createButton(a) {
         $("#chooserButtons").append(`<button>${a}</button>`);
     }
     /////using button creator function to create button 
     ///for each recipe in recipebook and attach to div called chooserButtons in HTML page
     fetch("recipebook.json")
         .then(r => r.json())
         .then(book => {
             book.forEach(element => {
                 createButton(element);
             });
             /////trying to access each button and loop through 
             ////each array of ingredients ad append them to div called ingredients in the HTML
             $("button").click(function() {
                 const chosen = this.value;
                 fetch(`${chosen}.json`)
                     .then(r => r.json())
                     .then(book => {
                         book.ingredients.forEach(elem => {
                                 $("#ingredients").append(elem);
                             }

                         );
                     });


             });
         });
 })();
 //  $("button").click(fetch("spongecake.json")
 //      .then(r => r.json())
 //      .then(book => {
 //          book.forEach(elem => {
 //                  $("body").append(elem);
 //              }

 //          );
 //      });

 // //.then(foo => foo)
 // .then(rt => {
 //         console.log('fetch showing text');
 //         //console.log(rt);
 //         resultElem.text(rt);
 //     }