import User from '../../../models/User'
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

                await User.findOneAndUpdate({ id: decoded.id }, {
                    name: req.body.username,
                    address: req.body.address,
                    phone: req.body.phone,
                    city: req.body.city + ', ' + req.body.state,
                    areaPinCode: req.body.areaPinCode,
                });

                return res.status(200).json({ status: true, message: "user personal info updated", data });
            });

        } catch (error) {
            console.error({ error: error })
            return res.status(403).json({ status: false, Error: 'Internal Srever Error' })
        }
    }
    else return res.status(403).json({ status: false, Error: 'This method is not allowed' })

}

export default conneectDB(handler)