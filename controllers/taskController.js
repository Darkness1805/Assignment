const asyncHandler = require("express-async-handler")
const Task = require("../models/taskModel")
const mongoose = require("mongoose");
//getTasks is to see all the tasks 
const getTasks = asyncHandler(async(req, res) => {
    const task = await Task.find();
    res.status(200).json(task); 
  })
//getTask is to get an indiviual task by id
const getTask = asyncHandler(async(req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(404);
        throw new Error("task not found");
    }
    const task = await Task.findById(req.params.id)
    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }
    res.status(200).json(task); 
  })

//createTask is to  CREATE a NEW tasks
const createTask = asyncHandler(async(req, res) => {
    console.log("the task is",req.body)
    const {title,description, Tstatus} = req.body;
    if(!title){
        res.status(400)
        throw new Error("task is not provided")
    }
    const task = await Task.create({ 
        title, 
        description,
        Tstatus: Tstatus || "pending"
     })
    res.status(201).json(task); 
  })
//UpdateTask is to  Update a tasks of a particulaer id
const UpdateTask = asyncHandler(async(req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error("Invalid task ID");
    }
    const task = await Task.findById(req.params.id)
    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }
    const updateTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updateTask); 
  })
//DeleteTask is to  Delete a existing task
const DeleteTask = asyncHandler(async (req, res) => {
    // Validate the task ID format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error("Invalid task ID");
    }

    // Find the task by ID
    // Removes the specific task instance from the database
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }
    
    

    res.status(200).json({
        success: true,
        message: "Task deleted successfully",
        data: task,
    });
});

module.exports = { getTasks,getTask ,createTask,UpdateTask ,DeleteTask}