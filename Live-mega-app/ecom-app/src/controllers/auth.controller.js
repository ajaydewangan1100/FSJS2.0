
import user from "../models/user.schema.js";
import asyncHandler from "../controllers/asyncHandler.js";
import CustomError from "../utils/CustomError.js";



// created expires and httponly for a stored cookie -> we use it later
export const cookieOptions = {
    expires : new Date(Date.new() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true
}

// First we do signup for new user
export const signup = asyncHandler(async (req, res) => {
    // Destructure the data which are always comes from req.body
    const {name, email, password} = req.body

    // Checking deatils ->  We need to add all validations here for name email and password
    if(!name || !email || !password) {
        throw new CustomError("Please add all fields", 400)
    }

    // chack if user already exist -> DB call so await
    const existingUser = await user.findOne({email})

    // if already exist give error
    if(existingUser) {
        throw new CustomError("User already exist", 400)
    }

    // If not exist create new user -> and store it in var -> DB call so await
    const user = await User.create({
        name,
        email,
        password
    })

    // Also generating token if create new user
    const token = user.getJWTToken()

    // for safety remove password from user var
    user.password = undefined

    // Storing coookie on users browser by cookieOption which we defined upper side which set expiry date and also make httpOnly cookie ->
    res.cookie("token", token, cookieOptions)

    // Sending res to front end
    res.status(200).json({
        success : true,
        token,
        user
    })

})


// Signin for new user
