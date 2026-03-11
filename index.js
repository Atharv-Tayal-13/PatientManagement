const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes/patient")
env.config();

const app = express();

app.use(express.json());

connectDB();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/", router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});