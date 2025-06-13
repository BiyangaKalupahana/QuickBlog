import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    
},{timestamps: true});

const Comment = mongoose.model('Comment', blogSchema);

export default Comment;