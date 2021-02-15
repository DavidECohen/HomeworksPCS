var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(

        [{
                firstName: "Joe",
                lastName: "Biden",
                phone: "333-3333"
            },

            {
                firstName: "Jim",
                lastName: "Jordan",
                phone: "337-3883"
            },

            {
                firstName: "Rabbi",
                lastName: "G",
                phone: "335-7865"
            }
        ],

    );


    // partials: {

    //         content: 'adContact'
    //     }
    //
});

module.exports = router;