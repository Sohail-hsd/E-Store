const mongoose = require('mongoose');

const ForgotSchema = new mongoose.Schema({
    userID: { type: String },
    email: { type: String, required: true, unique: true },
    token: { type: String, required: true },
}, { timestamp: true });

export default mongoose.models.Forgot || mongoose.model("Forgot", ForgotSchema)