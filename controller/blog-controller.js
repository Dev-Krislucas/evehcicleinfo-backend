const Blog = require('../models/blogModel');

exports.getAllBlogs = async(req,res)=>{
    let allBlogs = await Blog.find();
    res.status(200).json({

        message:"Blogs found",
        allBlogs
    })
}

exports.getBlogs=async(req,res,next)=>{

let blog = await Blog.find({tag:req.params.tag});

res.status(200).json({
    blog,
    message:"Blogs found by tag"
});
// next();
}

exports.getSpecificBlog = async(req,res,next)=>{
    let specificBlog = await Blog.findById({_id:req.params.id});
    console.log(specificBlog);
    res.status(200).json({
        message:"Blog Found",
        specificBlog
    });
    // next();

}
exports.createBlog = async(req,res,next)=>{
    let blog = await Blog.create(req.body);
    res.status(201).json({
        createdBlog:blog,
        message:"Blog Created"
    });
    // next();

}
exports.updateBlog = async(req,res,next)=>{
    let foundBlog = await Blog.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});

    res.status(200).json({
        message:"Blog Updated",
        foundBlog
    });
    // next();

}
exports.deleteBlog =async(req,res,next)=>{
    let deletedBlog = await Blog.findByIdAndDelete({_id:req.params.id});

    res.status(200).json({
        message:"Blog Deleted",
        deletedBlog

    });
    // next();
}
