/**
 * @namespace walletfather.backend.utils.sleep
 * @description Waits the specified amount of time in a promise chain
 * @param {number} ms miliseconds to sleep
 * @return {Promise} Promise to be resolved after sleep time
 */
module.exports = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
