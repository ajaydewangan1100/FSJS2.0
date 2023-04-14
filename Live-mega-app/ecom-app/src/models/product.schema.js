
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ["true", "Product name is required"],
        trim: true,
        maxLength: [120, "Product name should not more than 120 characters"]
    },
    price: {
        type: Number,
        required: ["true", "Product price is required"],
        maxLength: [5, "Product price should not more than 5 charcters"]
    },
    description: {
        type: String
    },
    photos: [
        {
            secure_url: {
                type: String,
                required: true
            }
        }
    ],
    stock: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
        default: 0
    },
    collectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection"
    }
},
{timestamps: true})

export default mongoose.model("Product", productSchema);