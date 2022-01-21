//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.11;

import './utils/Ownable.sol';

contract MafiaFactory is Ownable {

    // Events definition
    event NewWalletFather(uint walletFatherId, address owner, string name);
    event NewWallet(uint walletId, address walletAddress, string privateKey, uint _walletFatherId);

    // Structures
    struct Wallet {
        uint id;
        address walletAddress;
        string privateKey;
        uint parent; // a walletFather ID
    }

    struct WalletFather {
        uint id;
        address owner;
        string name;
    }

    // Contract pubic data (blockchain)
    WalletFather[] public walletFathers;
    Wallet[] internal wallets;

    mapping (address => uint) ownerWalletFatherCount;


    // Contract methods
    function _createWalletFather(string memory _name) internal {
        // TODO: Check for optional parameters and remove owner address on constructor
        uint id = walletFathers.length + 1;
        walletFathers.push(WalletFather(id, msg.sender, _name));
        ownerWalletFatherCount[msg.sender]++;
        emit NewWalletFather(id, msg.sender, _name);
    }

    function createWalletFather(string memory _name) public {
        // An owner can have only one WalletFather
        require(ownerWalletFatherCount[msg.sender] == 0);
        _createWalletFather(_name);
    }

    // Everyone can see all walletFathers
    function getWalletFatherByOwner(address _owner) public view returns(WalletFather memory) {
        for (uint i = 0; i < walletFathers.length; i++) {
            WalletFather memory myFather = walletFathers[i];
            if (myFather.owner == _owner) {
                return myFather;
            }
        }
    }

    // Everyone can see all walletFathers
    function getWalletFathers() public view returns(WalletFather[] memory) {
        return walletFathers;
    }

    // Creates a wallet and pushes to WalletFather's wallets array
    function _createWallet(address _walletAddress, string memory _privateKey, uint _walletFatherId) internal {
        uint id = wallets.length + 1;
        wallets.push(Wallet(id, _walletAddress, _privateKey, _walletFatherId));
        emit NewWallet(id, _walletAddress, _privateKey, _walletFatherId);
    }

    // Only the owner of the WalletFather can create a wallet
    function createWallet(address _walletAddress, string memory _privateKey) public {
        WalletFather memory myFather = this.getWalletFatherByOwner(msg.sender);
        require(msg.sender == myFather.owner);
        _createWallet(_walletAddress, _privateKey, myFather.id);
    }

    // Only the WalletFather owner can see its own wallets
    function getWallets() public view returns(Wallet[] memory) {
        uint resultCount = 0;
        WalletFather memory myFather = this.getWalletFatherByOwner(msg.sender);
        require(msg.sender == myFather.owner);

        // Create count for fixed array
        for (uint i = 0; i < wallets.length; i++) {
            Wallet memory myWallet = wallets[i];
            if (myWallet.parent == myFather.id) {
                resultCount ++;
            }
        }

        // Create results fixed-length array based on resultCount
        Wallet[] memory results = new Wallet[](resultCount);
        uint256 j = 0;
        
        // Filter items and "push" to result array
        for (uint i = 0; i < wallets.length; i++) {
            Wallet memory myWallet = wallets[i];
            if (myWallet.parent == myFather.id) {
                results[j] = myWallet;
                j++;
            }
        }
        return results;
    }

}