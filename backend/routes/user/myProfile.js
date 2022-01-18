const MyProfileController = require('../../controller/user/myProfile.controller');

const myProfile = (userId) => {
    return MyProfileController.myProfile(userId);
}

module.exports = myProfile;
