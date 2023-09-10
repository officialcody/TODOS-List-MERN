require("dotenv").config();

const express = require("express");

// Database Connection
const connectDB = require("./config/db");

const app = express();

// Router
const todo = require("./routes/todo");
const user = require("./routes/user");

connectDB();

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
