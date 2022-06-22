const express = require('express');
const router = express.Router();

const authController = require('../controller/authController')
const blogController = require("../controller/blogController")


router.get('/test-me', function (req, res) {                    //test me api
    res.send('My first ever api!')
});

router.post('/authors', authController.createAuthor)            //create authors
router.post("/createBlog",blogController.createBlog)            //create blogs
router.get("/blogs",blogController.getBlogs)                    //get blogs
router.put("/blogs/:blogId",blogController.updateBlogs)         //update blogs data
router.delete("/blog/:blogId",blogController.deleteBlogs)       //delete blogs
router.delete("/blog",blogController.deleteBlogQuery)           //delete blogs by query params

module.exports = router;