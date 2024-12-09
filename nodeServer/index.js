// Node server to handle socket io connections
const io = require("socket.io")(4500, {
    cors: {
        origin: "http://localhost:5500",  // frontend
        methods: ["GET", "POST"]
    }
});

// to keep the list of users joined
let users = {};

// io.on handles all users
io.on('connection', socket => {
    // socket.on handles what a single user can do
    // when the user joins
    socket.on('new-user-joined', Username => {
        // save the name using an unique id
        users[socket.id] = Username;
        socket.broadcast.emit('user-joined', Username);
    });
    // when the user sent a message
    socket.on('sent', message => {
        // message will be received by all the users in the chat
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });

    // when the user disconnect
    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id]);
        // delete the user 
        delete users[socket.id];
    });

});

