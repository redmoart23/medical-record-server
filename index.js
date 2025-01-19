const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");

const app = express();

// Environment variables
require("dotenv").config();

// Database connection
dbConnection();

// CORS
app.use(cors());

// Body Parser
app.use(express.json());

// Routes
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/patients", require("./routes/patients"));
app.use("/api/v1/observations", require("./routes/observations"));

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
