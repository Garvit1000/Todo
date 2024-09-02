MERN To-Do List Application

This is a full-stack To-Do List application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to add, delete tasks.
Features

    Task Management: Users can add, delete tasks.
    Responsive UI: The user interface is designed to be responsive and user-friendly.
    Cross-Origin Resource Sharing (CORS): Proper CORS setup for secure API requests.

Technologies Used

    Frontend:
        React.js
        Axios for HTTP requests
        CSS for styling
    Backend:
        Node.js
        Express.js
        MongoDB & Mongoose for database management
    Other:
        CORS for handling cross-origin requests
        Axios for HTTP requests

Installation
Prerequisites

    Node.js and npm installed on your machine.
    MongoDB installed and running.

Clone the Repository


    git clone https://github.com/Garvit1000/Todo.git
    cd todo

Backend Setup

    Navigate to the server directory:

   
cd server

    Install the required dependencies:
    npm install

Create a .env file in the server directory and add your MongoDB connection string:

bash

MONGO_URI=your_mongodb_connection_string

Start the backend server:

    npm start

    The backend will run on http://localhost:5000.

Frontend Setup

    Navigate to the client directory:



     cd ../client

Install the required dependencies:



    npm install

Start the frontend development server:

    npm start

    The frontend will run on http://localhost:3000.

Running the Application

    With both the backend and frontend servers running, you can access the application in your web browser at http://localhost:3000.
    API Endpoints
Tasks

    GET /api/tasks: Retrieve all tasks.
    POST /api/tasks: Create a new task.
    
Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
