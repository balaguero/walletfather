const WalletController = require('../../controller/wallet.controller');
const hexToNumber = require('../../utils/hexToNumber');
const _ = require('lodash');

const list = (ownerPrivateKey) => {
    return WalletController.getWallets(ownerPrivateKey)
        .then(response => {
            const mappedResponse = _.map(response, (item) => {
                return {
                    address: item.walletAddress,
                    privateKey: item.privateKey,
                    id: hexToNumber(item.id),
                    parent: hexToNumber(item.parent),
                }
            });
            return Promise.resolve(mappedResponse);
        })
}

module.exports = list;
