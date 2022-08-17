import User from '../../../models/User';
import conneectDB from '../../../middleware/mongoose';
const CryptoJS = require('crypto-js');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            const { name, email, password } = req.body
            let check = await User.findOne({ email })
            if (!check) {
                const cyperText = CryptoJS.AES.encrypt(password, 'SecretKey1999').toString()
                let user = new User({ name, email, password: cyperText })
                await user.save()
                res.status(200).json({ status: true, Message: "Account created" })
            } else {
                res.status(400).json({ status: false, Error: 'Invalid Credentials' })
            }

        } catch (error) {
            console.error({ error: error })
            res.status(400).json({ status: false, Error: 'Internal Srever Error' })
        }
    } else {

        res.status(400).json({ status: false, Error: 'This method is not allowed' })
    }

}

export default conneectDB(handler)