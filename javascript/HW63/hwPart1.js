window.pcs = window.pcs || {};

window.pcs.tools = (function() {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, value) {
        element.style[property] = value;
    }

    function getCss(element, property) {
        //return element.style[property];
        return getComputedStyle(element)[property];
    }

    function getColorPart() {
        return Math.floor(Math.random() * 256);
    }

    function getRandomColor() {
        const r = getColorPart();
        const g = getColorPart();
        const b = getColorPart();

        return `rgb(${r},${g},${b})`;
    }

    return {
        /*
        get: get,
        setCss: setCss
        */
        wrap: function(id) {
            const theElem = get(id);



            return {
                /*setCss: (property, value) => setCss(theElem, property, value),
                getCss: property => getCss(theElem, property),*/
                css: function(property, value) {
                    if (arguments.length < 2) { // get
                        return getCss(theElem, property);
                    }
                    setCss(theElem, property, value);
                    return this;
                },
                click: function(callback) {
                    theElem.addEventListener('click', callback);
                    return this;
                },
                hide: function() {
                    setCss(theElem, 'display', 'none');
                    return this;
                },
                show: function() {
                    setCss(theElem, 'display', 'block');
                    return this;

                },
                flash: function(timer, speed) {

                    let interval;
                    interval = setInterval(() => {

                        setCss(theElem, 'color', getRandomColor());
                        // setCss(document.body, 'color', `rgb(${b},${g},${r})`);

                    }, speed);
                    setTimeout(() => clearInterval(interval), timer);
                    return this;
                }
            };





        }
    };



}());