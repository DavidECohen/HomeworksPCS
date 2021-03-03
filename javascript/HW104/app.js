const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketIo = require("socket.io")(server);

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const chatters = [];
socketIo.on("connection", socket => {
    console.log('server got a connection');

    //socket.emit('message', 'This is a message from the server');

    //socket.on('message', msg => console.log(msg));

    let name;
    socket.on('login', (loginName, callback) => { // when the emit happens, the login string is sent and we are taking the other two params that 
        // were sent and doing work with with them  (we are trimming the name sent and if the name was never used yet  )



        const n = loginName.trim();
        if (!n) {
            callback(`Username is required.`);
        }

        if (chatters.find(c => c === n)) {
            callback(`Username ${n} already used. Please choose another.`);
        } else {
            // $('.messagesContainer').append(`<div> chatters.map(x => {
            //                     console.log(x)}) </div>`);
            name = n;
            chatters.push(name);
            callback(null, chatters);

            socket.on('message', msg => {
                const m = msg.trim();
                if (m) {
                    socketIo.emit('message', { author: name, msg: msg });
                }
            });
        }
    });
});

app.use('/', (req, res, next) => {
    res.send('Hello World!');
});

server.listen(80);