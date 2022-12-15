module.exports = (app) => {
    app.route('/api/sample', require('./sample.router'));
};
