import User from '../models/User'
import conneectDB from 'mongoose'
const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    try {
        // let token = req.body.token
        let token = req.headers.authorization
        let decoded = jwt.verify(token, `${process.env.JWT_SECRET_KEY}`)
        let user = await User.findOne({ id: decoded.id })
        let data = { UserName: user.name, Email: user.email }
        return res.status(200).json({ user: data })

    } catch (error) {
        console.error({ error: error })
        return res.status(400).json({ status: false, Errror: 'Internal Srever Error' })
    }

}

export default conneectDB(handler)