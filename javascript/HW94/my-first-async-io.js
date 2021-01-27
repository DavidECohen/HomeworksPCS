const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', callback);


function callback(err, array) {
    let inString;
    if (err) {
        return console.error(error)
    } else {
        inString = array.split('\n')
    }

    console.log(inString.length - 1)
}