/**
 * @description
 * Environment configurations
 */

module.exports = {
    production: {
        contractAddress: '0x7EFe87b0c18965924052Cc8750d3c962f5C68b90',
        authTokenSecret: '4b8da58f53a989d92a98f0fd3ea9617a9ed65c65b1dad1902f475d312a540410',
        mongoConnectionString: 'mongodb+srv://unmineropichi:GWVNGildOIX5ObS6@cluster0.mysa9.mongodb.net/walletfather?retryWrites=true&w=majority'
    },
    development: {
        contractAddress: '0x7EFe87b0c18965924052Cc8750d3c962f5C68b90',
        authTokenSecret: '4b8da58f53a989d92a98f0fd3ea9617a9ed65c65b1dad1902f475d312a540410',
        mongoConnectionString: 'mongodb+srv://unmineropichi:GWVNGildOIX5ObS6@cluster0.mysa9.mongodb.net/walletfather?retryWrites=true&w=majority'
    }
};
