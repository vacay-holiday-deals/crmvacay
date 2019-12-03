const router = require("express").Router();
const { authVerify } = require("../middleware/verifyToken");

router.get("/posts", authVerify, (req, res) => {
  res.json({
    posts: {
      id: 1,
      title: "Jason WebToken",
      description: "trying out the middleware to verify the jasonwebtoken"
    }
  });
});

module.exports = router;
