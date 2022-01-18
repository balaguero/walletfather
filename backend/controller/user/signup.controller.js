const bcrypt = require('bcryptjs');
const _ = require('lodash');
const User = require('../../models/user');
const Wallet = require('../../models/wallet');
const ethers = require('ethers');

/**
 * @namespace walletfather.backend.controller.user.signinController.signup
 * @param {String} email user email;
 * @param {String} password user password
 * @param {String} confirmPassword user password repeated
 *
 * @description registers a new User and store in mongodb.
 * Also creates a new main wallet for that user.
 */
const signup = (email, password, confirmPassword) => {
    return User.findOne({ 'email': email })
        .then(foundUser => {
            // If email exists, throw an error
            if (!_.isNil(foundUser)) {
                return Promise.reject({
                    title: 'User already exists',
                    error: 'USER_ALREADY_CREATED_PLEASE_LOGIN',
                    errorCode: 'user-signup-1',
                    httpCode: 403
                })
            }

            // If password doesn't match, throw an error
            if (!password || password !== confirmPassword) {
                return Promise.reject({
                    title: 'password does not match',
                    error: 'PASSWORD_DOES_NOT_MATCH',
                    errorCode: 'user-signup-2',
                    httpCode: 400
                });
            }

            // Create the new user
            const newUser = new User({
                password: bcrypt.hashSync(password, 10),
                email: email
            });

            return newUser.save();
        })
        .then(userCreatedResult => {

            // Create wallet to user
            const randomWallet = ethers.Wallet.createRandom();
            const newWallet = new Wallet({
                address: randomWallet.address,
                privateKey: randomWallet.privateKey,
                user: userCreatedResult.id
            });
            
            return newWallet.save();
        })
};

module.exports = {signup};
