import express from "express";

const router = express.Router();

// Temporary test route
router.get("/", (req, res) => {
  res.json({
    message: "All student tasks will appear here",
  });
});

export default router;
