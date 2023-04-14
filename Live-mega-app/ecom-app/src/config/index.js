
import dotenv from 'dotenv';

// run dotenv with config
dotenv.config()

// defining config here
const config = {
    PORT: process.env.PORT || 8080,
    MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost:27017/ecom",
    JWT_SECRET: process.env.JWT_SECRET || "yoursecret123",
    JWT_EXPIRY: process.env.JWT_EXPIRY || "15d"
}

export default config;