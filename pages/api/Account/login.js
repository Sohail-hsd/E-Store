import User from '../../../models/User'
import conneectDB from '../../../middleware/mongoose'
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    try {
        if (req.method == 'POST') {
            let user = await User.findOne({ email: req.body.email })

            if (user) {
                const bytes = CryptoJS.AES.decrypt(user.password, `${process.env.PASSWORD_SECRET_KEY}`)
                const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8)
                if (req.body.password === decryptedPassword) {
                    const token = jwt.sign({ Email: user.email, id: user._id }, `${process.env.JWT_SECRET_KEY}`, { expiresIn: '2d' });
                    return res.status(200).json({ status: true, Email: user.email, Name: user.name, token })
                }

                return res.status(200).json({ status: false, Error: "Invalid Email Or Password" })

            } else {
                return res.status(200).json({ status: false, Error: "Invalid Email Or Password" })
            }

        } else {

            return res.status(400).json({ status: false, Errror: 'This method is not allowed' })
        }
    } catch (error) {
        console.error({ error: error })
        res.status(400).json({ status: false, Errror: 'Internal Srever Error' })
    }

}

export default conneectDB(handler)