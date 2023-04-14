const { config } = require("dotenv");
import app from "./app.js";
const mongoose = require("mongoose");



( async () => {
    try {
        // Make DB work await always
        await mongoose.connect(config.MONGODB_URL);
        console.log("DB CONNECTED !");

        // also checking here for express connect or not to DB
        app.on('error', (err) => {
            console.log("ERROR: ", err);
            throw err
        } )

        const onListening = () => {
            console.log(`Listening on port: ${config.PORT}`);
        }
        // listen take a callbackfunction we provide it by variable
        app.listen(config.PORT, onListening)
        
        
    } catch (err) {
        console.error("ERROR: ", err)
        throw err
    }
} )()