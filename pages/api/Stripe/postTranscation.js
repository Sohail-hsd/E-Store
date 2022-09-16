import Order from "../../../models/Order"
import connectDB from '../../../middleware/mongoose'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            // Validate payment status. --- [Pending]
            // Update status in the Order table after checking the transcation status. --- [Pending]
            let order = await Order.findOneAndUpdate({ orderID: req.query.orderID }, { status: 'Pending' })
            // Initiate Shipping --- [Pending]
            // Redirect user to the confirmation page. --- [Pending]

            // res.redirect(`/order?id=${order._id}`,200)
            return res.status(200).json({orderid:order._id,status:'Pending'})
        } catch (error) {

            return res.status(200).json(error)
        }

        // return res.status(200).json("Post Transaction")
    } else {
        return res.status(401).json("Method not allowed")

    }
}

export default connectDB(handler)
