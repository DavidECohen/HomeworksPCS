const app = require('connect')();



app.use(require('./urlchecker.js'));

app.use((req, res, next) => {
    res.setHeader('content-type', 'text/html');
    next();
});

app.use('/audits', (req, res, next) => {
    if (req.query.magicWord == 'please')
        res.end('welcome')

    else {
        res.end('<h2> FOR AUTHORIZED USERS ONLY! <h2>');

    };
    next();

});

app.use('/employee', (req, res, next) => {
    if (req.query.magicWord == 'please')
        res.end('welcome')

    else {
        res.end('<h2> FOR AUTHORIZED USERS ONLY! <h2>');

    };
    next();

});

app.use('/data', (req, res, next) => {
    if (req.query.magicWord == 'please')
        res.end('welcome')

    else {
        res.end('<h2> FOR AUTHORIZED USERS ONLY! <h2>');

    };
    next();

});

app.listen(80);