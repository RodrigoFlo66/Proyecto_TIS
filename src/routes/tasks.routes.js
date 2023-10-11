const { Router } = require("express");
const pool = require("../db");
const router = Router();

const { 
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    createCasa,
    updateTask
} = require("../controllers/tasks.controller");


router.get("/tasks", getAllTasks);

router.get("/tasks/10", getTask);

router.post('/tasks', createCasa);

router.delete('/tasks', deleteTask);

router.put('/tasks', updateTask);

module.exports = router;