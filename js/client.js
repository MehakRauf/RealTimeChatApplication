const socket = io('http://localhost:4500'); // Backend url

// get the elements from the html 
const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");
// audio 
const audio = new Audio('msg.mp3');

// name of the user who joined the chat
let Username = prompt("Enter your name: ");
socket.emit('new-user-joined', Username);

// handles the message submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    // append this msg on the right side (sent by the user to others)
    append(`You: ${message}`, 'right');
    // the sent function will be called from the backend
    socket.emit("sent", message);
    messageInput.value = "";
})

// to make a div for every new message
const append = (message, position) => {
    const createElement = document.createElement("div");
    createElement.innerText = message;
    createElement.classList.add('message');
    createElement.classList.add(position);
    messageContainer.append(createElement);
    // play the audio when the user receives a message
    if (position == 'left') {
        audio.play();
    }
}

// when the user joins the chat
socket.on('user-joined', Username => {
    // a msg will be sent to others
    append(`${Username} joined the chat!`, 'left');
});

socket.on('receive', data => {
    // msg received will be shown on the left
    append(`${data.name}: ${data.message}`, 'left');
});

socket.on('left', Username => {
    // when the user lefts the chat it will display this msg to all the users connected in th chat
    append(`${Username} left the chat!`, 'right');
});
