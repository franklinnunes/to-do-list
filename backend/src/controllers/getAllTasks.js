const tasksModel = require('../models/tasksModels');

const getAll = async (_req, res) => {
    const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks);
};

module.exports = { getAll };