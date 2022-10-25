import User from '../../../models/User'
import UserInfo from '../../../models/UserInfo'
import conneectDB from '../../../middleware/mongoose'
const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            return new Promise((resolve, reject) => {
                let token = req.headers.authorization
                // Verifing Authorization token --- [Done]
                jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
                    if (err) {
                        res.status(403).json({ status: false, Error: err });
                        reject()
                    }
                    if (decoded.id != null) {
                        let user = await User.findOne({ _id: decoded.id });
                        let personalInfo = await UserInfo.findOne({ id: decoded.id });
                        let data = {
                            UserName: user.name,
                            Email: user.email,
                            address: personalInfo.address,
                            phone: personalInfo.phone,
                            city: personalInfo.city,
                            areaPinCode: personalInfo.areaPinCode,
                        };
                        return res.status(200).json({ status: true, data });
                    }
                    resolve()
                });
            })

        } catch (error) {
            console.error({ error: error })
            return res.status(403).json({ status: false, Error: 'Internal Srever Error' })
        }
    }
    else return res.status(403).json({ status: false, Error: 'This method is not allowed' })

}

export default conneectDB(handler)
