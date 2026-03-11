const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://atharv2428eee431_db_user:Tgh1U86lkdraMiiP@cluster0.uarpbds.mongodb.net/?appName=Cluster0");

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;