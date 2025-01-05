const express = require('express');
const router = express.Router();
const {
    getTasks ,
    getTask,
    createTask,
    UpdateTask ,
    DeleteTask
} = require("../controllers/taskController") 
router.route('/').get(getTasks).post(createTask) 
router.route('/:id').put(UpdateTask).delete(DeleteTask).get(getTask)


module.exports = router;

