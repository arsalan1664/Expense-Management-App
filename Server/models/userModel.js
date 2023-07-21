const mongoose = require('mongoose')

// Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    passward: {
        type: String,
        required: [true, 'passward is required']
    }
}, {timestamps: true})

// export
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
