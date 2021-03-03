(function() {
    const socketIo = io();



    //socketIo.emit('message', 'This is a message from the client');
    const loginForm = $('#loginForm');
    loginForm.submit(e => { //when button is pressed
        e.preventDefault();

        socketIo.emit('login', $('#name').val(), (err, callbackData) => { //it will send a string, the value of what was placed in in the name element
            if (err) { //and a callback method (which ends on line 19)
                $('#error').text(err);
            } else {
                for (x = 0; x < callbackData.length; x++) {

                    $('#list').append(callbackData[x] + ',');
                }
                // console.log(chatters);
                loginForm.slideUp();
                $('#messagesContainer').slideDown();

            }
        });
    });

    const messageInput = $('#message');
    $('#messageForm').submit(e => {
        e.preventDefault();
        const msg = messageInput.val().trim();
        if (msg) {
            socketIo.emit('message', messageInput.val());

        }
    });

    const messagesElem = $('#messages');
    socketIo.on('message', msg => {
        messagesElem.append(`<div>${msg.author} wrote: ${msg.msg}</div>`);
    });
}());