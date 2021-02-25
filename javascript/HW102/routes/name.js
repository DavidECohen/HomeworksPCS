var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/name', function(req, res, next) {
    res.render('hello', {
        title: 'names',
    });
});

module.exports = router;