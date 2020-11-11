import mongoose from 'mongoose';
import moment from 'moment';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Admin", "SubAdmin", "User"],
        default: "User",
    },
    register_date: {
        type: Date,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
    reviews: [
        {
            product_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
            review_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review",
            },
        },
    ],
    purchase_historys: {
        purchase_history_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PurchaseHistory",
        }
    },
    cart: {
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }
    }
});

const User = mongoose.model("user", UserSchema);

export default User;