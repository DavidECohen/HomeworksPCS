const Dow = (function() {
    'use strict';
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];
    return {
        getDayName: function(index) {
            return weekdays[index - 1];
        },
        getDayNumber: function(name) {
            return weekdays.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
        }
    };


}());
console.log('Dow.getDayName(2)', Dow.getDayName(2));
console.log('Dow.getDayNumber("Sunday")', Dow.getDayNumber('Sunday'));