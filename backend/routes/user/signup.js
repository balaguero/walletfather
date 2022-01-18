const SignupController = require('../../controller/user/signup.controller');

const signup = (email, password, confirmPassword) => {
    return SignupController.signup(email, password, confirmPassword);
}

module.exports = signup;
