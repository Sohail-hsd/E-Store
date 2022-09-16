import Order from '../../models/Order'
import connectDB from '../../middleware/mongoose'
const jwt = require('jsonwebtoken');
import User from '../../models/User'

const handler = async (req, res) => {
    try {
        if(req.method === 'GET'){
            let token = req.headers.authorization
            // let token = req.body.token
            let decoded = jwt.verify(token, `${process.env.JWT_SECRET_KEY}`)
            let user = await User.findOne({ id: decoded.id })
            let orders = await Order.find({ email: user.email })
    
            return res.status(200).json({orders})
        }
        return res.status(200).json({Error: "Method not allow"})

    } catch (error) {
        console.error({ error: error })
        res.status(400).json({ status: false, Errror: error })
    }
}

export default connectDB(handler)