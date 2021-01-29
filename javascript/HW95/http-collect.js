const http = require('http');
const bl = require('bl')
theURL = (process.argv[2]);
http.get(theURL, callback);



function callback(response) {
    response.pipe(bl(function(err, data) {
        console.log(data.length);
        console.log(data.toString());

    }))
}