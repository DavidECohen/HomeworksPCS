var express = require('express');
var router = express.Router();


router.get('/recipes', function(req, res, next) {
    db.query('SELECT * FROM recipenames', (error, results, fields) => {
        if (error) {
            console.log('nanach')
            return next(`Unable to fetch contacts ${error.message}`);
        }

        //debug(`get returning ${JSON.stringify(results)}`);

        res.send(results)
    });
});



module.exports = router;