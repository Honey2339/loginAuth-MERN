const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email:{
        type: String,
        required: [true,"Email is required"],
        lowercase : true,
        unique: true,
    },
    password: {
        type: String,
        required: [true,"Password is required"],
        minlength: [4,"Minimum 4 characters is required"],
    }
})

const User = mongoose.model("hogaabbtoh", schema)

module.exports = User