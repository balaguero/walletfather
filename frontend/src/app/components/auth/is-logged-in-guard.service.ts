import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

// Services
import { AuthService } from './../../services/auth.service';
import { AuthDialogService } from './../auth/auth-dialog/auth-dialog.service';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
    constructor(
        private _authService: AuthService,
        private _authDialogService: AuthDialogService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this._authService.checkIsLoggedIn()) {
            return true;
        }

        const redirectURL = state.url;
        this._authDialogService.openAuthDialog('LOGIN', false, redirectURL);
        this.router.navigate(['/']);
        return false;
    }
}