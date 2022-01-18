const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * @description
 * This schema is made just for PRIMARY wallet of users.
 * Wallets created by walletFather are only stored in blockchain.
 */
const schema = new Schema({
    address: {type: String, required: true},
    privateKey: { type: String, required: false},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
}, {
    // Creates createdAt and updatedAt fields
    timestamps: true
});

module.exports = mongoose.model('Wallet', schema);
