import connectDB from "./config/db.js";
import express from "express";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Student Task Manager API!");
});

// Task routes
app.use("/api/tasks", taskRoutes);

// API test route
app.get("/api", (req, res) => {
  res.json({
    message: "Student Task Manager API is working!",
    status: "success",
  });
});

// Start server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
