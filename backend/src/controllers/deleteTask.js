const tasksModel = require('../models/tasksModels');

const deleteTask = async (req, res) => {
    const { id } = req.params;
    await tasksModel.deleteTask(id);
    return res.status(204).json();
};

module.exports = { deleteTask }