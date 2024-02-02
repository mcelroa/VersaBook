require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cors = require("cors");

mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("Db Connected");
});

const app = express();

app.use(express.json());
app.use(cors());

// routes middleware
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port: ${process.env.PORT}`);
});
