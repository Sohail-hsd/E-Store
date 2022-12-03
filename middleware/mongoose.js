const mongoose = require('mongoose')

const connectDB = handler => async (req,res) => {
    if (mongoose.connection.readyState) {
        return handler(req, res)
    }
    mongoose.connect(process.env.MONGO_URI)
    return handler(req, res)
}

export default connectDB;