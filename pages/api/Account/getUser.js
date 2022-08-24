import User from '../../../models/User'
import conneectDB from '../../../middleware/mongoose'
const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    try {
        if (req.method == 'POST') {
            let token = req.headers.authorization
            let decoded = jwt.verify(token,`${process.env.JWT_SECRET_KEY}`)
            let user = await User.findOne({id:decoded.id})
            let data = {
                UserName: user.name,
                Email:user.email
            }
            return res.status(200).json(data)
                        
        } else {

            return res.status(400).json({ status: false, Errror: 'This method is not allowed' })
        }
    } catch (error) {
        console.error({ error: error })
        res.status(400).json({ status: false, Errror: 'Internal Srever Error' })
    }

}

export default conneectDB(handler)