var express = require('express');
var router = express.Router();
let id = 1;
let names = [{
        firstName: "Joe",
        lastName: "Biden",
        phone: "333-3333",
        email: "executiveOrdersUnlimited@gmail.com",
        id: id++
    },

    {
        firstName: "Jim",
        lastName: "Jordan",
        phone: "337-3883",
        email: "theJim@gmail.com",
        id: id++
    },

    {
        firstName: "Rabbi",
        lastName: "G",
        phone: "335-7865",
        email: "theRabbi@gmail.com",
        id: id++
    }
]

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('layout', {
        //title: 'Express',
        names,
        partials: { content: 'index' },

    });
});
router.get('/addContact', function(req, res, next) {
    res.render('layout', {
        title: 'Add Contact',
        partials: { content: 'addContact' }
    });
});

router.post('/addContact', function(req, res, next) {
    //console.log(req.body);
    names.push(req.body);
    res.redirect('/contacts');
});




router.get('/deleteContact/:id', function(req, res, next) {
    names = names.filter(e => e.id != +req.params.id);
    res.redirect('/contacts');
});


router.get('/edit/:id', function(req, res, next) {
    let selectedContact = names.find(e => e.id = +req.params.id);
    console.log(selectedContact),
        res.render('layout', {
            selectedContact,
            title: 'Edit Contact',
            partials: { content: 'editContact' }
        });
    res.redirect('/contacts');
});


// router.post('/editContact', function(req, res, next) {
//     //console.log(req.body);
//     names.push(selectedContact);
//     res.redirect('/contacts');
// });

module.exports = router;