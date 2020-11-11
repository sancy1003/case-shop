import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    model: {
        model_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Model",
        }
    },
});

const Product = mongoose.model("product", ProductSchema);

export default Product;