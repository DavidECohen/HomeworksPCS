const http = require('http');
theURL = (process.argv[2]);
http.get(theURL, callback);



function callback(response) {
    response.on('data', function(data) {
        console.log(data.toString())
    })
}