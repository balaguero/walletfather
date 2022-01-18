const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authTokenSecretConfig = process.currentEnv.authTokenSecret;

const User = require('../../models/user');

const TOKEN_EXPIRES_IN = 3600 * 24 * 365;

/**
 * @namespace walletfather.backend.controller.user.signinController.signin
 * @param {String} email user email;
 * @param {String} password user password
 * @returns Auth token
 */
const signin = (email, password) => {
    return User
        .findOne({ 'email': email })
        .then(user => {
            validPassword = bcrypt.compareSync(password, user.password);

            if (!user || !validPassword) {
                return Promise.reject({
                    title: 'User or password are wrong. Please retry with other credentials.',
                    errorCode: 'signin-1',
                    httpCode: 403
                });
            }
            const token = jwt.sign({ email: user.email, userId: user._id,}, authTokenSecretConfig, { expiresIn: TOKEN_EXPIRES_IN });

            return Promise.resolve({
                message: 'Successfully logged in',
                token: token,
                expiresIn: TOKEN_EXPIRES_IN,
                user: user._id
            });
        })
        .catch(err => {
            return Promise.reject({
                title: err.title || 'There was an error trying to log in. Please try later.',
                errorCode: err.errorCode || 'signin-2',
                httpCode: err.httpCode || 500
            });
        });
}

module.exports = {
    signin
};
