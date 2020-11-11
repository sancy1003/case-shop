import mongoose from 'mongoose';
import moment from 'moment';

const ReviewSchema = new mongoose.Schema({
    contents: {
        type: String,
        required: true,
    },
    write_date: {
        type: Date,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
    product: {
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    },
    writer: {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
    star: {
        type: Number,
    }
});

const Review = mongoose.model("review", ReviewSchema);

export default Review;