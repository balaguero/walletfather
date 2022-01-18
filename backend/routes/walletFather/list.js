const WalletFatherController = require('../../controller/walletFather.controller');
const hexToNumber = require('../../utils/hexToNumber');
const _ = require('lodash');

const list = (ownerPrivateKey) => {
    return WalletFatherController.list(ownerPrivateKey)
        .then(response => {
            const mappedResponse = _.map(response, (item) => {
                return {
                    name: item.name,
                    id:  hexToNumber(item.id),
                    owner: item.owner
                }
            });
            return Promise.resolve(mappedResponse);
        })
}

module.exports = list;
