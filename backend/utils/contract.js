const ethers = require('ethers');

/**
 * @namespace walletfather.backend.utils.contract.getContractWithSigner
 * @description Creates a random wallet and associates to walletFather in contract
 * @param {Sting} privateKey wallet's privateKey to sign transactions.
 */
const getContractWithSigner = (privateKey) => {
    const abi = require('../../smart_contract/artifacts/contracts/MafiaFactory.sol/MafiaFactory.json').abi;
    const provider = ethers.getDefaultProvider('ropsten'); // TODO: Remove hardcoded ropsten

    const myWallet = new ethers.Wallet(privateKey, provider);

    const contract = new ethers.Contract(process.currentEnv.contractAddress, abi, provider);

    return contract.connect(myWallet);
}

module.exports = {
    getContractWithSigner
}
