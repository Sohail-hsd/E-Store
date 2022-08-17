import Product from "../../models/Product"
import conneectDB from '../../middleware/mongoose'

const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            for (let i = 0; i < req.body.length; i++) {
                await Product.findByIdAndDelete(req.body[i]._id)

            }
            res.status(200).json({ status: "Delete Success" })
        } catch (error) {
            console.error(error)
        }
    }
    else {
        res.status(400).json({ Error: "Invalid request to (updateProducts)" })
    }
}

export default conneectDB(handler)