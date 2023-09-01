const validateFieldTitle = (req, res, next) => {
    const { body } = req;
    if (body.title === undefined) {
        return res.status(400).json({ message: 'The field "title" is required' });
    }
    if (body.title === '') {
        return res.status(400).json({ message: 'Title can not be empty' });
    }
    next();
};

module.exports = { validateFieldTitle }