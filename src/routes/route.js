const express = require('express');

const router = express.Router();

const authController = require('../controller/authController')
const blogController = require("../controller/blogController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/authors', authController.createAuthor)
router.post("/createBlog",blogController.createBlog)
router.get("/blogs",blogController.getBlogs)
router.put("/blogs/:blogId",blogController.updateBlogs)
router.delete("/blog/:blogId",blogController.deleteBlogs)
router.delete("/blog",blogController.deleteBlogQuery)

module.exports = router;
// adding this comment for no reason