import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    contents: {
        type: String,
        required: true,
    },
    product: {
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    },
});

const Post = mongoose.model("post", PostSchema);

export default Post;