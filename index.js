const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();

// TODO: database connection
//dbConnection();

// CORS
app.use(cors());

// Body Parser
app.use(express.json());

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/patients", require("./routes/patients"));
app.use("/api/v1/observations", require("./routes/observations"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
