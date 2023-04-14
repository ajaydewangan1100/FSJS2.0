
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fun(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}

export default asyncHandler;


// Here is the way how this function come -----

// asyncHandler = "ajay"
// asyncHandler = () => {}
// asyncHandler = (fun) => {}
// asyncHandler = (fun) => () => {}
// asyncHandler = (fun) => async () => {}