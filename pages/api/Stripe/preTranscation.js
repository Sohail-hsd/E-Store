import Order from "../../../models/Order"
import connectDB from '../../../middleware/mongoose'
import Product from "../../../models/Product"

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // Check if the cart is tampered --- [Done]
        let product, sumTotal = 0;
        let cart = req.body.cart;
        for (let item in cart) {
            sumTotal = cart[item].price * cart[item].qty
            product = await Product.findOne({ slug: item })
            if(product.price !== cart[item].price){
                return res.status(403).json({success:false, error:"The price of some products in  your cart is changed. Please try again"})
            }
        }
        if(sumTotal !==  req.body.SubTotal){
            return res.status(403).json({success:false, error:"The price of some products in  your cart is changed. Please try again"})
        }

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

            return res.redirect(`${process.env.NEXT_PUBLIC_HOST}/api/Stripe/postTranscation/?orderID=${req.body.orderID}`, 200)
            // return res.status(200).json({ status: "Order Initiated" })

        } catch (error) {

            return res.status(401).json({ Error: error })
        }
    }

}

export default connectDB(handler)