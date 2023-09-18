require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Database Connection
const connectDB = require("./config/db");

const app = express();
// Router
const todo = require("./routes/todo");
const user = require("./routes/user");

connectDB();

app.use(cors());
// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

app.use("/api/todo", todo);
app.use("/api/user", user);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
