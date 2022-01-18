const WalletController = require('../../controller/wallet.controller');

const create = (ownerPrivateKey) => {
    return WalletController.createWallet(ownerPrivateKey);
}

module.exports = create;
