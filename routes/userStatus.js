const express = require("express");
const router = express.Router();

router.get("/status", (req, res) => {
  res.json({ message: "User status route is working." });
});

module.exports = router;
