const express = require("express");
const { TaskModel } = require("../models/task.model");
const { userRouter } = require("./user.routes");
const { auth } = require("../middleware/auth.middleware");

const taskRouter = express.Router();

// Create a Task
taskRouter.post("/create", auth, async(req,res)=> {
    try {
        const task = new TaskModel(req.body);
        await task.save();
        res.status(200).json({ msg: 'Task has been added', task: req.body });
    } catch (err) {
        res.status(500).json({error: err.message});
    }
})

// Get a Tasks of login user
taskRouter.get("/", auth, async(req,res)=> {
    try {
        const tasks = await TaskModel.find({ userID: req.body.userID })
        res.send(tasks);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// Search a Task
userRouter.get("/search", async(req,res)=> {
    try {
        const {searchQuery} = req.query;

        // Method 1
        const title = new RegExp(searchQuery,"i")
        const tasks = await TaskModel.find({title})

        // Method 2
        // const tasks = await taskModel.find({title: { $regex: searchQuery, $options: "i" }})
        res.status(200).json(tasks)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})

// Update the Task
taskRouter.patch("/update/:taskID",auth,async(req,res)=> {

    const userIDinUserDoc = req.body.userID
    const {taskID} = req.params
    try {
        const task = await TaskModel.findOne({_id:taskID})
        const userIDintaskDoc = task.userID
        if(userIDinUserDoc === userIDintaskDoc) {
            await TaskModel.findByIdAndUpdate({_id:taskID},req.body)
            res.json({msg: `Task has been updated`})
        }else{
            res.json({msg: "Not Authorized!!"})
        }
    } catch (err) {
        res.json({error: err})
    }
})

// Delete the Task
taskRouter.delete("/delete/:taskID",auth,async(req,res)=> {
    const userIDinUserDoc = req.body.userID
    const {taskID} = req.params
    try {
        const task = await TaskModel.findOne({_id:taskID})
        const userIDintaskDoc = task.userID
        if(userIDinUserDoc === userIDintaskDoc) {
            await TaskModel.findByIdAndDelete({_id:taskID})
            res.json({msg: `Task has been deleted`})
        }else{
            res.json({msg: "Not Authorized!!"})
        }
    } catch (err) {
        res.json({error: err})
    }
})

module.exports = {
    taskRouter
}