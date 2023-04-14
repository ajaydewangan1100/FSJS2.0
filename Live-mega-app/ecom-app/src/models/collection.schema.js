
import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: String,
    required: ["true", "Please Provide Collection Name"],
    trim: true,
    maxLength: [120, "Collection name should not be more than 120 characters"]
},
{timestamps: true})

export default mongoose.model("Collection", collectionSchema);