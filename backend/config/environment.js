/**
 * @description
 * Environment configurations
 */

module.exports = {
    production: {
        contractAddress: '0x91B47a1ff0131fE41f4aF50e492139821b5B0D38',
        authTokenSecret: '4b8da58f53a989d92a98f0fd3ea9617a9ed65c65b1dad1902f475d312a540410',
        mongoConnectionString: 'mongodb+srv://unmineropichi:GWVNGildOIX5ObS6@cluster0.mysa9.mongodb.net/walletfather?retryWrites=true&w=majority'
    },
    development: {
        contractAddress: '0x91B47a1ff0131fE41f4aF50e492139821b5B0D38',
        authTokenSecret: '4b8da58f53a989d92a98f0fd3ea9617a9ed65c65b1dad1902f475d312a540410',
        mongoConnectionString: 'mongodb+srv://unmineropichi:GWVNGildOIX5ObS6@cluster0.mysa9.mongodb.net/walletfather?retryWrites=true&w=majority'
    }
};
