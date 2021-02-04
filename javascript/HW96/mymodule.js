const fs = require('fs');
var path = require('path');
module.exports = function take(dname, ext, callback) {

    ext = '.' + ext


    fs.readdir(dname, function(err, data) {
        if (err) return callback(err)

        data = data.filter(e => {
            if (path.extname(e) === ext) {
                return (e)

            }
        })
        callback(null, data)


    })
};