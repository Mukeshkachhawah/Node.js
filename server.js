const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./route/userRoute");
const app = express();
const db = require("./config/db");
const cors = require("cors")

const PORT = process.env.PORT || 7000;
dotenv.config();
db();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
