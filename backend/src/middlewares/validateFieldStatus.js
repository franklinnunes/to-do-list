const validateFieldStatus = (req, res, next) => {
    const { body } = req;
    if (body.status === undefined) {
        return res.status(400).json({ message: 'The field "status" is required' });
    }
    if (body.status === '') {
        return res.status(400).json({ message: 'Status can not be empty' });
    }
    next();
};
module.exports = { validateFieldStatus };