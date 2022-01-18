const WalletController = require('../../controller/wallet.controller');
const _ = require('lodash');
const ethers = require('ethers');

const getBalance = (address) => {
    return WalletController.getBalance(address)
        .then(response => {
            return Promise.resolve(ethers.utils.formatEther(response));
        })
}

module.exports = getBalance;
