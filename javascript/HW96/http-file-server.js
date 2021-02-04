const http = require('http')
const fs = require('fs')
const server = http.createServer(function(req, res) {

    var filename = process.argv[2];
    var file = fs.createReadStream(filename)



    res.pipe(file)



    server.listen(process.argv[2])
})