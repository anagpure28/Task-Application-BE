const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { taskRouter } = require("./routes/task.routes");
require("dotenv").config()
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors())

// User Route
app.use("/users", userRouter);

// Task Route
app.use("/tasks", taskRouter);

app.listen(process.env.port, async()=> {
    try {
        await connection
        console.log('Connected to the DB');
        console.log(`Running on server ${process.env.port}`);
    } catch (error) {
        console.log(error);
        console.log('Something went wrong!!')
    }
})