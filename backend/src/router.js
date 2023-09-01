const express = require('express');
const router = express.Router();

const { getAll } = require('./controllers/getAllTasks');
const { createTask } = require('./controllers/createTask');
const { deleteTask } = require('./controllers/deleteTask');
const { updateTask } = require('./controllers/updateTask')
const { validateFieldTitle } = require('./middlewares/validateFieldTitle');
const { validateFieldStatus } = require('./middlewares/validateFieldStatus');

router.get('/tasks', getAll);
router.post('/tasks', validateFieldTitle, createTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', validateFieldTitle, validateFieldStatus, updateTask);

module.exports = router;