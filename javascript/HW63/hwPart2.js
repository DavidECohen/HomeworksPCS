(function() {
    'use strict';

    const elem = document.getElementById('div');

    function setTime() {
        let d = new Date();
        elem.innerHTML = d.toLocaleTimeString();
    }

    function doit() {
        setInterval(() => {
            setTime();
        }, 2000);
    }
    doit();

}());