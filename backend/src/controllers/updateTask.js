const tasksModel = require('../models/tasksModels');

const updateTask = async (req, res) => {
    const { id } = req.params;
    await tasksModel.updateTask(id, req.body);
    return res.status(204).json();
};

module.exports = { updateTask };