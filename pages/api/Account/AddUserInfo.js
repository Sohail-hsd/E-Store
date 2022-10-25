import UserInfo from '../../../models/UserInfo'
import conneectDB from '../../../middleware/mongoose'
const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            let token = req.headers.authorization
            // Verifing Authorization token --- [Done]

            jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
                if (err) {
                    return res.status(403).json({ status: false, Error: err });
                }
                // Security issues should be handeled --- [pending]
                // Server side validation --- [pending]

                if(decoded.id !== null) {
                    let check = await UserInfo.findOne({ id: decoded.id })
                    if (!check) {
                        let userInfo = new UserInfo({
                            userId:decoded.id, 
                            name: req.body.name,
                            address: req.body.address,
                            phone: req.body.phone,
                            city: req.body.city + ', ' + req.body.state,
                            areaPinCode: req.body.areaPinCode,
                        })
                        await userInfo.save()
                        res.status(200).json({ status: true, Message: "Account info Added" })
                    } else {
                        res.status(400).json({ status: false, Error: 'Invalid Credentials' })
                    }
                }

                // return res.status(200).json({ status: true, message: "user personal info updated", data });
            });

        } catch (error) {
            console.error({ error: error })
            return res.status(403).json({ status: false, Error: 'Internal Srever Error' })
        }
    }
    else return res.status(403).json({ status: false, Error: 'This method is not allowed' })

}

export default conneectDB(handler)