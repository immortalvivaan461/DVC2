const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactmsgSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    msg:{
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('contactmsg', contactmsgSchema);

