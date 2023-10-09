# Task-Application-BE
Task-Application backend

# Task Management API

This is a simple RESTful API for managing tasks. It allows you to perform CRUD (Create, Read, Update, Delete) operations on tasks with fields such as id, title, and description. The API is built using [Node.js](https://nodejs.org/) and uses [Express.js](https://expressjs.com/) as the web framework. Task data is stored in a [MongoDB](https://www.mongodb.com/) database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- MongoDB installed and running. You can download it from [mongodb.com](https://www.mongodb.com/).

## Getting Started

# Clone the repository:

   https://github.com/anagpure28/Task-Application-BE.git
   

1. Navigate to the project directory:

       cd task-management-api

2. Install dependencies:
  
        npm install

3. Create a .env file in the root directory with the following content:

        PORT=3000  # Port on which the server will run
        MONGODB_URI=mongodb://localhost:27017/taskdb  # MongoDB connection URI
   Adjust the PORT and MONGODB_URI values as needed.

4. Start the application:

        npm start
   
5. The API should now be running. You can access it at http://localhost:3000.


# API Endpoints

API - https://task-application1.onrender.com/

1. Create a Task
   
        POST api/tasks/create
  
  Create a new task.
  
  Example Request Body:
  
        {
            "title": "Task Title",
            "description": "Task Description"
        }

2. Read Tasks
   
        GET api/tasks

Get a list of all tasks.
GET /api/tasks/:taskId

Get a single task by ID.
Update a Task
PUT /api/tasks/:taskId
Update a task by ID.
Example Request Body:
