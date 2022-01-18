const User = require('../../models/user');
const Wallet = require('../../models/wallet')

/**
 * @namespace walletfather.backend.controller.user.myProfileController.myProfile
 * @param {String} userId user id;
 * @returns User profile and main wallet
 */
const myProfile = (userId) => {
    let u;

    return User.findById(userId)
        .then(user => {
            u = user;

            return Wallet.findOne({user: userId});
        })
        .then((wallet) => {
            return Promise.resolve({
                email: u.email,
                updatedAt: u.updatedAt,
                createdAt: u.createdAt,
                id: u.id,
                wallet
            });
        })
}

module.exports = {
    myProfile
}
