import User from '../../../models/User'
import conneectDB from '../../../middleware/mongoose'
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');


const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            let token = req.headers.authorization
            const { password, cpassword } = req.body
            // Verifing Authorization token --- [Done]

            jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
                if (err) {
                    return res.status(403).json({ status: false, Error: err });
                }
                // Security issues should be handeled --- [pending]
                // Server side validation --- [pending]
                if (decoded) {
                    const cyperText = CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET_KEY).toString()
                    console.log(cyperText)
                    await User.findOneAndUpdate({ id: decoded.id }, {
                        password: cyperText,
                    });
                    return res.status(200).json({ status: true, message: "user Credintials updated"});
                }

            });

        } catch (error) {
            console.error({ error: error })
            return res.status(403).json({ status: false, Error: 'Internal Srever Error' })
        }
    }
    else return res.status(403).json({ status: false, Error: 'This method is not allowed' })

}

export default conneectDB(handler)