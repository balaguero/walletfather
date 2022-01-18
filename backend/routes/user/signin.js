const SigninController = require('../../controller/user/signin.controller');

const signin = (email, password, confirmPassword) => {
    return SigninController.signin(email, password, confirmPassword);
}

module.exports = signin;
