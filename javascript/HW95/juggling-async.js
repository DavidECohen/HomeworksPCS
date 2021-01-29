const http = require('http');
const bl = require('bl');
let result = [];
let counter = 0;
for (let i = 0; i < 3; i++) {
    theURL = process.argv[i + 2];
    http.get(theURL, function callback(response) {

        response.pipe(bl(function(err, data) {
            result[i] = data.toString();
            counter++;
            if (counter == 3) {
                result.forEach(results => {
                    (console.log(results))
                })
            }

        }));

    })



}