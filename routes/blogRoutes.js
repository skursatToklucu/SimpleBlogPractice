const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const auth = require("../middleware/auth");

router.post("/create", auth, blogController.createBlog);
router.get("/getAll", blogController.getAllPosts);

module.exports = router;
