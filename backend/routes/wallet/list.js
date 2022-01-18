const WalletController = require('../../controller/wallet.controller');
const hexToInt = require('../../utils/hexToInt');
const _ = require('lodash');

const list = (ownerPrivateKey) => {
    return WalletController.getWallets(ownerPrivateKey)
        .then(response => {
            const mappedResponse = _.map(response, (item) => {
                return {
                    address: item.walletAddress,
                    privateKey: item.privateKey,
                    id: hexToInt(item.id),
                    parent: hexToInt(item.parent),
                }
            });
            return Promise.resolve(mappedResponse);
        })
}

module.exports = list;
