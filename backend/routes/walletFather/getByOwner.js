const WalletFatherController = require('../../controller/walletFather.controller');

const getByOwner = (owner) => {
    return WalletFatherController.getByOwner(owner);
}

module.exports = getByOwner;
