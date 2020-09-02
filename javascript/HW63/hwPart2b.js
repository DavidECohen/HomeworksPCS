(function() {
    'use strict';



    function setTime() {
        let d = new Date();
        const clock = document.createElement('div');
        setInterval(() => {
            clock.innerHTML = d.toLocaleTimeString();
        }, 1000);
        clock.innerHTML = d.toLocaleTimeString();
        document.body.appendChild(clock);
        clock.style.backgroundColor = 'lightblue';
        clock.style.padding = '1em';
        clock.style.margin = '38px';
        clock.style.boxSizing = 'border-box';
        clock.style.width = `150px`;



    }
    // function doit() {
    //     setInterval(() => {
    //         setTime();
    //     }, 1000);
    // }


    setTime();


}());