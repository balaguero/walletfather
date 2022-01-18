const Contract = require('../utils/contract');
const ethers = require('ethers');


/**
 * @namespace walletfather.backend.controller.WalletController.list
 * @returns {Array<Object> | Wallet} List of wallets associated to the owner in the contract
 */
const getWallets = (ownerPrivateKey) => {
    const contract = Contract.getContractWithSigner(ownerPrivateKey);

    return contract.getWallets();
}

/**
 * @namespace walletfather.backend.controller.WalletController.createWallet
 * @description Creates a random wallet and associates to walletFather in contract
 */
const createWallet = (ownerPrivateKey) => {
    const randomWallet = ethers.Wallet.createRandom();

    const contract = Contract.getContractWithSigner(ownerPrivateKey);

    return contract.createWallet(randomWallet.address, randomWallet.privateKey);
}

/**
 * @namespace walletfather.backend.controller.WalletController.getBalance
 * @returns {String} balance in ethers of any ethereum wallet
 */
const getBalance = (address) => {
    const provider = ethers.getDefaultProvider('ropsten');
    return provider.getBalance(address);
}

module.exports = {
    getWallets,
    createWallet,
    getBalance
}
