const net = require('net');
var strftime = require('strftime');

const server = net.createServer(function listener(socket) {
    socket.write(strftime('%Y-%m-%d %H:%M\n'))

    socket.end()
})
server.listen(process.argv[2])