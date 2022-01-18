const WalletFatherController = require('../../controller/walletFather.controller');
const hexToInt = require('../../utils/hexToInt');
const _ = require('lodash');

const list = (ownerPrivateKey) => {
    return WalletFatherController.list(ownerPrivateKey)
        .then(response => {
            const mappedResponse = _.map(response, (item) => {
                return {
                    name: item.name,
                    id:  hexToInt(item.id),
                    owner: item.owner
                }
            });
            return Promise.resolve(mappedResponse);
        })
}

module.exports = list;
