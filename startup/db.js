const mongoose = require('mongoose');

module.exports = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log('database connected!');
};
