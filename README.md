# walletfather crypto application for practice
### Developed by Juan Ignacio Balaguero
### Github: https://github.com/balaguero

## History
The mafia has arrived in the city and is demanding businesses to pay a commission for transacting ethereum in exchange for "security".
You will become a WalletFather, the man at the head of your gang, and you'll have the ability of create wallets, control all transactions and charge for them. Nice business, uh?
Transaction charges are going to be stored in the contract address (soon).

For now, the city is pretty small, and it needs to grow. So for now, the walletFather charges a really cheap amount for transactions.
In a future, probably many walletFathers will arrive to the city, and you know what happens after, yes, war!. Stay tuned for that update!

## Data Sources
User's email, password and main wallet address and privateKey are stored in mongodb. Those are used as login credentials and to sign transactions to the contract.

WalletFather and Wallets (address and privateKey) are stored in blockchain.

## Basic Sample Hardhat Project
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a sample script that deploys that contract, and an example of a task implementation.

The backend API stores the user's address and privateKey in order to perform different operations. I know this is not the safest way to operate but is just for practice. Since the main goal is to have a working API with some UI for a smooth journey.
In a future, I plan to replicate dashboard view with web3 in order to interact directly with the contract, use metamask login and bypass some api calls.

### tasks
Try running some of the following tasks:

```shell
yarn chain // start local ethereum testnet
yarn deploy // deploys contract on local testnet
yarn deploy:ropsten // Deploys contract to ropsten network

```

# Try demo app
## http://ec2-54-159-114-21.compute-1.amazonaws.com:3000

# Or clone the repo and..

## Run the app locally
1- Compile and deploy smart contract
In a terminal window run go to `walletfather/smart_contract` and run`npm install && yarn chain`
In another terminal window go to `walletfather/smart_contract` and deploy the contract by rinning `yarn deploy`
It outputs the contract address in console, copy it and paste in `walletfather/backend/config/envivonment.js` > contractAddress entries
It also should create `artifacts` and `typechain-types`. Artifacts contains contract ABI used as interface in backend repository.

2- Run the backend
Backend will connect to my personal mongodb account. With populated data.
If you want an own database, you can modify the connection string on `walletfather/backend/config/envivonment.js`
In a terminal window go to `walletfather/backend`
run `npm install`
run `node ./bin/www`

3- Run the frontend
In a terminal window go to `walletfather/frontend`
run `npm install`
run `npm start`
Open a browser and navigate to http://localhost:4200

## Run the app in ropsten testnet
0- create an account in alchemy.com, associate your wallet and create an application. Put your app key on `walletfather/backend/config/envivonment.js`
1- Compile and deploy smart contract
In a terminal window run go to `walletfather/smart_contract` and run`npm install && yarn chain`
In another terminal window go to `walletfather/smart_contract` and deploy the contract by rinning `yarn deploy:ropsten`
It outputs the contract address in console, copy it and paste in `walletfather/backend/config/envivonment.js` > contractAddress entries
It also should create `artifacts` and `typechain-types`. Artifacts contains contract ABI used as interface in backend repository.

2- Run the backend

3- Run the frontend