const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
require("dotenv").config();
const wineRoutes = require("./routes/wine");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/", wineRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
