const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    orderID: { type: String, required: true },
    paymentInfo: { type: String, default: '' },
    products: { type: Object, required: true },
    address: { type: String, required: true },
    amount: { type: Number },
    status: { type: String, default: 'Pending', required: true },
}, { timestamp: true });

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)