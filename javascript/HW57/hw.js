window.app = window.app || {};

window.app.utils = (function(utils) {
    'use strict';

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];

    utils.getDayName = function(index) {
        return weekdays[index - 1];
    };
    utils.getDayNumber = function(name) {
        return weekdays.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
    };

    return utils;
}(window.app.utils || {}));