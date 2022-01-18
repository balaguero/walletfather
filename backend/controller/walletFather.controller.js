const Contract = require('../utils/contract');

/**
 * @namespace walletfather.backend.controller.WalletFatherController.create
 * @returns Creates a new walletFather in contract
 */
const create = (name, ownerPrivateKey) => {
    const contract = Contract.getContractWithSigner(ownerPrivateKey);
    return contract.createWalletFather(name);
}

/**
 * @namespace walletfather.backend.controller.WalletFatherController.getByOwner
 * @returns {Object | WalletFather} walletFather associated to owner in contract
 */
const getByOwner = (owner) => {
    const contract = Contract.getContractWithSigner();
    return contract.getWalletFatherByOwner(owner);
}

/**
 * @namespace walletfather.backend.controller.WalletFatherController.list
 * @returns List of walletFathers created in contract
 */
const list = (ownerPrivateKey) => {
    const contract = Contract.getContractWithSigner(ownerPrivateKey);
    return contract.getWalletFathers();
}

module.exports = {
    create,
    getByOwner,
    list
}
