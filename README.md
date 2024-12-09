# ConvoNest

ConvoNest is a real-time chat application built using **Node.js**, **Socket.io**, and **HTML/CSS/JavaScript**. It allows users to join a chat room, send messages, and receive real-time updates when users join or leave the chat.

---

## Features
- Real-time messaging between users.
- Messages when users join or leave the chat.
- Simple and intuitive user interface.
- Audio notification for incoming messages.

---

## Technologies Used
### Backend:
- **Node.js**
- **Socket.io** for handling real-time communication.

### Frontend:
- **HTML**
- **CSS**
- **JavaScript**

---

## Prerequisites
- **Node.js** installed on your system.
- **nodemon** 
- **npm** (Node Package Manager).

---

## Setup and Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/MehakRauf/RealTimeChatApplication.git
    cd RealTimeChatApplication
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Run the Server:**
    ```bash
    nodemon index.js
    ```
    This starts the server on port `4500`.

4. **Open the Application:**
    Open the frontend in your browser at:
    ```
    http://localhost:5500
    ```

---

## How to Use
1. Open the application in your browser.
2. Enter your name when prompted.
3. Start sending messages and interacting with other users in real time.

---

## Code Overview
### Backend (index.js):
- **Socket.io** manages WebSocket connections.
- Handles events for:
  - **New user joining** (`new-user-joined`)
  - **Messages sent** (`sent`)
  - **User disconnecting** (`disconnect`)

### Frontend (client.js):
- Listens for Socket.io events:
  - **user-joined**: Notify when a new user joins.
  - **receive**: Display received messages.
  - **left**: Notify when a user leaves.
- Sends messages and user updates to the server.

---

## Acknowledgments
- Built with ❤️ using **Socket.io**.
- Inspired by the idea of creating simple and effective real-time communication tools.

---

## Future Enhancements
- Add private chat functionality.
- Include support for emojis and multimedia messages.
- Implement user authentication.
- Make the app responsive for mobile devices.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature-name'`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request.

---

## Contact
For any questions or feedback, feel free to reach out at:
- **GitHub**: [MehakRauf](https://github.com/MehakRauf)

