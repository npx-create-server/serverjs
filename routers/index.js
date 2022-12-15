module.exports = (app) => {
    app.use('/api/sample', require('./sample.router'));
};
