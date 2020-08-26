(function() {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, value) {
        element.style[property] = value;
    }


    let interval;
    const theButton = get('start');


    let r = 0;
    let g = 0;
    let b = -1;

    const INCREMENT = 50;

    function startColors() {
        interval = setInterval(() => {


            b += INCREMENT;
            if (b >= 256) {
                b = 0;

                g += INCREMENT;
                if (g >= 256) {
                    g = 0;

                    r += INCREMENT;
                    if (r >= 256) {
                        r = 0;
                    }
                }
            }

            setCss(document.body, 'backgroundColor', `rgb(${r},${g},${b})`);
            setCss(document.body, 'color', `rgb(${b},${g},${r})`);
            addToTable(`rgb(${b},${g},${r})`, `rgb(${r},${g},${b})`);

            theButton.innerHTML = 'stop';
        }, 1000);
    }



    function addToTable(bg, color) {

        const theTable = get('table');
        const row = theTable.insertRow();
        const cell = row.insertCell();
        cell.innerHTML = color;
        const cell2 = row.insertCell();
        cell2.innerHTML = bg;
        const cell3 = row.insertCell();
        cell3.innerHTML = new Date().toLocaleTimeString();

        row.addEventListener('click', function() { //() => {
            setCss(document.body, 'backgroundColor', bg);
            setCss(document.body, 'color', color);
        });
    }

    function stopColors() {
        clearInterval(interval);
        interval = null;
        theButton.innerHTML = 'start';
    }

    get('start').addEventListener('click', function() { //() => {
        if (!interval) {
            startColors();
        } else {
            stopColors();

        }
    });
}());