import Product from "../../../models/Product"
import conneectDB from '../../../middleware/mongoose'

const handler = async (req, res) => {
    let products = await Product.find({category:'Hoodies'})
    let hoodies = {}
    // Loop though all products {T-shirt}, if item in tshirt object, update its color and size array. To findout which are avilable in what verients.
    for (let item of products) {
        if (item.title in hoodies) {
            if (!hoodies[item.title].color.includes(item.color) && item.availableQty > 0) {
                hoodies[item.title].color.push(item.color)
            }
            if (!hoodies[item.title].size.includes(item.size) && item.availableQty > 0) {
                hoodies[item.title].size.push(item.size)
            }
        }
        else {
            hoodies[item.title] = JSON.parse(JSON.stringify(item))
            if (item.availableQty > 0) {
                hoodies[item.title].color = [item.color]
                hoodies[item.title].size = [item.size]
            }

        }
    }

    res.status(200).json({ hoodies })
}

export default conneectDB(handler)