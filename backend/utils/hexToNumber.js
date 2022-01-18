/**
 * @namespace walletfather.backend.utils.hexToNumber
 * @description Converts Hexadecimal value to number
 * @param {Sting} value hexadecimal value
 * @return {number} value converted to numnber
 */
module.exports = (value) => {
    return Math.round(parseFloat(value) * (10 ** 18)) / 1000000000000000000;
}
