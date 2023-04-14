
import mongoose from "mongoose";
// Order status is coming from here
import DeliveryStatus from "../utils/deliveryStatus.js";


const orderSchema = new mongoose.Schema({
    product : {
        type: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                },
                count: Number,
                price: Number,
            }
        ],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        maxLength: [13, "Mobile number is bigger than usual"],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    coupon: String,
    transactionId: String,
    status: {
        type: String,
        enum: Object.values(DeliveryStatus),
        default: DeliveryStatus.ORDERED
    }
},
{timestamps: true})

export default mongoose.model("Order", orderSchema);