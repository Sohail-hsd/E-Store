const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // userInfoId: { type: mongoose.Schema.Types.ObjectId, ref:"UserInfo" },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // address: { type: String, default: '' },
    // areaPinCode: { type: String, default: '' },
    // city: { type: String, default: '' },
    // phone: { type: String, default: '' },

}, { timestamp: true });

export default mongoose.models.User || mongoose.model("User", UserSchema)