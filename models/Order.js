const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [
        {
            productId: { type: String, required: true },
            qunatity: { type: Number, default: 1, }
        }
    ],
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'Pending', required: true },
},{timestamp:true});

export default mongoose.models.Order || mongoose.model('Order',OrderSchema)