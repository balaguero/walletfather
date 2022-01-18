import * as _ from 'lodash';
import { Component, OnInit, OnDestroy, Inject, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// Angular Material Modules
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Services
import { AuthService } from './../../../services/auth.service';

@Component({
    selector: 'app-auth-dialog',
    templateUrl: './auth-dialog.component.html',
    styleUrls: ['auth-dialog.component.scss']
})

export class AuthDialogComponent implements OnInit, OnDestroy {

    isLoading: boolean;
    redirectUrl: String;
    isLoggedIn: Boolean;
    loginError = undefined;
    private isLoggedInSubscription: Subscription;

    constructor(
        private _authService: AuthService,
        private router: Router,
        public dialogRef: MatDialogRef<AuthDialogComponent>,
        private zone: NgZone,
        private cdRef: ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) public dialogContextData
    ) {
        this.isLoading = false;
    }

    ngOnInit(): void {
        // Subscribe to Behavior Subject and update value dynamically
        this.isLoggedInSubscription = this._authService.isLoggedIn.subscribe(next => {
            this.isLoggedIn = next;
        });
    }

    ngOnDestroy(): void {
        this.isLoggedInSubscription.unsubscribe();
    }

    onClickRegisterButton(): void {
        this.dialogContextData.mode = 'REGISTER';
    }

    onClickSigninButton(): void {
        this.dialogContextData.mode = 'LOGIN';
    }

    onLoginCompleted(): void {
        // If there is a redirect URL, do the redirect
        if (!!this.dialogContextData.redirectURL) {
            // Split url from params
            const url = this.dialogContextData.redirectURL.split('?');
            let urlParams;
            const queryParams = {};
            if (!_.isEmpty(url[1])) {
                urlParams = url[1].split('&');
                _.each(urlParams, param => {
                    const splittedParam = param.split('=');
                    _.set(queryParams, splittedParam[0], splittedParam[1]);
                });
            }
            this.router.navigate([url[0]], { queryParams: queryParams });
        }

        this.dialogRef.close();

        // If there is a callback function to execute after login, execute it
        if (_.isFunction(this.dialogContextData.callback)) {
            this.dialogContextData.callback();
        }
    }

    onRegisterCompleted(): void {
        if (!!this.dialogContextData.redirectURL) {
            this.router.navigate([this.dialogContextData.redirectURL]);
        }

        this.dialogRef.close();

        if (_.isFunction(this.dialogContextData.callback)) {
            this.dialogContextData.callback();
        }
    }

    onRecoveryCompleted(): void {
        if (!!this.dialogContextData.redirectURL) {
            this.router.navigate([this.dialogContextData.redirectURL]);
        }

        setTimeout(() => {
            this.dialogRef.close();
        }, 3000);

        if (_.isFunction(this.dialogContextData.callback)) {
            this.dialogContextData.callback();
        }
    }

    setDialogLoading(): void {
        this.isLoading = !this.isLoading;
        this.cdRef.detectChanges();
    }
}
