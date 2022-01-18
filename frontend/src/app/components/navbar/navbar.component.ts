import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../services/auth.service';
import { AuthDialogService } from '../auth/auth-dialog/auth-dialog.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnDestroy{
    private isLoggedInSubscription: Subscription;
    public isLoggedIn: Boolean = false;

    constructor(
        private _authService: AuthService,
        private _authDialogService: AuthDialogService
    ) {}

    ngOnInit() {
        this.isLoggedInSubscription = this._authService.isLoggedIn.subscribe(isLoggedIn => {
            this.isLoggedIn = isLoggedIn;
        });
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.isLoggedInSubscription.unsubscribe();
    }

    openAuthDialog(): void{
        this._authDialogService.openAuthDialog('LOGIN');
    }

    logout(): void {
        this._authService.logout();
    }

    title = 'frontend';
}
