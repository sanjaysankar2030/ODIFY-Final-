const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const ODRequest = require("../models/ODRequest");

// Get all OD requests for logged-in student
router.get("/my-ods", auth, async (req, res) => {
  try {
    const odRequests = await ODRequest.find({ student: req.user.id })
      .sort({ createdAt: -1 });

    res.json(odRequests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
