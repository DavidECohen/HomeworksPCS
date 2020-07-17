window.app = window.app || {};


window.app.utils = (function(utils) {
    'use strict';


    utils.stringCaseInsensitiveEquals = function(word1, word2) {

        return word1.toLowerCase() === word2.toLowerCase();
    };

    return utils;
}(window.app.utils || {}));