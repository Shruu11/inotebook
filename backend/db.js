const mongoose = require("mongoose");

// ✅ Either of these is valid:
const mongoURI = "mongodb://127.0.0.1:27017/inotebook";
// OR
// const mongoURI = "mongodb://localhost:27017/inotebook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to Mongo Successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectToMongo; // ✅ Correct way to export
