import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

// Models
import { User } from '../models/user.model';

// Services
import { ServiceBase } from './service-base.service';

@Injectable()
export class AuthService {

    public currentUser: User;
    public isLoggedIn: BehaviorSubject<Boolean>;
    public userDataRefresh: Subject<any>;
    private jwtHelper = new JwtHelperService();
    private tokenTimer: any;


    constructor(
        private serviceBase: ServiceBase,
        private router: Router
    ) {
        this.isLoggedIn = new BehaviorSubject(this.isTokenValid());
        this.userDataRefresh = new Subject();
    }

    // Register new user
    signup(user: User): Promise<Object> {
        return this.serviceBase.httpPost('user/signup', user).toPromise();
    }

    // Login (call to endpoint)
    signin(user: User): Promise<void> {
        return this.serviceBase.httpPost('user/signin', user).toPromise()
            .then(response => {
                this.saveAuthData(response);
                this.checkIsLoggedIn();
            });
    }

    // Login: Save data with backend user object. Save token.
    private saveAuthData(authResult: any): void {
        // Calculate token expiration date
        const now = new Date();
        const expirationDate = new Date(now.getTime() + authResult.expiresIn * 1000);

        // Set token
        localStorage.setItem('WALLETFATHER_USER_token', authResult.token);
        localStorage.setItem('WALLETFATHER_USER_expiration', expirationDate.toISOString());

        // Set this.currentUser
        this.currentUser = authResult.user;
    }

    // Logout
    logout(): void {
        this.clearAuthData();
        clearTimeout(this.tokenTimer);
        this.isLoggedIn.next(false);
        this.router.navigate(['/']);
    }

    checkIsLoggedIn(): Boolean {
        const authInformation = this.getAuthData();
        // Sanity check
        if (_.isNil(authInformation.token) || _.isNil(authInformation.expirationDate)) {
            this.logout();
            return false;
        }

        // Check when the token expires (in miliseconds)
        const
            now = new Date(),
            // Number in miliseconds
            expiresIn = authInformation.expirationDate.getTime() - now.getTime();

        if (expiresIn > 0) {
            // When we refresh the page, this.currentUser gets undefined
            // So we need to get the user from the token and set its value again
            if (_.isNil(this.currentUser)) {
                const decodedToken = this.jwtHelper.decodeToken(authInformation.token);
                this.currentUser = decodedToken.user;
            }
            this.setAuthTimer(expiresIn);
            this.isLoggedIn.next(true);
            return true;
        } else {
            this.logout();
            return false;
        }
    }

    // Returns auth JWT token
    getToken(): String {
        return this.getAuthData().token;
    }


    private clearAuthData(): void {
        localStorage.removeItem('WALLETFATHER_USER_token');
        localStorage.removeItem('WALLETFATHER_USER_expiration');
        this.tokenTimer = null;
        this.currentUser = null;
    }

    // Returns an object with token string an token expiration date
    private getAuthData(): { token: string, expirationDate: Date } {
        const token = localStorage.getItem('WALLETFATHER_USER_token');
        const expirationDate = localStorage.getItem('WALLETFATHER_USER_expiration');

        if (!token || !expirationDate) {
            return {
                token: undefined,
                expirationDate: undefined
            };
        }
        return {
            token,
            expirationDate: new Date(expirationDate)
        };
    }

    // Validate if token is valid or expired
    private isTokenValid(): Boolean {
        const token = this.getAuthData().token;
        if (!_.isNil(token)) {
            return !this.jwtHelper.isTokenExpired(token);
        }
        return false;
    }

    // Set timer for automatic logout
    private setAuthTimer(duration: number): void {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration);
        console.log('Timer set: ' + duration + ' duration in ms');
    }
}
