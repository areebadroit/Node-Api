import Mongoose from "mongoose";

const postSchema = new Mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        minlength:10
    },
    status:{
        type:String,
        enum:['draft','under review', 'published'],
        defaut:'draft'
    },
    user:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
});

export const Post = Mongoose.model('post',postSchema);