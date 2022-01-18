const jwt = require('jsonwebtoken');
const _ = require('lodash');

const authTokenSecretConfig = process.currentEnv.authTokenSecret;

const User = require('../models/user');
const Wallet = require('../models/wallet');

/**
 * @namespace walletfather.backend.middleware.checkAuthentication
 * @method checkAuthentication
 * @description
 * Checks for JWT and attach user's data and wallet to req object.
 * Used as middleware function in routes.
 */
const checkAuthentication = (req, res, next) => {
    const tokenString = _.get(req, 'headers.authorization', undefined);
    // Sanity Check
    if (!tokenString) {
        return res.status(401).json({
            title: 'You are not logged in. Please login.',
            errorCode: 'user-helper-3'
        });
    }

    const token = tokenString.split(" ")[1];
    // 1- Check if token is not expired
    jwt.verify(token, authTokenSecretConfig, (err, decoded) => {

        // Sanity check
        if (err) {
            return res.status(401).json({
                title: 'Your sesion has expired, please login again',
                error: err,
                errorCode: 'user-helper-1'
            });
        }

        // 2- Find the user
        User
            .findById(_.get(decoded, 'userId'))
            .then(user => {
                // Sanity check
                if (!user) {
                    // Error finding user
                    return res.status(401).json({
                        title: 'Your sesion has expired, please login again.',
                        error: err,
                        errorCode: 'user-helper-2'
                    });
                }

                // 3- If everything is Ok, add authenticatedUser to req to be passed to the next funcion of the chain.
                // authenticatedUser is an instance of user model (user schema)
                req.authenticatedUser = user;

                return Wallet.findOne({user: user._id});
            })
            .then(wallet => {
                // Most operations need user's private key
                if (!wallet) {
                    return res.status(401).json({
                        title: 'There is something wrong with your wallet, please contact an administrator.',
                        error: err,
                        errorCode: 'user-helper-3'
                    });
                }

                // Attach wallet to req
                req.authenticatedUser.wallet = wallet;
                next();
            });
    });
}

module.exports = {
    checkAuthentication
};
