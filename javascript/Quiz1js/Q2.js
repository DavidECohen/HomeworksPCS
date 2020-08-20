// SL - nice
window.app = (function() {
    'use strict';
    let num = 0;

    return {
        // SL - no way to get current count? That was part of the requirments...
        add: function() {
            // SL - if returning something from here would returning num after increment make more sense?
            // your doing a post incrment, so caller will get number before add called...
            return num++;
        }

    };



}());