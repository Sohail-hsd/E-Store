import User from '../../../models/User'
import conneectDB from '../../../middleware/mongoose'
const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    try {
        if (req.method == 'POST') {
            let token = req.headers.authorization
            // Verifing Authorization token --- [Done]
            jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, async (err, decoded) => {
                if (err) {
                    return res.status(400).json({ status: false, Error: err })
                }

                let user = await User.findOne({ id: decoded.id })
                let data = {
                    UserName: user.name,
                    Email: user.email
                }
                return res.status(200).json({ status: true, data })
            });

        } else {

            return res.status(400).json({ status: false, Error: 'This method is not allowed' })
        }
    } catch (error) {
        console.error({ error: error })
        res.status(400).json({ status: false, Error: 'Internal Srever Error' })
    }

}

export default conneectDB(handler)