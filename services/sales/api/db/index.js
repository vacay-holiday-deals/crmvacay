const mongoose = require("mongoose");

const mongoUriHost = process.env.MONGO_URI;

const dbConnect = async () => {
  try {
    await mongoose.connect(mongoUriHost, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log("Mongodb is running");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
