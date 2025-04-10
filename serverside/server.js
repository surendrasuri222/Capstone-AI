const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/authroute");
const connectDB = require("./db/database");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    message: "Server is running on the webpage",
  });
});

connectDB();
app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server is running at port: 4000");
});
