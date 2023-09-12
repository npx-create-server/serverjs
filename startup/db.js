const mongoose = require("mongoose");

module.exports = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connected to database");
};
