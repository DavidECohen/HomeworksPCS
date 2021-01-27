var path = require('path');
const fs = require('fs');
const ext = '.' + process.argv[3]
fs.readdir(process.argv[2], list);

function list(err, array) {
    if (err) {
        return console.error(error)
    } else {
        array.forEach(e => {
            if (path.extname(e) == ext) {
                console.log(e)

            }



        });
    }
}