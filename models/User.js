const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    
}, { timestamp: true });

export default mongoose.model('User', UserSchema)