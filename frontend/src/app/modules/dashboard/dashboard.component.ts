import { WalletFather } from './../../dto/walletfather/WalletFather';
import { UserProfile } from './../../dto/user/UserProfile';
import { ServiceBase } from '../../services/service-base.service';
import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/dto/wallet/Wallet';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public showPrivateKey: Boolean = false;
    public userProfile: UserProfile;
    public walletFather: WalletFather;
    public newWalletFatherName: String = 'Sonny';
    public isProfileLoading:Boolean = true;
    public isWalletFatherLoading:Boolean = true;
    public isWalletLoading:Boolean = true;
    public wallets: Array<Wallet> = [];

    constructor(
        private _serviceBase: ServiceBase
    ) { }

    ngOnInit(): void {
        this.getMyProfile()
            .then(() => {
                this.getMyWalletFather();
                this.getWalletList();
            })
    }

    togglePrivateKey(): void {
        this.showPrivateKey = !this.showPrivateKey;
    }

    createWalletFather(): void {
        this.isWalletFatherLoading = true;
        this._serviceBase.httpPost('wallet-father/create', {name: this.newWalletFatherName})
            .toPromise()
            .then(() => {
                // Sleep 30s
                return new Promise(resolve => setTimeout(resolve, 30000));
            })
            .finally(() => {
                return this.getMyWalletFather();
            });
    }

    createWallet(): void {
        this.isWalletLoading = true;
        this._serviceBase.httpPost('wallet/create', {})
            .toPromise()
            .then(() => {
                // Sleep 30s
                return new Promise(resolve => setTimeout(resolve, 30000));
            })
            .finally(() => {
                return this.getWalletList();
            });
    }

    private getMyProfile(): Promise<any> {
        this.isProfileLoading = true;
        return this._serviceBase.httpGet('user/my-profile')
            .toPromise()
            .then((response: any) => {
                this.userProfile = _.assignIn(new UserProfile(), response); response;
            })
            .finally(() => {
                this.isProfileLoading = false;
            });
    }

    private getMyWalletFather(): void {
        this.isWalletFatherLoading = true;
        this._serviceBase.httpGet(`wallet-father/get-by-owner?owner=${this.userProfile.wallet}`)
            .toPromise()
            .then((response: any) => {
                if (response && response[0]) {
                    this.walletFather =  _.assignIn(new WalletFather(), response[0]);
                }
            })
            .finally(() => {
                this.isWalletFatherLoading = false;
            });
    }

    private getWalletList(): void {
        this.isWalletLoading = true;
        this._serviceBase.httpGet('wallet/list')
            .toPromise()
            .then((response: any) => {
                if (response) {
                    this.wallets = _.map(response, item => _.assignIn(new Wallet(), item));
                }
            })
            .finally(() => {
                this.isWalletLoading = false;
            });
    }

}
