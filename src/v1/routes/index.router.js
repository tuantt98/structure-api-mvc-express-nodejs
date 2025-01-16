const express = require("express");
const router = express.Router();

router.get("/check-status", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok",
  });
});

router.get("/api/users", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "api ok",
    metadata: [
      {
        name: "kuro",
        age: 26,
      },
    ],
  });
});

module.exports = router;
