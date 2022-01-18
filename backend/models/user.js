const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: {type: String, required: true},
    password: { type: String, required: false}
}, {
    // Creates createdAt and updatedAt fields
    timestamps: true
});

module.exports = mongoose.model('User', schema);
