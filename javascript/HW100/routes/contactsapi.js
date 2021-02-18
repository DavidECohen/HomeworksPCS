var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
    db.query('SELECT * FROM contactshw', (error, results, fields) => {
        if (error) {
            return next(`Unable to fetch contacts ${error.message}`);
        }

        //debug(`get returning ${JSON.stringify(results)}`);

        res.send(
            results
        );
    });
});

router.post('/addContact', function(req, res, next) {
    //console.log(req.body);
    //req.body.id = ++nextId;
    //contacts.push(req.body);

    db.query('INSERT INTO contacts(firstName, lastName, email, phone) VALUES (?, ?, ?, ?)', [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
        (error, results, fields) => {
            if (error) {
                res.send(`res.statusCode`)
            }

            res.send(`res.statusCode - id is: $ { results.insertId }`);
        });
});

module.exports = router;