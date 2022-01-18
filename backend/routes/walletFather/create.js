const WalletFatherController = require('../../controller/walletFather.controller');

const create = (name, ownerPrivateKey) => {
    return WalletFatherController.create(name, ownerPrivateKey);
}

module.exports = create;
