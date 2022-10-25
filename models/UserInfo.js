const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
        required: true, 
    },
    name: { type: String, required: true },
    address: { type: String, default: '' },
    areaPinCode: { type: String, default: '' },
    city: { type: String, default: '' },
    phone: { type: String, default: '' },

}, { timestamp: true });

export default mongoose.models.User || mongoose.model('User', UserSchema)