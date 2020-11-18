/* global $ */
(function() {
    'use strict';


    function dreidel() {
        let number = Math.floor(Math.random() * 4);

        if (number === 0) {
            $('#nghs').append('\u05E0' + ',');
        }
        if (number === 1) {
            $('#nghs').append('\u05D2' + ',');
        }
        if (number === 2) {
            $('#nghs').append('\u05D4' + ',');
        }
        if (number === 3) {
            $('#nghs').append('\u05E9' + ',');
        }


    }

    $('#spin').click(function() {
        dreidel();
    });



})();