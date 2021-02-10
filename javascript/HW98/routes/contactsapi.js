var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(

        [{
                firstname: "Joe",
                lastname: "Biden",
                phone: "333-3333"
            },

            {
                firstname: "Jim",
                lastname: "Jordan",
                phone: "337-3883"
            },

            {
                firstname: "Rabbi",
                lastname: "G",
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