import mongoose from 'mongoose';
import moment from 'moment';

const PurchaseHistorySchema = new mongoose.Schema({
    purchasing_user: {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
    purchasing_date: {
        type: Date,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
    purchasing_products: {
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }
    },
    card_number: {
        type: Number,
        required: true,
    },
});

const PurchaseHistory = mongoose.model("purchaseHistory", PurchaseHistorySchema);

export default PurchaseHistory;