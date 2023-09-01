const tasksModel = require('../models/tasksModels');

const createTask = async (req, res) => {
    const createdTask = await tasksModel.createTask(req.body);
    return res.status(201).json(createdTask);
};

module.exports = { createTask };