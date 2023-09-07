const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    category:{
        type:String,
        enum:["ev-news","vehicle-info"]
    },
    coverImage:{
        type:String
    },
    tag:{
        type:String,
        lowercase:true
    },
    mainHeading:{
        type:String
    },
    mainSubHeading:{
        type:String
    },
    subHeading1:{
        type:String
    },
    paragraph1:{
        type:String
    },
    img1:{
        type:String
    },
    subHeading2:{
        type:String
    },
    paragraph2:{
        type:String
    },
    img2:{
        type:String
    },
    subHeading3:{
        type:String
    },
    paragraph3:{
        type:String
    },
    img3:{
        type:String
    }

})
// blogSchema.pre('save',async (next)=>{
//     this.tag = await this.tag.toLowerCase();
//     next();
// })

const Blog = mongoose.model("Blog",blogSchema);

module.exports = Blog;