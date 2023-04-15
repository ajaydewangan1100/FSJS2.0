
import mongoose from "mongoose";
import AuthRoles from "..utils/authRoles.js";
// for generating JWT we need :
import JWT from "jsonwebtoken";
// access to environment variable by config:
import config from "../config/index.js";
// crypto for generate forgot password token-- it is inbuild in nodejs
import crypto from "crypto";


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxLength: [50, "Name must be less than 50 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password ust be atleast 8 characters"]
    },
    role: {
        type: String,
        enum: Object.values(AuthRoles),
        default: AuthRoles.USER
    },
    forgotPasswordToken: String,
    forgotPasswordToken: Date

},
{timestamps: true})


// Here we creating a method for encryption of password before save it
// Save- is a method here, we are doing just before save
UserSchema.pre("save", async function(next) {
    // If password not modified return to next() work
    if(!this.isModified(this.password)) return next()

    // Password encryption method here
    this.password = await bcrypt.hash(this.password, 10)
    next()

})

UserSchema.methods = {
    // Comparing password - required in login time
    comparePassword: async function(enteredPassword){
        return await bcrypt.compare(enteredPassword, this.password)
    },

    // after successfull login we need to generate tokan
    // We use jsonwebtoken - JWT
    // jwt.sign(payload, secretOrPrivateKey, [options, callback])
    getJWTToken: async function() {
        JWT.sign({_id:this._id, role:this.role},
            config.JWT_SECRET, 
            {expiresIn: config.JWT_EXPIRY})
    },

    // Generate forgot password token here
    generateForgotPasswordToken: async function() {
        // crypto have randombytes for generate random string and 
        // we convert it to hex here and stored in a variable
        const forgotToken = crypto.randomBytes(20).toString("hex")

        // encryption of generated token here and saving it for this user
        this.forgotPasswordToken = crypto.createHash("sha256").update(forgotToken).digest("hex")

        // Now also need to generate expire time for token which is here 15 minutes
        this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000

        // Return forgotTokrn - then it sended to user 
        return forgotToken
    }

    // when user clicked on url then need to check  
    
}

export default mongoose.model("User", UserSchema);