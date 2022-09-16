import Order from "../../../models/Order"
import connectDB from '../../../middleware/mongoose'


const handler = async (req, res) => {
    if (req.method === 'POST') {
        // Check if the cart is tampered --- [pending]
        // Chack if the cart item is out of stock --- [pending]
        // Chack if the detials are valid --- [pending]
        // Initiate an Order, Coressponding ot this OrderId.
        try {
            // console.log(req.body)
            let order = new Order({
                email: req.body.email,
                orderID: req.body.orderID,
                address: req.body.address,
                amount: req.body.SubTotal,
                products: req.body.cart,
                status: 'Initiate'
            })
            await order.save()

            return res.redirect(`${process.env.NEXT_PUBLIC_HOST}/api/Stripe/postTranscation/?orderID=${req.body.orderID}`,200)
            // return res.status(200).json({ status: "Order Initiated" })

        } catch (error) {

            return res.status(401).json({ Error: error })
        }
    }

}

export default connectDB(handler)