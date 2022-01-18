/**
 * @description
 * Environment configurations
 */

module.exports = {
    production: {
        contractAddress: '0x27bFfC6459Da9E3135bACD9E84F7feFdbaf1EF2a',
        authTokenSecret: '4b8da58f53a989d92a98f0fd3ea9617a9ed65c65b1dad1902f475d312a540410',
        mongoConnectionString: 'mongodb+srv://unmineropichi:GWVNGildOIX5ObS6@cluster0.mysa9.mongodb.net/walletfather?retryWrites=true&w=majority'
    },
    development: {
        contractAddress: '0x27bFfC6459Da9E3135bACD9E84F7feFdbaf1EF2a',
        authTokenSecret: '4b8da58f53a989d92a98f0fd3ea9617a9ed65c65b1dad1902f475d312a540410',
        mongoConnectionString: 'mongodb+srv://unmineropichi:GWVNGildOIX5ObS6@cluster0.mysa9.mongodb.net/walletfather?retryWrites=true&w=majority'
    }
};
