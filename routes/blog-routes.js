const express = require('express');

const {getAllBlogs,getBlogs,createBlog,getSpecificBlog,updateBlog,deleteBlog} = require("../controller/blog-controller");
const router  = express.Router();
router.route("/:tag").get(getBlogs);
router.route("/id/:id").get(getSpecificBlog).patch(updateBlog).delete(deleteBlog);
router.route("/").post(createBlog);
router.route("/all/allblogs").get(getAllBlogs);



module.exports = router;