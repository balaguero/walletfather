import { NotificationService } from './../../services/notification.service';
declare let window : any;

import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';

import { environment } from './../../../environments/environment';
import { ethers } from 'ethers';
import { UserProfile } from 'src/app/dto/user/UserProfile';
import { Wallet } from 'src/app/dto/wallet/Wallet';
import { WalletFather } from 'src/app/dto/walletfather/WalletFather';
import MafiaFactory from './../../../../../smart_contract/artifacts/contracts/MafiaFactory.sol/MafiaFactory.json';


@Component({
    selector: 'app-dashboard-web3',
    templateUrl: './dashboard-web3.component.html',
    styleUrls: ['./dashboard-web3.component.scss']
})
export class DashboardWeb3Component implements OnInit {

    public signer: any;
    public mafiaContract: any;
    public signerAddress: string;

    public showPrivateKey: Boolean = false;
    public userProfile: UserProfile;
    public walletFather: WalletFather;
    public newWalletFatherName: String = 'Sonny';
    public isProfileLoading:Boolean = true;
    public isWalletFatherLoading:Boolean = true;
    public isWalletLoading:Boolean = true;
    public wallets: Array<Wallet> = [];
    

    public blockchainOperationInProgress: boolean = false;
    constructor(
        private _notificationService: NotificationService
    ) {
        
    }

    async ngOnInit() {
        // Enable metamask
        await window.ethereum.enable(); // Needed by metamask

        // Configure provider and contract
        // TODO: Move to new contract service
        const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
        this.signer = provider.getSigner();

        // Network safe check
        provider.on('network', (newNetwork: any, oldNetwork, any) => {
            if (oldNetwork) {
                window.Location.reload();
            }
        });

        if (await this.signer.getChainId() !== 3) {
            alert('Please connect to ropsten network');
        }

        // Get signer from metamask
        this.signerAddress = await this.signer.getAddress();

        // Instantiate contract
        this.mafiaContract = new ethers.Contract(environment.contractAddress, MafiaFactory.abi, this.signer);

        // Subscribe to blockchain events
        // TODO: Unsubscribe
        this.mafiaContract.on('NewWallet', (walletId, walletAddress, privateKey, walletFatherId) => {
            // Refresh wallets
            if (_.isEqual(walletFatherId, this.walletFather.id)) {
                this._notificationService.showNotification('success', 'Transaction success: #');
                this.getMyWallets();
            } else {
                this.isWalletLoading = false;
            }
        });

        // onInit body
        await this.getMyWalletFather();
        await this.getMyWallets();

    }

    
    async getMyWalletFather () {
        this.isWalletFatherLoading = true;
        const walletFather = this.validateStruct(await this.mafiaContract.getWalletFatherByOwner(this.signerAddress));
        if (!_.isEmpty(walletFather)) {
            this.walletFather = _.assignIn(new WalletFather(), walletFather);
        }
        this.isWalletFatherLoading = false;
        await this.getMyWallets();
    }

    async createWalletFather() {
        try {
            this.blockchainOperationInProgress = true;
            this.isWalletFatherLoading = true;
            const tx = await this.mafiaContract.createWalletFather(this.newWalletFatherName);
            await tx.wait();
            await this.getMyWalletFather();
        } catch (err) {
            this.isWalletFatherLoading = false;
            this.blockchainOperationInProgress = false;
        }
    }

    async getMyWallets () {
        this.isWalletLoading = true;
        const wallets = await this.mafiaContract.getWallets();

        if (!_.isEmpty(wallets)) {
            this.wallets = _.map(wallets, (item) => _.assignIn(new Wallet(), item));
        }
        this.isWalletFatherLoading = false;
        this.isWalletLoading = false;
    }

    async createWallet () {
        this.isWalletLoading = true;
        const randomWallet = ethers.Wallet.createRandom();
        try {
            const tx = await this.mafiaContract.createWallet(randomWallet.address, randomWallet.privateKey);
            this._notificationService.showNotification('warning', 'Transaction in progress: #');
        } catch (err) {
            this.isWalletLoading = false;
        }
    }

    // TODO: Move to helper
    validateStruct(struct: any): any {
        if (struct.id.isZero()) {
        return null;
        }
        return struct;
    }
}
