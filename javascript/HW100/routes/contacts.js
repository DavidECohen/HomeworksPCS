var debug = require('debug')('contacts:route');
var express = require('express');
var router = express.Router();

/*let contacts = [
  {
    id: 1,
    firstName: 'Joe',
    lastName: 'Biden',
    phone: '1234567890',
    email: 'jbiden@whitehouse.gov'
  },
  {
    id: 2,
    firstName: 'Kamala',
    lastName: 'Harris',
    phone: '9876543210',
    email: 'kharris@whitehouse.gov'
  }
];

let nextId = contacts.length;*/

/* GET home page. */
router.get('/', function(req, res, next) {
    db.query('SELECT * FROM contactshw', (error, results, fields) => {
        if (error) {
            return next(`Unable to fetch contacts ${error.message}`);
        }

        debug(`get returning ${JSON.stringify(results)}`);

        res.render('layout', {
            title: 'Contacts',
            contacts: results,
            noContacts: !results.length,
            partials: { content: 'contacts' }
        });
    });


});

router.get('/addContact', function(req, res, next) {
    res.render('layout', {
        title: 'Add Contact',
        partials: { content: 'contact' }
    });
});

router.post('/addContact', function(req, res, next) {
    //console.log(req.body);
    //req.body.id = ++nextId;
    //contacts.push(req.body);

    db.query('INSERT INTO contactshw(FirstName,LastName, email, phone) VALUES (?, ?, ?, ?)', [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
        (error, results, fields) => {
            if (error) {
                return next(new Error(`Unable to insert contact - ${error.message}`));
            }

            res.redirect('/contacts');
        });
});

router.get('/deleteContact/:id', function(req, res, next) {
    //contacts = contacts.filter(c => c.id !== +req.params.id);
    db.query('DELETE FROM contactshw WHERE id = ?', [req.params.id],
        (error, results, fields) => {
            debug(results);

            if (error) {
                return next(new Error(`Unable to delete contact ${req.params.id} - ${error.message}`));
            }

            if (!results.affectedRows) {
                return next(new Error(`Unable to delete contact ${req.params.id} - not found`));
            }

            res.redirect('/contacts');
        });
});

router.get('/editContact/:id', function(req, res, next) {
    //const contact = contacts.find(c => c.id === +req.params.id);

    //if (!contact) {
    //  return next(new Error(`No such contact ${req.params.id} found`));
    //}

    db.query('SELECT * FROM contactshw WHERE id = ? LIMIT 1 ', [req.params.id],
        (error, results, fields) => {
            debug(results);

            if (error) {
                return next(new Error(`Unable to update contact ${req.params.id} ${error.message}`));
            }

            if (!results.length) {
                return next(new Error(`Unable to update contact ${req.params.id} - not found`));
            }

            res.render('layout', {
                title: 'Edit Contact',
                contact: results[0],
                partials: { content: 'contact' }
            });
        });
});

router.post('/editContact/:id', function(req, res, next) {
    //const contact = contacts.find(c => c.id === +req.params.id);

    //if (!contact) {
    //  return next(new Error(`No such contact ${req.params.id} found`));
    //}

    //Object.assign(contact, req.body)

    db.query('UPDATE contactshw SET FirstName = ?, LastName = ?, email = ? , phone = ? WHERE id = ?', [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.params.id],
        (error, results, fields) => {
            debug(results);

            if (error) {
                return next(new Error(`Unable to update contact - ${error.message}`));
            }

            if (!results.affectedRows) {
                return next(new Error(`Unable to update contact ${req.params.id} - not found`));
            }

            res.redirect('/contacts');
        });
});

module.exports = router;